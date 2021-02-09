import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../service.service'
@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
aff=[] as any;
newTab=[] as any;
i:any
a: any
  constructor(private service : ServiceService) { }

  ngOnInit(): void {
    this.aff=JSON.parse(localStorage.getItem("posts") ||'{}')
  
  }
delete(newTab:any,i:any){
newTab=this.aff


this.newTab = this.service.delete(newTab,i)
localStorage.setItem('posts',JSON.stringify(this.newTab))
}
}
