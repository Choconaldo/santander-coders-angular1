import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { PhonePipe } from '../../pipes/phone.pipe';
import { RouterLink } from '@angular/router';
import { LocalStorageService } from '../../utils/local-storage.service';
import { fictionalContacts } from '../../contacts';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [NgFor, PhonePipe, RouterLink, NgIf],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent {
  localStorageService = inject(LocalStorageService);
  contacts = this.localStorageService.loadContactsList();
  filteredContacts = this.contacts;
  reloadComponent = true;

  deleteContact(id: string) {
    this.localStorageService.deleteContact(id);
    window.location.reload();
  }

  addFictionalContacts() {
    localStorage.setItem('contacts', JSON.stringify(fictionalContacts));
    window.location.reload();
  }
  searchByName(event: any) {
    let input: string = event.target.value;
    this.filteredContacts = this.contacts.filter((contact: Contact) => {
      return contact.name.includes(input);
    });
  }
}
