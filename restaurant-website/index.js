var images = [
  "home_img_1.jpg",
  "home_img_2.jpg",
  "home_img_3.jpg",
  "home_img_4.jpg",
  "home_img_5.jpg",
];
$(function () {
  var i = 0;
  $("#bg_image").css("background-image", "url(images/" + images[i]);
  setInterval(function () {
    i++;
    if (i == images.length) {
      i = 0;
    }
    $("#bg_image").fadeOut("slow", function () {
      $(this).css("background-image", "url(images/" + images[i]);
      $(this).fadeIn(2000);
    });
  }, 3500);
});

function validation(name) {

    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var emailid = document.getElementById("emailid").value;
    var phone = document.getElementById("phone").value;
    var guests = document.getElementById("guests").value;
    var children = document.getElementById("children").value;
    var time = document.getElementById("time").value; 
    var message = document.getElementById("date").value; 
    var date = document.getElementById("date").value; 


    if (name=="" && surname=="" && emailid=="" && phone=="" && guests=="" && children=="" &&time=="" && message=="" && date=="") {
        alert("all are empty")
    }
    else if (name === "") {
        alert("name is empty")
    }
    else if (name !== "abc") {
        alert("only allow alphabets")
    }
    else if (surname === "") {
        alert("surname is empty")
        $('#surname').css('border', 'solid 2px red');
    }
    else if (surname !== "abc") {
        alert("only allow alphabets")
    }
    else if (emailid === "") {
        alert("email is empty")
        $('#surname').css('border', '2px solid green');
    }
    else if(emailid.indexOf("@") <= 0){
        alert("invalid email")
    }
    else if(emailid.charAt(emailid.length-4) != "."){
        alert("invalid email")
    }
    else if (phone === "") {
        alert("phone number is empty")
    }
    else if(isNaN(phone)){
        alert("only numbers")
    }
    else if (guests === "") {
        alert("select guests")
    }
    else if (children === "") {
        alert("select children")
    }
    else if (date === "") {
        alert("date is empty")
    }
    else if (time === "") {
        alert("time is empty")
    }
    else if (message === "") {
        alert("enter some words")
    }
    else{
        alert("submit your info")
    }
}
