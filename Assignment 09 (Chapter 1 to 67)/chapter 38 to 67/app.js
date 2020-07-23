// CHAPTER NO 38 TO 42

// Question No 01

function power(a, b) {
    i = 0;
    var result = 1;
    while (i < b) {
        result = result * a;
        i++;
    }
    document.writeln("Base " + a + " with power " + b + " is result : " + result);
}
power(2, 4)

// Question No 02

document.write("<br />")
var year = prompt("Enter Year");
function checkYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        document.writeln(year + " is Leap Year")
        // console.log("Leap Year")
    }
    else {
        document.writeln(year + " is Not Leap Year")
    }
}
checkYear(year);

// Question No 03

document.write("<br />")

var a = +prompt("enter value of a");
var b = +prompt("enter value of b");
var c = +prompt("enter value of c");

function calculateS() {
    var S = (a + b + c) / 2;
    return S;
}
function calculateArea() {
    var S = calculateS()
    console.log(S);

    var area = S * ((S - a) * (S - b) * (S - c))
    document.writeln("Area is : " + area);
}

calculateArea()

// Question No 04

document.write("<br />")


var sub1 = +prompt("enter marks of subject 01 :");
var sub2 = +prompt("enter marks of subject 02 :");
var sub3 = +prompt("enter marks of subject 03 :");

function calculateAverage() {
    var average = (sub1 + sub2 + sub3) / 3;
    // console.log(average);
    return average;
}

function calculatePercentage() {
    var obtainedMarks = (sub1 + sub2 + sub3);
    var percentage = (obtainedMarks / 300) * 100;
    return percentage;
}


function mainFunction() {
    var Average = calculateAverage();
    document.writeln("Average Marks is : " + Average);

    var Percentage = calculatePercentage();
    document.writeln("<br />Percentage is: " + Percentage + "%")
}

mainFunction()

// Question No 05

document.write("<br />")

// Question No 06

document.write("<br />")

var text = "my name is khan";
var textArr = text.split("")
document.writeln("String before vowels remove: <b>" + text + "</b>")
document.write("<br />")

for (var i = 0; i < textArr.length; i++) {
    if (textArr[i].toLowerCase() === 'a') {
        textArr[i] = "";
    }
    else if (textArr[i].toLowerCase() === 'e') {
        textArr[i] = "";
    }
    else if (textArr[i].toLowerCase() === 'i') {
        textArr[i] = "";
    }
    else if (textArr[i].toLowerCase() === 'o') {
        textArr[i] = "";
    }
    else if (textArr[i].toLowerCase() === 'u') {
        textArr[i] = "";
    }
}
textArr = textArr.join("")
document.writeln("String after removing vowels is: <b>" + textArr + "</b>")



// Question No 07

document.write("<br />")

function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;

    for (const letter of str.toLowerCase()) {
        switch (letter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                {
                    if (haveSeenVowel) {
                        count++;
                        haveSeenVowel = false;
                    } else {
                        haveSeenVowel = true;
                    }
                    break;
                }
            default:
                haveSeenVowel = false
        }
    }
    return count
}
document.writeln("The number of occurrences of any two vowels is :" + findOccurrences())


// Question No 08

document.write("<br />")


var distance = +prompt("Enter distance between two cities (KM) :");

function convertToMeter() {
    return distance * 1000;
}

function convertToFeet() {
    return distance * 3280.84;
}

function convertToInches() {
    return distance * 39370.1;
}
function convertToCentimeter() {
    return distance * 100000;
}

document.writeln("<br/>Distance in Meters is : " + convertToMeter())
document.writeln("<br/>Distance in Feets is : " + convertToFeet())
document.writeln("<br/>Distance in Inches is : " + convertToInches())
document.writeln("<br/>Distance in Centimeters is : " + convertToCentimeter())


// Question No 09

document.write("<br />")

var salary = +prompt("Enter salary :");
var hours = +prompt("Enter hours :");
var overtime;
var totalSalary;

if (hours > 40) {
    overtime = hours * 12;
}
else {
    overtime = hours;
}
totalSalary = overtime + salary;
document.writeln("Total Salary is : " + totalSalary)



// Question No 10

document.write("<br />")

var amountToWithdrawal = +prompt("Enter the amount to widhdrawal :");

document.writeln("<br />Required notes of Rs. 100 is: " + Math.floor(amountToWithdrawal / 100));
document.writeln("<br />Required notes of Rs. 50 is: " + Math.floor((amountToWithdrawal % 100) / 50));
document.writeln("<br />Required notes of Rs. 10 is: " + Math.floor(((amountToWithdrawal % 100) % 50) / 10));




