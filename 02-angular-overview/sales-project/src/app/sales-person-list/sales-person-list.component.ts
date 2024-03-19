import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css',
})
export class SalesPersonListComponent {
  salesPersonList: SalesPerson[] = [
    new SalesPerson('John', 'Doe', 'jd@email.com', 200),
    new SalesPerson('Jane', 'Doe', 'nd@email.com', 1500),
    new SalesPerson('Eric', 'Tiee', 'et@email.com', 500),
  ];
}
