import { Component } from '@angular/core';

@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css']
})
export class MaincomponentComponent {
  tittles =[
    {title:"Header",content:"Lorem ipsum dolor sit amet;consectetuer adipiscing elit.sed diam nanummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat"},
    {title:"Sub-header",content:"The 21st Century Challenge of Healthcare Living a healthy life is a basic human need. Research shows that health care services are only one of a range of factors affecting peoples’ health. As multiple research reports show, an individual’s health behaviours and physical environment are the key drivers, with health services themselves only influencing 10% to 20% of health outcomes."}
    
  ];

  headertitie:string[]=["HOME","PRODUCT","COMPANY","CONTACT"]
}
