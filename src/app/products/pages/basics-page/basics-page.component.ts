import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  nameLower: string = 'fernando';
  nameUpper: string = 'FERNANDO';
  nameComplete: string = 'fErNanDo mIrAnda';

  customDate: Date = new Date();
}
