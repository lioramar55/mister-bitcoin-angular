import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BitcoinAppComponent } from './pages/bitcoin-app/bitcoin-app.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { StatsComponent } from './pages/stats/stats.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { AppFooterComponent } from './cmps/app-footer/app-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BitcoinAppComponent,
    ContactDetailsComponent,
    ContactListComponent,
    StatsComponent,
    ContactPreviewComponent,
    ContactFilterComponent,
    AppHeaderComponent,
    AppFooterComponent,
    ContactEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
