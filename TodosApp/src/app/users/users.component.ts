import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  sub:Subscription=new Subscription();
 
  constructor(private utils:UtilsService,private router:Router) { }
  users:any;
  usersToShow:any;

  ngOnInit(): void {
    this.sub= this.utils.getPersons() .subscribe(x=>
      {
       this.users=x
       this.usersToShow=x;
      })
  }

  searchUsers(name:string)
  {
    this.usersToShow=this.users.filter((x:any)=> x.Name.startsWith(name)|| x.Email.startsWith(name)  )
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }


  add()
  {
    this.router.navigate(['/newuser/']);
    
  }
}
