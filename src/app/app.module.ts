import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { LoadingHttpInterceptor } from './interceptor/loading.interceptor';
import { ToastNotificationsModule } from 'ngx-toast-notifications';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        ToastNotificationsModule.forRoot({duration: 3000, position: 'top-right'}),

    ],
    declarations: [AppComponent],
    providers: [AuthGuard,{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: LoadingHttpInterceptor,
        multi: true
      }],
    bootstrap: [AppComponent]
})
export class AppModule {}