// CHAPTER NO 43 TO 48

document.write("<br />")
document.write("<br />")


// Question No 01

function runAlert() {
    window.alert("Hello World")
}
// Question No 02
function phoneAlert() { window.alert("Thanks for purchasing phone for us") }

// Question No 03

students = [
    {
        id: 0,
        name: "Huzaifa",
        class: "BS-SE",
    },
    {
        id: 1,
        name: "Haris",
        class: "BS-SE",
    },
    {
        id: 2,
        name: "Hassan",
        class: "10th",
    },
    {
        id: 3,
        name: "Usama",
        class: "BS-SE",
    },
    {
        id: 4,
        name: "Ali",
        class: "BS-SE",
    },
    {
        id: 5,
        name: "Asad",
        class: "BS-SE",
    },
    {
        id: 6,
        name: "Gulfam",
        class: "9th",
    },
    {
        id: 7,
        name: "Abubakar",
        class: "Intermediate",
    }, {
        id: 8,
        name: "Saad",
        class: "BS-SE",
    }, {
        id: 9,
        name: "Shakoor",
        class: "BS-SE",
    },
]

function showStudents() {

    let uid = document.getElementById("id");
    let uName = document.getElementById("uName");
    let uClass = document.getElementById("uClass");

    let parent = document.getElementById("parent2");
    students.map((student) => {

        let tr = document.createElement('tr');
        let td1 = document.createElement("td");
        let td1Text = document.createTextNode(student.id)
        td1.appendChild(td1Text)

        let td2 = document.createElement("td");
        let td2Text = document.createTextNode(student.name)
        td2.appendChild(td2Text)

        let td3 = document.createElement("td");
        let td3Text = document.createTextNode(student.class)
        td3.appendChild(td3Text)

        let td4 = document.createElement("td");
        let btnDelete = document.createElement("button");
        btnDelete.setAttribute("id", "btnDelete");
        let btnText = document.createTextNode("Delete");
        btnDelete.appendChild(btnText);
        td4.appendChild(btnDelete);

        let btnEdit = document.createElement("button");
        btnDelete.setAttribute("id", "btnEdit");
        let btnText2 = document.createTextNode("Edit");
        btnEdit.appendChild(btnText2);
        td4.appendChild(btnEdit);
        
        btnDelete.addEventListener('click', function (e) {
            e.preventDefault();
            console.log("Delete Pressed")
            e.target.parentNode.parentNode.remove()
        })

        btnEdit.addEventListener('click',function(e){
            e.preventDefault();
            console.log("Edit Pressed");
            uid.value = student.id;
            uName.value = student.name;
            uClass.value = student.class;
        })
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4)
        
        parent.appendChild(tr)
        // console.log(student.name)

    })
}
showStudents()

// Question No 04

function changeImage(){
    var img = document.getElementById("img");
    img.setAttribute("src","./images/phone2.jpg");
}

function changeBackImage(){
    var img = document.getElementById("img");
    img.setAttribute("src","./images/phone1.jpg");
}

// Question No 05

let counter = 0;
let countVar = document.getElementById("counter");

function incrementCounter(){
    countVar.innerText = ++counter
}

function decrementCounter(){
    countVar.innerText = --counter
}



// CHAPTER NO 49 TO 52

document.write("<br />")
document.write("<br />")

// CHAPTER 49 TO 52

// Question No 01

function getInformation() {
    let details = document.getElementById("details");

    let name = document.getElementById("name").value;
    let email = document.getElementById("emailA").value;
    let contact = document.getElementById("contact").value;
    let password = document.getElementById("password").value;

    let li1 = document.createElement('li');
    let li1Text = document.createTextNode(name);
    li1.appendChild(li1Text);

    let li2 = document.createElement('li');
    let li2Text = document.createTextNode(email);
    li2.appendChild(li2Text);

    let li3 = document.createElement('li');
    let li3Text = document.createTextNode(contact);
    li3.appendChild(li3Text);

    let li4 = document.createElement('li');
    let li4Text = document.createTextNode(password);
    li4.appendChild(li4Text);

    details.appendChild(li1)
    details.appendChild(li2)
    details.appendChild(li3)
    details.appendChild(li4)

    console.log(email, name, contact, password)

}

// Question No 02

function readMore() {
    let p = document.getElementById("para");
    console.log(p.innerText);
    p.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}


