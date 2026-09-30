import { Injectable, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { projects, Project } from './projects';
import { englishProjects } from './projects.en';
@Injectable({providedIn: 'root'})
export class LanguageService {
  private router = inject(Router);
  en = signal(new URLSearchParams(location.search).get('lang') === 'en');
  t(nl: string, en: string) { return this.en() ? en : nl; }
  project(project: Project): Project { return this.en() ? {...project, ...englishProjects[project.id]} : project; }
  constructor() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.en.set(this.router.parseUrl(event.urlAfterRedirects).queryParams['lang'] === 'en');
        this.metadata(event.urlAfterRedirects);
      }
    });
  }
  set(language: 'nl' | 'en') {
    this.router.navigate([], {queryParams: {lang: language}, queryParamsHandling: 'merge', preserveFragment: true});
  }
  private metadata(url: string) {
    document.documentElement.lang = this.en() ? 'en' : 'nl';
    const path = url.split(/[?#]/)[0];
    const project = projects.find(p => path === '/work/' + p.slug);
    const title = project ? this.project(project).title : ({'/': this.t('Softwareontwikkelaar','Software Developer'),'/work': this.t('Projecten','Work'),'/about': this.t('Over mij','About'),'/play': 'Play'} as Record<string,string>)[path] || this.t('Niet gevonden','Not found');
    document.title = title + ' · François Manywa';
    document.querySelector('meta[name="description"]')?.setAttribute('content', project ? this.project(project).description : this.t('François Manywa, junior softwareontwikkelaar in Antwerpen. .NET backend, full stack, AI en data. Ontdek mijn projecten en werkwijze.', 'François Manywa, junior software developer in Antwerp. .NET backend, full stack, AI and data. Explore my projects and approach.'));
  }
}
