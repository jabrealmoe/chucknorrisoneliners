import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chuck-norris-jokes';

  images = [
    {

      imageSrc: 'https://burst.shopifycdn.com/photos/laptop-from-above.jpg',
      imageAlt: 'nature1'
    },
    {
      imageSrc: 'https://i.ytimg.com/vi/KvZT3etZIsw/maxresdefault.jpg',
      imageAlt: 'nature2'
    },
    {
      imageSrc: 'https://traveloregon.com/wp-content/uploads/2016/10/MtHoodVillages-07-2000.jpg',
      imageAlt: 'nature3'
    },
    {
      imageSrc: 'https://images.pexels.com/photos/1003914/pexels-photo-1003914.jpeg',
      imageAlt: 'nature4'
    },
    {
      imageSrc: 'https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg',
      imageAlt: 'nature5'
    },
  ]
}
