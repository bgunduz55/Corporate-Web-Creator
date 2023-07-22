import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Page } from '../models/page';
import { GlobalTexts } from '../../globals/globalTexts';
import { Group } from '../models/group';
import { ActiveSubstance } from '../models/active_substance';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  constructor(private http: HttpClient) {}
  get headers(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
  }
  fetchPages() {
    return this.http
      .get<Page[]>(`${GlobalTexts.restUrl}/pages`, {
        headers: this.headers,
      })
      .pipe();
  }
  
  fetchPage(payload) {
    return this.http
      .get<Page[]>(`${GlobalTexts.restUrl}/pages?routeUrl=${payload}`, {
        headers: this.headers,
      })
      .pipe();
  }

  fetchIndexPage() {
    return this.http
      .get<Page[]>(`${GlobalTexts.restUrl}/index-pages`, {
        headers: this.headers,
      })
      .pipe();
  }

  fetchHeaderFooter() {
    return this.http
      .get<Page[]>(`${GlobalTexts.restUrl}/header-footers`, {
        headers: this.headers,
      })
      .pipe();
  }

  deletePage(id: number) {
    return this.http.delete(`${GlobalTexts.restUrl}/user/page/` + id, {
      headers: this.headers,
    });
  }

  addPage(payload: Page) {
    let body = `page=${JSON.stringify(payload)}`;
    return this.http.post<Page>(`${GlobalTexts.restUrl}/user/page`, body, { headers: this.headers });
  }

  updatePage(payload: Page) {
    let body = `page=${JSON.stringify(payload)}`;
    return this.http.put<Page>(`${GlobalTexts.restUrl}/user/page`, body, { headers: this.headers });
  }

  fetchGroups() {
    return this.http
      .get<Group[]>(`${GlobalTexts.restUrl}/groups`, {
        headers: this.headers,
      })
      .pipe();
  }

  fetchActiveSubstances() {
    return this.http
      .get<ActiveSubstance[]>(`${GlobalTexts.restUrl}/active-substances`, {
        headers: this.headers,
      })
      .pipe();
  }
}
