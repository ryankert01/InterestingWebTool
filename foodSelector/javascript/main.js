const food = [
    'Rice Soup',
    'Hamburger',
    'Subway'
];

const foodImg = [
    'https://cdn.loveandlemons.com/wp-content/uploads/2018/11/wild-rice-soup.jpg',
    'https://media.istockphoto.com/photos/cheeseburger-isolated-on-white-picture-id1157515115?k=20&m=1157515115&s=612x612&w=0&h=1-tuF1ovimw3DuivpApekSjJXN5-vc97-qBY5EBOUts=',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-subway-sub-1521220946.jpg'
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMloaded");
    document.querySelector('#btn1').onclick = () => {
        console.log("onclicked");
        var fd = getRandomInt(3);
        document.getElementById("hh").innerHTML = food[fd];
        document.querySelector('#pic').src = foodImg[fd];
    }
});