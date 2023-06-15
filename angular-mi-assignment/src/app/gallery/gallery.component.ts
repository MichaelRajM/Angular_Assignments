import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent {
  gallery=[
    {data:"gallery image",color:"green"},
    {data:"gallery image",color:"blue"},
    {data:"gallery image",color:"red"},
    {data:"gallery image",color:"orange"}
  ]
  }
  
