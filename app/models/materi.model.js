const sql = require("./db.js");

const Materi = function(materi)
{
    this.grammar = materi.grammar;
    this.explanation = materi.explanation;
    this.ex1 = materi.ex1;
    this.trans1 = materi.trans1;
    this.ex2 = materi.ex2;
    this.trans2 = materi.trans2;
};

Materi.findById = (hari_id, result) =>
{
    sql.query("SELECT * FROM materi WHERE hari_id = ?", [hari_id], (err, res) =>
    {
        if(err)
        {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("materi: ", res);
        result(null, res);

        // result({ kind: "not_found" }, null);
    });
};

Materi.getAll = result =>
{
    sql.query("SELECT * FROM materi", (err, res) =>
    {
        if(err)
        {
            console.log("error: ", err);
            result(null, err);
            return;
        }
    
        console.log("customers: ", res);
        result(null, res);
    });
};

module.exports = Materi;