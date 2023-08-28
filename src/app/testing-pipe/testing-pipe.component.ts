import { Component } from '@angular/core';

@Component({
  selector: 'app-testing-pipe',
  templateUrl: './testing-pipe.component.html',
  styleUrls: ['./testing-pipe.component.css'],
})
export class TestingPipeComponent {

  data:any[]=[
    {"city":"Chicago","population":30,"description":"grande città"},
    {"city":"New York","population":50,"description":"grandissima città"},
    {"city":"Roma","population":10,"description":"antica città"}
  ]

  searchTerm="";

  constructor(){}


  add(data:any):void{
    console.log(this.searchTerm)
    if(data.city && data.population && data.description && !this.data.includes(data)){
      this.data.push(data)
      
    }
  }

  
  
}
