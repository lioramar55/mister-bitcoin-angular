import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
})
export class ContactEditComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  form!: FormGroup;
  contact!: Contact;
  ngOnInit(): void {
    this.route.data.subscribe(async ({ contact }) => {
      this.contact = contact || this.contactService.getNewContact();
    });
    this.form = this.fb.group(this.contact);
  }
  onSubmit(contact: Contact) {
    this.contactService.saveContact(contact);
    if (this.contact._id)
      this.router.navigateByUrl(`/contact/${this.contact._id}`);
    else this.router.navigateByUrl('/contact');
  }
}
