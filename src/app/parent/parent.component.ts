import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {
  parentMessage = "Message from Parent to Child";
  messageFromChild: string = '';
  messageFromViewChild: string = '';

  @ViewChild(ChildComponent) childComponent!: ChildComponent;

  receiveMessage($event: string) {
    this.messageFromChild = $event;
  }

  ngAfterViewInit() {
      console.log('ngAfterViewInit');
  }
}