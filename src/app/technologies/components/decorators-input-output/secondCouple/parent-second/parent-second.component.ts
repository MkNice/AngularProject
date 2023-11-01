import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-second',
  templateUrl: './parent-second.component.html',
  styleUrls: ['./parent-second.component.scss']
})
export class ParentSecondComponent {
  public dataParent!:string;

  constructor(){
    setInterval(()=>{
      console.log(this.dataParent);
    },1000)
  }
}
