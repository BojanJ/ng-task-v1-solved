import { Component, ViewContainerRef } from '@angular/core';
import { ModalService } from './modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private modalService: ModalService, private viewContainerRef: ViewContainerRef) {
    this.modalService.setContainerRef(this.viewContainerRef);
  }

  successButton() {
    
    this.modalService.success(
      'It worked!',
      'You just did something that was a success! Now we can easily inform you about it.'
    );
  }

  failureButton() {
    this.modalService.failure(
      'Oh no!',
      'You just did something that was a failure! Now we can easily inform you about it.'
    );
  }
}
