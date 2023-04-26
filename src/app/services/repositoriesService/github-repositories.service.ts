import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubRepositoriesService {
  private apiUrl = `https://api.github.com/search/repositories`;
  constructor(private http: HttpClient) {}

  getRepositories(page: number) {
    const params = {
      q: 'br',
      page: page.toString(),
      per_page: 10,
    };
    return this.http.get(this.apiUrl, { params });
  }
}
