import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Search } from '../appInterface/search.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url = 'http://localhost:3000/team-b/all_tasks'
  constructor(private http: HttpClient) { }

  getSearches(searchTerm: String): Observable<Search> {
    console.log("Search term :", searchTerm.trim());
    if (searchTerm.trim()===""){
      return of();
    } 
    else{
      return this.http.get<Search>(this.url + '?q=' + searchTerm.trim().toLowerCase())
    }
  
  }

}
