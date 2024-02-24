import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormControlComponent, MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { ApiService } from 'src/app/services/api/api.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-add-url',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,CommonModule,CommonModule,
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
    MdbValidationModule,NavbarComponent
    
 
  ],
  templateUrl: './add-url.component.html',
  styleUrl: './add-url.component.scss',
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AddUrlComponent {

  urlForm: FormGroup;
  hashedUrl: string;

  constructor(private fb: FormBuilder, 
    private apiService: ApiService) {
    this.urlForm = this.fb.group({
      url: ['', Validators.required],
      source: [''],
      medium: [''],
      campaign: [''],
      term: [''],
      content: [''],
    });
  }

  onSubmit() {
    if (this.urlForm.valid) {
      const longUrl = this.urlForm.value.url;
      const basicUtm = {
        source: this.urlForm.value.source,
        medium: this.urlForm.value.medium,
        campaign: this.urlForm.value.campaign,
        term: this.urlForm.value.term,
        content: this.urlForm.value.content
      };
      console.log(basicUtm)
      const observer: Observer<any> = {
        next: (response: any) => {
          this.hashedUrl = response.hashedUrl;
        },
        error: (error: any) => {
          console.error('Error generating hashed URL:', error);
        },
        complete: () => {
          // Handle completion if needed
        }
      };
      this.apiService.generateHashedUrl(longUrl, basicUtm).subscribe(observer);
    }
  }
  

}
