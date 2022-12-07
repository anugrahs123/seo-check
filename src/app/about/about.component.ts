import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit() {
  this.titleService.setTitle("My App: About me");
    this.metaTagService.updateTag({name: 'description', content: "SEO test purpose"});
    //TODO: Make Other top-level components do this so the above content doesn't get stuck there!
  }

}
