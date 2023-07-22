import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetPages, SetSelectedPage, GetPage, GetGroups, GetActiveSubstances, GetSelectedLanguage, SetSelectedLanguage, GetIndexPage, GetHeaderFooter } from '../actions/page.action';
import { tap } from 'rxjs/operators';
import { PageService } from '../services/page.service';
import { Page } from '../models/page';
import { Injectable } from '@angular/core';
import { Group } from '../models/group';
import { ActiveSubstance } from '../models/active_substance';

export class PageStateModel {
  pages: Page[];
  groups: Group[];
  active_substances: ActiveSubstance[];
  page: Page;
  indexPage: Page;
  headerFooter: Page;
  language: string;
  selectedPage: Page;
}

@State<PageStateModel>({
  name: 'pages',
  defaults: {
    pages: [],
    groups: [],
    active_substances: [],
    page: null,
    indexPage: null,
    headerFooter: null,
    language: 'tr',
    selectedPage: null,
  },
})

@Injectable()
export class PageState {
  constructor(private pageService: PageService) { }

  @Selector()
  static getPageList(state: PageStateModel) {
    return state.pages;
  }

  @Selector()
  static getGroupList(state: PageStateModel) {
    return state.groups;
  }

  @Selector()
  static getActiveSubstanceList(state: PageStateModel) {
    return state.active_substances;
  }

  @Selector()
  static getPage(state: PageStateModel) {
    return state.page;
  }

  @Selector()
  static getIndexPage(state: PageStateModel) {
    return state.indexPage;
  }

  @Selector()
  static getHeaderFooter(state: PageStateModel) {
    return state.headerFooter;
  }

  @Selector()
  static getSelectedPage(state: PageStateModel) {
    return state.selectedPage;
  }

  @Selector()
  static getSelectedLanguage(state: PageStateModel) {
    return state.language;
  }

  @Action(GetPages)
  getPages({ getState, setState }: StateContext<PageStateModel>) {
    return this.pageService.fetchPages().pipe(
      tap(result => {
        const state = getState();
        setState({
          ...state,
          pages: result,
        });
      }),
    );
  }

  @Action(GetPage)
  getPage({ getState, setState }: StateContext<PageStateModel>, { payload }: GetPage) {
    return this.pageService.fetchPage(payload).pipe(
      tap(result => {
        const state = getState();
        setState({
          ...state,
          page: result && result.length ? result[0] : null,
        });
      }),
    );
  }

  @Action(GetIndexPage)
  getIndexPage({ getState, setState }: StateContext<PageStateModel>) {
    return this.pageService.fetchIndexPage().pipe(
      tap(result => {
        const state = getState();
        setState({
          ...state,
          indexPage: result && result.length ? result[0] : null,
        });
      }),
    );
  }

  @Action(GetHeaderFooter)
  getHeaderFooter({ getState, setState }: StateContext<PageStateModel>) {
    return this.pageService.fetchHeaderFooter().pipe(
      tap(result => {
        const state = getState();
        setState({
          ...state,
          headerFooter: result && result.length ? result[0] : null,
        });
      }),
    );
  }


  @Action(SetSelectedPage)
  setSelectedPageId({ getState, setState }: StateContext<PageStateModel>, { payload }: SetSelectedPage) {
    const state = getState();
    setState({
      ...state,
      selectedPage: payload,
    });
  }

  @Action(GetGroups)
  getGroups({ getState, setState }: StateContext<PageStateModel>) {
    return this.pageService.fetchGroups().pipe(
      tap(result => {
        const state = getState();
        setState({
          ...state,
          groups: result,
        });
      }),
    );
  }

  @Action(GetActiveSubstances)
  getActiveSubstances({ getState, setState }: StateContext<PageStateModel>) {
    return this.pageService.fetchActiveSubstances().pipe(
      tap(result => {
        const state = getState();
        setState({
          ...state,
          active_substances: result,
        });
      }),
    );
  }

  @Action(GetSelectedLanguage)
  getSelectedLanguage({ getState, setState }: StateContext<PageStateModel>) {
    const state = getState();
    setState({
      ...state,
      language: state.language,
    });
  }

  @Action(SetSelectedLanguage)
  setSelectedLanguage({ getState, setState }: StateContext<PageStateModel>, { payload }: SetSelectedLanguage) {
    const state = getState();
    setState({
      ...state,
      language: payload,
    });
  }
}
