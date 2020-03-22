import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'anms-tabnav',
  templateUrl: './tabnav.component.html',
  styleUrls: ['./tabnav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabnavComponent implements OnInit {

  @Input() currZip: string;

  constructor() { }

  ngOnInit(): void {
    this.currZip = '65830';
  }

}
