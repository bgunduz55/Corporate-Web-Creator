import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { GetIndexPage } from '../actions/page.action';
import { PageState } from '../states/page.state';

@Injectable({
    providedIn: 'root',
  })
export class IndexPageResolver implements Resolve<PageState> {

  constructor(private store: Store) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PageState> {
    return this.store.dispatch(new GetIndexPage());
  }
}