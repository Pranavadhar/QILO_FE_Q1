function deleteElement(button) {
    const li = button.parentNode;
    li.parentNode.removeChild(li);
}

function addElement() {
    const input = document.getElementById('newElementText');
    const text = input.value.trim();
    if (text === "") return;

    const ul = document.getElementById('elementList');
    const li = document.createElement('li');
    li.innerHTML = `${text} <button class="delete-btn" onclick="deleteElement(this)">Delete</button>`;
    ul.appendChild(li);

    input.value = "";
}
