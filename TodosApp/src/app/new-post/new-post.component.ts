import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private utils:UtilsService,private ar:ActivatedRoute,private router:Router) { }

  sub:Subscription=new Subscription();
sub2:Subscription=new Subscription();
sub3:Subscription=new Subscription();


userId:string='';
userName:string='';
allPosts:any;

  ngOnInit(): void {


    this.sub=this.ar.params.subscribe((data:any)=>
    {
      this.userId=data["id"];
        this.sub2=this.utils.getPerson(this.userId).subscribe((per:any)=>{
          this.userName=per.Name;
          this.allPosts=per.Posts;
          
          console.log(this.allPosts);

        })
    })


  }

  cancel()
 {
  this.router.navigate(['/actions/'+this.userId]);

 }

 ngOnDstroy()
  {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();


  }

  add(postTitle:string,postBody:string)
 {
 console.log(postBody);
 
  let newPostobj={PostID:2,PostTitle:postTitle,Body:postBody};
 this.allPosts.push(newPostobj);
 console.log(this.allPosts);

 let updateObj={
  Posts:this.allPosts
 }

 this.sub3=this.utils.updatePerson(this.userId,updateObj).subscribe((up:any)=>{
  alert(up);
  
  this.router.navigate(["/actions/"+this.userId]).then(()=>{
    window.location.reload()
  });

 })
 
 
 
  
 }
 


}
