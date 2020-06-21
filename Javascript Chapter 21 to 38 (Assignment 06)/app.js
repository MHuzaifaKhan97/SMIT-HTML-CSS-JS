// CHAPTER NO 21 TO 25

// QUESTION NO 01
var fname = prompt("Enter Your First Name:");
var lname = prompt("Enter Your Last Name:");
document.write("Assalam u Alaikum, "+fname +" "+ lname);

// QUESTION NO 02
document.write("<br /><br />");
var favMob = prompt("Enter the name of your Favorite Mobile Model:");
document.write("My Favorite phone is ".concat(favMob));
document.write("<br />Length of String: ".concat(favMob.length));

// QUESTION NO 03
document.write("<br /><br />");
var nationality = "Pakistani";
document.write("String: ".concat(nationality), "<br />");
for (var i=0; i<nationality.length; i++) {
    if (nationality[i] === 'n') {
        document.write("Index of 'n': ".concat(i));
        break;
    }
}

// QUESTION NO 04
document.write("<br /><br />");
var greetWorld = "Hello World";
document.write("String: ".concat(greetWorld), "<br />");
document.write("Last Index of 'l': ".concat(greetWorld.indexOf('l', 4)));

// QUESTION NO 05
document.write("<br /><br />");
var nationality = "Pakistani";
document.write("String: ".concat(nationality), "<br />");
for (var i=0; i<nationality.length; i++) {
    if (nationality[i] === 'i') {
        document.write("Character At Index 3: ".concat(nationality[i]));
        break;
    }
}

// QUESTION NO 06
document.write("<br /><br />");
var fname = prompt("Enter Your First Name:");
var lname = prompt("Enter Your Last Name:");
document.write("Assalam u Alaikum, ".concat(fname, " ", lname));

// QUESTION NO 07
document.write("<br /><br />");
var city = "Hyderabad";
document.write("City: ".concat(city), "<br />");
document.write("After Replacement: Islam".concat(city.slice(5)));

// QUESTION NO 08
document.write("<br /><br />");
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("Message Before Filter: ".concat(message), "<br />");
document.write("Message After Filter: ".concat(message.replace(/and/g, "&")));

// QUESTION NO 09
document.write("<br /><br />");
var stringNum = "472";
document.write("Value: ".concat(stringNum, "<br />"));
document.write("Value: ".concat(typeof(stringNum), "<br />"));
document.write("Value: ".concat(parseInt(stringNum), "<br />"));
document.write("Value: ".concat(typeof(parseInt(stringNum))));

/* ---------Question no 10---------- */
document.write("<br /><br />");
var userInput = prompt("Enter Any Word:(In Small Letters):");
document.write("User Input: ".concat(userInput, "<br />"));
document.write("Upper Case: ".concat(userInput.toUpperCase()));

/* ---------Question no 11---------- */
document.write("<br /><br />");
var userInput = prompt("Enter Any Word:(In Small Letters):");
document.write("User Input: ".concat(userInput, "<br />"));
function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence;
}
document.write("Upper Case: ".concat(titleCase(userInput)));

// QUESTION NO 12
document.write("<br /><br />");
var num = 35.36;
document.write("Number: ".concat(num, "<br />"));
document.write("Result: ".concat((num*100).toString()));

// QUESTION NO 13
document.write("<br /><br />");
var username = prompt("Enter Your Username:");
for (var i=0; i<username.length;i++) {
    if (username[i] === "@") {
        alert("Please Enter a valid username");
        break;
    }
    else if (username[i] === "!") {
        alert("Please Enter a valid username");
        break;
    }
    else if (username[i] === ",") {
        alert("Please Enter a valid username");
        break;
    }
    else if (username[i] === ".") {
        alert("Please Enter a valid username");
        break;
    }           
}

// QUESTION NO 14
document.write("<br /><br />");
var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var userinput = prompt("Welcome to ABC Bakery, What do you want to order sir/ma'am?");
userinput = userinput.toLowerCase();
for (var i=0; i<A.length; i++) {
    if (userinput === A[i]) {
        alert(userinput+" is Available at index ".concat(A.indexOf(A[i]), " in Our Bakery"));
    }
    else {
        alert("We are Sorry. ".concat(userinput, " is not available in our Bakery"));
        break;
    }
}

// QUESTION NO 15
document.write("<br /><br />");
var userPass = prompt("Enter your password(alphabets and numbers, not start with a number, least 6 characters long)");
var passw=  /^[A-Za-z]\w{7,14}$/;
if (userPass.value.match(passw)) {
    alert("corrent Password");
}
else {
    alert("password is not correct");
}

// QUESTION NO 16
document.write("<br /><br />");
var university = 'University of Karachi';
var uniArr = university.split(" ");
for (var i=0;i<university.length;i++) {
    document.write(university[i]+"<br />");
}

