import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../api/services/api.service';
import {select, Store} from '@ngrx/store';
import {State} from '../../../core/settings/settings.model';
import {Observable} from 'rxjs';
import {selectSettingsCity} from '../../../core/settings/settings.selectors';

@Component({
  selector: 'anms-hints',
  templateUrl: './hints.component.html',
  styleUrls: ['./hints.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HintsComponent implements OnInit, OnDestroy {

  hints: [] = [];

  currZip: string;
  currZip$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private store: Store<State>,
    private cdr: ChangeDetectorRef
  ) {

  }

  ngOnInit() {

    this.currZip$ = this.store.pipe(select(selectSettingsCity));

    this.route.paramMap.subscribe(params => {

      if (params.get('zipcode')) {
        console.log(params.get('zipcode'));

        // get City data
        this.apiService
          .apiMessagesZipGet({
            zip: params.get('zipcode')
          })
          .toPromise()
          .then((result: any) => {

            const results = JSON.parse(result);

            this.cdr.detectChanges();

          });
      }

    });
  }

  ngOnDestroy(): void {

  }
}
