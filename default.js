let index = 0;
let articles = null;
let next_btn = null;
let prev_btn = null;

function enable(element){
    element.classList.remove("disable");    
}

function disable(element){
    element.classList.add("disable");    
}

function hide(index){
    let element = articles[index];
    element.classList.remove("visible")   
}

function show(index){
    let element = articles[index];
    element.classList.add("visible");
}

function check_nav(){
    enable(prev_btn);
    enable(next_btn);
    if (index == 0) disable(prev_btn);
    if (index + 2 == articles.length) disable(next_btn);
}

function prev(){
    if (index - 1 < 0){        
        return;
    }
    enable(next_btn);
    hide(index--);
    show(index);
    check_nav()
}

function next(){
    if (index + 2 >= articles.length){        
        return;
    }
    enable(prev_btn);
    hide(index++);
    show(index);
    check_nav()
}
window.addEventListener('load', function () {
   const main = document.getElementById("main");
   articles = main.children;
   next_btn = document.getElementById("next");
   prev_btn = document.getElementById("prev");
   
   show(index);
   check_nav();
});    