// QUESTION NO 17
document.write("<br /><br />");
stringInput = prompt("Enter the Word:");
document.write(stringInput.charAt(stringInput.length - 1));


// QUESTION NO 18
document.write("<br /><br />");
var stringForStr = "The quick brown fox jumps over the lazy dog";
stringFor = stringForStr.split(" ");
var strCounter = 0;
for (var i=0; i<stringFor.length; i++) {
    if (stringFor[i] === "the") {
        ++strCounter;
    }
    else if (stringFor[i] === "The") {
        ++strCounter;
    }
}
document.write("Text: ".concat(stringForStr, "<br />"));
document.write("There are ".concat(strCounter, " occurrence(s) of the word 'the'"));


// CHAPTER NO 26 TO 30


// QUESTION NO 01
document.write("<br /><br />");
var num = prompt("Enter a number");
document.write("Number: ".concat(num, "<br />"));
document.write("Round Off Value: ".concat(Math.round(num), "<br />"));
document.write("Floor Value: ".concat(Math.floor(num), "<br />"));
document.write("Ceil Value: ".concat(Math.ceil(num)));

// QUESTION NO 02
document.write("<br /><br />");
var num = prompt("Enter a number");
document.write("Number: ".concat(num, "<br />"));
document.write("Round Off Value: ".concat(Math.round(num), "<br />"));
document.write("Floor Value: ".concat(Math.floor(num), "<br />"));
document.write("Ceil Value: ".concat(Math.ceil(num)));

// QUESTION NO 03
document.write("<br /><br />");
var abs = prompt("Enter The Number");
document.write("Absolute value: ".concat(Math.abs(abs)));

// QUESTION NO 04
document.write("<br /><br />");
document.write("Random Dice Value: ".concat(Math.floor(Math.random() * 6) + 1, "<br />"));
document.write("Random Dice Value: ".concat(Math.floor(Math.random() * 6) + 1));

// QUESTION NO 05
document.write("<br /><br />");
var coin = Math.floor(Math.random()*2) +1;
if (coin === 1) {
    document.write(coin+"<br />");
    document.write("Random Coin Value: Heads");
}
else {
    document.write(coin+ "<br />");
    document.write("Random Coin Value: Tails");
}

// QUESTION NO 06
document.write("<br /><br />");
document.write("Random Number Between 1 and 100: ".concat(Math.floor(Math.random()*100)+1));

// QUESTION NO 07
document.write("<br /><br />");
var weight = prompt("Enter your weight in kilogram:");
weight = parseFloat(weight);
document.write("The Weight of the User is: ".concat(weight), " Kilograms");

// QUESTION NO 08
document.write("<br /><br />");
var secretNo = Math.floor(Math.random()*10)+1;
var userNo = prompt("Guess The Number between 1 to 10:");
userNo = parseInt(userNo);
if (userNo === secretNo) {
    alert("Congralutions! You Have Won");
}
else {
    alert("Try Again..!");
}

// CHAPTER NO 31 TO 34


// QUESTION NO 01
document.write("<br /><br />");
var vdaysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthsList = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octubar', 'November', 'December'];
var currDatenTime = new Date();
document.write(currDatenTime.toString());

// QUESTION NO 02
document.write("<br /><br />");
var currMonth = new Date();
document.write("current Month: ".concat(monthsList[currMonth.getMonth()]));

// QUESTION NO 03
document.write("<br /><br />");
var currDay = new Date();
document.write("current Month: ".concat(vdaysList[currDay.getDay()]));

// QUESTION NO 04
document.write("<br /><br />");
var chkDay = new Date();
if (chkDay.getDay() === 0 || chkDay.getDay() === 6) {
    alert("It's Fun Day");
}

// QUESTION NO 05
document.write("<br /><br />");
var chkDaysLimit = new Date();
if (chkDaysLimit.getDate() < 16) {
    document.write("First Fifteen Days of the month");
}
else {
    document.write("Last Fifteen Days of the month");
}

// QUESTION NO 06
document.write("<br /><br />");
var elapsedDate = new Date();
document.write("Current Date: ".concat(elapsedDate.toString(), "<br />"));
document.write("Elapsed Miliseconds since january 1, 1970: ".concat(elapsedDate.getTime(), "<br />"));
document.write("Elapsed Minutes since january 1, 1970: ".concat(elapsedDate.getTime()/(60*60), "<br />"));


// QUESTION NO 07
document.write("<br /><br />");
var chkAmPm = new Date();
if (chkAmPm.getHours() >= 12) {
    alert("It's PM")
}
else {
    alert("It's AM");
}
document.write(chkAmPm.getHours());


// QUESTION NO 08
document.write("<br /><br />");
var dateObj = new Date();
dateObj.setMonth(11);
dateObj.setDate(31);
dateObj.setMinutes(00);
dateObj.setSeconds(00);
dateObj.setHours(00);
document.write(dateObj.toString());

