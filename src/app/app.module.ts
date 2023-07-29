import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './shared/components/member/member.component';
import { SearchComponent } from './views/search/search.component';
import { DetailComponent } from './views/detail/detail.component';
import { MemberDetailComponent } from './views/member-detail/member-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    SearchComponent,
    DetailComponent,
    MemberDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
