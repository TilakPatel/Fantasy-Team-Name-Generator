import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OAuthButtonComponent } from './o-auth-button/o-auth-button.component';
import { NicknameDisplayComponent } from './nickname-display/nickname-display.component';
import { Routes, RouterModule } from '@angular/router';
import { TeamPickerComponent } from './team-picker/team-picker.component';
import { HttpClientModule } from '@angular/common/http';
import { AddNicknamesComponent } from './add-nicknames/add-nicknames.component';
const appRoutes: Routes = [
  {path: 'nicknames/:teamID/:token', component: NicknameDisplayComponent},
  {path: '', component: OAuthButtonComponent},
  {path: 'teamPicker/:token', component: TeamPickerComponent},
  {path: 'submitName', component: AddNicknamesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    OAuthButtonComponent,
    NicknameDisplayComponent,
    TeamPickerComponent,
    AddNicknamesComponent
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
