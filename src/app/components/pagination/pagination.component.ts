import { Repositories } from 'src/app/interfaces/repositories';
import { GithubRepositoriesService } from './../../services/repositoriesService/github-repositories.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();
  @Output() newRepositories = new EventEmitter<object>();

  constructor(private githubRepositoriesService: GithubRepositoriesService) {}

  get pages(): number[] {
    const pagesArray = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  }

  changePage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.githubRepositoriesService
        .getRepositories(page)
        .subscribe((response) => {
          this.currentPage = page;
          this.pageChange.emit(page);
          this.newRepositories.emit(response);
        });
      this.currentPage = page;
      this.pageChange.emit(page);
    }
  }
}
