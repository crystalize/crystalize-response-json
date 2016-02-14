const send = require("crystalize-response-send").send;

const json = function (res, object) {
    res.setHeader("Content-Type", "application/json");
    return send(res, JSON.stringify(object));
};

module.exports = {
    name: "crystalize-respond-json",
    respondsTo: "then",
    callback: (req, res) => Object.assign(res, {
        json: function (object) {
            return json(res, object);
        },
    }),

    json,
};

