import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OverviewComponent } from './components/overview/overview.component';
import { MobComponent } from './components/mob/mob.component';
import { MinionComponent } from './components/minion/minion.component';
import { MinionsComponent } from './components/minions/minions.component';
import { ArenaComponent } from './components/arena/arena.component';
import { ExportComponent } from './components/export/export.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bossview', component: OverviewComponent},
  { path: 'mob', component: MobComponent},
  { path: 'minions', component: MinionsComponent},
  { path: 'minion', component: MinionComponent},
  { path: 'arena', component: ArenaComponent},
  { path: 'export', component: ExportComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
