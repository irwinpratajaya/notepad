function newElement (){
  var li = document.createElement('li');
  var inputValue = document.getElementById('addText').value;
  var textInput = document.createTextNode(inputValue);
  li.appendChild(textInput);
  
  if(inputValue === '') {
    alert('What do you want to do?')
  } else {
    document.getElementById('UL').appendChild(li)
  }
  
  var span = document.createElement('Span');
  var text = document.createTextNode('X');
  span.className = 'close';
  span.appendChild(text);
  li.appendChild(span);
  
  for(var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var hide = this.parentElement;
      hide.style.display = 'none';
    }
  }
}

// Close Button
var textList = document.getElementsByTagName('li');
for (var i = 0; i < textList.length; i++) {
  var span = document.createElement('Span');
  var text = document.createTextNode('X');
  span.className = 'close';
  span.appendChild(text);
  textList[i].appendChild(span);
}

// Close to Hide Items
var close = document.getElementsByClassName('close');
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var hide = this.parentElement;
    hide.style.display = 'none';
  }
}