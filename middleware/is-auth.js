module.exports = (req, res, next) => {
    // auth middleware
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    }
    next();
}
