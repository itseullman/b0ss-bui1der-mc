import { Component } from '@angular/core';

@Component({
  selector: 'b0b1-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  details : DetailsModel = {
    bossName: 'test'
  }
}

class DetailsModel {
  bossName: string = '';
}
