//Create functions for the different requirements
    //Users should be able to view all of the to-do tasks
    //Users should be able to add a to-do to the list of to-do tasks 
    //Users should be able to remove to-do's, this could be either deletion or crossing out
    //The page should be aesthetically pleasing (aka be styled)

    //STRETCH Goals
    //Add some instructions to your README.md file around what your application is, how to run it, and how to use it.
    //Make the list persist through a refresh of the page by using local storage to store to-do's
    //Archive completed tasks in a viewable location on screen
//////////////////////////////////////////////////////////////////////////////////////////////////
//let mySuperList = document.querySelectorAll('li');
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
    userList.appendChild(addLi);
    if(userInput === '') {
        alert('Create your super list')
    } 
    
    //else; {
       // document.getElementById("#userOL").appendChild(addLi)
    //}
    //document.getElementById(userList).value = "";

    //let btn = document.querySelector('#addbtn');
    //btn.addEventListener("click", () => alert('addbtn was clicked'))
    //console.log(btn)
    return userList
}





/////////////////////////////////////////////////////////////////////////////////////////////////
//create a function that will allow users to cross-out/delete list items





    

//document.querySelector("input").id