const index = (req, res) => {
    res.status(200).send({message: "JUST DO IT"})
}

module.exports = {
    index
}