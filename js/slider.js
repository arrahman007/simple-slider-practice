const images = [
    'img/img-1.jpg',
    'img/img-2.jpg',
    'img/img-3.jpg'
]

let imgIndex = 0;
const imgElement = document.getElementById('img-slider');
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl)
    imgIndex++;
}, 1500)