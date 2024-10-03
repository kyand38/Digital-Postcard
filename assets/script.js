const sentEmail = document.querySelector('#emailto');
const myEmail = document.querySelector('#emailfrom');
const content = document.querySelector('#content');
const myImage = document.querySelector('#image');
const preview = document.querySelector('#preview');
const send = document.querySelector('#send');
const name1 = document.querySelector('#name');
const from = document.querySelector('#from');
const form = document.querySelector('#contact-form');
/* const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d'); */
const container = document.getElementById('mainContainer');
const spanMain = document.getElementById('mainSpan');
/*window.addEventListener('load', function() {
    emailjs.init("tSaq7COCltqEYR-7C");
});
/* const flip = [
    { transform: "rotateY(0)" },
    { transform: "rotateY(180deg)" },
  ]; */

const newImage = document.querySelector('#postcard');
// const newImage = new Image();
// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');
// canvas.width = 700;
// canvas.height = 500;


// newImage.onload = function() {
//     ctx.drawImage(newImage, 0, 0, canvas.width, canvas.height)
//     newImage.src = myImage.value;
// };




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
    const name1 = document.querySelector('#name');
    const from = document.querySelector('#from');
    if (sentEmail.value.trim() === "" || myEmail.value.trim() === "" || name1.value.trim() === "" || from.value.trim() === "") {
        alert("Please fill in the all of the info.");
        return false; // Prevent form submission
    }    // Form is valid, continue with submission
    return true;
};

preview.addEventListener('click', function (event) {
    event.preventDefault();
    validateForm1();
    console.log(myImage.value);
    console.log(newImage)
    const myData = {
        text: content.value.trim(),
        img: myImage.value.trim(),
    };
    localStorage.setItem('newData', JSON.stringify(myData));
    // location.reload();
    showData()

});

/*preview.addEventListener('click', function (event) {
    event.preventDefault();
    if (!validateForm1()) {
        return;
    }

    // Load the image and draw it on the canvas
    newImage.src = myImage.value.trim(); // Get the image URL from the input

    // When the image is loaded, draw it to the canvas
    newImage.onload = function() {
        ctx.drawImage(newImage, 0, 0, canvas.width, canvas.height);

        // Store the text and image data in localStorage for preview
        const myData = {
            text: content.value.trim(),
            img: canvas.toDataURL(),  // Convert canvas image to base64 string
        };

        localStorage.setItem('newData', JSON.stringify(myData));
        location.reload(); // Reload to update the preview
    };
});*/

send.addEventListener('click', function (event) {
    event.preventDefault();
    validateForm2();

    const myData = {
        formData: form.value,
        emailto: sentEmail.value.trim(),
        emailfrom: myEmail.value.trim(),
        to_name: name1.value.trim(),
        from_name: from.value.trim(),
        postCardImg:JSON.parse(localStorage.getItem('newData')).img,
        newTextContent: JSON.parse(localStorage.getItem('newData')).text
    };
    localStorage.setItem('myData', JSON.stringify(myData));
    console.log(myData);
    sendMail();
});

function showData() {
    const lastData = JSON.parse(localStorage.getItem('newData'));

    if (lastData !== null) {
        const imgURL = lastData.img
        const lastText = lastData.text;
        newImage.setAttribute('style', `background-image: url(${imgURL})`);
        newImage.textContent = lastText;
        

    }
};




window.onload = showData();


/* document.getElementById('mainImage').addEventListener('click', () => {
    document.getElementById('mainImage').animate(flip, 500);

    }); */
    
    function sendMail() {
    const templateParams = JSON.parse(localStorage.getItem('myData'));

 
    emailjs.send('service_81dabxj', 'template_xnnkp08', templateParams)
       .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
       }, function(error) {
          console.log('FAILED...', error);
       });
 }
 
            emailjs.init({
                publicKey: "tSaq7COCltqEYR-7C",
            });
       

//             <section style="flex: 2 1 50%;
//     flex-direction: column;"><div style=" border: solid;
//     border-radius: 5px;
//     border-color: rgb(255, 255, 255);
//     padding: 10px;
//     display: flex;
//     color: rgb(255, 255, 255); min-height: 290px;">
// <div style="margin: 0 auto;
//     height: 500px;
//     width: 700px;
//     position: relative;"><img src={{postCardImg}} style="display: block;
//     margin: 0 auto; width: 700px; height:500px;" /><span style="position: absolute;
//     top: 10%;
//     left: 50%;
//     word-wrap: break-word;
//     width: 275px;
//     height: 400px;
//     font-size: 24px;
//     padding: 5px;
//     text-decoration: underline;
//     text-align: justify;
//     text-justify: inter-word;
//     font-family: 'Times New Roman', Times, serif;
//       overflow: hidden;">{{newTextContent}}</span></div></div></section>