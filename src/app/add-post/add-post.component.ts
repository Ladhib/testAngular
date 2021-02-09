import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
tab=[] as any;
posts=JSON.parse(localStorage.getItem("posts")as any)||[] ;
  postForm = new FormGroup({
    titre:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    categorie:new FormControl('',Validators.required),
    date:new FormControl('',Validators.required)
  })
Add(){
  this.tab.push(this.postForm.value);
  localStorage.setItem('posts',JSON.stringify(this.tab));
}
  constructor() { }

  ngOnInit(): void {
  }

}
