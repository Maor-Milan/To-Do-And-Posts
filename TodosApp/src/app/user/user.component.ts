import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router:Router,private utils:UtilsService) { }

  sub:Subscription=new Subscription();

  @Input()
  perData:any;

  isRed:boolean=false;
  isVisible:boolean=false;
  isLableChosen:boolean=false;

  isComp ()
  {
    
    this.perData.Tasks.forEach((comp:any) => {
    if(comp.Completed==='true') this.isRed=true;
    else this.isRed=false;
      
    });
    
    
   
  }

  closeInfo()
  {
    this.isVisible=false;
  }

  updatePerson(id:string)
  {
   
   
     this.router.navigate(['/update/'+id]);
  }

  deletePerson(id:string)
  {
    this.sub=this.utils.deletePerson(id).subscribe(data=>{
      alert(data);
    })

    this.router.navigate([""]).then(()=>{window.location.reload()});

    
  }

  IDlable(userID:string)
  {
   
    this.isLableChosen=!this.isLableChosen;
    this.router.navigate(['/actions/'+userID]);


  }

  ngOnInit(): void {
  
  {
    this.perData.Tasks.forEach((comp:any) => {
    if(comp.Completed==='true') this.isRed=true;
    else this.isRed=false;});
   
  }
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
