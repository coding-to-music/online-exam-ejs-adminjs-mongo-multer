const Student = require("../models/student");

module.exports.renderLoginForm = (req, res) => {
    res.render("login");
};

module.exports.login = async (req, res) => {
    const { username, password } = req.body;
    console.log("studentController: username", username);
    console.log("studentController: password", password);
    const student = await Student.findAndValidate(username, password);
    if (student) {
        req.session.student = student;
        req.flash("success", "Welcome back to Eduboard");
        const redirectUrl = req.session.returnTo || "/";
        res.redirect(redirectUrl);
    } else {
        req.flash("error", "Password or Username is wrong");
        res.redirect("/login");
    }
};

module.exports.logout = (req, res, next) => {
    req.session.student = null;
    req.flash("success", "Log out successfully");
    res.redirect("/");
};
