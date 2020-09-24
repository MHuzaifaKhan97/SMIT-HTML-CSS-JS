const db = firebase.database();
const auth = firebase.auth();

function addData() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    let monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear();

    let time = "";
    if (hours > 12) {
        time = `${Math.ceil(hours - 12)}:${mins}:${secs} PM`;
    }
    else {
        time = `${hours}:${mins}:${secs} AM`;
    }

    let submitAt = `${day}/${monthArray[month]}/${year} - ${time}`;

    if (name === "" || name === " " || name === undefined) {
        swal("Empty Field", "Please Enter Your Name..", "warning")
    }
    else if (email === "" || email === " " || email === undefined) {
        swal("Empty Field", "Please Enter Your Email..", "warning")

    }
    else if (message === "" || message === " " || message === undefined) {
        swal("Empty Field", "Please Enter Your Message..", "warning")
    }
    else {
        console.log(name, email, message)
        firebase.database().ref('queries').push().set({
            "name": name,
            "email": email,
            "message": message,
            "submitAt": submitAt,
        });
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("message").value = ""

        swal("Submitted!", "Your query has been Submitted!", "success");
    }
}


function login() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    if (email === "" || email === " " || email === undefined) {
        swal({
            text: "Please Enter Email",
            icon: "warning",
            button: "Okay"
        })
    } else if (password === "" || password === " " || password === undefined) {
        swal({
            text: "Please Enter Password",
            icon: "warning",
            button: "Okay"
        })
    } else {
        auth.signInWithEmailAndPassword(email.toLowerCase(), password)
            .then((users) => {
                window.location.href = "./admin.html";
            })
            .catch((error) => {
                swal({
                    text: error.message,
                    icon: "error",
                    button: "Okay"
                })
            })
    }

}

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = './admin.html';
    }).catch((error) => {
        console.log(error.message)
    })
}

adminLoad = () => {
    setTimeout(() => {
        if (!firebase.auth().currentUser) {
            window.location.href = "./login.html";
        }

    }, 1000);
    firebase.auth().onAuthStateChanged((user) => {
        console.log(user.email);
        document.getElementById("loggedInUser").innerHTML = user.email;
    })

    db.ref("queries").on("child_added",(query)=> {
        console.log(query.val())

        let tr = "";
        for (var key in query.val()){
            tr = `
                <tr>
                    <td>${query.val()["name"]}</td>
                    <td>${query.val()["email"]}</td>
                    <td>${query.val()["message"]}</td>
                    <td>${query.val()["submitAt"]}</td>
                </tr>
            `;
            console.log(key)
        }
        document.getElementById("tableBody").innerHTML += tr;
    })

}
loginLoad = () => {
    setTimeout(() => {

        if (firebase.auth().currentUser) {
            window.location.href = "./admin.html";
        }
    }, 1000);

}