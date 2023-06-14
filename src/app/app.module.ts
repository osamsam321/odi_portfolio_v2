import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './comp/nav/nav.component';
import { MainPageComponent } from './comp/main-page/main-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainBodyComponent } from './comp/main-body/main-body.component';
import { HomeComponent } from './comp/page_type/home/home.component';
import { ProjectsComponent } from './comp/page_type/projects/projects.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './comp/about-me/about-me.component';
import { MiscComponent } from './comp/misc/misc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// const routes: Routes = [
//   { path: '/home', component: HomeComponent },
//   { path: '/projects', component:  ProjectsComponent }

// ];


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about_me', component: AboutMeComponent },
  { path: 'misc', component: MiscComponent }


];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainPageComponent,
    MainBodyComponent,
    HomeComponent,
    ProjectsComponent,
    AboutMeComponent,
    MiscComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes) 
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
