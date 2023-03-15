import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit {
sub:Subscription=new Subscription();
  constructor(private utils:UtilsService) { }
  users:any;
  usersToShow:any;

  ngOnInit(): void {
    this.sub= this.utils.getPersons() .subscribe(x=>
      {
       console.log(x);
       
       this.users=x
       this.usersToShow=x;
       
   
       
      })
  }


}
