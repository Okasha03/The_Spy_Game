var firstName=prompt("please enter your first name:")
var lastName=prompt("please enter your last name")
var height=prompt("how tall are you in cm")
var pet=prompt("whats your pets Name")
var age= prompt("how old are you")
alert("Thank you so much for the information.")
console.log(pet.length);

var leg=pet.length-1
var validator = 0

if(firstName[0]===lastName[0])
{
  validator++
}
if (height==170) {validator++
}

if (age >=20 && age<=30) {validator++
}
if (pet[leg]==="y") {
  validator++
}

if (validator===4){console.log("welcome mr bond ,we have been expecting you");}
else console.log("nothing to see here carry on");
