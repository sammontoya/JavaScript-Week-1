function displayText() {

  document.getElementById("hello").innerHTML = "Hello"+"<br>"+"World";
  console.log("this ran for hello")

  // document.getElementById("world").innerHTML = "World!";
  // console.log("this ran for world");
};

//comment
var name = "Mike";
console.log("this is to show mike");

var x = 6;
var y = 7;
var z = 13;

function addMe(){
    // return x + y;

};
//
// var ice_creams =["chocolate","vanilla","swirl"];
//
// var myInnerHTML = "";
//
// ice_creams.forEach(function(ice_cream) {
// 	myInnerHTML = myInnerHTML + ("<li>"+ ice_cream + "</li>");
// });
// alert(document.getElementById("ices"));
// document.getElementById("ices").innerHTML = myInnerHTML;

var ice_creams = ["vanilla", "cherry", "chocolate", "mint"]
var list_cream = "";


for (var index = 0; index < ice_creams.length; index += 1 ){
  list_cream = list_cream + ("<li>" +ice_creams[index] + "</li>");
}
  document.getElementById("ices").innerHTML = list_cream;

// for (var index = 99; index >=0; index -=1) {
//
// }
