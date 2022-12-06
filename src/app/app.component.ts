import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seo-app';
  constructor(private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit() {
    this.metaTagService.addTags([
      {name:'keywords',content:'Angular SEO,Angular Universal'},
      {name:'robots',content:'index,follow'},
      {name:'viewport',content:'width=device-width,intial-scale:1'},
      {name:'charset',content:'UTF-8'}
    ])
  }
}
