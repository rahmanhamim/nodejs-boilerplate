module.exports.getAllTools = (req, res, next) => {
    const { ip, query, params, body, headers } = req;
    console.log(ip, query, params, body, headers);
    // res.send("got it");
    // res.download(__dirname + "/tools.controller.js");
    // res.redirect("/login");
    res.json({ name: "tools" });
};

module.exports.saveATool = (req, res) => {};

module.exports.getToolDetails = (req, res) => {
    res.send("tool detail found");
};
