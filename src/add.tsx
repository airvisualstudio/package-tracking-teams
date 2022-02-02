function addNumbers(a: number, b: number) { 
    return a + b; 
} 

var sum: number = addNumbers(10, 15) 

console.log('Sum of the two numbers is: ' +sum); 

let num1:number = 1; 
    
function letDeclaration() { 
    let num2:number = 2; 

    if (num2 > num1) { 
        let num3: number = 3;
        num3++; 
    } 

    while(num1 < num2) { 
        let num4: number = 4;
        num1++;
    }

    console.log(num1); //OK
    console.log(num2); //OK 
    console.log(num3); //Compiler Error: Cannot find name 'num3'
    console.log(num4); //Compiler Error: Cannot find name 'num4'
}

letDeclaration();

function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
  }
  
  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);
  
  interface LabeledValue {
    label: string;
  }
   
  function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
  }
   
  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);

  letDeclarationFive();

  function printLabel(labeledObj: { label: string }) {
      console.log(labeledObj.label);
    }
    
    let myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
    
    interface LabeledValue {
      label: string;
    }
     
    function printLabel(labeledObj: LabeledValue) {
      console.log(labeledObj.label);
    }
     
    let myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);

    letDeclaration();

function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
  }
  
  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);
  
  interface LabeledValue {
    label: string;
  }
   
  function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
  }
   
  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);

