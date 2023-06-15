import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    HeaderComponent,
    FooterComponent,
    MaincomponentComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  gallery=["gallery Image","gallery Image","gallery Image","gallery Image"]
 }
