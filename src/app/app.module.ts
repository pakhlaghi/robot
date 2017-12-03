import { RobotSimulatorModule } from './features/robot-simulator/robot-simulator.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    RobotSimulatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
