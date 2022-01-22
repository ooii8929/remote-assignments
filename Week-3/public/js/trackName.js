function loadName() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        
    }
    xhr.open('GET','trackName?name=' + document.getElementById('userInputName').value);
    xhr.send();
}