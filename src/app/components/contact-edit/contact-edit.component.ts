import { NgIf, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LocalStorageService } from '../../utils/local-storage.service';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { Contact } from '../../contacts';

@Component({
  selector: 'app-contact-edit',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink, NgFor],
  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.css',
})
export class ContactEditComponent {
  constructor(private _router: Router, private route: ActivatedRoute) {}

  states = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ];

  localStorageService = inject(LocalStorageService);
  contactIdFromRoute!: string;
  contact: Contact | undefined;
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      adress: new FormControl(null, [Validators.required]),
      number: new FormControl(null),
      complement: new FormControl(null),
      neighborhood: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      cep: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.maxLength(8),
      ]),
    });

    const routeParams = this.route.snapshot.paramMap;
    this.contactIdFromRoute = routeParams.get('contactId')!;

    this.contact = this.localStorageService.getContact(
      this.contactIdFromRoute!
    );

    this.form.setValue({
      name: this.contact?.name,
      email: this.contact?.email,
      phone: this.contact?.phone,
      adress: this.contact?.adress,
      number: this.contact?.number,
      complement: this.contact?.complement,
      neighborhood: this.contact?.neighborhood,
      city: this.contact?.city,
      state: this.contact?.state,
      cep: this.contact?.cep,
    });
  }
  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  get phone() {
    return this.form.get('phone');
  }
  get adress() {
    return this.form.get('adress');
  }
  get neighborhood() {
    return this.form.get('neighborhood');
  }
  get city() {
    return this.form.get('city');
  }
  get state() {
    return this.form.get('state');
  }
  get cep() {
    return this.form.get('cep');
  }
  onSubmit() {
    let updatedContact = this.form.value;
    updatedContact.id = this.contactIdFromRoute;
    this.localStorageService.updateContact(updatedContact);
    alert('Contato atualizado com sucesso');
    this._router.navigateByUrl('');
  }
}
