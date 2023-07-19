import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { MobComponent } from './mob/mob.component';
import { MinionComponent } from './minion/minion.component';
import { MinionsComponent } from './minions/minions.component';
import { ArenaComponent } from './arena/arena.component';
import { ExportComponent } from './export/export.component';

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
