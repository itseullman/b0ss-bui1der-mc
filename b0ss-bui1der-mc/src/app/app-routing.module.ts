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
  { path: 'home/bossview', component: OverviewComponent},
  { path: 'home/bossview/mob', component: MobComponent},
  { path: 'home/bossview/minions', component: MinionsComponent, children: [
    {path: ':name', component: MinionComponent}
  ]},
  { path: 'home/bossview/arena', component: ArenaComponent},
  { path: 'home/bossview/export', component: ExportComponent},
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
