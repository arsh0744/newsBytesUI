import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterModule } from '@angular/router';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { AddUrlComponent } from '../add-url/add-url.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,CommonModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    AddUrlComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavbarComponent {

  currentNavItem : string = ""


  private constNavLinks = ['dashboard','addUrl','history'] ;


  constructor(private router : Router )
  {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
      }

      if (event instanceof NavigationEnd) {
        this.currentNavItem = event.url.split('/')[1]


        this.constNavLinks.forEach(
          (x:string) => 
          {
            
            let currentNavElement = document.getElementById(x) ;
            if(x===this.currentNavItem)
            {
              currentNavElement.classList.add('active') ;
            }
            else
            {
              currentNavElement.classList.remove('active') ;
            }
          }
        )




      }

      if (event instanceof NavigationCancel) {
      }

      if (event instanceof NavigationError) {
      }
    });
  }



updateActiveNavLinkItem()
{
  
}



}
