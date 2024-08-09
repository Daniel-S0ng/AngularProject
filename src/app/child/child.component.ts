import { Component, Input, Output, EventEmitter, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() childMessage!: string;
  @Output() messageEvent = new EventEmitter<string>();

  messageToParent = "Message from Child to Parent";

  constructor() {
    console.log('Constructor: ChildComponent instance created');
  }

  ngOnInit() {
    console.log('ngOnInit: ChildComponent initialized');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: Input properties changed', changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck: Change detection cycle triggered');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit: Content projected into the component');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked: Content projection checked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: Component views and child views initialized');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked: Component views and child views checked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: ChildComponent is destroyed');
  }

  sendMessage() {
    console.log('sendMessage');
    this.messageEvent.emit(this.messageToParent);
  }
}