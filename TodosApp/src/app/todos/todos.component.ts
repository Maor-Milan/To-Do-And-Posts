import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private utils:UtilsService,private ar:ActivatedRoute,private router:Router) { }
sub:Subscription=new Subscription();
sub1:Subscription=new Subscription();

  todos:any;
  userID:string='';
  userName:string='';


  ngOnInit(): void {
   
   this.sub= this.ar.params.subscribe((data:any)=>{
      this.userID=data["id"];
      //console.log(this.userID);
      this.sub1=this.utils.getPerson(this.userID).subscribe((per:any)=>{
        this.todos=per.Tasks
        this.userName=per.Name;
        
      })
      
   })


  }

  addTodo(userID:string)
  {
    console.log(userID);
    
    this.router.navigate(["addtodo/"+userID])
    
  }

 

  ngOnDestroy()
  {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();

  }

}
