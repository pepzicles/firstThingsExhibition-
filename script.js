let numRectangles = 196;

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

//Making the maps button into an actual button
function redirectToMaps() {
        // Redirect to your desired URL when the button is clicked
        window.location.href = "maps.html";
}
    

