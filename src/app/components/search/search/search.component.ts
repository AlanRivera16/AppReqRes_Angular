import { Component, OnInit } from '@angular/core';
import { SingelUserService } from 'src/app/services/singel-user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users: any[] = [];
  correo: any[] =[];
  imagen: '';
  list: [];

  constructor(private SingleUser: SingelUserService) { }

  buscar(term){
     this.SingleUser.getQuery(term).subscribe((data:any)=>{
       this.users = data['data'].first_name;
       this.correo = data['data'].email;
       this.imagen = data['data'].avatar;
     });
  }

  ngOnInit(): void {
  }

}
