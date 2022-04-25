import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BitcoinAppComponent } from './pages/bitcoin-app/bitcoin-app.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { StatsComponent } from './pages/stats/stats.component';

const routes: Routes = [
  { path: '', component: BitcoinAppComponent },
  { path: 'contact', component: ContactListComponent },
  { path: 'stats', component: StatsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
