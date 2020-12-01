import { Component, OnInit } from '@angular/core';
import { SingelUserService } from 'src/app/services/singel-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any[] = [];
  correo: any[] =[];
  apellido: any[] =[];
  imagen: '';

  constructor(private ListUser: SingelUserService) { }

  mostrar(term){
      this.ListUser.getListUser(term).subscribe((data:any)=> {
        this.users = data['data'].first_name;
        console.log('data');
        
      })
  }

  ngOnInit(): void {
  }

}
