import { Component ,
   ContentChild, ElementRef,
   TemplateRef, ViewChild, 
   ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-fourth-level',
  templateUrl: './fourth-level.component.html',
  styleUrls: ['./fourth-level.component.css']
})
export class FourthLevelComponent {

  // @viewchild

  @ViewChild('firstName')  txtFirstName:ElementRef<any>;
  //var                    firstname    :string

  @ViewChild('someText')   paraText:ElementRef<any>;

  @ContentChild('spanText1') smallText1:ElementRef<any>;
  // @ContentChild('spanText2') smallText2:ElementRef<any>;
  // @ContentChild('spanText3') smallText3:ElementRef<any>;



  btnClick(){
    //Logic 
    //console.log(this.userFirstName);
    console.log(this.txtFirstName.nativeElement.value);
    console.log(this.paraText.nativeElement.innerText);

    console.log(this.smallText1.nativeElement.innerText);
    //console.log(this.smallText2.nativeElement.innerText);
    //console.log(this.smallText3.nativeElement.innerText);

  }


  numbers = [1,2,3,4,5];

  // "Madan"
  @ViewChild('sampleText',  {read:TemplateRef})  sampleTemplate :TemplateRef<any>;
  @ViewChild('container',  {read:ViewContainerRef}) container      :ViewContainerRef;
  btnClick1(){
      //console.log(this.sampleText);
     // this.container.insert(this.sampleTemplate.createEmbeddedView(null));
      this.container.insert(this.sampleTemplate.
        createEmbeddedView({'myName' : "Madan"}));
  }


}