students = [
    {
        id: 0,
        name: "Huzaifa",
        class: "BS-SE",
    },
    {
        id: 1,
        name: "Haris",
        class: "BS-SE",
    },
    {
        id: 2,
        name: "Hassan",
        class: "10th",
    },
    {
        id: 3,
        name: "Usama",
        class: "BS-SE",
    },
    {
        id: 4,
        name: "Ali",
        class: "BS-SE",
    },
    {
        id: 5,
        name: "Asad",
        class: "BS-SE",
    },
    {
        id: 6,
        name: "Gulfam",
        class: "9th",
    },
    {
        id: 7,
        name: "Abubakar",
        class: "Intermediate",
    }, {
        id: 8,
        name: "Saad",
        class: "BS-SE",
    }, {
        id: 9,
        name: "Shakoor",
        class: "BS-SE",
    },
]

function showStudents() {

    let uid = document.getElementById("id");
    let uName = document.getElementById("uName");
    let uClass = document.getElementById("uClass");

    let parent = document.getElementById("parent2");
    students.map((student) => {

        let tr = document.createElement('tr');
        let td1 = document.createElement("td");
        let td1Text = document.createTextNode(student.id)
        td1.appendChild(td1Text)

        let td2 = document.createElement("td");
        let td2Text = document.createTextNode(student.name)
        td2.appendChild(td2Text)

        let td3 = document.createElement("td");
        let td3Text = document.createTextNode(student.class)
        td3.appendChild(td3Text)

        let td4 = document.createElement("td");
        let btnDelete = document.createElement("button");
        btnDelete.setAttribute("id", "btnDelete");
        let btnText = document.createTextNode("Delete");
        btnDelete.appendChild(btnText);
        td4.appendChild(btnDelete);

        let btnEdit = document.createElement("button");
        btnDelete.setAttribute("id", "btnEdit");
        let btnText2 = document.createTextNode("Edit");
        btnEdit.appendChild(btnText2);
        td4.appendChild(btnEdit);
        
        btnDelete.addEventListener('click', function (e) {
            e.preventDefault();
            console.log("Delete Pressed")
            e.target.parentNode.parentNode.remove()
        })

        btnEdit.addEventListener('click',function(e){
            e.preventDefault();
            console.log("Edit Pressed");
            uid.value = student.id;
            uName.value = student.name;
            uClass.value = student.class;
        })
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4)
        
        parent.appendChild(tr)
        // console.log(student.name)

    })
}
showStudents()

function updateStudent(){
    window.location = "./index.html"

    let uid = document.getElementById("id").value;
    let uName = document.getElementById("uName").value;
    let uClass = document.getElementById("uClass").value;

    students[uid].id = uid;
    students[uid].name = uName;
    students[uid].class = uClass;

    // console.log(students[uid].name = uName);
    showStudents();
}

// CHAPTER NO 58 TO 67

document.write("<br />")
document.write("<br />")
document.write("Chapter 58 to 67")

// Question No 1

// i
var mainContent = document.getElementById("main-content");
// ii
document.writeln(mainContent.innerHTML)
// iii
var elementRender = document.getElementsByClassName("render");
for (var i = 0; i < 5; i++) {
    document.writeln("<br/>"+ elementRender[i].innerHTML);
}
// iv
var firstName= document.getElementById("first-name");
firstName.value="Muhammad Huzaifa"
// v
var lastName= document.getElementById("last-name");
lastName.value="Khan"
var email= document.getElementById("email");
email.value="huzaifanadir1997@gmail.com"


// Question No 1

// i
var formContent = document.getElementById("form-content");
document.writeln("<br/><br/><br/>Node Type of Form Content is: "+formContent.nodeType)
// ii
var lastName2 = document.getElementById("lastName");
document.writeln("<br />Node Type of Last Name is: "+lastName2.nodeType)
document.writeln("<br />Node Type of Last Name Child Node is: "+lastName2.firstChild.nodeType)
// iii
var lastNameUpdated = lastName2.firstChild.nodeValue = "Last Name:Mista Huzzi"
document.writeln("<br />Update value of Last Name Child Node is: "+lastNameUpdated)
// iv
document.writeln("<br />First Child of Main Content is: "+mainContent.childNodes[1].firstChild.nodeValue)
document.writeln("<br />Last Child of Main Content is: "+mainContent.childNodes[9].firstChild.nodeValue)
// v
document.writeln("<br />Next Sibling of LastName is : "+lastName2.nextSibling.nextSibling.childNodes[0].nodeValue)
document.writeln("<br />Previous Sibling of LastName is : "+lastName2.previousSibling.previousSibling.childNodes[0].nodeValue)
console.log(email.parentNode.innerHTML)
// vi
document.writeln("<br />Parent Node of Email is :"+email.parentNode.nodeName)
document.writeln("<br />Node Type of Email is :"+email.nodeType)









































































