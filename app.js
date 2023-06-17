let dateOfBirth=document.querySelector("#dob");
let luckyNumber=document.querySelector("#lucky-number");
const checkBtn=document.querySelector("#check");
let outputMsg=document.querySelector("#output");

// luckyNumber=null;

checkBtn.addEventListener("click",function(){
    // console.log(dateOfBirth.value,luckyNumber.value);

        validateDate(dateOfBirth);
    
})

function validateDate(dateOfBirth){
    
    dateOfBirth= dateOfBirth.value.replaceAll("-","");
    // console.log(dateOfBirth);
    sum(dateOfBirth);
}

function sum(dateOfBirth){
    let sum=0;

    for(i=0;i<dateOfBirth.length;i++){
        sum+=Number(dateOfBirth.charAt(i));
    }
    // console.log(sum);
    isBirthdayLucky(sum,luckyNumber);
}

function isBirthdayLucky(sum,luckyNumber){

    if(sum&&luckyNumber){
        compareData(sum,luckyNumber);
    }else{
        alert("Please enter date of birth and lucky number");
    }

    
}

function compareData(sum,luckyNumber){
    outputMsg.style.visibility ="inherit";

    if(sum%luckyNumber.value==0){
        outputMsg.innerText="BINGO! Your Birthday is Lucky!🚀🥳";
    }else{
        outputMsg.innerText="Your birthday is not so lucky!😒";
    }
}