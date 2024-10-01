const sentEmail = document.querySelector('#emailto');
const myEmail = document.querySelector('#emailfrom');
const content = document.querySelector('#content');
const myImage = document.querySelector('#image');
const submit = document.querySelector('button');


/* function pizzaFlip() {
    document.getElementById('mainImage').style.transform = 'rotateY(180deg)';
} */


submit.addEventListener('click', function (event) {
    event.preventDefault();

    const myData = {
        sent: sentEmail.value.trim(),
        myMail: myEmail.value.trim(),
        text: content.value.trim(),
        img: myImage.value.trim(),
    };
    localStorage.setItem('myData', JSON.stringify(myData));
});

/* function showData() {
    const lastData = JSON.parse(localStorage.getItem('myData'));

    if (lastData !== null) {
        document.querySelector('.placeholder').textContent = lastData.sentEmail
        document.querySelector('.placeholder2').textContent = lastData.myEmail
        document.querySelector('.placeholder3').textContent = lastData.content
    }
};


document.getElementById('mainImage').addEventListener('click', pizzaFlip()); */