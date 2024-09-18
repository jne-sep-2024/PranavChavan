    
Empolye_Details={
    id:null,
    name:null,
    Address:null,
    Email:null,
    Password:null
}

    


function submit_Data(){
    console.log("Enter")
        let User_id=document.getElementById("USER_ID").value
        console.log(User_id);
        let User_name=document.getElementById("USER_NAME").value
        console.log(User_name);
        let User_email=document.getElementById("USER_EMAIL").value
        console.log(User_email);
        let User_addrs=document.getElementById("USER_ADDRS").value
        console.log(User_addrs);
        let User_pwd=document.getElementById("USER_PWD").value
        console.log(User_pwd)        
               
        Empolye_Details.id=User_id;
        Empolye_Details.name=User_name;
        Empolye_Details.Address=User_addrs;
        Empolye_Details.Email=User_email;
        Empolye_Details.Password=User_pwd;
        

       
       
       
       
       let count=0;

        let table_row=document.getElementById("Table1");
        let row=`<tr id="count">`
         count++;
        for(let i in Empolye_Details)
        {
            row+=`<td>${Empolye_Details[i]}</td>` 
        }

         row+=`<tr>`;
        table_row.innerHTML+=row;

        document.getElementById("Delete_Data").addEventListener("click",Delete_Row)
        function Delete_Row(){
         document.getElementById("count").remove();
        }

        document.getElementById("Update_data").addEventListener("click",()=>{
           let val= document.getElementById("count");
           
        })
      


}
document.getElementById("Submit_Data").addEventListener("click",submit_Data)
