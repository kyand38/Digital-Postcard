const sentEmail = document.querySelector('#emailto');
const myEmail = document.querySelector('#emailfrom');
const content = document.querySelector('#content');
const myImage = document.querySelector('#image');
const preview = document.querySelector('#preview');
const send = document.querySelector('#send');
/* const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d'); */
const container = document.getElementById('mainContainer');

/* const flip = [
    { transform: "rotateY(0)" },
    { transform: "rotateY(180deg)" },
  ]; */

/* const image = new Image();
image.onload = () => {
    canvas.width = '43.75em';
    canvas.height = '31.25em';
    ctx.drawImage(image, 0, 0);
    ctx.font = '30px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(text, 10, 50); 
    document.getElementById('mainContainer').appendChild(canvas);
}; */

function validateForm1() {
    const content = document.querySelector('#content');
    const myImage = document.querySelector('#image');
    if (content.value.trim() === "" || myImage.value.trim() === "") {
        alert("Please fill in the all of the info.");
        return false; // Prevent form submission
    }    // Form is valid, continue with submission
    return true;
};

function validateForm2() {
    const sentEmail = document.querySelector('#emailto');
    const myEmail = document.querySelector('#emailfrom');
    if (sentEmail.value.trim() === "" || myEmail.value.trim() === "") {
        alert("Please fill in the all of the info.");
        return false; // Prevent form submission
    }    // Form is valid, continue with submission
    return true;
};

preview.addEventListener('click', function (event) {
    event.preventDefault();
    validateForm1();

    const myData = {
        text: content.value.trim(),
        img: myImage.value.trim(),
    };
    localStorage.setItem('myData', JSON.stringify(myData));
    location.reload(); 

});

send.addEventListener('click', function (event) {
    event.preventDefault();
    validateForm2();

    const myData = {
        sent: sentEmail.value.trim(),
        myMail: myEmail.value.trim(),
    };
    localStorage.setItem('myData', JSON.stringify(myData));

});

function showData() {
    const lastData = JSON.parse(localStorage.getItem('myData'));

    if (lastData !== null) {
        const imgURL = lastData.img
        const newImage = document.createElement('img');
        newImage.src = imgURL;
        container.appendChild(newImage);
        // document.querySelector('.placeholder').textContent = lastData.sent;
        // document.querySelector('.placeholder2').textContent = lastData.myMail;
        // document.querySelector('.placeholder3').textContent = lastData.text;
        // document.getElementById('mainContainer').firstChild.src = lastData.img

    }
};




window.onload = showData();


/* document.getElementById('mainImage').addEventListener('click', () => {
    document.getElementById('mainImage').animate(flip, 500);
}); */

/*function sendPostcard(onward) {
    const templateParams = {
       to_name: trip.traveler.name,
       to_email: trip.traveler.email,
       from_name: trip.owner.name,
       from_email: trip.owner.email,
       trip_name: trip.name };
 
    emailjs.send('service_sEcRet', 'template_sEcRet', templateParams)
       .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
       }, function(error) {
          console.log('FAILED...', error);
       });
 }*/