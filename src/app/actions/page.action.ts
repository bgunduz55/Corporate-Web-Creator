import { Page } from '../models/page';

export class GetPages {
  static readonly type = '[Page] Get All';
}

export class GetPage {
  static readonly type = '[Page] Get One';

  constructor(public payload: string) {}
}

export class SetSelectedPage {
  static readonly type = '[Page] Set';

  constructor(public payload: Page) {}
}

export class GetGroups {
  static readonly type = '[Groups] Get All';
}

export class GetActiveSubstances {
  static readonly type = '[ActiveSubstances] Get All';
}

export class GetSelectedLanguage {
  static readonly type = '[Language] Get All';
}

export class SetSelectedLanguage {
  static readonly type = '[Language] Set';

  constructor(public payload: string) {}
}

export class GetIndexPage {
  static readonly type = '[IndexPage] Get All';
}

export class GetHeaderFooter {
  static readonly type = '[HeaderFooter] Get All';
}