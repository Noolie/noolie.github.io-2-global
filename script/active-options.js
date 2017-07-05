var _ = function(x){
    return document.querySelector(x);
}

var makeActive = function(event){
    var target = event.target;
    if(target.tagName == 'SPAN') target.parentElement.classList.toggle('is-active-option');
    if(target.tagName != 'LABEL') return;
    target.classList.toggle('is-active-option');
}

_('#to-do-options').addEventListener('click', makeActive);