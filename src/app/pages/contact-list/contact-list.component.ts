import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact, contactFilter } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  constructor(private contactService: ContactService) {}
  filterBy!: contactFilter;
  contacts!: Observable<Contact[]>;
  ngOnInit(): void {
    this.contactService.loadContacts();
    this.contacts = this.contactService.contacts$;
  }

  async setFilter(filterBy: contactFilter) {
    this.contactService.setFilter(filterBy);
  }
  onRemoveContact(id: string) {
    this.contactService.deleteContact(id);
  }
}
