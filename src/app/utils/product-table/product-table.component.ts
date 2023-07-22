import { Component, OnInit, Input } from '@angular/core';
import { PageContent } from 'src/app/models/page-content';
import { GlobalTexts } from 'src/globals/globalTexts';
import { Product } from '../../models/product';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Group } from '../../models/group';
import { PageState } from '../../states/page.state';
import { ActiveSubstance } from '../../models/active_substance';
import { GetGroups, GetActiveSubstances } from '../../actions/page.action';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  @Input() pageData: PageContent = null;
  @Input() language: string = null;
  restUrl = GlobalTexts.restUrl;
  showAlert: boolean = true;

  @Select(PageState.getGroupList) groups$: Observable<Group[]>;
  @Select(PageState.getActiveSubstanceList) activeSubstances$: Observable<ActiveSubstance[]>;
  groups: Group[];
  activeSubstances: ActiveSubstance[];
  products: Product[];
  form: FormGroup;
  pageElementCount: number = 10;
  pageOfItems: Array<Product>;

  constructor(private fb: FormBuilder, private store: Store, private _location: Location) {
    this.form = this.fb.group({group: null, active_substance: null, textFilter: null});
  }

  ngOnInit(): void {
    this.products = this.pageData.products;
    this.callLists();
  }
  callLists() {
    this.store.dispatch(new GetGroups()).subscribe(data => { this.groups = data.pages.groups; });
    this.store.dispatch(new GetActiveSubstances()).subscribe(data => { this.activeSubstances = data.pages.activeSubstances; });
  }

  filterItems(){
    const {group, active_substance, textFilter} = this.form.getRawValue();
    this.products = [...this.pageData.products];
    this.products = group && group !== null ? this.products.filter(val => val.group === group) : this.products;
    this.products = active_substance ? this.products.filter(val => val.active_substances === active_substance) : this.products;
    this.products = textFilter ? this.products.filter(val => val.title.toLowerCase().includes(textFilter.toLowerCase())) : this.products;

  }

  onChangePage(pageOfItems: Array<Product>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

getGroupName(groups: Group[], id: number): string {
  return groups.find(val => val.id === id)?.name;
}

getActiveSubstanceName(activeSubstances: ActiveSubstance[], id: number): string {
  return activeSubstances.find(val => val.id === id)?.name;
}

goBack() {
  this._location.back();
}

}
