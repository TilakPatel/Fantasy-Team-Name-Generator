import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OAuthButtonComponent } from './o-auth-button/o-auth-button.component';
import { NicknameDisplayComponent } from './nickname-display/nickname-display.component';
import { Routes, RouterModule } from '@angular/router';
import { TeamPickerComponent } from './team-picker/team-picker.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
const appRoutes: Routes = [
  {path: 'nicknames', component: NicknameDisplayComponent},
  {path: '**', component: OAuthButtonComponent},
  {path: 'teamPicker/:token', component: TeamPickerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    OAuthButtonComponent,
    NicknameDisplayComponent,
    TeamPickerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
