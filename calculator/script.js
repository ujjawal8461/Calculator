var value=document.querySelector('#value');
var temp1="";

function number(num){
    if (temp1 === '0') {
        temp1 = ""; // Clear leading zero
    }
    temp1+=num;
    value.innerText=temp1;
}


function clearAll() {
    temp1 = "0"; // Reset to zero
    value.innerText = temp1;
}


function calculator(){
    temp1=eval(temp1);
    value.innerText=temp1;
    temp1="";
}



var inBody=document.querySelector("#innerBody");
var buttons=document.querySelectorAll(".button");
var rows=document.querySelectorAll(".row");
var calBtn=document.querySelector("#calButtons");
var equalBtn=document.querySelector("#equal");
let isDarkMode = false;


function darkMode(){
    isDarkMode = !isDarkMode;
    if (isDarkMode){

    inBody.style.backgroundColor="rgb(15, 15, 15)";
    inBody.style.color="white";

    buttons.forEach(function(button) {
        button.style.backgroundColor = "rgb(49, 49, 49)";
        button.style.color = "white";
        button.style.boxShadow="0px 0px 0px";

        button.addEventListener("mouseenter", function () {
            button.style.backgroundColor = "rgb(253, 80, 16)";
            button.style.color = "white";
          });
      
        button.addEventListener("mouseleave", function () {
            button.style.backgroundColor = "rgb(49, 49, 49)";
            button.style.color = "white";
          });
      });
    rows.forEach(function(row) {
        row.style.backgroundColor = "rgb(20, 20, 20)";
      });
    calBtn.style.backgroundColor = "rgb(19, 19, 19)";
    equalBtn.style.backgroundColor="orangeRed";
    }
    

    else {
        // Default mode
        inBody.style.backgroundColor = ""; // Remove styles to revert to default
        inBody.style.color = "";
        buttons.forEach(function (button) {
          button.style.backgroundColor = "";
          button.style.color = "";
          button.style.boxShadow = "";
          button.removeEventListener("mouseenter", null);
          button.removeEventListener("mouseleave", null);
        });
        rows.forEach(function (row) {
          row.style.backgroundColor = "";
        });
        calBtn.style.backgroundColor = "";
      }
    
}