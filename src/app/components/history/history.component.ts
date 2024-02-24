import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnInit {

  urls: any[] = [];
  private baseUrl = 'https://newsbytesarshjot.netlify.app//.netlify/functions/api/';
  

  constructor(private apiService: ApiService) { }


  ngOnInit() {
    this.getUrls();
  }

  getUrls() {
    this.apiService.getUrls().subscribe(
      (response: any[]) => {
        this.urls = response;
      },
      (error: any) => {
        console.error('Error fetching URLs:', error);
      }
    );
  }



}
