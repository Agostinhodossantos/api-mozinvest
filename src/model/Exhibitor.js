class Exhibitor {

    constructor(uid, name, img,contact ,location, email, video,latLng, description) {
        this.uid = uid;
        this.name = name;
        this.img = img;
        this.contact = contact;
        this.location = location;
        this.email = email;
        this.video = video;
        this.description = description;
        this.latLng = latLng;
        this.rating = rating;
        this.count = count;
    }
}

module.exports = {
    Exhibitor
}
