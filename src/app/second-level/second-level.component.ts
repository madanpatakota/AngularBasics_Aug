import { Component } from '@angular/core';

@Component({
  selector: 'app-second-level',
  templateUrl: './second-level.component.html',
  styleUrls: ['./second-level.component.css']
})


export class SecondLevelComponent{
   isStatus = false;
  //  !false = true
  //  !true  = false
   changePara(){
    //this.isStatus = !false;
      //this.isStatus = !this.isStatus;
      //console.log(this.isStatus);
      
      // setInterval(()=>{
      //    this.isStatus = !this.isStatus;
      // },2000)

      setTimeout(() => {
        this.isStatus = !this.isStatus;
      }, 5000);
   }

  public SecondLevelComponent(){
     //every 2 seconds
      // setInterval(()=>{
      //    this.isStatus = !this.isStatus;
      // },2000)
  }

  divColor    = 'yellow';

  divfontSize = '30px';

  divText = 'This is a second level component';

  changeColor(){
      this.divColor = 'red';
  }

  resetColor(){
      this.divColor = 'yellow';
  }

  otherColor(){
     this.divColor = 'blue';
  }



}
