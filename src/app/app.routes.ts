import { Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';
import { ContactAddComponent } from './components/contact-add/contact-add.component';

export const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'detail/:contactId', component: ContactDetailsComponent },
  { path: 'edit/:contactId', component: ContactEditComponent },
  { path: 'add', component: ContactAddComponent },
];
