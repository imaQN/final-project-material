const Materi = require("../models/materi.model.js");

exports.findAll = (req, res) =>
{
    Materi.getAll((err, data) =>
    {
        if(err)
            res.status(500).send(
                {
                    message:
                        err.message|| "Some error occurred while retrieving data."
                });
        else res.send(data);
    });
};

exports.findSome = (req, res) =>
{
    Materi.findById(req.params.hari_id, (err, data) =>
    {
        if (err)
        {
            if(err.kind == "not_found")
            {   
                res.status(404).send(
                    {
                        message:
                            err.message || "Not found materi with id asked."
                    });
            }

            else
            {
                res.status(500).send(
                {
                    message:
                        err.message || "Error occurred while retrieving data."
                });
            }
        }

        else 
            res.send(data);
    });
};