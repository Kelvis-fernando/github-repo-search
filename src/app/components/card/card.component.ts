import { Component, OnInit } from '@angular/core';
import { GithubRepositoriesService } from '../../services/repositoriesService/github-repositories.service';
import { Repositories } from 'src/app/interfaces/repositories';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  repositories!: Repositories[];

  constructor(private githubRepositoriesService: GithubRepositoriesService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.githubRepositoriesService
        .getRepositories(1)
        .subscribe((response: any) => {
          this.repositories = response.items;
        });
    } catch (error) {
      console.error(error);
    }
  }

  async handlePagination(page: number) {
    try {
      this.githubRepositoriesService
        .getRepositories(page)
        .subscribe((response: any) => {
          this.repositories = response.items;
        });
    } catch (error) {
      console.error(error);
    }
  }
}
