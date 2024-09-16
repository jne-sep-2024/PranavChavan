function Login_User(){
  const form=document.getElementById("Myform");
  let Login_data=form.querySelectorAll("input,select,textarea");
  Login_data.forEach(i=>{
    console.log(`${i.name}: ${i.value}`)
  })

   
   let User_Name =document.getElementById("USER_EMAIL").value;
   let User_Pwd =document.getElementById("USER_PASSWORD").value;
  if(User_Name=="pranav" && User_Pwd=="12345")
  {
    alert("Login Succsesfull")
  }
  else{
    alert("Invalid input");
  }
  
  console.log(Login_data)

}
document.getElementById("LoginSubmit").addEventListener("click",Login_User)