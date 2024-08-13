import { Component, OnInit } from '@angular/core';
import { Toast } from 'bootstrap';

@Component({
  selector: 'app-bootstrap-demo',
  templateUrl: './bootstrap-demo.component.html',
  styleUrls: ['./bootstrap-demo.component.css']
})
export class BootstrapDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const toastTrigger = document.getElementById('liveToastBtn');
    const toastLiveExample = document.getElementById('liveToast');
    
    if (toastTrigger && toastLiveExample) {
      toastTrigger.addEventListener('click', () => {
        const toast = new Toast(toastLiveExample);
        toast.show();
      });
    }
  }
}
