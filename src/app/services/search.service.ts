import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Search } from '../appInterface/search.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getSearches(searchTerm: String): Observable<Search> {
    console.log("Search term :", searchTerm.trim());
    if (searchTerm.trim()===""){
      return of();
    } 
    else{
      return this.http.get<Search>(this.url+'/all_tasks' + '?q=' + searchTerm.trim().toLowerCase())
    }
  
  }

}
