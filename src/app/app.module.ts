import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DestinationPageComponent } from './destination-page/destination-page.component';
import { CrewPageComponent } from './crew-page/crew-page.component';
import { TechPageComponent } from './tech-page/tech-page.component';
import { DestinationMoonComponent } from './destination-page/destination-moon/destination-moon.component';
import { DestinationMarsComponent } from './destination-page/destination-mars/destination-mars.component';
import { DestinationEuropaComponent } from './destination-page/destination-europa/destination-europa.component';
import { DestinationTitanComponent } from './destination-page/destination-titan/destination-titan.component';
import { CrewCommanderComponent } from './crew-page/crew-commander/crew-commander.component';
import { CrewPilotComponent } from './crew-page/crew-pilot/crew-pilot.component';
import { CrewSpecialistComponent } from './crew-page/crew-specialist/crew-specialist.component';
import { CrewEngineerComponent } from './crew-page/crew-engineer/crew-engineer.component';
import { TechCapsuleComponent } from './tech-page/tech-capsule/tech-capsule.component';
import { TechSpaceportComponent } from './tech-page/tech-spaceport/tech-spaceport.component';
import { TechVehicleComponent } from './tech-page/tech-vehicle/tech-vehicle.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DestinationPageComponent,
    CrewPageComponent,
    TechPageComponent,
    DestinationMoonComponent,
    DestinationMarsComponent,
    DestinationEuropaComponent,
    DestinationTitanComponent,
    CrewCommanderComponent,
    CrewPilotComponent,
    CrewSpecialistComponent,
    CrewEngineerComponent,
    TechCapsuleComponent,
    TechSpaceportComponent,
    TechVehicleComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
