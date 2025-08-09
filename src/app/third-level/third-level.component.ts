import { Component } from '@angular/core';

@Component({
  selector: 'app-third-level',
  templateUrl: './third-level.component.html',
  styleUrls: ['./third-level.component.css']
})
export class ThirdLevelComponent {

     customerEligibilty = true;

     //Let me define the method here.


     answer = "";

     evtClick(el:HTMLParagraphElement){
      //console.log(el);
      //console.log(el.innerText);
      if(el.innerText == "Hey !! How are you doing?"){
        this.answer = "Yeah!!! I am good";
      }
      else{
        this.answer = "NO Answer";
      }
     }



     foodDefaultValue = 2;
     setValue = -1;
     
     data = [
      "Dosa",
      "Idly",
      "Rice",
     ]

  evtDecideFood(){
    this.foodDefaultValue = this.setValue
  }


   data1DefaultValue = 'CA103';
   
   columnNames = ["Item No" , "Item Name"];
   data1 = [
        { itemNo : 'CA101' , itemName:"Dosa"  } ,
        { itemNo : 'CA102' , itemName:"Idly"  } ,
        { itemNo : 'CA103' , itemName:"Rice-1"} ,
        { itemNo : 'CA104' , itemName:"Rice-2"} ,
     ]


    customerId = 8988888888;



}
