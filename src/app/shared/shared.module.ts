import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from '../services/modal.service';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    ModalComponent,
    TabContainerComponent,
    TabComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    TabContainerComponent,
    TabComponent,
    InputComponent
  ],
  // providers: [
  //   ModalService
  // ]
})
export class SharedModule { }
