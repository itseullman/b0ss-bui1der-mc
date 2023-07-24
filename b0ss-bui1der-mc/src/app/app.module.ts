import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverviewComponent } from './components/overview/overview.component';
import { MobComponent } from './components/mob/mob.component';
import { MinionsComponent } from './components/minions/minions.component';
import { MinionComponent } from './components/minion/minion.component';
import { ArenaComponent } from './components/arena/arena.component';
import { ExportComponent } from './components/export/export.component';
import { DetailsComponent } from './components/overview/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OverviewComponent,
    MobComponent,
    MinionsComponent,
    MinionComponent,
    ArenaComponent,
    ExportComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
