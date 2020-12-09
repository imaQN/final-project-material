module.exports = app =>
{
    const materi = require("../controllers/materi.controller.js");

    app.get("/materi", materi.findAll);

    app.get("/materi/:hari_id", materi.findSome);
}