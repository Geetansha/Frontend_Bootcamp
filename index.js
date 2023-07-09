const submitForm=()=>{
    if(document.getElementById.value=="" ||
        document.getElementById("first-name").value=="" ||
        document.getElementById("last-name").value=="" ||
        document.getElementById("email").value=="" ||
        document.getElementById("phone").value==""  ){
        alert('Please enter all the details');
    }
    else{
        alert("Submitted Successfully Thanks!!");
    }
}

const chkIfNumeric=()=>{
    const phoneNo=document.getElementById("phone");
    let numbers = /^[0-9]+$/;
    if(phoneNo.value.match(numbers))  return true;
    
    else{
    alert('Please input numeric characters only');
    return false;
    }
}

const chkIfAllLetters=()=>{
    let letters = /^[A-Za-z]+$/;
    const name1=document.getElementById("first-name");
    const name2=document.getElementById("last-name");
    if(name1.value.match(letters) && name2.value.match(letters)) return true;
    else{
      alert("Enter correct name");
      return false;
    }
}
