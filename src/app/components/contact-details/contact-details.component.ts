import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Contact } from '../../contacts';
import { NgIf } from '@angular/common';
import { LocalStorageService } from '../../utils/local-storage.service';
import { PhonePipe } from '../../pipes/phone.pipe';
import { CepPipe } from '../../pipes/cep.pipe';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [NgIf, RouterLink, PhonePipe, CepPipe],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css',
})
export class ContactDetailsComponent {
  localStorageService = inject(LocalStorageService);
  contact: Contact | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const contactIdFromRoute = routeParams.get('contactId');

    this.contact = this.localStorageService.getContact(contactIdFromRoute!);
  }
}
