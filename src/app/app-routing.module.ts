import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './component/chat/chat.component';
import { RoutingGuard } from './guards/routing.guard';
import { InboxComponent } from './component/inbox/inbox.component';
import { CreateComponent } from './component/workspace/create/create.component';
import { WorkspacesComponent } from './component/workspace/workspaces/workspaces.component';
import { GetOneComponent } from './component/workspace/get-one/get-one.component';
import { AddDiscussionComponent } from './component/workspace/add-discussion/add-discussion.component';
import { UserRegistrationComponent } from './component/user-registration/user-registration.component';
import { AddEmpComponent } from './component/workspace/add-emp/add-emp.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { GetOneDiscussionComponent } from './component/get-one-discussion/get-one-discussion.component';
import { SentComponent } from './component/sent/sent.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'registration', component: UserRegistrationComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [RoutingGuard] },
  { path: 'user/chat', component: ChatComponent, canActivate: [RoutingGuard] },
  { path: 'user/inbox', component: InboxComponent, canActivate: [RoutingGuard] },
  { path: 'user/sent', component: SentComponent, canActivate: [RoutingGuard] },
  { path: 'user/profile/:userId', component: UserProfileComponent, canActivate: [RoutingGuard] },
  { path: 'workspaces/create', component: CreateComponent, canActivate: [RoutingGuard] },
  { path: 'workspaces', component: WorkspacesComponent, canActivate: [RoutingGuard] },
  { path: 'workspaces/getOneWorkspace/add_discussion/:companyId', component: AddDiscussionComponent, canActivate: [RoutingGuard] },
  { path: 'workspaces/getOneWorkspace/:companyId', component: GetOneComponent, canActivate: [RoutingGuard] },
  { path: 'workspaces/getOneWorkspace/addEmp/:companyId/:companyName', component: AddEmpComponent, canActivate: [RoutingGuard] },
  { path: 'workspaces/getOneWorkspace/:companyId/:discussionId', component: GetOneDiscussionComponent, canActivate: [RoutingGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
