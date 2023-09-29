import { Component } from '@angular/core';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.scss']
})
export class FunctionComponent {

  result = 0;
  result2= 0;

  ngOnInit() {
    this.addition();
    this.substraction();
    
  }


  sum(a:any,b:any) {
    return a + b;
  }
  sub(a:any,b:any){
    return a-b;
  }
  
  addition(){
    let num1 = 20;
    let num2 = 56;
    
    let sum = this.sum(num1,num2);
    this.result = sum;
    console.log("Sum of given numbers is :", sum);
  }

  substraction(){
    let num1 = 23;
    let num2 = 21;
    
    let sub = this.sub(num1,num2);
    this.result2 = sub;
    console.log("Sum of given numbers is :", sub);
  }

   
    myFunction(){
      alert("this is alert");
    }
  

  
}


