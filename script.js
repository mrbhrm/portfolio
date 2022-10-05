'use strict';

let t=1;
let mainText = document.getElementById('mainText');
let portrait = document.getElementById('portrait');

function process(){
    if(t==1){
        mainText.textContent = 'mail:rom.duck.999.664@gmail.com';
        portrait.classList.add('changed');
        t=2;
    }else if(t==2){
        mainText.textContent = '学生のうちに色々なプログラムに触れていきたいです！';
        portrait.classList.remove('changed');
        t=1;
    }else{
        alert('Error!')
    }

};

portrait.addEventListener('click', process);


