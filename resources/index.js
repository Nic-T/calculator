let numButtons = document.querySelectorAll(".numB")
let operators = document.querySelectorAll(".operator")
let equal = document.getElementById("equal")
let screen= document.getElementById("content")
let clear =document.getElementById("clear")
let dot=document.getElementById("dot")
let back=document.getElementById("back")

let numbers = new Array();
let op= new Array();
let lastElement;
let strNr;
let operator =0;
let number = 0;
let nextOperator;
let operatorNr=0;
let count = 0;
numbers.push("")

clear.addEventListener("click",()=>{

    while(op.length!=0){

        op.pop()

    }
    while(numbers.length !=0){
        numbers.pop()
    }
    count=0;
    number=0;
    screen.innerHTML= number;
    numbers.push("")
})

numButtons.forEach(number =>{
    number.addEventListener('click',()=>{
        
        numbers[count]=numbers[count]+`${number.innerHTML}`
        screen.innerHTML=numbers[count]
        lastElement=numbers[count];
    })
})

dot.addEventListener('click',()=>{

    numbers[count] +="."

})

operators.forEach(operator =>{

    operator.addEventListener('click',()=>{
        numbers[count]=Number(numbers[count])
        numbers.push("")
        op.push(operator.innerHTML)
        lastElement=op[count];
        count++;
        
    })

})

back.addEventListener("click",()=>{

    if(lastElement=numbers[count]){
        console.log(op,numbers)
        numbers.pop()
        numbers.push("")

    }

    if(lastElement=op[count]){
        console.log(op,numbers)
        op.pop()
        
    }


})

equal.addEventListener('click',()=>{
    numbers[count]=Number(numbers[count])
    while(op.length != 0){

        for(i=0;i<=count;i++){

            if(op[i]=="x"){

                number = operate("x",numbers[i],numbers[i+1]);
                console.log(number);
                op.splice(i,1);
                numbers.splice(i,2,number);
            }

            if(op[i]=="/"){

                number=operate("/",numbers[i],numbers[i+1]);
                console.log(number);
                op.splice(i,1);
                numbers.splice(i,2,number);
            }

        }

        for(i=0;i<=count;i++){

            if(op[i]=="-"){

                number=operate("-",numbers[i],numbers[i+1]);
                console.log(number);
                op.splice(i,1);
                numbers.splice(i,2,number);


            }

            if(op[i]=="+"){

                number=operate("+",numbers[i],numbers[i+1]);
                console.log(number);
                op.splice(i,1);
                numbers.splice(i,2,number);
            }
        }
        console.log(numbers)
    }
    screen.innerHTML= number;
    
    numbers.pop()
    numbers.push("")
    count=0;
    
    
})



function add(a,b) {
    console.log("added")
    return a+b;
}

function subtract(a,b){
    console.log("subtracted")
    return a-b;
}

function multiply(a,b){
    console.log("multiplied")
    return a*b;
}

function divide(a,b){
    console.log("divided")
    return a/b;
}

function operate(operator,a,b){

    switch(operator){

        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case 'x':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }

}

