// slide script 
flag = 0;
function slideShow(){
    arr = document.getElementsByClassName('slide');
    for(let i = 0; i < arr.length; i++){
        arr[i].style.display = "none";
    }
    flag++
    if(flag > arr.length){
        flag = 1;
    }
    arr[flag - 1].style.display = "block";
    setTimeout(slideShow, 3000)
}
slideShow();