var _ = function(x){
    return document.querySelector(x);
}

var slides = document.querySelectorAll('.slide');
var slideArray = [];

for(var i = 0; i < slides.length; i++){
    slideArray.push(slides[i]);
}

var moveBack = function(){
    for(var i = 0; i < slideArray.length; i++){
        slideArray[i].classList.remove('is-active-slide');
    }
    
    _('.slider').insertBefore(_('.slider').children[2],_('.slider').children[0]);
    
    _('.slider').children[1].classList.add('is-active-slide');
    
}
var moveForward = function(){
    for(var i = 0; i < slideArray.length; i++){
        slideArray[i].classList.remove('is-active-slide');
    }
    
    _('.slider').appendChild(_('.slider').children[0]);
    
    _('.slider').children[1].classList.add('is-active-slide');
}

var directSlideSelection = function(event){
    var target = event.target;
    if (target.tagName != 'IMG' && target.tagName != 'H3') return;
    for(var i = 0; i < slideArray.length; i++){
        slideArray[i].classList.remove('is-active-slide');
    }
    if (target.parentElement.parentElement == _('.slider').children[0]) _('.slider').insertBefore(_('.slider').children[2],_('.slider').children[0]);
    if (target.parentElement == _('.slider').children[0]) _('.slider').insertBefore(_('.slider').children[2],_('.slider').children[0]);
    if (target.parentElement.parentElement == _('.slider').children[2]) _('.slider').appendChild(_('.slider').children[0]);
    if (target.parentElement == _('.slider').children[2]) _('.slider').appendChild(_('.slider').children[0]);
    _('.slider').children[1].classList.add('is-active-slide');
}

_('.slider').addEventListener('click', directSlideSelection)
_('.next-sl').addEventListener('click', moveForward);
_('.prev-sl').addEventListener('click', moveBack);