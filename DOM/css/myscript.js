const itemOne =document.getElementById ('one');

itemOne.className= 'cool';

//changing thevalue

const itemTwo = document.querySelector('#two');
let twoText = itemTwo.firstChild.nodeValue;
twoText = twoText.replace('pine nuts','YAMAHA');
itemTwo.firstChild.nodeValue = twoText;

const itemThree = document.querySelector('#three');
itemThree.addEventListener('click',function(){
   itemThree.className='complete';
});
