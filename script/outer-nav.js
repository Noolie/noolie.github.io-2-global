var _ = function(x){
    return document.querySelector(x);
}

var reduceWindow = function(){
    _('.mirror').classList.add('is-active-mirror');
    _('.container').classList.add('transform-block');
    _('.outer-navigation').classList.add('is-active-outer-nav');
    for(var li = 0; li < _('.out-nav-list').children.length; li++){
        _('.out-nav-list').children[li].classList.remove('is-active-outer-li')
    }
    _('.out-nav-list').children[currentSlide].classList.add('is-active-outer-li');
    
}

var outerNavClick = function(event){
    var target = event.target;
    _('.mirror').classList.remove('is-active-mirror');
    if(target.tagName != 'LI') return;
    currentSlide = Number(target.getAttribute('data-li-number'));
    _('.container').classList.remove('transform-block');
    _('.outer-navigation').classList.remove('is-active-outer-nav');
    for(var li = 0; li < _('.out-nav-list').children.length; li++){
        _('.out-nav-list').children[li].classList.remove('is-active-outer-li')
    }
    target.classList.add('is-active-outer-li');
    for(var section = 0; section < sectionList.length; section++){
        sectionList[section].classList.remove('is-active-section')
    }
    sectionList[currentSlide].classList.add('is-active-section');
    for(var mainNavLi = 0; mainNavLi < _('.nav-buttons-list').children.length; mainNavLi++){
        _('.nav-buttons-list').children[mainNavLi].classList.remove('is-active-nav')
    }
    _('.nav-buttons-list').children[currentSlide].classList.add('is-active-nav');
    if(currentSlide != 0 && currentSlide != sectionList.length - 1){
        _('.hire-button-2').classList.add('hire-us-opac')
    } else {
        _('.hire-button-2').classList.remove('hire-us-opac')
    }
}

var returnFullsize = function(){
    _('.outer-navigation').classList.remove('is-active-outer-nav');
    _('.container').classList.remove('transform-block');
    _('.mirror').classList.remove('is-active-mirror');
}

_('.mirror').addEventListener('click', returnFullsize);
_('.out-nav-list').addEventListener('click', outerNavClick);
_('.sub-nav-button').addEventListener('click', reduceWindow);