import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-mi-assignment';
  headertitie:string[]=["HOME","PRODUCT","COMPANY","CONTACT"]
  gallerys=["gallery Image","gallery Image","gallery Image","gallery Image"]


  
}
function shareOnFacebook() {
  window.open("https://www.facebook.com/profile.php?id=100014939951559&mibextid=LQQJ4d", "windowName");
}
function shareOnInsta() {
  
}
