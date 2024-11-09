import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { PhonePipe } from '../../pipes/phone.pipe';
import { RouterLink } from '@angular/router';
import { LocalStorageService } from '../../utils/local-storage.service';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [NgFor, PhonePipe, RouterLink],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent {
  localStorageService = inject(LocalStorageService);
  contacts = this.localStorageService.loadContactsList();

  deleteContact(id: string) {
    this.localStorageService.deleteContact(id);
    window.location.reload();
  }
}
