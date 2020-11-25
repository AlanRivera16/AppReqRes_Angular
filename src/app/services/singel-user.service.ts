import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SingelUserService {

  constructor(private http: HttpClient) { }

  getSingleUser(){
    return this.http.get('/api/users?page=2').pipe(map((resp:any[])=>
    resp.map(pais =>
      ({name: pais.name,
        code: pais.alpha3Code
      }))
    ));
  }

  

}
