import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit 
{
  @Input() public pData="";
@Output() public  obj=new EventEmitter();
  
public Sender()
{
this.obj.emit("Hello parent");
}
constructor() { }

  ngOnInit() {
  }
}
