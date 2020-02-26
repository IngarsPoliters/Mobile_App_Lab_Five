import { Component, OnInit } from '@angular/core';
import { Lab5ServiceService} from '../lab5-service.service';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {

  constructor(private lab5service: Lab5ServiceService) { }

  Total: number;
  years: number;

  calculateinterest(): void{
     this.Total = this.lab5service.calculateinterest(this.years);
      
  }

  ngOnInit(): void {
  }

}
