import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LocalStorageService } from '../../utils/local-storage.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-add',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink, NgFor],
  templateUrl: './contact-add.component.html',
  styleUrl: './contact-add.component.css',
})
export class ContactAddComponent {
  constructor(private _router: Router) {}

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
    this.form.setValue({
      name: '',
      email: '',
      phone: '',
      adress: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      cep: '',
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
    this.localStorageService.saveContact(this.form.value);
    alert('Novo contato cadastrado com sucesso');
    this._router.navigateByUrl('');
  }
}
