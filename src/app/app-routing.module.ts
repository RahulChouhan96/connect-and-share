import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './component/chat/chat.component';
import { RoutingGuard } from './guards/routing.guard';
import { InboxComponent } from './component/inbox/inbox.component';
import { DiscussionsComponent } from './component/discussions/discussions.component';

const routes: Routes = [
  { path: 'connect_and_share/login', component: UserLoginComponent },
  { path: 'connect_and_share/user/chat', component: ChatComponent, canActivate: [RoutingGuard] },
  { path: 'connect_and_share/user/inbox', component: InboxComponent, canActivate: [RoutingGuard] },
  { path: 'connect_and_share/workspaces', component: DiscussionsComponent, canActivate: [RoutingGuard] }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
