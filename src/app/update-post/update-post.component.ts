import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModifierService } from '../modifier-service.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  titreParam: any
  descriptionParam:any
  categorieParam:any;
  dateParam:any
  postTab = [] as any
  postFound: any
  postFormModified: any
  index: any
  change: any
  a: any
  b: any
  c: any
  d: any
  constructor(private route: ActivatedRoute, private updateService: ModifierService) { }

  ngOnInit(): void {
    this.titreParam = this.route.snapshot.paramMap.get('titre')
    this.descriptionParam = this.route.snapshot.paramMap.get('description')
    this.categorieParam = this.route.snapshot.paramMap.get('categorie')
    this.dateParam = this.route.snapshot.paramMap.get('date')
    console.log(this.titreParam);
    console.log(this.descriptionParam);
    console.log(this.categorieParam);
    console.log(this.dateParam);
    
    this.postTab = JSON.parse(localStorage.getItem("posts") ||'{}')
    this.postFound = this.postTab.find((element : any) => element.titre == this.titreParam)
    this.index = this.postTab.indexOf(this.postFound)
    console.log(this.index);


    console.log(this.postFound);

    this.postFormModified = new FormGroup({
      titre: new FormControl(this.postFound.titre),
      description: new FormControl(this.postFound.description),
      categorie: new FormControl(this.postFound.categorie),
      date: new FormControl(this.postFound.date),

    })
    this.d = JSON.parse(localStorage.getItem("posts") ||'{}')
  }


  modifier(a: any, b:any, c:any) {
    a = this.d
    // a = JSON.parse(localStorage.getItem("postTab")) || []
    b = this.index
    c = this.postFormModified.value
    this.updateService.spliceTab(a, b, c)
    console.log(a);
    localStorage.setItem("posts", JSON.stringify(a));
  }




}
