import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {ApiService} from '../api/services';

@Component({
  selector: 'anms-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiTestComponent implements OnInit {

  restResult: any = [];


  constructor(
    public apiService: ApiService
  ) { }

  ngOnInit(): void {

    this.apiService
      .apiLocalesGet()
      .toPromise()
      .then((result) => {

        this.restResult = result;
        console.log(result);

      });
  }

}
