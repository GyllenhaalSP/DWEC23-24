function createChild(){
    var newChild = document.createElement("p");
    var padre = document.getElementById("container");
    newChild.innerText = "Parrafo nuevo";
    padre.appendChild(newChild);
}