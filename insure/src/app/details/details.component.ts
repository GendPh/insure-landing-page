import { Component } from '@angular/core';
import { DetailsContainerComponent } from '../details-container/details-container.component';
import { Detail } from '../Model/detail.model';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DetailsContainerComponent],
  templateUrl: './details.component.html',
  styles: ``
})
export class DetailsComponent {
  details: Detail[] = [
    {
      detail: 'Snappy Process',
      description: 'Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.',
      image: 'icon-snappy-process.svg'
    },
    {
      detail: 'Affordable Prices',
      description: 'We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.',
      image: 'icon-affordable-prices.svg'
    },
    {
      detail: 'People First',
      description: 'Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.',
      image: 'icon-people-first.svg'
    }
  ];
}
