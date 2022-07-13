let employee=document.getElementById('employeeId');
let firstname=document.getElementById('firstname');
let lastname=document.getElementById('lastname');
let  skills=document.getElementById('skills');
let  Location=document.getElementById('Location');

let isEmployeeIdValid=false;
// let isSkillsvalid=false;




handleFirstName=()=>{
console.log("vhgh")
let employeIdError=document.getElementById('employeIdError');
if(employee.value==""){
employee.style.border="2px solid red";
employeIdError.innerHTML="Employee is required";
isEmployeeIdValid=false;
}
else if(employee.value.length>10){
employee.style.border="2px solid red";
employeIdError.innerHTML="Employee Id should be greter than 10";
isEmployeeIdValid=false;
}
else{
    isEmployeeIdValid=true;
    employee.style.border="1px solid black";
    employeIdError.innerHTML="";
}
    // }
// }

// handleAge=()=>{
//     let ageError=document.getElementById('ageError');
//     if(age.checkValidity()){
//         isAgeValid=true;
//         ageError.innerHTML="";
//         age.style.border="1px solid black";

//     }else{
//         ageError.innerHTML=age.validationMessage;
//         age.style.border="2px solid red";
//         isAgeValid=false;
//     }

}
handlesubmit=()=>{
    handleFirstName();   
     console.log(employee,firstname,lastname,skills,);
    //  console.log(employee.value,firstname.value,lastname.value);
     console.log('mareeswaran');
     event.preventDefault();
     if(isEmployeeIdValid){
         alert('submit successfully')
        console.log(window.location)
        // localStorage.setItem( 'sumbit'  ,'sucessfully completed');
        // localStorage.setItem('employeeID', employee.value);
        // window.location.href="./SubmitForm/SubmitForm.html";
        document.write("<h1>sucessfuly completed</h1>")

     }
     else{
        alert(' submit failed');
    }
    var profileImage;
    handleclick=(event)=>{
    var reader = new FileReader();
    reader.onload = function (e) {
        profileImage=e.target.result
    }
    reader.readAsDataURL(event.target.files[0]);
}
}
  