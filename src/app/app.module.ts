import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GitSearchService } from './service/git-search.service';
import { GitSearchComponent } from './git-search/git-search.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'search',
    redirectTo: '/search/angular',
    pathMatch: 'full'
  },
  {
    path: 'search/:query',
    component: GitSearchComponent,
    data: { title: 'Git Search' }
  },
  {
    path: 'search/:query/:pg',
    component: GitSearchComponent,
    data: { title: 'Git Search page: 1' }
  },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent,
    HomePageComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
