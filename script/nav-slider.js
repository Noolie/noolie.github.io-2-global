var currentSlide = 0;
var sectionList = document.querySelectorAll('.section');

var _ = function(x){
    return document.querySelector(x);
}

var blockSlider = function(event){
    
    if(_('.container').classList.contains('transform-block')) return;
    
    if(event.deltaY !== undefined){
        
        if(event.deltaY > 0){
            currentSlide += 1;
        } else {
            currentSlide -= 1;
        }
        if(currentSlide < 0){
            currentSlide = sectionList.length - 1;
        }
        if(currentSlide > sectionList.length - 1){
            currentSlide = 0;
        }
        for(var i = 0; i < sectionList.length; i++){
            sectionList[i].classList.remove('is-active-section');
        }
        sectionList[currentSlide].classList.add('is-active-section');
        
        for(var li = 0; li < _('.nav-buttons-list').children.length; li++){
            _('.nav-buttons-list').children[li].classList.remove('is-active-nav');
        }
        _('.nav-buttons-list').children[+currentSlide].classList.add('is-active-nav');
        if(currentSlide != 0 && currentSlide != sectionList.length - 1){
            _('.hire-button-2').classList.add('hire-us-opac');
        } else {
            _('.hire-button-2').classList.remove('hire-us-opac');
        }
    } else {
        if(_('.container').classList.contains('transform-block')) return;
        
        if(event.wheelDelta < 0){
            currentSlide += 1;
        } else {
            currentSlide -= 1;
        }
        if(currentSlide < 0){
            currentSlide = sectionList.length - 1;
        }
        if(currentSlide > sectionList.length - 1){
            currentSlide = 0;
        }
        for(var i = 0; i < sectionList.length; i++){
            sectionList[i].classList.remove('is-active-section');
        }
        sectionList[currentSlide].classList.add('is-active-section');
        
        if(currentSlide != 0 && currentSlide != sectionList.length - 1){
            _('.hire-button-2').classList.add('hire-us-opac');
        } else {
            _('.hire-button-2').classList.remove('hire-us-opac');
        }
    }
}

var navChange = function(event){
    
    if(_('.container').classList.contains('transform-block')) return;
    
    var target = event.target;
    if(target.tagName != 'SPAN' && target.tagName != 'LI') return;
    if(target.hasAttribute('data-number')){
        currentSlide = Number(target.getAttribute('data-number'));
        for(var j = 0; j < sectionList.length; j++){
            sectionList[j].classList.remove('is-active-section');
        }
    }
    sectionList[currentSlide].classList.add('is-active-section');
    for(var li = 0; li < _('.nav-buttons-list').children.length; li++){
        _('.nav-buttons-list').children[li].classList.remove('is-active-nav');
    }
    
    if(target.tagName == 'SPAN') target.parentElement.classList.add('is-active-nav');
    if(target.tagName == 'LI') target.classList.add('is-active-nav');
    
    if(currentSlide != 0 && currentSlide != sectionList.length - 1){
        _('.hire-button-2').classList.add('hire-us-opac');
    } else {
        _('.hire-button-2').classList.remove('hire-us-opac');
    }
}

var moveToHire = function(){
    
    if(_('.container').classList.contains('transform-block')) return;
    
    currentSlide = sectionList.length - 1;
    for(var i = 0; i < sectionList.length; i++){
        sectionList[i].classList.remove('is-active-section');
    }
    sectionList[currentSlide].classList.add('is-active-section');
    for(var li = 0; li < _('.nav-buttons-list').children.length; li++){
        _('.nav-buttons-list').children[li].classList.remove('is-active-nav');
    }
    _('.nav-buttons-list').children[currentSlide].classList.add('is-active-nav');
    _('.hire-button-2').classList.remove('hire-us-opac');
}

_('.hire-button-1').addEventListener('click', moveToHire);
_('.hire-button-2').addEventListener('click', moveToHire);
_('.nav-buttons-list').addEventListener('click', navChange);
document.addEventListener('wheel', blockSlider);