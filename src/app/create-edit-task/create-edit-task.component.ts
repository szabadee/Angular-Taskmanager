import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppModel } from '../app.model';

@Component({
  selector: 'app-create-edit-task',
  templateUrl: './create-edit-task.component.html',
  styleUrls: ['./create-edit-task.component.css']
})
export class CreateEditTaskComponent implements OnInit {

@Input('model') appModel: AppModel;

@Output() showModelValue = new EventEmitter(); 

  constructor() { }

  ngOnInit() {
  }

  public showAppModelValue() {
    this.showModelValue.emit(this.appModel);
  }

}
