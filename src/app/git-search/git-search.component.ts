import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../../app/service/git-search.service';
import { GitSearch } from '../git-search';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})


export class GitSearchComponent implements OnInit {

  searchResults: GitSearch;
  searchQuery: string;
  title: string;
  displayQuery: string;
  page: any;
  page1: any;
  page2: any;


  constructor(
    private GitSearchService: GitSearchService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.searchQuery = params.get('query');
      this.displayQuery = params.get('query');
      this.gitSearch('');
    })

    this.route.data.subscribe((result) => {
      this.title = result.title
    });

  }


  gitSearch = (query: string) => {

    this.GitSearchService.gitSearch(this.searchQuery).then((response: any) => {
      this.searchResults = response;
      let temp = [];
      let pg1 = Array();
      let pg2 = Array();
      let pg3 = Array();

      response.items.forEach(function (items) {
        temp.push(items);
      });

      for (let i = 0; i < 5; i++) {
        pg1.push(temp[i]);
      }
      for (let i = 5; i < 10; i++) {
        pg2.push(temp[i]);
      }
      for (let i = 10; i < 15; i++) {
        pg3.push(temp[i]);
      }

      this.page = pg1;
      this.page1 = pg2;
      this.page2 = pg3;

    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }


  sendQuery = () => {
    //this.page = null;
    this.router.navigate(['/search/' + this.searchQuery]);
  }

  // pagination = () => {
  //   this.page1 = null;
  //   this.router.navigate(['/search/' + this.searchQuery + '/' + this.page3]);
  // }

  selectNext(el) {
    el.selectedIndex += 1;
  }
  selectPrev(el) {
    el.selectedIndex -= 1;
  }
}