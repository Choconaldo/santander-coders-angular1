import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { PhonePipe } from '../../pipes/phone.pipe';
import { RouterLink } from '@angular/router';
import { LocalStorageService } from '../../utils/local-storage.service';
import { fictionalContacts } from '../../contacts';

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
  reloadComponent = true;

  deleteContact(id: string) {
    this.localStorageService.deleteContact(id);
    window.location.reload();
  }

  addFictionalContacts() {
    localStorage.setItem('contacts', JSON.stringify(fictionalContacts));
    window.location.reload();
  }
}
