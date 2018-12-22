import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OAuthButtonComponent } from './o-auth-button/o-auth-button.component';
import { NicknameDisplayComponent } from './nickname-display/nickname-display.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: 'nicknames/:token', component: NicknameDisplayComponent},
  {path: '', component: OAuthButtonComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    OAuthButtonComponent,
    NicknameDisplayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
