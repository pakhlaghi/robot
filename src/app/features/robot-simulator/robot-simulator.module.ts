import { RobotSimulatorService } from './robot-simulator.service';
import { RobotComponent } from './../../shared/robot/robot.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RobotSimulatorRoutingModule } from './robot-simulator-routing.module';
import { RobotSimulatorComponent } from './robot-simulator.component';

@NgModule({
  imports: [
    CommonModule,
    RobotSimulatorRoutingModule,
    SharedModule
  ],
  declarations: [
    RobotSimulatorComponent
  ],
  providers: [
    RobotSimulatorService
  ]
})
export class RobotSimulatorModule { }
