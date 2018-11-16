import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  get services() {
    return [{
      title: 'Phone Banking',
      description: 'Our experienced volunteers will phone bank for our endorsed ' +
        'candidates at least three times during the course of a campaign.',
      image: '/assets/phonebank.jpg',
      imageAlt: 'Phone Bank',
      icon: 'phone'
    }, {
      title: 'Block Walking',
      description: 'We will set up targeted block-walks for our endorsed candidates (location permitting)',
      image: '/assets/block_walking.jpg',
      imageAlt: '',
      icon: 'directions_walk'
    }, {
      title: 'Data Entry',
      description: 'Data collection is imperative to a successful campaign, ' +
        'volunteers will enter data for at least eight collective hours for our endorsed candidates.',
      image: '/assets/data_entry.jpg',
      imageAlt: '',
      icon: 'keyboard'
    }, {
      title: 'Social Media Marketing',
      description: 'Any activity done on behalf of an endorsed candidate will be put on ' +
        'multiple social media platforms utilizing the hashtag of that particular campaign.',
      imageAlt: '',
      icon: 'people',
      image: '/assets/phonebank.jpg',
    }];
  }

  constructor() { }

  ngOnInit() {
  }

}
