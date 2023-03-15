import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private ar:ActivatedRoute,private utils:UtilsService,private router:Router) { }

  @Input()
  todoData:any;
  isComplete:boolean=false;
  userID:string='';
  tasksArr:any;
  sub:Subscription=new Subscription();
  sub2:Subscription=new Subscription();
  sub3:Subscription=new Subscription();



  hideButton()
  {
    if(this.todoData.Completed==='true') this.isComplete=false;
    else this.isComplete=true;
     
  }

  updateCompleted(taskTitle:string)
  {
    
    this.sub=this.ar.params.subscribe(data=>{
      this.userID=data["id"];
      this.sub2=this.utils.getPerson(this.userID).subscribe((per:any)=>{
      this.tasksArr=per.Tasks;

        this.tasksArr.find((x:any)=>
          {
           if(x.TaskTitle===taskTitle) 
           {
          
            let obj= 
            {
               TaskID: x.TaskID,
               TaskTitle: x.TaskTitle,
                Completed: "true"
            }

            let newArr:any=[];
            this.tasksArr.filter((rmv:any)=>{
             if(rmv.TaskTitle!=taskTitle) 
             {
              newArr.push(rmv);
             }
             
             
            })

            newArr.push(obj);


            let perUpdateObj={
             Tasks:newArr
             }
            
            
            
           
            this.sub3=this.utils.updatePerson(this.userID,perUpdateObj).subscribe(res=>
              {
                alert(res);
                this.router.navigate(["/actions/"+this.userID]).then(()=>{
                  window.location.reload()
                });
              })

           
           }
            
          })
        
      })
      })
    
  }

  ngOnInit(): void {
    
    this.hideButton();
  }

  ngOnDestroy()
  {
this.sub.unsubscribe();
this.sub2.unsubscribe();
this.sub3.unsubscribe();


  }

}
