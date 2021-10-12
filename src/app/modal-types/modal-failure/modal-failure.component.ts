import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-failure',
  templateUrl: './modal-failure.component.html',
  styleUrls: ['./modal-failure.component.scss']
})
export class ModalFailureComponent implements OnInit {

  @Input() title?: string;
  @Input() body?: string;

  constructor() { }

  ngOnInit() {
  }

}
