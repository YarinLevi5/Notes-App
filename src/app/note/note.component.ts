import { Component, Input, OnInit } from '@angular/core';
import { Note } from './../note';
import { NotesService } from './../services/notes.service';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  @Input() note?: Note;
  mode: boolean = false;
  btnText: boolean = false;
  isChecked: boolean = false;
  constructor(private service: NotesService) {
    this.service.orderByDate();
  }

  deleteNote() {
    this.service.removeNote(this.note?.id);
  }

  updateNote(text: string, date: string, isDone: boolean) {
    this.mode = !this.mode;
    this.btnText = true;
    if (this.note?.isDone) {
      this.isChecked = true;
    }
    let editedObject = {
      id: this.note?.id,
      text,
      date,
      isDone,
    };
    this.service.editAndSaveNote(editedObject.id, editedObject);
  }

  ngOnInit(): void {}
}
