import { ModalService } from './modal/modal.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ModalFailureComponent } from './modal-types/modal-failure/modal-failure.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalFailureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent],
})
export class AppModule { }
