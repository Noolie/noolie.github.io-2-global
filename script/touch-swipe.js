var _ = function(x){
    return document.querySelector(x);
}

var initialPoint;
var finalPoint;

var _ = function(x){
    return document.querySelector(x);
}

document.addEventListener('touchstart', function(event) {
    initialPoint=event.changedTouches[0];
    }, false);

document.addEventListener('touchend', function(event) {
    finalPoint = event.changedTouches[0];
    var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    if (xAbs > 20 || yAbs > 20) {
    if (xAbs > yAbs) {
        if (finalPoint.pageX < initialPoint.pageX){
            reduceWindow();
        }else{
            returnFullsize();
        }
    }
    else {
        if (finalPoint.pageY < initialPoint.pageY){
            if(_('.container').classList.contains('transform-block')) return;
            currentSlide += 1;
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
        }else{
            if(_('.container').classList.contains('transform-block')) return;
            currentSlide -= 1;
            if(currentSlide < 0){
                currentSlide = sectionList.length - 1;
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
            }
        }
    }
}, false);