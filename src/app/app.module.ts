import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

import { AuthGuard } from './login/services/auth-guard.service';
import { AuthService } from './login/services/auth.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { FooterComponent } from './footer/footer.component';
import { CommutatorComponent } from './wrapper/components/commutator/commutator.component';
import { ConfigsComponent } from './wrapper/components/configs/configs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponentComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    WrapperComponent,
    FooterComponent,
    CommutatorComponent,
    ConfigsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard],
        children:[
          { path: '', redirectTo: 'commutator' },
          { path: 'commutator', component: CommutatorComponent, canActivate: [AuthGuard], data: {title : 'Commutators'} },
          { path: 'configs', component: ConfigsComponent, canActivate: [AuthGuard] }
        ]},
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
