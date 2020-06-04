firebase.initializeApp({
    apiKey: "AIzaSyCqz1iA8Zi3KG1HuNALXU5wg1i9P7BNzoA",
    authDomain: "kanwal-studio.firebaseapp.com",
    projectId: "kanwal-studio",
});
var db = firebase.firestore();

console.log("db.js Testing");
addData = () => {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || name === " " || name === undefined) {
        // document.getElementById("userMsg").style.display = "block"
        swal("Empty Field", "Please Enter Your Name..", "warning")
    }
    else if (email === "" || email === " " || email === undefined) {
        // document.getElementById("emailMsg").style.display = "block"
        swal("Empty Field", "Please Enter Your Email..", "warning")

    }
    else if (message === "" || message === " " || message === undefined) {
        // document.getElementById("msgMsg").style.display = "block"
        swal("Empty Field", "Please Enter Your Message..", "warning")

    }
    else {
        console.log(name, email, message)

        let msg = {
            name: name,
            email: email,
            message, message
        }
        db.collection("queries").add(msg)
            .then((user) => {
                console.log(user.name)
                console.log(user.email)
                console.log(user.message)
            })
            .catch(err => console.log("error :", err))

        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("message").value = ""

        swal("Submitted!", "Your query has been Submitted!", "success");
    }

    document.getElementById("userMsg").style.display = "none"
    document.getElementById("emailMsg").style.display = "none"
    document.getElementById("msgMsg").style.display = "none"
}
