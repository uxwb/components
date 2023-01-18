import { Component, ViewEncapsulation } from '@angular/core';
import { ListData } from '../../../lib/src/lib/list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent {

  level1 = '';

  level2 = '';

  constructor() {
    const data = decodeURIComponent(window.location.hash.substring(1)).split('|', 2);
    console.log(data);
    this.level1 = data[0] || '';
    this.level2 = data[1] || '';
  }

  setLevel(id: number, val: string): void {
    switch (id) {
      case 1:
        this.level1 = val;
        break;
      case 2:
        this.level2 = val;
        break;
    }

    window.location.hash = this.level1 + '|' + this.level2;
  }

  listKey = 'k1';

  range12 = [...Array(12).keys()];

  logString(value: string): void {
    console.info(value);
  }

  callback(value: string): void {
    console.info(value);
  }

  inputData: string = '123';

  listData: ListData[] = [
    { key: 'k1', name: 'Line 1' },
    { key: 'k2', name: 'Line 2', desc: 'Desc Line 2' },
    { key: 'k3', name: 'Line 3' },
    { key: 'k4', name: 'Line 4', desc: 'Desc Line 4' },
  ];

}
