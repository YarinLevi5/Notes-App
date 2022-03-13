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
  editAndSaveNote(noteId: any, updatedObj: Note) {
    this.notes.forEach((note, i) => {
      if (note.id == noteId) {
        note.date = updatedObj.date;
        note.isDone = updatedObj.isDone;
        note.text = updatedObj.text;
      }
    });
  }
  orderByDate() {
    const orderDate = this.notes.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return orderDate;
  }
  generateUUID() {
    let randomUUID = uuidv4();
    return randomUUID;
  }
}