// QUESTION NO 09
document.write("<br /><br />");
var ramadanDate = new Date();
ramadanDate.setDate(18);
ramadanDate.setMonth(5);
ramadanDate.setFullYear(2015);
var firstRamadan = ramadanDate.getTime()/(24*60*60*1000);
//document.write("Days till 2015: ".concat(firstRamadan), "<br />");
var currDateForRamadan = new Date();
var currentDate = currDateForRamadan.getTime()/(24*60*60*1000);
//document.write("Days till 2020: ".concat(currentDate), "<br />");
document.write(Math.round(currentDate - firstRamadan)+" Days has Passed Since 1st Ramadan, 2015");


// QUESTION NO 10
document.write("<br /><br />");
var refDate = new Date();
refDate.setDate(5);
refDate.setMonth(11);
refDate.setFullYear(2015);
refDate.setHours(22);
refDate.setMinutes(50);
refDate.setSeconds(16);
//document.write("Reference Date: "+ refDate.toString()+ "<br />");
var elapsedDate = new Date();
elapsedDate.setDate(1);
elapsedDate.setMonth(0);
elapsedDate.setFullYear(2015);
elapsedDate.setHours(00);
elapsedDate.setMinutes(00);
elapsedDate.setSeconds(00);
//document.write("Starting Date: "+ elapsedDate.toString()+ "<br />");
var refTime = Math.round(refDate.getTime()/(1000));
//document.write(refTime);
var ElapTime = Math.round(elapsedDate.getTime()/1000);
//document.write("<br />"+ ElapTime);
document.write("<br />On reference Date".concat(refDate.toString(), ", ",(refTime - ElapTime), " Seconds had Passed since the beginning of 2015"));


// QUESTION NO 11
document.write("<br /><br />");
var dateObjForDT = new Date();
document.write("Current Date: "+dateObjForDT.toString()+"<br />");
dateObjForDT.setHours(dateObjForDT.getHours()-1);
document.write("<br />one hour ago, it was "+dateObjForDT.toString()+"<br />");


// QUESTION NO 12
document.write("<br /><br />");
var dateObjCentury = new Date();
alert("Current Date: "+dateObjCentury.toString());
dateObjCentury.setFullYear(dateObjCentury.getFullYear()-100);
alert("100 year ago, it was "+dateObjCentury.toString());

// QUESTION NO 13
document.write("<br /><br />");
var usrAge = prompt("Enter Your Age:");
usrAge = parseInt(usrAge);
var DateForAge = new Date();
document.write("Your Age is: ".concat(usrAge, "<br />"));
document.write("Your Birth Year is: ".concat(DateForAge.getFullYear() - usrAge));

// QUESTION NO 14
document.write("<br /><br />");
document.write("<h1>K-Electric Bill</h1>");
var DateFromE = new Date();
var cstName = prompt("Customer Name:");
document.write("Customer Name: ".concat(cstName));
let monthsList1 = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octubar', 'November', 'December'];
document.write("<br />Month: ".concat(monthsList1[DateFromE.getMonth()]));
var nofOFUnit = prompt("Enter Number of Units:");
document.write("<br />Number of Units: ".concat(nofOFUnit));
var chargePerUnit = prompt("Enter Charge Per Unit:");
document.write("<br />Charges Per Unit: ".concat(chargePerUnit));
document.write("<br />Net Amount Payable (Within Due Date): ".concat(nofOFUnit*chargePerUnit));
var surcharge = 350;
document.write("<br />Late Payment surcharges: ".concat(surcharge));
document.write("<br />Gross Amount Payable (After due Date): ".concat((nofOFUnit*chargePerUnit)+surcharge));

// CHAPTER NO 35 TO 38



// QUESTION NO 01
document.write("<br /><br />");
function currDateNTime() {
    var dateTime = new Date();
    document.write(dateTime.toString());
}
currDateNTime();


// QUESTION NO 02
document.write("<br /><br />");
var fname = prompt("Enter First Name:");
var lname = prompt("Enter Last Name:");
function greet(fname, lname) {
    document.write("Assalam u Alaikum, ".concat(fname, " ", lname));
}
greet(fname, lname);


// QUESTION NO 03
document.write("<br /><br />");
var num1 = prompt("Enter first Number:");
num1 = parseInt(num1);
var num2 = prompt("Enter Second Number:");
num2 = parseInt(num2);
function addition(num1, num2) {
    return num1 + num2;
}
document.write("Addition of Two Numbers is: ".concat(addition(num1, num2)));


