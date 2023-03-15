import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private utils:UtilsService,private ar:ActivatedRoute,private router:Router) { }
  sub:Subscription=new Subscription();
  sub1:Subscription=new Subscription();
  
    posts:any;
    userID:string='';
    userName:string='';

  ngOnInit(): void {
    this.sub= this.ar.params.subscribe((data:any)=>{
      this.userID=data["id"];
      //console.log(this.userID);
      this.sub1=this.utils.getPerson(this.userID).subscribe((per:any)=>{
        this.posts=per.Posts
        this.userName=per.Name;

        
        
      })
      
   })

  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();

  }

  add()
  {
    this.router.navigate(["addpost/"+this.userID])
  
  }

}
