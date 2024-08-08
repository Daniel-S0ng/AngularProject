import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  numbers: number[] = [3, 8, 5, 1, 7, 9]

  // remove method
  remove(index: number): void {
    this.numbers.splice(index, 1);
  }
}
