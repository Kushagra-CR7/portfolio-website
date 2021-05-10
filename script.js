$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    })

    // toggle menu/navbar
    $('.menu-btn').Click(function () {
        $('.navbar .menu').toggleClass("active");
    })
});


//typing animation script

var typed = new Typed(".typing", {
    strings: ["Freelancer", "Developer", "Blogger", "Web Designer"],
    typeSpeed: 100, backspeed: 60, loop: true
})
var typed = new Typed(".typing-2", {
    strings: ["Freelancer", "Developer", "Blogger", "Web Designer"],
    typeSpeed: 100, backspeed: 60, loop: true
})
var typed = new Typed(".typing-3", {
    strings: ["olio."],
    typeSpeed: 200, backspeed: 300, loop: true
})


//script for form submission

function validation() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let text;

    errorMessage.style.padding = "20px";

    if (name.length < 5) {
        text = "Please enter a valid name"
        errorMessage.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 7) {
        text = "Please enter a valid email"
        errorMessage.innerHTML = text;
        return false;
    }


    if (subject.length < 8) {
        text = "Please enter a valid subject"
        errorMessage.innerHTML = text;
        return false;
    }


    if (message.length < 10) {
        text = "Please enter a valid message"
        errorMessage.innerHTML = text;
        return false;
    }

    alert("form submitted successfully!")
    return true;



}

//getting data from each element 


// let savefile = () => {
    
//     const name = document.getElementById("name");
//     const email = document.getElementById("email");
//     const subject = document.getElementById("subject");
//     const message = document.getElementById("message");

//     //this variable stores all the data
//     let data =
//         '\r Name:' + name.value + '\r\n' + 'Email:' + email.value + '\r\n' + 'Subject:' + subject.value + '\r\n' + 'Message:' + message.value;


//     // converting text to blob

//     const textToBLOB = new Blob([data], { type: 'text/plain' });
//     const sFileName = 'formData.txt';	   // The file to save the data.

//     let newLink = document.createElement("a");
//     newLink.download = sFileName;

//     if (window.webkitURL != null && validation()) {
//         newLink.href = window.webkitURL.createObjectURL(textToBLOB);
//         console.log("if");
//         document.getElementById("name").innerHTML = '';
//     }
//     // else {
//     //     newLink.href = window.URL.createObjectURL(textToBLOB);
//     //     newLink.style.display = "none";
//     //     document.body.appendChild(newLink);

//     //     console.log("else");
//     // }

//     newLink.click();

// }



