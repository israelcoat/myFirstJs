document.getElementById("btn1").onclick= function() {
     document.getElementById ("myImage").src="img/icons8-bulbon.png"
}

document.getElementById("btn").onclick= function() {
    document.getElementById ("myImage").src="img/icons8-bulboff.png"
}

const person = {
    firstName : "Israel",
    lastName : "Olufemi",
    age : "10",
    DOB : 12_30_2011,
    Details: function() {
        return this.firstName +" "+ this.lastName +" "+ this.age +" "+ this.DOB
    }
}

    document.getElementById("btn2").onclick= function() {
    document.getElementById("demo").innerHTML = person.Details();
}