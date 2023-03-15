import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private router:Router,private utils:UtilsService) { }
  sub:Subscription=new Subscription();

  ngOnInit(): void {
  }

  cancel()
  {
   this.router.navigate(['']);
 
  }

  add(name:string,email:string)
  {
    console.log(name+' '+email);
    let postObj={
      Name:name,
      Email:email
    }

    this.sub=this.utils.addPerson(postObj).subscribe(data=>{
      alert(data);
  
  this.router.navigate([""]).then(()=>{
    window.location.reload()
  });
    })
    
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }

}
