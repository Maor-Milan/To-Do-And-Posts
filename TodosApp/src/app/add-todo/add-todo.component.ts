import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private utils:UtilsService,private ar:ActivatedRoute,private router:Router) { }
user:any
userId:string='';
userName:string='';
userTasks:any;
newTask:string='';
allTasks:any;
sub:Subscription=new Subscription();
sub2:Subscription=new Subscription();
sub3:Subscription=new Subscription();



  ngOnInit(): void {
    this.sub=this.ar.params.subscribe((data:any)=>
      {
        this.userId=data["id"];
          this.sub2=this.utils.getPerson(this.userId).subscribe((per:any)=>{
            this.userName=per.Name;
            this.allTasks=per.Tasks;
            
            
          })
      })

  }

 cancel()
 {
  this.router.navigate(['/actions/'+this.userId]);

 }

 add(task:string)
 {
 let newTaskobj={TaskID:2,TaskTitle:task,Completed:'false'};
 this.allTasks.push(newTaskobj);
 let updateObj={
  Tasks:this.allTasks
 }

 this.sub3=this.utils.updatePerson(this.userId,updateObj).subscribe((up:any)=>{
  alert(up);
  
  this.router.navigate(["/actions/"+this.userId]).then(()=>{
    window.location.reload()
  });

 })
 
 
 
  
 }
 
 
  ngOnDstroy()
  {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();


  }

}
