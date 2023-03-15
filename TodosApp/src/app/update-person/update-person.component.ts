import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {

  sub:Subscription=new Subscription();
  sub1:Subscription=new Subscription()
  sub2:Subscription=new Subscription()

  constructor(private ar:ActivatedRoute,private utils:UtilsService,private router:Router) { }



  userName:string='';
  users:any=[];
  user:any=[];
  userID:string='';
  

save()
{
 console.log(this.user);
 
 let perUpdateObj={
  Name:this.user.Name,
  Email:this.user.Email,
  City:this.user.City,
  Street:this.user.Street,
  Zipcode:this.user.Zipcode,
 }

this.sub1=this.utils.updatePerson(this.userID,perUpdateObj).subscribe(data=>{
  alert(data);
  this.router.navigate([""]).then(()=>{
    window.location.reload()
  });
 })
 
  
}

exit()
{
  this.router.navigate([""]);

}


  
  
  
  ngOnInit(): void {
   this.sub=this.ar.params.subscribe(data=>{
   this.userID=data["id"];
   this.sub2=this.utils.getPerson(this.userID).subscribe(per=>{
  this.user=per;
   })
   })}

  ngOnDestroy()
  {
  this.sub.unsubscribe();
  this.sub1.unsubscribe();
  this.sub2.unsubscribe();


  }

}
