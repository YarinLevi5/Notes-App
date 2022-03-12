import { Note } from './../note';
import { NotesService } from './../services/notes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent implements OnInit {
  addNote(
    text: HTMLInputElement,
    date: HTMLInputElement,
    isDone: HTMLInputElement
  ) {
    let newNote: Note = {
      text: text.value,
      date: date.value,
      isDone: isDone.checked,
    };
    this.service.addNewNote(newNote);
    text.value = date.value = '';
    isDone.checked = false;
  }

  constructor(private service: NotesService) {}

  ngOnInit(): void {}
}
