//set up object

var hotel={
    name: "Hotel Dedey",
    rooms: 40,
    booked :35,

    checkAvailibility: function(){
        return this.rooms - this.booked;
        //need "this"
    }
};

//dom:select whatever object want to ue
var elName= document.getElementById("hotelName");
elName.textContent= hotel.name;

var elRooms= document.getElementById("rooms");
elRooms.textContent=hotel.checkAvailibility();