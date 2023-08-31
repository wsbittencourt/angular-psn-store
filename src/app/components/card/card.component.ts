import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent {

  @Input()
  gameCover: string = ""

  @Input()
  gameLabel: string = ""

  @Input()
  gameType: string = "Digital PS4"

  @Input()
  gamePrice: string = "U$ 99.99"
}
