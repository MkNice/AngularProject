import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-first',
  templateUrl: './parent-first.component.html',
  styleUrls: ['./parent-first.component.scss']
})
export class ParentFirstComponent {
  public dataParent = '';

  constructor(){
    setInterval(()=>{
      console.log(this.dataParent);
    },1000)
  }
}
