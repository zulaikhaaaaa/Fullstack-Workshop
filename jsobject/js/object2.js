//create template
function Hotel (name,rooms,booked){
    this.name=name;
    this.rooms=rooms;
    this.booked=booked;
    this.checkAvailibility=function(){
        return this.rooms-this.booked;
    };
}

//dom
//create instances
var hotel1 = new Hotel("Dedey Hotel",100,30);
console.log(hotel1.name);
console.log(hotel1.rooms);
console.log(hotel1.booked);


var elName= document.getElementById("hotelName");
elName.textContent= hotel1.name;

var elRooms= document.getElementById("rooms");
elRooms.textContent=hotel1.checkAvailibility();

var currentDate = new Date();

var day = currentDate.getDate();
console.log(day);
var month = currentDate.getMonth() + 1;
console.log(month);
var year = currentDate.getFullYear();

//display date
var elDate = document.getElementById("todayDate");
elDate.textContent = day +"/"+ month +"/"+ year;