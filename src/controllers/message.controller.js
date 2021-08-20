const send = (req, res) => {
    sendMessage(req)
    res.status(200).send({status: 200, message: "message sent"});
}

function sendMessage(req) {
    let {firstName, lastName, email, subject, message, isChecked} = req.body;
}


module.exports = {
    send
}
