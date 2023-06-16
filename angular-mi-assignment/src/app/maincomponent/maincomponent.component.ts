import { Component } from '@angular/core';

@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css']
})
export class MaincomponentComponent {
  tittles =[
    {title:"Header",content:"ABC inc provides extensive service by way of turn key projects, consultancy, manpower support, onsite and online support during and post implementation. Handholding and guidance is our key strength to be in this industry for more than 25 years."},
    {title:"Sub-header",content:"ABC inc have a combined managent experience of more than 100 years in the jewellery domain. Jilaba is managed by Mr.S.Balagee, Managing Director and Corporate Advisor Mr. S.Jambu Mahadevan, Chartered Accountant. The core management team has the President, Vice President, General Manager, Regional Manager-West and Project Manager ably supporting the top management. The company has the manpower strength that are spread between Head Office at Chennai, Branch Office at Mumbai and also across India for onsite support.Jilaba has deployed efficient customer support executives across India who extend maximum guidance and hand-holding support to clients."}
    
  ];

  headertitie:string[]=["HOME","PRODUCT","COMPANY","CONTACT"]
}
