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
  constructor(private service: NotesService) {}

  deleteNote() {
    this.service.removeNote(this.note?.id);
  }
  ngOnInit(): void {}
}
