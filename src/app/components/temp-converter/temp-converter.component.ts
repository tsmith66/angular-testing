import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.css']
})
export class TempConverterComponent {

  convertedTemp: number | undefined;
  constructor() { }

  convertToC(temp: number) {
    this.convertedTemp = 100;
  }
}
