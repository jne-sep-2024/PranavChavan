async function GetUserData() {

      const data = await fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json());
      
      
     
      
      
     
          
      
      console.log(data);
      
      
      let tableHtml =document.getElementById("table"); 
      
      let row=[]
      for (let user in data) {
        row += `
          <tr>
            <td>${data[user].id}</td>
            <td>${data[user].name}</td>
            <td>${data[user].email}</td>
          </tr>
      
          `;
          document.getElementById('table').innerHTML += row;
      }
      
      //tableHtml += '</table>';
      
  
      
  
    
  
  
}
  