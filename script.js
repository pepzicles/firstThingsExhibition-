let numRectangles = 190;

let rectangleContainer = document.getElementById('rectangleContainer');

for (let i = 0; i < numRectangles; i++){
    let rectangle = document.createElement('div');
    rectangle.classList.add('rectangle');
    let rectangleText = rectangle.textContent = (i + 1); 
    rectangle.onclick = (function (index) {
        return function () {
            window.location.href = 'artworks/page' + (index + 1) + '.html';
        };
    })(i);
    rectangleContainer.appendChild(rectangle);
}