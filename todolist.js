let arr = [];
function add(){
    let list_element = document.querySelector("#textbox").value;
    if (list_element == ""){
    }
    else{
        arr.push(list_element);
        display();
        document.querySelector("#textbox").value = "";
        document.querySelector(".content").style.fontSize = "1.3rem";

    }
    
}
let i;
function display(){
    let list_content = "";

    for (i = 0;i<arr.length;i++){
        let activity = `<p class = "para"> <button onclick = "checkbox('${i}')" id = "checkbox"></button> <span class = "span">${arr[i]}</span> <button onclick = "remove('${i}')" id = "cross"><svg xmlns="http://www.w3.org/2000/svg" height="14" width="10.5" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#090085" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></button></p>`

        list_content = list_content+activity;



    }
    document.querySelector(".content").innerHTML = list_content;
    
    
}
function refresh(){
    arr = [];
    display();
}
function checkbox(i){
    let paragraphs = document.querySelector(".content").querySelectorAll("p");
    
    if (i >= 0 && i <= paragraphs.length) {
        paragraphs[i].style.textDecoration = 'line-through';
    }
}
function remove(i){
    arr.splice(i,1);
    display();
}
// document.querySelector('.content').addEventListener('click', function(checkbox) {
//     if (checkbox.target.tagName === 'INPUT' && checkbox.target.type === 'checkbox') {
//         let listItem = checkbox.target.parentElement.querySelector('p');
//         listItem.style.textDecoration = checkbox.target.checked ? 'line-through' : 'none';
//         checkbox.target.style.backgroundColor = checkbox.target.checked ? 'green' : ''; // Change checkbox button color
//     }
// });
