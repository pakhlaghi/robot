import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RobotComponent } from './robot/robot.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RobotComponent
  ],
  exports: [
    RobotComponent
  ]
})
export class SharedModule { }
