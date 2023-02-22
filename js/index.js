function changeNavBackground() {
    let navBar = document.getElementById('navcontainer');

    let scrollColor = window.scrollY;
    console.log(scrollColor);
    console.log(navBar);
    if (scrollColor < 100) {
        navBar.style.backgroundColor = 'transparent';
    } else if (scrollColor >= 100) {
        navBar.style.backgroundColor = 'white';

    }

}

let img = document.getElementById('img');

let slides=['nature_scene_2.jpg','nature_scene_3.jpg', 'nature_scene_4.jpg','nature_scene_5.jpg', 'nature_scene_6.jpg', 'nature_scene_7.jpg', 'nature_scene_8.jpg','nature_scene_1.jpg'];

let Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}
setInterval(slider,2000);


window.addEventListener('scroll', changeNavBackground);
