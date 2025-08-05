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

   btnMouseOver(){
      console.log("You are hovering over the button");
   }




}
