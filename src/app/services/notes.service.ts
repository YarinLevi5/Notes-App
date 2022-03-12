import { Note } from './../note';
import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  notes: Note[] = [];

  constructor() {}
  addNewNote(note: Note): void {
    let uuid = this.generateUUID();
    note.id = uuid;
    this.notes.push(note);
  }
  getNotes() {
    return this.notes;
  }
  removeNote(noteId: any) {
    this.notes.forEach((element, i) => {
      if (element.id == noteId) this.notes.splice(i, 1);
    });
  }
  generateUUID() {
    let randomUUID = uuidv4();
    return randomUUID;
  }
}
