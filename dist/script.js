let mainDiv = document.querySelector('#main-div');
const width  = ((window.innerWidth / 4) / window.innerWidth) * 100 + 'vw';
const height = ((window.innerHeight / 5) / window.innerHeight) * 100 + 'vh';
let idNum = 1;

for (let i = 0; i < 5; i++) {
    let childDiv = document.createElement('div');
    childDiv.classList.add('child-div');
    childDiv.setAttribute('style', `height: ${height}; width: ${window.innerWidth};`);
    mainDiv.append(childDiv);
    for(let x = 0; x < 4; x++) {
        let canvasSquare = document.createElement('canvas');
        canvasSquare.classList.add('canvas-square');
        canvasSquare.setAttribute('style', `height: ${height}; width: ${width};`);
        canvasSquare.setAttribute("id", idNum.toString());
        childDiv.append(canvasSquare);
        idNum = idNum + 1;
    }
}