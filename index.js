if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("connect-flash");
const methodOverride = require("method-override");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const localStrategy = require("passport-local");
const mongoSanitize = require("express-mongo-sanitize");
const engine = require("ejs-mate");
const path = require("path");
const bodyParser = require("body-parser");

const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");

// const Student = require("./models/student");
const AppError = require("./utils/AppError");
const Admin = require("./models/admin");

const studentRoutes = require("./routes/studentRoutes");
const examRoutes = require("./routes/examRoutes");
const configAdminJs = require("./configAdminJs")
const app = express();

const router = AdminJSExpress.buildAuthenticatedRouter(
    configAdminJs,
    {
        cookieName: "adminjs",
        cookiePassword: "complicatedsecurepassword",
        // validation
        authenticate: async (email, password) => {
            const admin = await Admin.findAndValidate(email, password);
            if (admin) {
                return admin;
            }
            return false;
        },
    },
    null,
    // Add configuration required by the express-session plugin.
    {
        resave: false,
        saveUninitialized: true,
    }
);
app.use(configAdminJs.options.rootPath, router);

const mongoDB =
    "mongodb+srv://minhhuy123:Tuilahuy123@cluster0.tpopnup.mongodb.net/onlineExamSystem?retryWrites=true&w=majority";
mongoose
    .connect(mongoDB, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    })
    .then(() => console.log("CONNECTION MONGODB"))
    .catch((err) => console.log(err));

app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(mongoSanitize());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

const store = MongoStore.create({
    mongoUrl: mongoDB,
    secret: process.env.SESSION_SECRET,
    touchAfter: 24 * 3600,
});

const configSession = {
    name: "session",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    },
    store,
};

app.use(session(configSession));
app.use(flash());

// comment to change the way to register and login student
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new localStrategy(Student.authenticate()));
// passport.serializeUser(Student.serializeUser());
// passport.deserializeUser(Student.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.student = req.session.student;
    next();
});

app.use("/", studentRoutes);
app.use("/", examRoutes);

app.get("/blogs", (req, res) => {
    res.render("blogs/blog-list-3");
});

// app.get("/admin", (req, res) => {
//   res.render("admin/index")
// })

app.get("/", (req, res) => {
    res.render("index");
});

// TODO ERROR ROUTES
app.all("*", (req, res, next) => {
    next(new AppError("PAGE NOT FOUND", 404));
});

// TODO custom error hanlding middleware
app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong", name } = err;
    res.render("error", { status, message, name });
});

app.listen("5050", () => {
    console.log("SERVER IS RUNNING");
});
