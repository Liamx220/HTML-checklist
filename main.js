function create_checklist(){
    var node = document.createElement("LI");
    var check = document.createElement("INPUT");
    var text = document.createElement("INPUT");
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", "myCheck");
    node.appendChild(check);
    node.appendChild(text);
    document.getElementById("myList").appendChild(node, text);
   
    
}
function Remove_all(){
    document.getElementById("myList").innerHTML = "";
}
function checked() {
    var checkBox = document.getElementById("myCheck");
    //var text = document.getElementById("text");
    if (checkBox.checked == true){
        checkBox.parentNode.removeChild(checkBox);
    } else {
       text.style.display = "none";
    }
  }