const { v4: uuidv4 } = require('uuid')

function getDate() {
    return Date.now().toString()
}

function getData() {
    return Date.now().toString()
}

function isEmpty(value) {

    if (typeof value == "string") {
        return checkString(value)
    } else if (typeof value == "object") {
        return checkObject(value)
    } else if(value  == null || value == undefined || value == "") {
        return true
    }

}

function checkObject(value) {
    if (Object.keys(value).length === 0 && value.constructor === Object) {
        return true
    } else {
        return false
    }
}

function checkString(value) {
    if (value == null || value == undefined || value == "") {
        return true
    } else {
        return false
    }
}


function removeFile(path) {
    try{
        fs.unlinkSync(path)
    } catch(err) {
        console.log(err)
    }
}


function getUuid() {
    return uuidv4()
}

module.exports = {
    isEmpty,
    getDate,
    getUuid,
    removeFile
}