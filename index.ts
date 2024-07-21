#! /usr/bin/env node
import inquirer from "inquirer"

const randomNumber : number =Math.floor (10000 + Math.random() * 90000)

console.log(randomNumber);
let myBalance = 0
let answer  = await inquirer.prompt(

[
    {
        name : "students",
        type : "input",
        message :"Enter student name",
        validate :function(value){
            if(value.trim() !== ""){
                return true;
                return "please enter a non-empty value"
            }
        }
    },
    {
        name :"courses",
        type :"list",
        message : "Select the course to enrolled",
        choices :["MS Office","typescript","Javascript","HTML","Python"]
                           
    }
]

);
const tuitionFee:{[key : string] : number} ={
    "MS Office":2000,
    "HTML": 2500,
    "Javascript" : 5000,
    "Typescript" : 6000,
    "Python"   :  10000,
};
console.log(`\nTuition Fees: ${tuitionFee[answer.courses]}/-\n`);
console.log(`Balance : ${myBalance}\n`);

let paymentType = await inquirer.prompt([
    {
        name :"payment",
        type : "list",
        message :"Select payment method",
        choices :[ "Bank Transfer","Easypaisa", "jazzcash"]
    },
    {
        name: "amount",
        input :"input",
        message:"Transfer money",
        validate :function(value){
            if(value.trim() !== ""){
                return true;

            } 
            return "please return a non-empty value";
        }
    }
])
console.log(`\nYou select payment method ${paymentType.payment}\n`);
                         
const tuitionFees =tuitionFee[answer.courses]
const paymentAmount = parseFloat(paymentType.amount)
if (tuitionFees === paymentAmount){
    console.log(`Congratulations! You have successfully enrolled in ${answer.courses}.\n`);

    let ans =await inquirer.prompt([
        {
            name :"select",
            type : "list",
            message :"What what you like to do next?",
            choices :["View Status","Exit" ]
        }
    ])
    if(ans.select === "View Status"){
        console.log("\n*******Status********\n");
        console.log(`Student ID :${randomNumber}`);
        console.log(`course: ${answer.courses}`);
        console.log(`Tuition fees paid: ${paymentAmount}`);              
        console.log(`Balanse :${myBalance += paymentAmount}`);
        
        
        
    }else{
        console.log("\n Exiting Student Management System\n");
        
    }
}else{
    console.log("invalid amount due to course\n");
    
}





    
        

   


    

    



    



              

    
                     

    
    


