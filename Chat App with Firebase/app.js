let auth = firebase.auth();
let db = firebase.database();

signUp = () => {

    let username = document.getElementById("signup-username").value
    let email = document.getElementById("signup-email").value
    let password = document.getElementById("signup-password").value
    let id = db.ref("users").push().key;

    if (username === "" || username === " " || username === undefined) {
        swal({
            text: "Please Enter Username",
            icon: "warning",
            button: "Okay"
        })
    } else if (email === "" || email === " " || email === undefined) {
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
        let errorFlag = true;
        auth.createUserWithEmailAndPassword(email.toLowerCase(), password)
            .then(() => {
                swal({
                    text: "Successfully User Created",
                    icon: "success",
                    button: "Okay"
                })
            })
            .catch(error => {
                swal({
                    text: error.message,
                    icon: "warning",
                    button: "Okay"
                })
                if (error) {
                    errorFlag = false;
                    console.log(errorFlag)
                }
            })
        console.log(errorFlag)
        setTimeout(() => {
            if (errorFlag) {
                db.ref("users/" + id).set({
                    id: id,
                    username: username,
                    email: email.toLowerCase(),
                    password: password,
                })
            }
        }, 2000)
    }
}

signInFacebook = () => {
    console.log("Facebook Pressed")
    let id = db.ref("users").push().key;
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function (result) {
        var user = result.user;
        localStorage.setItem("name", user.displayName);
        console.log(localStorage.getItem("name"));
        let userFlag = true;
        db.ref("users").once("value", (data) => {
            for (key in data.val()) {
                if (user.displayName === data.val()[key].username) {
                    userFlag = false;
                    console.log(userFlag)
                    console.log(data.val()[key].username)
                }
            }
        })       
        setTimeout(() => {
            console.log(userFlag)
            if(userFlag){
                db.ref("users/" + id).set({
                    id: id,
                    username: user.displayName,
                    email: user.email,
                    password: user.displayName,
                })
            }
            window.location.href = "./chat.html";
        }, 2000)

    }).catch(function (error) {
        swal({
            text: error.message,
            icon: "warning",
            button: "Okay"
        })
    });
}

signInGoogle = () => {
    console.log("Google Pressed")
    let id = db.ref("users").push().key;
    var provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(provider).then(function (result) {
        var user = result.user;
        localStorage.setItem("name", user.displayName);
        console.log(localStorage.getItem("name"));
        let userFlag = true;
        db.ref("users").once("value", (data) => {
            for (key in data.val()) {
                if (user.displayName === data.val()[key].username) {
                    userFlag = false;
                    console.log(userFlag)
                    console.log(data.val()[key].username)
                }
            }
        })       
        setTimeout(() => {
            console.log(userFlag)
            if(userFlag){
                db.ref("users/" + id).set({
                    id: id,
                    username: user.displayName,
                    email: user.email,
                    password: user.displayName,
                })
            }
            window.location.href = "./chat.html";
        }, 2000)

    }).catch(function (error) {
        swal({
            text: error.message,
            icon: "warning",
            button: "Okay"
        })
    });
    
}

login = (e) => {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    // console.log(email, password)
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
                // console.log(users.user.email)
                db.ref("users").once("value", (data) => {
                    for (user in data.val()) {
                        if (users.user.email.toLowerCase() === data.val()[user].email) {
                            localStorage.setItem("name", data.val()[user].username);
                            // console.log(localStorage.getItem("name"))
                        }
                    }
                })
                setTimeout(() => {
                    window.location.href = "./chat.html";
                }, 1000)
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

fetchUser = () => {

    setTimeout(() => {
        if (!firebase.auth().currentUser) {
            window.location.href = "./index.html";
        }
    }, 1500);

    firebase.auth().onAuthStateChanged((user) => {
        db.ref("users").on("value", (data) => {
            let li = '';
            for (user in data.val()) {
                // console.log(data.val()[user].username)
                if (data.val()[user].username === localStorage.getItem("name")) {
                    continue;
                }
                let li = ` <li style='color:white' >${data.val()[user].username} <hr></li>`
                document.getElementById("active-users-list").innerHTML += li;
            }
            document.getElementById("yourName").innerHTML = localStorage.getItem("name");

        })
    })




}

sendMessage = () => {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let msg = document.getElementById("message")
    let time = "";

    if (hours > 12) {
        time = `${Math.ceil(hours / 2 - 1)}:${mins}:${secs} PM`;
        console.log(time)
    }
    else {
        time = `${hours}:${mins}:${secs} AM`;
    }

    // console.log(msg.value)
    let name = localStorage.getItem("name");
    // console.log("Name: " + name);
    if(msg.value){
        firebase.database().ref('messages').push().set({
            "sender": name,
            "message": msg.value,
            "time": time,
        });
    }
    msg.value = "";
}

logOut = () => {
    // console.log("Log Out")
    firebase.auth().signOut().then(() => {
        localStorage.setItem("name", "");
        window.location.href = './index.html';
    }).catch((error) => {
        console.log(error.message)
    })
}

function deleteMessage(self) {
    var messageId = self.getAttribute("data-id")
    // console.log(messageId)
    swal({
        title: "Message Delete!",
        text: "Are you sure?!",
        icon: "warning",
        buttons: ["Nope", "Yes"],
    })
        .then((res) => {
            if (res) {
                firebase.database().ref("messages").child(messageId).remove();
                swal({
                    title: "Success",
                    icon: "success",
                    button: "Okay"
                })
            }
        });
}

let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
let rgb1 = `rgb(${r},${g},${b})`;
let r2 = Math.floor(Math.random() * 255);
let g2 = Math.floor(Math.random() * 255);
let b2 = Math.floor(Math.random() * 255);
let rgb2 = `rgb(${r2},${g2},${b2})`;

firebase.database().ref('messages').on('child_added', (data) => {

    let li = "";
    let nameDb = localStorage.getItem("name")

    if (data.val().sender === nameDb) {
        // console.log("Condition is true")
        li += `
            <li class="align-right" id="message-${data.key}">
                <span class="single-message" id="message-info" onclick="deleteMessage(this)" data-id=${data.key} >
                    <span class="sender-name" style="color:${rgb1}" >${data.val().sender}:</span>
                    <span class="sender-message">${data.val().message}</span>
                    <small class="sent-time">${data.val().time}</small>
                </span>
            </li>
        `;
    }
    else {
        li += `
        <li class="align-left" id="message-${data.key}">
            <span class="single-message">
                <span class="sender-name" style="color:${rgb2}" >${data.val().sender}:</span>
                <span class="sender-message">${data.val().message}</span>
                <small class="sent-time">${data.val().time}</small>
            </span>
        </li>
    `;
    }
    if (firebase.auth().currentUser) {
        document.getElementById("messages").innerHTML += li;
    }
});

firebase.database().ref("messages").on("child_removed", (data) => {
    document.getElementById("message-" + data.key).innerHTML = "message has been removed";
})




