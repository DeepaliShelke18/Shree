import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit 
{
  constructor() { }

  ngOnInit() {
  }
  public name = "Marvellous Infosystem";
  public str="";
  public str1="";
 public fun1()
  {
    return this.name;

  }
  public fun2()
  {
    this.str="Marvellous Infosystem";
  }
  public fun3()
  {
   return this.str1="Marvellous Infosystem";
  }
}


