import { Component, OnInit } from '@angular/core';
import { SingelUserService } from 'src/app/services/singel-user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  resultados: any = [];

  constructor(private SingleUser: SingelUserService) { }

  // buscar(term){
  //   if(term === '') return this.resultados = [];
  //   this.SingleUser.getArtists(term).subscribe((data:any)=>{
  //     //console.log(data.artists.items);
  //     this.resultados = data;
  //   });
  // }

  ngOnInit(): void {
  }

}
