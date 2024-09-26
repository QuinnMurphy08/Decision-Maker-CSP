
function getShoe(colorInput, ageInput){

    //saving the shoe output as a variable
  var yourShoe;
  var shoeImage;
  
/*if statement that decides what shoe you should 
get based on your age and favorite color*/

//this part is for under 10years
    if (ageInput<10 && colorInput=="red"){
    yourShoe ="Red Light Up Shoe";
    shoeImage="Shoes for Decision Maker/Red Lightup Shoe.png"
  }
  else if (ageInput<10 && colorInput=="green"){
    yourShoe="Green Light Up Shoe";
    shoeImage="Shoes for Decision Maker/green light up shoe.jpg"
  }
  else if (ageInput<10 && colorInput=="blue"){
    yourShoe="Blue Light Up Shoe";
    shoeImage="Shoes for Decision Maker/blue light up shoe.jpg"
  }
  else if (ageInput<10 && colorInput=="black"){
    yourShoe="Black Light Up Shoe";
    shoeImage="Shoes for Decision Maker/black light up shoes.jpg"
  }
  else if (ageInput<10 && colorInput=="white"){
    yourShoe="White Light Up Shoe";
    shoeImage="Shoes for Decision Maker/white light up shoe.jpg"
  }
  
  //this part is for under 18years
  else if (ageInput<18 && colorInput=="red"){
    yourShoe="Red Jordans";
    shoeImage="Shoes for Decision Maker/red jordans.jpg"
  }
  else if (ageInput<18 && colorInput=="green"){
    yourShoe="Green Jordans";
    shoeImage="Shoes for Decision Maker/green jordans.jpg"
  }
  else if (ageInput<18 && colorInput=="blue"){
    yourShoe="Blue Jordans";
    shoeImage="Shoes for Decision Maker/blue jordans.jpg"
  }
  else if (ageInput<18 && colorInput=="black"){
    yourShoe="Black Jordans";
    shoeImage="Shoes for Decision Maker/black jordans.jpg"
  }
  else if (ageInput<18 && colorInput=="white"){
    yourShoe="White Jordans";
    shoeImage="Shoes for Decision Maker/white jordans.jpg"
  }
 
 //this part is for people under 60
  else if (ageInput<60 && colorInput=="red"){
    yourShoe="Red Sneaker";
    shoeImage="Shoes for Decision Maker/red sneaker.jpg"
  }
  else if (ageInput<60 && colorInput=="green"){
    yourShoe="Green Sneaker";
    shoeImage="Shoes for Decision Maker/green sneaker.jpg"
  }
  else if (ageInput<60 && colorInput=="blue"){
    yourShoe="Blue Sneaker";
    shoeImage="Shoes for Decision Maker/blue sneaker.jpg"
  }
  else if (ageInput<60 && colorInput=="white"){
    yourShoe ="White Sneaker";
    shoeImage="Shoes for Decision Maker/white sneaker.jpg"
  }
  else if (ageInput<60 && colorInput=="black"){
    yourShoe="Black Sneaker";
    shoeImage="Shoes for Decision Maker/black sneaker.jpg"
  }

//this part is for REALLY old people
  else if (ageInput>=60 && colorInput=="red"){
    yourShoe="Red New Balance";
    shoeImage="Shoes for Decision Maker/red new balance.jpg"
  }
  else if (ageInput>=60 && colorInput=="green"){
    yourShoe="Green New Balance";
    shoeImage="Shoes for Decision Maker/green new balace.jpg"
  }
  else if (ageInput>=60 && colorInput=="blue"){
    yourShoe="Blue New Balance";
    shoeImage="Shoes for Decision Maker/blue new balace.jpg"
  }
  else if (ageInput>=60 && colorInput=="white"){
    yourShoe="White New Balance";
    shoeImage="Shoes for Decision Maker/white new balance.jpg"
  }
  else if (ageInput>=60 && colorInput=="black"){
    yourShoe="Black New Balance";
    shoeImage="Shoes for Decision Maker/black new balace.jpg"
  }
  document.getElementById("image").src = shoeImage;
  //this is returning the value/shoe you should get
 return "<b>Color:</b>" + colorInput + "<br><b>Age:</b>" + ageInput + "<br><b><b>Your Shoe:</b>" + yourShoe;    
    
  }

//this function displayes the outputs from the other function on the screen
  function updateScreen(){
    document.getElementById("output").innerHTML = getShoe(document.getElementById("color").value, document.getElementById("age").value);
  document.getElementById("age").innerHTML = "";
  
  
  }