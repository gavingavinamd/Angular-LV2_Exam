import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './shared/components/member/member.component';
import { SearchComponent } from './views/search/search.component';
import { DetailComponent } from './views/detail/detail.component';
import { MemberDetailComponent } from './views/member-detail/member-detail.component';

const routes: Routes = [
  {
    path:'member', component: MemberComponent,
  },
  {
    path:'search', component: SearchComponent
  },
  {
    path:'popup', component: DetailComponent
  },
  {
    path:'member-detail/:name', component: MemberDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
