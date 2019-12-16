import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  host: {
    'class': 'page'
  },
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent implements OnInit {

  code = {
    includeOrder: `import { ShareButtonsModule } from '@odilo/buttons';

@NgModule({
 imports: [
    ShareButtonsModule.withConfig({
      include: ['facebook', 'twitter', 'pinterest']
    })
 ]
})`,
    buttonsOrder: `<share-buttons [include]="['telegram', 'twitter', 'pinterest', 'whatsapp']"></share-buttons>`,
    metaTags: `<meta property="og:title" content="European Travel Destinations">
<meta property="og:description" content="Offering tour packages for individuals or groups.">
<meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg">
<meta property="og:url" content="http://euro-travel-example.com/index.html">`
  };

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Frequently Asked Questions');
  }

}
