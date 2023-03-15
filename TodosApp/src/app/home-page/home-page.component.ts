import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
//observable subscription for memory leaks
  sub:  Subscription=new Subscription();
  sub1:  Subscription=new Subscription();
  sub2:  Subscription=new Subscription();


//Dependency injection=server calls,general utils service
constructor(private http: HttpClient,private utils:UtilsService,private router:Router) { }

poc()
{
  this.router.navigate(["poc"])
}
 
users:any;
usersToShow:any;
perNameToDelete:string=''
perIdToDelete:any;
idLable:boolean=false;

  isVisible:Boolean=false;
  closeInfo(){
    this.isVisible=false;
  }
  isComp (name:string)
  {
    
    let chosenPer=this.users.find((x:any)=>x.Name===name);
    let userTasks=chosenPer.Tasks;
    let isRed:Boolean=false;
    userTasks.forEach((task:any) => {
     
      if(task.Completed==='true') isRed= true
      else  isRed=false;
      
    });
    
    
    
    return isRed;
   
  }
  

  ngOnInit(): void {
  
    this.sub= this.utils.getPersons() .subscribe(x=>
   {
    //console.log(x);
    
    this.users=x
    this.usersToShow=x;
    

    
   })
  }

  searchUsers(name:string)
  {
    this.usersToShow=this.users.filter((x:any)=> x.Name.startsWith(name)|| x.Email.startsWith(name)  )
  }

  updatePerson(name:string)
  {
   
    this.router.navigate(['/update/'+name]);
  }

  deletePerson(name:string)
  {
   this.perNameToDelete=name;
   this.sub1=this.utils.getPersons().subscribe(x=>{
  
    this.users.forEach((name:any) => {
      //console.log(name);
      
      if(name.Name==this.perNameToDelete) this.perIdToDelete=name._id
      
    });
   
   this.sub2=this.utils.deletePerson(this.perIdToDelete).subscribe(data=>{
    alert(data);
    this.router.navigate([""]).then(()=>{window.location.reload()});

   

   })
    
  })
   
   
  }
  
  ngOnDestroy()
  {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();


  }

}
