import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  @Input() wider = false;

  @Input() title = '';
  @Input() body = '';
  @Input() type = '';
  @Input() isContent = true;

  hidden = true;
  shown = false;

  constructor() {}

  ngOnInit(): void {}

  show() {
    this.hidden = false;

    // Make sure slideover is translated away before expanding,
    // otherwise animation will not work.
    setTimeout(() => {
      this.shown = true;
    }, 1);
  }

  hide() {
    this.shown = false;
    setTimeout(() => {
      // Hide after the animation
      this.hidden = true;
    }, 200);
  }

  @HostListener('window:keydown.esc', ['$event'])
  escape(_e: KeyboardEvent) {
    if (this.shown) {
      this.hide();
    }
  }
}
