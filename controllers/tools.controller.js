let tools = [
    {
        id: 1,
        name: "Hammer",
    },
    {
        id: 2,
        name: "Screwdriver",
    },
    {
        id: 3,
        name: "Axe",
    },
];

module.exports.getAllTools = (req, res, next) => {
    // const { ip, query, params, body, headers } = req;

    const { limit, page } = req.query;
    console.log(limit, page);

    res.json(tools.slice(0, limit));
};

module.exports.saveATool = (req, res) => {
    console.log(req.body);
    tools.push(req.body);
    res.send(tools);
};

module.exports.getToolDetails = (req, res) => {
    const { id } = req.params;
    // const filter = {_id: id} // needed in mongoDB
    const foundTool = tools.find((tool) => tool.id == id);
    res.send(foundTool);
};

module.exports.updateTool = (req, res) => {
    // const newData = req.body;
    const { id } = req.params;
    const filter = { _id: id };

    const newData = tools.find((tool) => tool.id === Number(id));

    newData.id = id;
    newData.name = req.body.name;

    res.send(newData);
};

module.exports.deleteTool = (req, res) => {
    const { id } = req.params;
    const filter = { _id: id };

    const newTools = tools.filter((tool) => {
        return tool.id != Number(id);
    });

    tools = newTools;

    res.send(tools);
};
