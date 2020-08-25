let id = 1;
const array = ['color-blue', 'color-yellow', 'color-green', 'color-red', 'color-lite-green', 'color-night-sky'];

function createTask() {
    const div = document.createElement('div');
    //class list item
    let color;
    if(!document.querySelector('input.color:checked')) color = array[Math.floor(Math.random() * array.length)];
    else color = document.querySelector('input.color:checked').className.split(" ")[1];
    div.id = id;
    div.classList.add("container", color)

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = id;
    checkbox.className = "check";

    const label = document.createElement("label");
    label.innerText = document.getElementById('input').value;
    label.className = "text";

    div.appendChild(checkbox);
    div.appendChild(label);

    document.getElementById('list').appendChild(div);
    id++;
    if(document.querySelector('input.color:checked')) document.querySelector('input.color:checked').checked = false;
}
function completed(){}