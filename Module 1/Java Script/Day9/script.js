let arr=[];

arr= JSON.parse(localStorage.getItem('myData')) ;

document.getElementById('saveButton').addEventListener('click', () => {
    const dataInput = document.getElementById('dataInput').value;
    if (dataInput) {
        arr.push(dataInput);
        localStorage.setItem('myData', JSON.stringify(arr));
        document.getElementById('dataInput').value = '';
        alert('Data saved!');
    } else {
        alert('Please enter some data!');
    }
});

document.getElementById('loadButton').addEventListener('click', () => {
    const storedData = JSON.parse(localStorage.getItem('myData')) || [];
    document.getElementById('output').textContent = storedData.length ? storedData.join(', ') : 'No data found.';
    
    let table = document.getElementById("Table");
    table.innerHTML = ''; 

    for (let i = 0; i < storedData.length; i++) {
        const element = storedData[i];
        const r = `<tr>
            <td>${element}</td>
            <td><button class="deleteButton" data-index="${i}">Delete</button></td>
        </tr>`;
        table.innerHTML += r;
    }

   
    document.querySelectorAll('.deleteButton').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.dataset.index;
            arr.splice(index, 1);
            localStorage.setItem('myData', JSON.stringify(arr));
            loadStoredData(); 
        });
    });
});

document.getElementById('clearButton').addEventListener('click', () => {
    localStorage.removeItem('myData');
    arr = []; 
    document.getElementById('output').textContent = '';
    document.getElementById('Table').innerHTML = ''; 
    alert('Data cleared!');
});


function loadStoredData() {
    const storedData = JSON.parse(localStorage.getItem('myData')) || [];
    document.getElementById('output').textContent = storedData.length ? storedData.join(', ') : 'No data found.';
    
    let table = document.getElementById("Table");
    table.innerHTML = ''; 

    for (let i = 0; i < storedData.length; i++) {
        const element = storedData[i];
        const r = `<tr>
            <td>${element}</td>
            <td><button class="deleteButton" data-index="${i}">Delete</button></td>
        </tr>`;
        table.innerHTML += r;
    }

   
    document.querySelectorAll('.deleteButton').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.dataset.index;
            arr.splice(index, 1);
            localStorage.setItem('myData', JSON.stringify(arr));
            loadStoredData(); 
        });
    });
}

loadStoredData();
