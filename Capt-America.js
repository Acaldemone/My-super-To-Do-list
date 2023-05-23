//Create functions for the different requirements
    //Users should be able to view all of the to-do tasks DONE
    //Users should be able to add a to-do to the list of to-do tasks DONE
    //Users should be able to remove to-do's, this could be either deletion or crossing out DONE
    //The page should be aesthetically pleasing (aka be styled)

    //STRETCH Goals
    //Add some instructions to your README.md file around what your application is, how to run it, and how to use it.
    //Make the list persist through a refresh of the page by using local storage to store to-do's
    //Archive completed tasks in a viewable location on screen
//////////////////////////////////////////////////////////////////////////////////////////////////

//create a function that will allow users to cross-out/delete list items
let mySuperList = document.querySelectorAll('li');

for (i = 0;i < mySuperList.length; i++) {
    let elem = document.createElement('span');
    var txt = document.createTextNode("\u00D7")
    elem.className = 'del';
    elem.appendChild(txt);
    mySuperList[i].appendChild(elem);

}

var dele = document.getElementsByClassName("del");
for (var i = 0; i < dele.length; i++) {
  dele[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////

//create a function that will add user inputs to a to do list
function addListItem() {
    //create an element
    let addLi = document.createElement('li');
    //create a way to access the "create your own super to do list" user input
    let userInput = document.getElementById('userInput').value
    console.log(userInput)
    //create a text node to append the userinput/text too
    let userText = document.createTextNode(userInput);
    addLi.appendChild(userText);
    let userList = document.querySelector('#userOL');
    //identify an edge case of nothing being sumbitted in the input.
    if(userInput === '') {
        alert('Create your super list')
    } else {
        userList.appendChild(addLi);
    }
    //apply a similiar close function as used earlier
    let elem = document.createElement('span');
    var txt = document.createTextNode("\u00D7")
    elem.className = 'del';
    elem.appendChild(txt);
    addLi.appendChild(elem);
    
   //give the close function the actual close functionallity
    for (var i = 0; i < dele.length; i++) {
      dele[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
   
    return userList
}
/////////////////////////////////////////////////////////////////////////////////////////////////