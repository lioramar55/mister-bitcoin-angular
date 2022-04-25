import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { contactFilter } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss'],
})
export class ContactFilterComponent implements OnInit {
  @Output() onSetFilter = new EventEmitter<contactFilter>();
  constructor() {}
  filterBy: contactFilter = { term: '' };
  ngOnInit(): void {}
}
