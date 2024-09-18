async function show_user_data() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);

        let table = document.getElementById("get_table");
        let rows = '';

        for (const user of data) { 
            rows += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.address.street},
                     ${user.address.city}</td>
                </tr>
            `;
        }

        table.innerHTML = rows;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

document.getElementById("show_user_data").addEventListener("click", show_user_data);
