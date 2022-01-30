
// 1.獲取元素 給按鈕添點選事件
/*
const el = document.getElementById("signin");
if(el){
el.addEventListener("click", function () {

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status >= 200) {
            console.log(typeof xhr.responseText);
            document.getElementById('result').innerHTML = xhr.responseText;
        }
        else {
            console.log('err');
        }
    };
    xhr.open('GET','/signIn');
    xhr.send();
})};
*/