
/*let userNameInput=document.querySelector('.username')
let passWordInput=document.querySelector('.password')
let modal=document.querySelector('.modal')


function dataValidation(){
    
    let userNameValue=userNameInput.value
    let passWordvalue=passWordInput.value

    if(userNameValue.length<10 || passWordvalue.length<8){
        
        modal.style.background='red'
        modal.innerHTML='pleas enter corect'
        modal.style.display='inline'
    }else{modal.style.background='green'
        modal.innerHTML='succes'
        modal.style.display='block'
    }
}*/


//login form2
let usernameMasseg=document.querySelector('.username-dataValidation')
let passwordMasseg=document.querySelector('.password-dataValidation')
let userNameInput=document.querySelector('.username')
let passWordInput=document.querySelector('.password')
function Usernamevalidation(){
    if(userNameInput.value.length<12){
    usernameMasseg.style.color='red'
    usernameMasseg.innerHTML='must contain 12 '
    usernameMasseg.style.display='block'
}else{
    usernameMasseg.style.color='green'
    usernameMasseg.innerHTML='succes'
}
}