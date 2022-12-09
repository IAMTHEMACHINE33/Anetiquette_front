let theEnd = 0,
testbar = document.getElementById('testbar');

window.addEventListener('scroll',function(){
    var scrollTop = window.pageXOffset || document.
    documentElement.scrollTop;
    if(scrollTop > theEnd){
        testbar.style.top = '-70px';
    }
    else{
        testbar.style.top = '0';
    }
        theEnd = scrollTop;
})