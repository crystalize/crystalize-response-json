const send = require("crystalize-response-send").send;

const sendJson = function (res, object) {
    res.setHeader("Content-Type", "application/json");
    send(res, JSON.stringify(object));
};

module.exports = {
    name: "crystalize-respond-send-json",
    respondsTo: "then",
    callback: (req, res) => Object.assign(res, {
        sendJson: function (object) {
            return sendJson(res, object);
        },
    }),

    sendJson,
};

