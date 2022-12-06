import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit() {
  this.titleService.setTitle("My App: About me");
    this.metaTagService.updateTag({name: 'description', content: "I'm a developer who writes sometimes."});
    //TODO: Make Other top-level components do this so the above content doesn't get stuck there!
  }
}
