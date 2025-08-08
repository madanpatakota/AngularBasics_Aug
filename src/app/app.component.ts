import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  
   /*string interpolation*/
   ProjectName = "Angular ";
   title       = "Basics App"

   getCustomerName(){
    return "Robert.Jr";
   }



    /*Property data bidning*/
   customerRole  = "Admin"
   inputType     = "checkbox";
   isDisabled    = true;


   /*Event binding*/

   btnClick(){
     console.log("Button Clicked");
   }

   btnMouseOver(evnent: any){
      console.log(evnent);
      let element = evnent.target as HTMLButtonElement;
      //console.log("You are hovering over the button");
   }

  //  KeyboardEvent
  //  HTMLInputElement
  //  HTMLButtonElement

   captureData(eventDetails: KeyboardEvent , status:string){
     //console.log("Data Captured");
     //console.log(eventDetails);

    let element =  eventDetails.target as HTMLInputElement;
    let data    =  element.value;
    //console.log(data);

    if(data == "Madan"){
       console.log("Now you are admin!!!!!");
    }

     //console.log(eventDetails.target);
   }



   testvalue     = "Enter your name";



   sName         = "xyz";

   selectedValue = 3;

   isChecked     = true;

   drpChange(){
     console.log("you changed the value");
   } 


   modelChange($event:any){
       console.log($event);
       //keyboard event , mouse event.
   }


     xyz = "Angular Basics";



     


}
