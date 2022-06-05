import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';
import { AMBER_COLOR, DANGER_COLOR, ROOT_COLOR, SUCCESS_COLOR } from '../../constants';
import { Utilities } from '../../utilities';

@Component({
  selector: 'mtl-tree-filter',
  templateUrl: './tree-filter.component.html',
  styleUrls: ['./tree-filter.component.css']
})
export class TreeFilterComponent implements OnChanges {

  @Input() inputData;
  @Input() status = ['all', 'ok', 'critical', 'warning'];
  @Input() statusType = 'health';
  allTypes;
  dropdownData: any = new BehaviorSubject<any[]>([]);
  filtervalue: any;
  public isDropdownDataLoading = true;
  public initialState = true;
  public tabs: any[] = [];
  public tabdata: any[] = [];
  public filterArray: any[] = [];

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  @Output() private setSelection: EventEmitter<any> = new EventEmitter<any>();
  @Output() private resetSelection: EventEmitter<any> = new EventEmitter<any>();
  @Output() private loadTopology: EventEmitter<any> = new EventEmitter<any>();

  ngAfterViewInit() {
    if (this.inputData) {
      setTimeout(() => {
        // this.copytdata = Utilities.deepClone(this.inputData)
        // this.default = this.inputData.children[0];
        this.tabs = this.inputData.children;
        this.filtervalue = this.tabs[0].name;
        if (this.inputData.children !== null) {
          this._filterApplied();
          this.tabdata = this.tabs[0].children;
        }
        // this._loadTopology(this.inputData)
        const event: any = {
          nextId: 0
        }
        this.beforeChange(event)
        this.cdr.detectChanges();
      })

    }
  }

  ngOnChanges() {
    if (this.inputData) {
      setTimeout(() => {
        let data = Utilities._mapData([this.inputData])
        this.inputData = data[0];
        this.tabs = this.inputData.children;
        this.allTypes = this.inputData.children;
        this.dropdownData.next(this.inputData.children[0].children);
        if (this.inputData.children !== null) {
          this._filterApplied();
          this.tabdata = this.tabs[0].children;
          this.dropdownData.next(this.tabdata);
        }
        // this._loadTopology(this.inputData)
        const event: any = {
          nextId: 0
        }
        this.beforeChange(event)
        this.cdr.detectChanges();
      })
    }
  }

  selection(selected) {
    this.setSelection.emit(selected);
  }

  _resetSelection() {
    this.resetSelection.emit();
  }
  _loadTopology(event) {
    // this.loadTopology.emit(event);
  }

  public _filterItems(value: string) {
    let dataArray;
    dataArray = Object.values(this.dropdownData.value);
    let filteredArray: any[];
    if (!value) {
      this._filterApplied();
    } else {
      const filteredResults = dataArray.filter(val => {
        if (val.name.toLowerCase().includes(value.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
      filteredArray = filteredResults;
      this.dropdownData.next(filteredArray);
    }
    // return this.searchOptions.value.filter(singleItem => singleItem['name'].toLowerCase().includes(value.toLowerCase()));
  }

  public beforeChange($event: NgbNavChangeEvent) {
    if (!this.allTypes) {
      this.allTypes = this.inputData.children;
    }
    if ($event.nextId === 0) {
      this.isDropdownDataLoading = true;
      this.dropdownData.next(Utilities._mergechildren(this.tabdata));
      this.tabdata = Utilities._mergechildren(this.tabs)
      this.filterArray.length = 0;
      this.tabs = this.inputData.children;
      this._filterApplied();
    } else {
      this.isDropdownDataLoading = true;
      this.initialState = false;
      let data = Utilities.deepClone(this.inputData)
      data.health = this.status[$event.nextId]
      this.filterArray.length = 0;
      this.filterArray.push(this.status[$event.nextId]);
      const filter = Utilities._filterData(data.children, this.statusType, this.status[$event.nextId])
      data.children = filter;
      // this.dropdownData.next(this.tabdata);
      if (this.filterArray.length === 0 && this.status[$event.nextId] !== this.status[0]) {
      }
      data = Utilities._mapData([data]);
      this.tabs = data[0].children;
      this._filterApplied();
    }
  }

  _filterApplied($event?) {
    this.filtervalue = this.filtervalue ? this.filtervalue : this.tabs[0].name;
    this.tabdata = this.tabs.filter(item => item.name === this.filtervalue)[0] ?
      this.tabs.filter(item => item.name === this.filtervalue) : [];
    this.dropdownData.next(Utilities._mergechildren(this.tabdata));
    this.isDropdownDataLoading = false;
  }
  getHealth(health:string) {
    health = health.toLowerCase();
    switch (health) {
      case 'ok': return SUCCESS_COLOR;
      case 'critical': return DANGER_COLOR;
      case 'warning': AMBER_COLOR;
      default: return ROOT_COLOR;
    }
  }

}
