import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizTopBarComponent } from './quiz-top-bar/quiz-top-bar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { ModeratorModule } from './moderator/moderator.module';
import { ClientModule } from './client/client.module';
import { ManagerModule } from './manager/manager.module';
import { StatisticModule } from './client/statistic/statistic.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { TokenInterceptor } from 'src/api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    QuizTopBarComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AdminModule,
    ModeratorModule,
    ClientModule,
    ManagerModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
