import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChatService } from './chat.service';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChatComponent } from './component/chat/chat.component';
import { UserService } from './services/user.service';
import { RoutingGuard } from './guards/routing.guard';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { InboxComponent } from './component/inbox/inbox.component';
import { SentComponent } from './component/sent/sent.component';
import { DiscussionsComponent } from './component/discussions/discussions.component';
import { CreateComponent } from './component/workspace/create/create.component';
import { WorkspacesService } from './services/workspaces.service';
import { WorkspacesComponent } from './component/workspace/workspaces/workspaces.component';
import { GetOneComponent } from './component/workspace/get-one/get-one.component';
import { AddDiscussionComponent } from './component/workspace/add-discussion/add-discussion.component';
import { UserRegistrationComponent } from './component/user-registration/user-registration.component';
import { AddEmpComponent } from './component/workspace/add-emp/add-emp.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { GetOneDiscussionComponent } from './component/get-one-discussion/get-one-discussion.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CheckMailComponent } from './component/check-mail/check-mail.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    ChatComponent,
    UserProfileComponent,
    InboxComponent,
    SentComponent,
    DiscussionsComponent,
    CreateComponent,
    WorkspacesComponent,
    GetOneComponent,
    AddDiscussionComponent,
    UserRegistrationComponent,
    AddEmpComponent,
    MainPageComponent,
    NavigationComponent,
    GetOneDiscussionComponent,
    CheckMailComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, ChatService, WorkspacesService, RoutingGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
