import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


constructor( private ServiceService:HttpClient) { }




delete(newTab:any,i:any){
  return newTab.splice(i,1)
}

}
