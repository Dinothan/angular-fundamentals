import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './service/git-search.service';
import { GitSearch } from './git-search';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitSearchService]
})
export class AppComponent implements OnInit {

  searchResults: GitSearch;

  constructor(private GitSearchService: GitSearchService) {

  }

  ngOnInit() {

    this.GitSearchService.gitSearch('angular').then((response: any) => {

      //alert("Total Libraries Found:" + response.total_count);
      this.searchResults = response;
    }, (error) => {
      alert("Error: " + error.statusText);
    })

    this.GitSearchService.gitUser('tom').then((response: any) => {

      //alert("User count:" + response.total_count);
    }, (error) => {
      alert("Error: " + error.statusText);
    })

  }

  title = 'angular-fundamentals';
}
