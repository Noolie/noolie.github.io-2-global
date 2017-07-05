
var _ = function(x){
    return document.querySelector(x);
}

_('#mail').onfocus = function(){
    this.parentElement.children[1].classList.add('decrease-text');
}
_('#mail').onblur = function(){
    if(!this.value) this.parentElement.children[1].classList.remove('decrease-text');
}
_('#name').onfocus = function(){
    this.parentElement.children[1].classList.add('decrease-text');
}
_('#name').onblur = function(){
    if(!this.value) this.parentElement.children[1].classList.remove('decrease-text');
}