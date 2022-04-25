import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BitcoinAppComponent } from './pages/bitcoin-app/bitcoin-app.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';

import { StatsComponent } from './pages/stats/stats.component';
import { ContactResolverService } from './services/contact-resolver.service';

const routes: Routes = [
  { path: '', component: BitcoinAppComponent },
  { path: 'contact', component: ContactListComponent },
  { path: 'stats', component: StatsComponent },
  {
    path: 'contact/edit',
    component: ContactEditComponent,
    resolve: { contact: ContactResolverService },
  },
  {
    path: 'contact/edit/:id',
    component: ContactEditComponent,
    resolve: { contact: ContactResolverService },
  },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    resolve: { contact: ContactResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
