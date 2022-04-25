import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root',
})
export class ContactResolverService {
  constructor(private contactService: ContactService) {}
  async resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params;
    if (!id) return null;
    const contact = await lastValueFrom(this.contactService.getContactById(id));
    return contact;
  }
}
