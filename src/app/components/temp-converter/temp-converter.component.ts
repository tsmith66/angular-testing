import { Component, OnInit } from '@angular/core';
import { TempConverterService } from 'src/services/temp-converter.services';

@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.css']
})
export class TempConverterComponent {

  convertedTemp: number | undefined;
  constructor(private service: TempConverterService) { }

  convertToC(temp: number) {
    this.convertedTemp = this.service.convertToC(temp);
  }
}
