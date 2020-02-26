import { Component, OnInit } from '@angular/core';
import { Lab5ServiceService} from '../lab5-service.service';


@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  constructor(private lab5service: Lab5ServiceService) { }

  Total: number;
  years: number;

  calculateinterest(): void{
     this.Total = this.lab5service.calculateinterest(this.years);
      
  }

  ngOnInit(): void { 
  }

}
