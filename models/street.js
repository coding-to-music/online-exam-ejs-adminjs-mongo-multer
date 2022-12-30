const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require("bcrypt");

const StreetSchema = new Schema({
    // id                Int       @id @default(autoincrement())
    // name              String?
    name: {
        type: String,
        required: true,
    },
    // from              String?
    fromStreet: {
        type: String,
        required: false,
    },
    // to                String?
    to: {
        type: String,
        required: false,
    },
    // width             String?
    width: {
        type: Number,
        required: false,
    },
    // length            String?
    streetLength: {
        type: Number,
        required: false,
    },
    // date              String?
    date: {
        type: String,
        required: false,
    },
    // noncity           String?
    noncity: {
        type: String,
        required: false,
    },
    // unnacceptedlength String?
    unnacceptedlength: {
        type: String,
        required: false,
    },
    // area              Int?      @default(0)
    area: {
        type: Number,
        required: false,
    },
    // createdAt         DateTime  @default(now()) @map(name: "created_at")
    // createdAt: {
    //     type: Date,
    //     required: false,
    // },
    // // updatedAt         DateTime  @default(now()) @map(name: "updated_at")
    // updatedAt: {
    //     type: Date,
    //     required: false,
    // },

    // username: {
    //     type: String,
    //     unique: true,
    //     required: true,
    // },
    // password: {
    //     type: String,
    //     required: true,
    // },
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    // phoneNumber: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
});

// StreetSchema.statics.findAndValidate = async function (username, password) {
//     const Street = await this.findOne({ username });
//     if (Street) {
//         const isValid = await bcrypt.compare(password, Street.password);
//         return isValid ? Street : false;
//     }
//     return false;
// };

// StreetSchema.pre("save", async function (next) {
//     // neu password duoc sua doi
//     if (this.isModified("password")) {
//         this.password = await bcrypt.hash(this.password, 10);
//         return next();
//     }
//     return next();
// });

// // automatically add a username and password

const Street = mongoose.model("Street", StreetSchema);

module.exports = Street;
