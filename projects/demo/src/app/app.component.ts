import { Component, ViewEncapsulation } from '@angular/core';
import { ListData } from '../../../lib/src/lib/list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent {

  range12 = [...Array(12).keys()];

  logString(value: string): void {
    console.info(value);
  }

  callback(value: string): void {
    console.info(value);
  }

  inputData: string = '123';

  listData:ListData[] = [
    { key:'k1', name:'Line 1' },
    { key:'k2', name:'Line 2', desc:'Desc Line 2' },
    { key:'k3', name:'Line 3' },
    { key:'k4', name:'Line 4', desc:'Desc Line 4' },
  ];

}
