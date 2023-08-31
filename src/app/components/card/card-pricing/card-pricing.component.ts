import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.less']
})
export class CardPricingComponent {

  @Input()
  gameType: string = "Digital PS4"

  @Input()
  gamePrice: string = "U$ 99.99"
}
