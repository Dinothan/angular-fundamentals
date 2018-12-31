import { Injectable } from '@angular/core';
import { GitSearch } from '../git-search';
import { GitUsers } from '../git-users';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GitSearchService {

  cachedValues: Array<{
    [query: string]: GitSearch
  }> = [];

  cachedValues1: Array<{
    [query: string]: GitUsers
  }> = [];

  constructor(private http: HttpClient) {
  }

  gitSearch = (query: string) => {
    let promise = new Promise((resolve, reject) => {
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query])
      }
      else {
        this.http.get('https://api.github.com/search/repositories?q=' + query).toPromise()
          .then((response) => {
            console.log(query," ",response)
            resolve(response)
          }, (error) => {
            reject(error);
          })
      }
    })
    return promise;
  }

  gitUser = (query: string) => {
    let promise = new Promise((resolve, reject) => {
      if (this.cachedValues1[query]) {
        resolve(this.cachedValues1[query])
      }
      else {
        this.http.get('https://api.github.com/search/users?q=tom' + query).toPromise()
          .then((response) => {
            resolve(response)
          }, (error) => {
            reject(error);
          })
      }

    })
    return promise;
  }

}
