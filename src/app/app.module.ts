import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChatService } from './chat.service';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './component/chat/chat.component';
import { UserService } from './services/user.service';
import { RoutingGuard } from './guards/routing.guard';
import { UserProfileComponent } from './component/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    ChatComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, ChatService, RoutingGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
