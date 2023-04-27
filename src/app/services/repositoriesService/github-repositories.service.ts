import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubRepositoriesService {
  private apiUrl = `https://api.github.com/search/repositories`;
  constructor(private http: HttpClient) {}

  getRepositories(page: number, search = 'br') {
    const params = {
      q: search,
      page: page.toString(),
      per_page: 10,
    };
    return this.http.get(this.apiUrl, { params });
  }

  searchRepository(repositoru = 'br') {
    const params = {
      q: repositoru,
      page: 1,
      per_page: 10,
    };
    return this.http.get(this.apiUrl, { params });
  }
}
