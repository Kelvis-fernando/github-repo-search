import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  mock = [
    {
      id: 2126244,
      node_id: 'MDEwOlJlcG9zaXRvcnkyMTI2MjQ0',
      name: 'bootstrap',
      full_name: 'twbs/bootstrap',
      private: false,
      owner: {
        login: 'twbs',
        id: 2918581,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjI5MTg1ODE=',
        avatar_url: 'https://avatars.githubusercontent.com/u/2918581?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/twbs',
        html_url: 'https://github.com/twbs',
        followers_url: 'https://api.github.com/users/twbs/followers',
        following_url:
          'https://api.github.com/users/twbs/following{/other_user}',
        gists_url: 'https://api.github.com/users/twbs/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/twbs/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/twbs/subscriptions',
        organizations_url: 'https://api.github.com/users/twbs/orgs',
        repos_url: 'https://api.github.com/users/twbs/repos',
        events_url: 'https://api.github.com/users/twbs/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/twbs/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/twbs/bootstrap',
      description:
        'The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.',
      fork: false,
      url: 'https://api.github.com/repos/twbs/bootstrap',
      forks_url: 'https://api.github.com/repos/twbs/bootstrap/forks',
      keys_url: 'https://api.github.com/repos/twbs/bootstrap/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/twbs/bootstrap/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/twbs/bootstrap/teams',
      hooks_url: 'https://api.github.com/repos/twbs/bootstrap/hooks',
      issue_events_url:
        'https://api.github.com/repos/twbs/bootstrap/issues/events{/number}',
      events_url: 'https://api.github.com/repos/twbs/bootstrap/events',
      assignees_url:
        'https://api.github.com/repos/twbs/bootstrap/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/twbs/bootstrap/branches{/branch}',
      tags_url: 'https://api.github.com/repos/twbs/bootstrap/tags',
      blobs_url: 'https://api.github.com/repos/twbs/bootstrap/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/twbs/bootstrap/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/twbs/bootstrap/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/twbs/bootstrap/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/twbs/bootstrap/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/twbs/bootstrap/languages',
      stargazers_url: 'https://api.github.com/repos/twbs/bootstrap/stargazers',
      contributors_url:
        'https://api.github.com/repos/twbs/bootstrap/contributors',
      subscribers_url:
        'https://api.github.com/repos/twbs/bootstrap/subscribers',
      subscription_url:
        'https://api.github.com/repos/twbs/bootstrap/subscription',
      commits_url: 'https://api.github.com/repos/twbs/bootstrap/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/twbs/bootstrap/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/twbs/bootstrap/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/twbs/bootstrap/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/twbs/bootstrap/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/twbs/bootstrap/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/twbs/bootstrap/merges',
      archive_url:
        'https://api.github.com/repos/twbs/bootstrap/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/twbs/bootstrap/downloads',
      issues_url: 'https://api.github.com/repos/twbs/bootstrap/issues{/number}',
      pulls_url: 'https://api.github.com/repos/twbs/bootstrap/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/twbs/bootstrap/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/twbs/bootstrap/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/twbs/bootstrap/labels{/name}',
      releases_url: 'https://api.github.com/repos/twbs/bootstrap/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/twbs/bootstrap/deployments',
      created_at: '2011-07-29T21:19:00Z',
      updated_at: '2023-04-26T11:55:33Z',
      pushed_at: '2023-04-26T12:20:11Z',
      git_url: 'git://github.com/twbs/bootstrap.git',
      ssh_url: 'git@github.com:twbs/bootstrap.git',
      clone_url: 'https://github.com/twbs/bootstrap.git',
      svn_url: 'https://github.com/twbs/bootstrap',
      homepage: 'https://getbootstrap.com',
      size: 231794,
      stargazers_count: 163089,
      watchers_count: 163089,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: true,
      has_discussions: true,
      forks_count: 78293,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 373,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [
        'bootstrap',
        'css',
        'css-framework',
        'html',
        'javascript',
        'sass',
        'scss',
      ],
      visibility: 'public',
      forks: 78293,
      open_issues: 373,
      watchers: 163089,
      default_branch: 'main',
      score: 1.0,
    },
    {
      id: 6094683,
      node_id: 'MDEwOlJlcG9zaXRvcnk2MDk0Njgz',
      name: 'bootstrap',
      full_name: 'angular-ui/bootstrap',
      private: false,
      owner: {
        login: 'angular-ui',
        id: 1530011,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjE1MzAwMTE=',
        avatar_url: 'https://avatars.githubusercontent.com/u/1530011?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/angular-ui',
        html_url: 'https://github.com/angular-ui',
        followers_url: 'https://api.github.com/users/angular-ui/followers',
        following_url:
          'https://api.github.com/users/angular-ui/following{/other_user}',
        gists_url: 'https://api.github.com/users/angular-ui/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/angular-ui/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/angular-ui/subscriptions',
        organizations_url: 'https://api.github.com/users/angular-ui/orgs',
        repos_url: 'https://api.github.com/users/angular-ui/repos',
        events_url: 'https://api.github.com/users/angular-ui/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/angular-ui/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/angular-ui/bootstrap',
      description:
        'PLEASE READ THE PROJECT STATUS BELOW.  Native AngularJS (Angular) directives for Bootstrap. Smaller footprint (20kB gzipped), no 3rd party JS dependencies (jQuery, bootstrap JS) required. Please read the README.md file before submitting an issue!',
      fork: false,
      url: 'https://api.github.com/repos/angular-ui/bootstrap',
      forks_url: 'https://api.github.com/repos/angular-ui/bootstrap/forks',
      keys_url:
        'https://api.github.com/repos/angular-ui/bootstrap/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/angular-ui/bootstrap/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/angular-ui/bootstrap/teams',
      hooks_url: 'https://api.github.com/repos/angular-ui/bootstrap/hooks',
      issue_events_url:
        'https://api.github.com/repos/angular-ui/bootstrap/issues/events{/number}',
      events_url: 'https://api.github.com/repos/angular-ui/bootstrap/events',
      assignees_url:
        'https://api.github.com/repos/angular-ui/bootstrap/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/angular-ui/bootstrap/branches{/branch}',
      tags_url: 'https://api.github.com/repos/angular-ui/bootstrap/tags',
      blobs_url:
        'https://api.github.com/repos/angular-ui/bootstrap/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/angular-ui/bootstrap/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/angular-ui/bootstrap/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/angular-ui/bootstrap/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/angular-ui/bootstrap/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/angular-ui/bootstrap/languages',
      stargazers_url:
        'https://api.github.com/repos/angular-ui/bootstrap/stargazers',
      contributors_url:
        'https://api.github.com/repos/angular-ui/bootstrap/contributors',
      subscribers_url:
        'https://api.github.com/repos/angular-ui/bootstrap/subscribers',
      subscription_url:
        'https://api.github.com/repos/angular-ui/bootstrap/subscription',
      commits_url:
        'https://api.github.com/repos/angular-ui/bootstrap/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/angular-ui/bootstrap/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/angular-ui/bootstrap/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/angular-ui/bootstrap/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/angular-ui/bootstrap/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/angular-ui/bootstrap/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/angular-ui/bootstrap/merges',
      archive_url:
        'https://api.github.com/repos/angular-ui/bootstrap/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/angular-ui/bootstrap/downloads',
      issues_url:
        'https://api.github.com/repos/angular-ui/bootstrap/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/angular-ui/bootstrap/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/angular-ui/bootstrap/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/angular-ui/bootstrap/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/angular-ui/bootstrap/labels{/name}',
      releases_url:
        'https://api.github.com/repos/angular-ui/bootstrap/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/angular-ui/bootstrap/deployments',
      created_at: '2012-10-05T18:27:01Z',
      updated_at: '2023-04-25T02:30:17Z',
      pushed_at: '2019-02-10T12:36:40Z',
      git_url: 'git://github.com/angular-ui/bootstrap.git',
      ssh_url: 'git@github.com:angular-ui/bootstrap.git',
      clone_url: 'https://github.com/angular-ui/bootstrap.git',
      svn_url: 'https://github.com/angular-ui/bootstrap',
      homepage: 'http://angular-ui.github.io/bootstrap/',
      size: 9938,
      stargazers_count: 14380,
      watchers_count: 14380,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      has_discussions: false,
      forks_count: 6897,
      mirror_url: null,
      archived: true,
      disabled: false,
      open_issues_count: 337,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 6897,
      open_issues: 337,
      watchers: 14380,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 3744545,
      node_id: 'MDEwOlJlcG9zaXRvcnkzNzQ0NTQ1',
      name: 'bootstrap-datepicker',
      full_name: 'uxsolutions/bootstrap-datepicker',
      private: false,
      owner: {
        login: 'uxsolutions',
        id: 16959059,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjE2OTU5MDU5',
        avatar_url: 'https://avatars.githubusercontent.com/u/16959059?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/uxsolutions',
        html_url: 'https://github.com/uxsolutions',
        followers_url: 'https://api.github.com/users/uxsolutions/followers',
        following_url:
          'https://api.github.com/users/uxsolutions/following{/other_user}',
        gists_url: 'https://api.github.com/users/uxsolutions/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/uxsolutions/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/uxsolutions/subscriptions',
        organizations_url: 'https://api.github.com/users/uxsolutions/orgs',
        repos_url: 'https://api.github.com/users/uxsolutions/repos',
        events_url: 'https://api.github.com/users/uxsolutions/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/uxsolutions/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/uxsolutions/bootstrap-datepicker',
      description: 'A datepicker for twitter bootstrap (@twbs)',
      fork: false,
      url: 'https://api.github.com/repos/uxsolutions/bootstrap-datepicker',
      forks_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/forks',
      keys_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/teams',
      hooks_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/hooks',
      issue_events_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/events',
      assignees_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/tags',
      blobs_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/languages',
      stargazers_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/stargazers',
      contributors_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/contributors',
      subscribers_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/subscribers',
      subscription_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/subscription',
      commits_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/merges',
      archive_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/downloads',
      issues_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/labels{/name}',
      releases_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/uxsolutions/bootstrap-datepicker/deployments',
      created_at: '2012-03-17T01:11:40Z',
      updated_at: '2023-04-26T03:00:00Z',
      pushed_at: '2023-04-22T16:58:42Z',
      git_url: 'git://github.com/uxsolutions/bootstrap-datepicker.git',
      ssh_url: 'git@github.com:uxsolutions/bootstrap-datepicker.git',
      clone_url: 'https://github.com/uxsolutions/bootstrap-datepicker.git',
      svn_url: 'https://github.com/uxsolutions/bootstrap-datepicker',
      homepage: '',
      size: 6020,
      stargazers_count: 12590,
      watchers_count: 12590,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: true,
      has_discussions: false,
      forks_count: 6203,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 875,
      license: {
        key: 'apache-2.0',
        name: 'Apache License 2.0',
        spdx_id: 'Apache-2.0',
        url: 'https://api.github.com/licenses/apache-2.0',
        node_id: 'MDc6TGljZW5zZTI=',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['bootstrap', 'bootstrap-datepicker', 'javascript'],
      visibility: 'public',
      forks: 6203,
      open_issues: 875,
      watchers: 12590,
      default_branch: 'master',
      score: 1.0,
    },
  ];
}
