import { Injectable } from '@angular/core';
import { Contact } from '../contacts';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  // Generate ID
  generateId() {
    return '_' + Math.random().toString(36).substring(2, 9);
  }

  // Save contact in localStorage
  saveContact(contact: Contact) {
    contact.id = this.generateId();
    const contacts = JSON.parse(localStorage.getItem('contacts')!) || [];
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  // Update contact in localStorage
  updateContact(updatedContact: Contact) {
    let contacts = JSON.parse(localStorage.getItem('contacts')!) || [];
    contacts = contacts.map((contact: Contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  // Load contacts list from localStorage
  loadContactsList() {
    const contacts = JSON.parse(localStorage.getItem('contacts')!) || [];
    return contacts;
  }

  // Get contact
  getContact(id: string) {
    const contacts = JSON.parse(localStorage.getItem('contacts')!) || [];
    const contact = contacts.find((c: Contact) => c.id === id);
    return contact;
  }

  // Delete contact in localStorage
  deleteContact(idToBeDeleted: string) {
    let contacts = JSON.parse(localStorage.getItem('contacts')!);
    contacts = contacts.filter(
      (contact: Contact) => contact.id !== idToBeDeleted
    );
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
}
