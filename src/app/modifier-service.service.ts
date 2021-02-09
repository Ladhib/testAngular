import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModifierService {

  constructor(private updateService: HttpClient) { }


  spliceTab(tab:any, index:any, change:any) {
    return tab.splice(index, 1, change)
  }

}
