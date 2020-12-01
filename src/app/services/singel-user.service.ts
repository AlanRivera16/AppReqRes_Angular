import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SingelUserService {

  constructor(private http: HttpClient) { }

  getQuery( query: string){
    const url = `https://reqres.in/api/users/${query}`;
    return this.http.get(url);
  }

  getListUser(query:string){
    const url = `https://reqres.in/api/users?page=${query}`;
    return this.http.get(url);
  }


  // ngOnInit(): void {
  //   this.AppS.getListData().subscribe((data:any) =>{
  //      this.data=data.data;   
  //      console.log(data.data);    
  //      });
  // }

  

}
