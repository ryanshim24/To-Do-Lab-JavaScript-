var form = document.getElementById("toDo");
var list = document.getElementById("doList");

form.addEventListener("submit", function (event) { // When I hit the submit button this is what I want my fucntion to do.
    event.preventDefault();

    var title = this.title.value; //Grabs the text of my input puts in var title.

    var li = document.createElement("li"); //Creating an element tag of li
    li.setAttribute("id", "myItem"); // Giving it a id
    var text = document.createTextNode(title);//Making the value of my title into a text Node
    li.appendChild(text);//putting that into my li element
    list.appendChild(li);//putting that li element into my Ul function

    var done = document.createElement("BUTTON"); //Creaing my first button DONE
    done.setAttribute("id", "crossOut");
    var t = document.createTextNode("DONE");//Making the text of my button "DONE"
    done.appendChild(t);//Putting it in there
    // setting the done event lister
    done.addEventListener("click", setDoneEL);
    li.appendChild(done); //Making this a  child of the varialbe li.

    var del = document.createElement("BUTTON");
    del.setAttribute("id", "remove");
    var w = document.createTextNode("DELETE");
    del.appendChild(w);
    // setting the delete event lister
    del.addEventListener("click", setDeleteEL);

    li.appendChild(del);//Making this a child of the variable li

    this.title.value = "";
});

function setDeleteEL() {
  console.log("deleting!");
  var node = this.parentNode; // Grabs the parent Node.
  node.remove();//Makes it go awa
}

function setDoneEL () {
  this.removeEventListener("click", setDoneEL); //When I come back I want to remove the previous event listener
  var node = this.parentNode; //Grabing the parent node of this button which is li
  node.classList.add("cross");// adding the cross lass to this node
  this.innerText = "UNDO"; // Changing button name to UNDO
  this.addEventListener("click", undo); // I'm now going to the next funcion undo by clicking the button again.
}

function undo() {
  this.removeEventListener("click", undo);
  var node = this.parentNode;
  node.classList.remove("cross");
  this.innerText = "DONE";
  this.addEventListener("click", setDoneEL);
} 
