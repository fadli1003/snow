let main = document.getElementById('main');
let count = 50;
for(let i = 0; i<count; i++){
    let leftSnow = Math.floor(Math.random() * main.clientWidth);
    let topSnow = Math.floor(Math.random() * main.clientHeight);
    let snowWidth = Math.floor(Math.random() * 50);
    let timeSnow = Math.floor((Math.random() * 5) + 5);
    let blurSnow = Math.floor(Math.random() * 20);
    let div = document.createElement('div');

    div.classList.add('snow');
    div.style.left = leftSnow + 'px';
    div.style.top = topSnow + 'px';
    div.style.width = snowWidth + 'px';
    div.style.height = snowWidth + 'px';
    div.style.animationDuration = timeSnow + 's';
    div.style.filter = 'blur(' + blurSnow + 'px)'; 
    main.appendChild(div);
}