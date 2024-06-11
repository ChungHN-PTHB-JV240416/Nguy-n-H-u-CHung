
let users= JSON.parse(localStorage.getItem("users")) || [];
function nameList() {  
    let employeeCode = document.getElementById("ma").value;
    let employeeName = document.getElementById("ten").value;
    let email = document.getElementById ("gmail").value;
        let newUser={
            id:employeeCode,
            Name:employeeName,
            Email:email,
        }
        users.push(newUser);
        localStorage.setItem("user", JSON.stringify(users));
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
                        <td>${users[i].Name}</td>
                        <td>${users[i].Email}</td>
                        <td>
                            <button class="edit" onclick="editUser(${i})">Edit</button>
                            <button class="delete" onclick="deleteUser(${i})">Delete</button>
                        </td>
                    </tr>
       `
        
    };
   document.getElementById("tbody").innerHTML=text;
}
function editUser(index) {
    let user = users[index];
    document.getElementById("userIndex").value = index;
    document.getElementById("ma").value = user.id;
    document.getElementById("ten").value = user.Name;
    document.getElementById("gmail").value = user.Email;
}

function deleteUser(index) {
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    render();
}

render();

