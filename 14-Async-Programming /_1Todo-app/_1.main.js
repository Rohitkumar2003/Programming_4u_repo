const taskinput = document.querySelector('#taskInput');
const addButton = document.querySelector('.addBtn');
const DUMMY_DATA_API = 'https://6944f6807dd335f4c361d697.mockapi.io/api/v1/Todo';
const todoContainer = document.querySelector('.todo-Container');

addButton.addEventListener('click', postData);

async function fethData() {
    const response = await fetch(DUMMY_DATA_API);
    const data = await response.json();

    if(data) todoContainer.innerHTML = '';

    data.forEach(obj => {
        const div = document.createElement('div');
        div.className = 'todo';
        div.innerHTML = `
            <p class="paraText">${obj.name}</p>
            <input class="editInput" placeholder="Enter Your Task..." type="text" value="${obj.name}" style="display:none;" />
            <div>
                <button class="deleteBtn">Delete</button>
                <button class="editBtn">Edit</button>
                <button class="SaveBtn" style="display:none;">Save</button>
            </div>
        `;

        const editButton = div.querySelector('.editBtn');
        const saveButton = div.querySelector('.SaveBtn');
        const deleteButton = div.querySelector('.deleteBtn');
        const paraText = div.querySelector('.paraText');
        const editInput = div.querySelector('.editInput');

        deleteButton.addEventListener('click', () => {
            deleteData(obj.id);
        });

        editButton.addEventListener('click', () => {
            editButton.style.display = 'none';   
            saveButton.style.display = 'inline';
            paraText.style.display = 'none';
            editInput.style.display = 'inline';
        });

        saveButton.addEventListener('click', async () => {
            const editValue = editInput.value;
            const response = await UpdateData(obj.id, editValue);

            if(response.status===200){  
                  fethData();
                editButton.style.display = 'inline';
                saveButton.style.display = 'none';
                paraText.style.display = 'inline';
                editInput.style.display = 'none';
            }
        });

        todoContainer.append(div);
    });
}

async function postData() {
    const value = taskinput.value;
    const objData = {
        name:value.trim()
    };

    const response = await fetch(DUMMY_DATA_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(objData),
    });

    if(response.status===201){
        fethData();
        taskinput.value = '';
    }
}

async function UpdateData(id, value) {
    const objData = {
        name:value.trim()
    };

    const response = await fetch(`${DUMMY_DATA_API}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(objData),
    });

    return response;
}

async function deleteData(id) {
    const response = await fetch(`${DUMMY_DATA_API}/${id}`, {
        method:'DELETE',
    });

    if(response.status===200) {
        fethData();
    }
}

fethData();
