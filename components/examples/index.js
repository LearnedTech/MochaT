const first_name = document.getElementById('name');
const last_name = document.getElementById('surnname');
const age = document.getElementById('age');
const output = document.getElementById('output');

//Event Listener
const button  = document.getElementById('btn');
button.addEventListener('click', displayData);


function displayData(){
    const displayOutput = getvalues();
    output.innerHTML = displayOutput;
}

function getvalues(){
    const username = first_name.value;
    const usersurname = last_name.value;
    const userage = age.value;

    const userInfo = `Name: ${username}, Sunrname: ${usersurname}, Age: ${userage}`;

    return userInfo; 
}