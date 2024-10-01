const sentEmail = document.querySelector('#emailto');
const myEmail = document.querySelector('#emailfrom');
const content = document.querySelector('#content');
const myImage = document.querySelector('#image');
const submit = document.querySelector('button');
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
function validateForm() {
    const sentEmail = document.querySelector('#emailto');
    const myEmail = document.querySelector('#emailfrom');
    const content = document.querySelector('#content');
    const myImage = document.querySelector('#image');    
    if (sentEmail.value.trim() === "" || myEmail.value.trim() === "" || content.value.trim() === "" || myImage.value.trim() === "") {
        alert("Please fill in the all of the info.");
        return false; // Prevent form submission
    }    // Form is valid, continue with submission
    return true;
};

submit.addEventListener('click', function (event) {
    event.preventDefault();
    validateForm();
    const myData = {
        sent: sentEmail.value.trim(),
        myMail: myEmail.value.trim(),
        text: content.value.trim(),
        img: myImage.value.trim(),
    };
    localStorage.setItem('myData', JSON.stringify(myData));

});



function showData() {
    const lastData = JSON.parse(localStorage.getItem('myData'));

    if (lastData !== null) {
        const imgURL = myImage.value
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

