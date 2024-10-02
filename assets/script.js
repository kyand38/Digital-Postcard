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
const spanMain = document.getElementById('mainSpain');
/*window.addEventListener('load', function() {
    emailjs.init("tSaq7COCltqEYR-7C");
});
/* const flip = [
    { transform: "rotateY(0)" },
    { transform: "rotateY(180deg)" },
  ]; */

const newImage = new Image();
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 500;


newImage.onload = function() {
    ctx.drawImage(newImage, 0, 0, canvas.width, canvas.height)
    newImage.src = myImage.value;
};


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

    const myData = {
        text: content.value.trim(),
        img: myImage.value.trim(),
    };
    localStorage.setItem('newData', JSON.stringify(myData));
    location.reload();

});

send.addEventListener('click', function (event) {
    event.preventDefault();
    validateForm2();

    const myData = {
        formData: form.value,
        emailto: sentEmail.value.trim(),
        emailfrom: myEmail.value.trim(),
        to_name: name1.value.trim(),
        from_name: from.value.trim(),
        message: ''
    };
    localStorage.setItem('myData', JSON.stringify(myData));
    console.log(myData);
    sendMail();

});

function showData() {
    const lastData = JSON.parse(localStorage.getItem('newData'));

    if (lastData !== null) {
        const imgURL = lastData.img
        newImage.src = imgURL;
        
        

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
       
    
 /*<script type="text/javascript">
        window.onload = function () {
            document.getElementById('contact-form').addEventListener('submit', function (event) {
                event.preventDefault();
                // these IDs from the previous steps
                emailjs.sendForm('service_81dabxj', 'template_xnnkp08', '#contact-form')
                    .then(() => {
                        console.log('SUCCESS!');
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            });
        }
    </script>*/