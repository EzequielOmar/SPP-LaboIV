import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  change: Boolean = false;
  valid: Boolean = false;
  @Output() dateSelected: EventEmitter<string> = new EventEmitter<string>();
  model?: NgbDateStruct;
  constructor() {}

  ngOnInit(): void {}

  /**
   * Se asegura que la fecha sea correcta, y emite el valor en formato string -> 'dd/mm/yyyy'
   * @param event Recibe el evento de cambio de valor del input
   */
  dateChange(event: any) {
    this.change = true;
    const valid =
      /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(
        ('0' + event?.day).slice(-2) +
          '/' +
          ('0' + event?.month).slice(-2) +
          '/' +
          event?.year
      );
    if (valid) {
      this.valid = true;
      this.dateSelected.emit(
        event?.day + '/' + event?.month + '/' + event?.year
      );
    } else {
      this.valid = false;
    }
  }
}
