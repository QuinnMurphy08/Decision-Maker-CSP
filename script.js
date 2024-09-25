
function getShoe(colorInput, ageInput){

    //saving the shoe output as a variable
  var finalShoe;
  var yourShoe;
  
/*if statement that decides what shoe you should 
get based on your age and favorite color*/

//this part is for under 10years
    if (ageInput<10 && colorInput=="red"){
    yourShoe ="Red Light Up Shoe";
  }
  else if (ageInput<10 && colorInput=="green"){
    yourShoe="Green Light Up Shoe";
  }
  else if (ageInput<10 && colorInput=="blue"){
    yourShoe="Blue Light Up Shoe";
  }
  else if (ageInput<10 && colorInput=="black"){
    yourShoe="Black Light Up Shoe";
  }
  else if (ageInput<10 && colorInput=="white"){
    yourShoe="White Light Up Shoe";
  }
  
  //this part is for under 18years
  else if (ageInput<18 && colorInput=="red"){
    yourShoe="Red Jordans";
  }
  else if (ageInput<18 && colorInput=="green"){
    yourShoe="Green Jordans";
  }
  else if (ageInput<18 && colorInput=="blue"){
    yourShoe="Blue Jordans";
  }
  else if (ageInput<18 && colorInput=="black"){
    yourShoe="Black Jordans";
  }
  else if (ageInput<18 && colorInput=="white"){
    yourShoe="White Jordans";
  }
 
 //this part is for people under 60
  else if (ageInput<60 && colorInput=="red"){
    yourShoe="Red Sneaker";
  }
  else if (ageInput<60 && colorInput=="green"){
    yourShoe="Green Sneaker";
  }
  else if (ageInput<60 && colorInput=="blue"){
    yourShoe="Blue Sneaker";
  }
  else if (ageInput<60 && colorInput=="black"){
    yourShoe ="White Sneaker";
  }
  else if (ageInput<60 && colorInput=="white"){
    yourShoe="Black Sneaker";
  }

//this part is for REALLY old people
  else if (ageInput>=60 && colorInput=="red"){
    yourShoe="Red New Balance";
  }
  else if (ageInput>=60 && colorInput=="green"){
    yourShoe="Green New Balance";
  }
  else if (ageInput>=60 && colorInput=="blue"){
    yourShoe="Blue New Balance";
  }
  else if (ageInput>=60 && colorInput=="white"){
    yourShoe="White New Balance";
  }
  else if (ageInput>=60 && colorInput=="black"){
    yourShoe="Black New Balance";
  }
  //this is returning the value/shoe you should get
 return "<b>Color:</b>" + colorInput + "<br><b>Age:</b>" + ageInput + "<br><b><b>Your Shoe:</b>" + yourShoe;    
    
  }

//this function displayes the outputs from the other function on the screen
  function updateScreen(){
    document.getElementById("output").innerHTML = getShoe(document.getElementById("color").value, document.getElementById("age").value);
  document.getElementById("age").innerHTML = "";
  
  }