module.exports.getAllTools = (req, res, next) => {
    const { ip, query, params, body, headers } = req;
    res.send("tools found");
};

module.exports.saveATool = (req, res) => {};