// QUESTION NO 04
document.write("<br /><br />");
var num1 = prompt("Enter first Number:");
num1 = parseInt(num1);
var num2 = prompt("Enter Second Number:");
num2 = parseInt(num2);
var operator = prompt("+ for Add, - for substract, x for multiply, / for divide");
function calculator(num1, num2, operator) {
    if (operator === "+") {
        document.write("Addition of two numbers: ".concat(num1 + num2));
    }
    else if (operator === "-") {
        document.write("Substraction of two numbers: ".concat(num1 - num2));
    }
    if (operator === "x") {
        document.write("Multiplication of two numbers: ".concat(num1 * num2));
    }
    if (operator === "/") {
        document.write("Division of two numbers: ".concat(num1 / num2));
    }
}
calculator(num1, num2, operator);


// QUESTION NO 05
document.write("<br /><br />");
var num = prompt("Enter the number to square:");
function sqTheNumber(num) {
    return num*num;
}
document.write("Square of ".concat(num, " is ", sqTheNumber(num)));


// QUESTION NO 06
document.write("<br /><br />");
var numForFactorial = prompt("Enter the number");
function factorial(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
}
document.write("Factorial of ".concat(numForFactorial, " is ", factorial(numForFactorial)));


// QUESTION NO 07
document.write("<br /><br />");
var startValue = prompt("Enter Starting Value");
var endValue = prompt("Enter Ending Value:");
function counting(sValue, eValue) {
    if (sValue < eValue) {
        for (var i=sValue; i<=eValue; i++) {
            document.write("Series in Increasing Order"+sValue+" ");
            sValue++;
        }
    }
    else if (eValue < sValue) {
        for (var i=sValue; i>=eValue; i--) {
            document.write("Series in Decreasing Order"+sValue+" ");
            sValue--;
        }
    }
}
counting(startValue, endValue);


// QUESTION NO 08
document.write("<br /><br />");
var base = prompt("Enter Base:");
base = parseInt(base);
var perpen = prompt("Enter Perpendicular");
perpen = parseInt(perpen);
function calculateHypotenuse(b, p) {
    return Math.sqrt(calculateSquare(b) + calculateSquare(p));
    function calculateSquare(n) {
        return n*n;
    }
}
document.write("Hypotenuse is: ".concat(calculateHypotenuse(base, perpen)));


// QUESTION NO 09
document.write("<br /><br />");
var width = prompt("Enter Width");
width = parseInt(width);
var height = prompt("Enter Height");
height = parseInt(height);
function AOfRectangle(w, h) {
    return w*h;
}
document.write("Area of Rectangle with Values as Argument: ".concat(AOfRectangle(3.4, 5.6)));
document.write("<br />Area of Rectangle with Variables as Argument: ".concat(AOfRectangle(width, height)));


// QUESTION NO 10
document.write("<br /><br />");
var strValue = prompt("Enter Any Word");
function Palindrome(string) {
    if (string == string.split('').reverse().join('')) {
        document.write(string + ' is palindrome.');
    }
    else {
        document.write(string + ' is not palindrome.');
    }
}
Palindrome(strValue);


// QUESTION NO 11
document.write("<br /><br />");
var str = "the quick brown fox";
document.write("EXAMPLE STRING: "+str+"<br />");
function toTitleCase(str) {
    var sen = str.toLowerCase().split(" ");
    for (var i=0; i<sen.length; i++) {
        sen[i] = sen[i][0].toUpperCase() + sen[i].slice(1);
    }
    document.write(sen.join(" "));
    return sen;
}
document.write("EXPECTED OUTPUT: ");
toTitleCase(str);



// QUESTION NO 12
document.write("<br /><br />");
var exampleStr = "Web Development Tutorial";
document.write("EXAMPLE STRING: ".concat(exampleStr, "<br />"));
function longestWord(str) {
    var strSplit = str.split(" "); //convert string into array
    var lWord = 0;
    var strWord = "";
    for (var i=0; i<strSplit.length; i++) {
        if (strSplit[i].length > lWord) {
            lWord = strSplit[i].length;
            strWord = strSplit[i];
        }
    }
    return strWord;
}
document.write("EXPECTED OUTPUT: ".concat(longestWord(exampleStr)));


// QUESTION NO 13
document.write("<br /><br />");
var str = prompt("Enter the Sentence/Word:");
var letter = prompt("Enter the Letter:");
function letterCounter(s, l) {
    var count = 0;
    for (var i=0; i<s.length; i++) {
        if (s[i] === l) {
            count++;
        }
    }
    return count;
}
document.write(letter+" is "+letterCounter(str, letter)+" times in "+str);


// QUESTION NO 14
document.write("<br /><br />");
var radius = prompt("Enter Radius For Circumference & Radius:");
function calcCircumference(r) {
    return "The Circumference is: "+2*Math.PI*r;
}
function calcArea(r) {
    return "The Area is: "+Math.PI*Math.pow(r, 2);
}
document.write(calcCircumference(radius)+"<br />");
document.write(calcArea(radius));
