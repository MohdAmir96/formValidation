 function isValidate(){
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let Batch = document.getElementById("Batch").value;
    let module = document.getElementById("module").value;
    let invalidCheck = document.getElementById("invalidCheck").checked;

    if(firstName == '' || firstName.length < 3){
        document.getElementById("firstNameInvalid").style.display = "block"
        document.getElementById("firstNameValid").style.display = "none"
    }
    else{
        document.getElementById("firstNameValid").style.display = "block";
        document.getElementById("firstNameInvalid").style.display = "none";
    }
    if(lastName == '' || lastName.length < 3){
        document.getElementById("lastNameInvalid").style.display = "block"
        document.getElementById("lastNameValid").style.display = "none"
    }
    else{
        document.getElementById("lastNameValid").style.display = "block";
        document.getElementById("lastNameInvalid").style.display = "none";
    }
    if(email == '' || !email.includes('@') || !email.includes('.') ||email.startsWith('@') || email.indexOf("@")> email.indexOf(".") || email.indexOf(".") > (email.length-3)){
        document.getElementById("emailInvalid").style.display = "block"
        document.getElementById("emailValid").style.display = "none"
    }
    else{
        document.getElementById("emailValid").style.display = "block";
        document.getElementById("emailInvalid").style.display = "none";
    }
    if(phone  == ''|| phone.length != 10 || Number(phone[0]) <6 || isNaN(phone)  ){
        document.getElementById("phoneInvalid").style.display = "block"
        document.getElementById("phoneValid").style.display = "none"
    }
    else{
        document.getElementById("phoneValid").style.display = "block";
        document.getElementById("phoneInvalid").style.display = "none";
    }
    if(Batch == ''){
        document.getElementById("BatchInvalid").style.display = "block"
        document.getElementById("BatchValid").style.display = "none"

    }
    else{
        document.getElementById("BatchValid").style.display = "block";
        document.getElementById("BatchInvalid").style.display = "none";
    }
    if(module  == '' ){
        document.getElementById("moduleInvalid").style.display = "block"
        document.getElementById("moduleValid").style.display = "none"
    }
    else{
        document.getElementById("moduleValid").style.display = "block";
        document.getElementById("moduleInvalid").style.display = "none";
    }
    if(  invalidCheck ==false  ){
        key=0;
        document.getElementById("tncCondition").style.display = "block";
    }
    else{
        document.getElementById("tncCondition").style.display = "none";
    }
    

    if( !(firstName == '' || firstName.length < 3
       || lastName == '' || lastName.length < 3
       || email == '' || !email.includes('@') || !email.includes('.') ||email.startsWith('@') || email.indexOf("@")> email.indexOf(".") || email.indexOf(".") > (email.length-3)
       || phone  == ''|| phone.length != 10 || Number(phone[0]) <6 || isNaN(phone) 
       || Batch == ''
       || module  == ''
       || invalidCheck ==false)
    ){
        alert("Your details have been saved successfully!");
        resetform();
    }
    
}
function isValidFirstName(){
    let firstName = document.getElementById("firstname").value;
    if(firstName == '' || firstName.includes(" ") || firstName.length < 3){
        document.getElementById("firstNameInvalid").style.display = "block";
    }
    else{
        document.getElementById("firstNameInvalid").style.display = "none";
    }
}
function isValidLastName(){
    let lastName = document.getElementById("lastname").value;
    if(lastName == '' || lastName.includes(" ") || lastName.length < 3){
        document.getElementById("lastNameInvalid").style.display = "block";
    }
    else{
        document.getElementById("lastNameInvalid").style.display = "none";
    }
}
function isValidMail(){
    let email = document.getElementById("email").value;
    if(email == '' || !email.includes('@') || !email.includes('.') ||email.startsWith('@') || email.indexOf("@")> email.indexOf(".")  || email.indexOf(".") > (email.length-3)){
        document.getElementById("emailInvalid").style.display = "block";
    }
    else{
        document.getElementById("emailInvalid").style.display = "none";
    }
}
function isValidPhone(){
    let phone = document.getElementById("phone").value;
    if(phone  == ''|| phone.length != 10 || Number(phone[0]) <6 || isNaN(phone)){
        document.getElementById("phoneInvalid").style.display = "block";
    }
    else{
        document.getElementById("phoneInvalid").style.display = "none";
    }
}
function isSelected1(){
    let val = document.getElementById("Batch");
    let Batch = val.options[select.selectedIndex].value
    if(Batch== ""){
        document.getElementById("BatchInvalid").style.display = "block";
    }else{
        document.getElementById("BatchInvalid").style.display = "none";
    }
}
function isSelected2(){
    let val = document.getElementById("module");
    let module = val.options[select.selectedIndex].value
    if(module== ""){
        document.getElementById("moduleInvalid").style.display = "block";
    }
    else{
        document.getElementById("moduleInvalid").style.display = "none";
    }
}
function resetform() {
    document.getElementById("myForm").reset();
}
