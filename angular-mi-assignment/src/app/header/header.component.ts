import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  
            tittles:string[]=["about","company","services"]
}

function shareOnInsta() {
  window.open("https://www.instagram.com/thamos_michael.25/", "windowName");
}