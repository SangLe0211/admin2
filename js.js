// open tab
function openMenu(food){
    var i;
    var tab = document.getElementsByClassName('tab');
    for(i = 0; i < tab.length; i++){
        tab[i].style.display = "none";
    }
    document.getElementById(food).style.display = "flex";
}

// tab all
var i;
var tab = document.getElementsByClassName('tab');
var all = document.getElementById('all')
all.addEventListener('click', function(){
    for(i = 0; i < tab.length; i++){
        tab[i].style.display = "flex"
    }
})

// add active
var list = document.getElementsByClassName('list');
var y;
for(y = 0; y < list.length; y++){
    list[y].addEventListener('click', function(){
        var active = document.getElementsByClassName('active');
        active[0].className = active[0].className.replace('active', '');
        this.className += ' active';
    })
}

//arrow

var left = document.getElementById('btn_left');
var right = document.getElementById('btn_right');
var slide = document.getElementsByClassName('slide');

left.addEventListener('click', function(){
    for(var z = 0; z < slide.length; z++ ){
        slide[0].style.display = "flex";
        slide[0].style.transform = "translateX(0)";
        slide[1].style.display = "none";
        slide[1].style.transform = "translateX(-100%)";
    }
    
})
right.addEventListener('click', function(){
    for(var a = 0; a < slide.length; a++ ){
        slide[1].style.display = "flex";
        slide[1].style.transform = "translateX(0)";
        slide[0].style.display = "none";
        slide[0].style.transform = "translateX(-100%)";
    }
    
})
