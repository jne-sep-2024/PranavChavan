


document.getElementById("fetchusers").addEventListener("click",()=>{

  fetchusers().then((users)=>{
      displayusers(users);
  })

})
async function fetchusers(){
      const users= await fetch('https://jsonplaceholder.typicode.com/users').then((Response)=>
        Response.json()
       
    )
    return users;
      }

function displayusers(users){
    let table_html=document.getElementById("table-container")
     let row=`           <table id="table" class="table table-secondary">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>`;
        users.forEach(i => {
          row+=`<tr class="table-secondary">
                    <td>${i.id}</td>
                    <td>${i.name}</td>
                    <td>${i.email}</td>
                    <td>${i.address.street}</td>
                    <td><button class="delete_row" data-id="${i.id}">Delete</td>
                </tr>`;
        });
        row+=` </tbody>
        </table>`;
    table_html.innerHTML+=row;


    const delete_button=document.querySelectorAll(".delete_row")

   delete_button.forEach(btn=>{
    btn.addEventListener("click",(event)=>{
        const id=event.target.getAttribute("data-id");
        console.log(id);
        delete_row(id);
    })
    
    function delete_row(id) {
        const table = document.getElementById("table");
        const rows = table.querySelectorAll("tr");
        console.log(rows)
        for (let i = 0; i < rows.length; i++) {
          const row = rows[i];
          console.log(row)
          const deleteButton = row.querySelector(".delete_row");
          console.log(deleteButton)
          if (deleteButton) {
            const rowId = deleteButton.getAttribute("data-id");
      
            if (rowId === id) {
              row.remove();
              break; 
            }
          }
        }
      }
   })
}    



    