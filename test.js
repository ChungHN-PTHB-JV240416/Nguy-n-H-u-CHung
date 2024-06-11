
let employeeCode = document.getElementById("EmployeeCode").value;
let employeeName = document.getElementById("EmployeeName").value;
let email = document.getElementById ("Email").value;

let users= JSON.parse(localStorage.getItem("users"))||[];
function nameList() {
       let newUser={
           id:EmployeeCode,
           name:EmployeeName,
           email:Email,
       }
       users.push(newUser);
       localStorage.setItem("user", JSON.stringify(newUser));
       // lưu lại
       // gọi hàm render
       render();
   

}
// function render
function render() {
   let text="";
   // let index =1;
   for (let i = 0; i < users.length; i++) {
      text+=
      `
                    <tr>   
                       <td>${i+1}</td>
                       <td>${users[i].id}</td>
                       <td>${users[i].name}</td>
                       <td>${users[i].email}</td>
                   </tr>
      `
       
   };
  document.getElementById("tbody").innerHTML=text;
}
render();
