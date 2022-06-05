import {
  Component, ViewChild,
  ElementRef, Input, SimpleChanges, Output, EventEmitter, OnDestroy,
  ChangeDetectorRef, OnInit, ViewEncapsulation, Inject
} from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard'
import * as d3 from "d3";
import { hierarchy, tree } from 'd3-hierarchy';
import { zoom, zoomIdentity, zoomTransform } from 'd3-zoom';
import { select } from 'd3-selection';
import { transform } from 'd3-transform';
import 'd3-transition';

import { getTranslation, pathGenerator } from './lib';
import { BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import {
  AMBER_COLOR,
  BACKWARDARROW,
  COLLAPSE, DANGER_COLOR, DEFAULT_TREE_CHILDREN_KEY, DEFAULT_TREE_FORMAT_LABEL_TEXT, DEFAULT_TREE_HEIGHT, DEFAULT_TREE_ITEM_ID,
  DEFAULT_TREE_LEAF_DASH_ARRAY_SIZE, DEFAULT_TREE_NDDE_SIZE, DEFAULT_TREE_NODE_DISTANCE, DEFAULT_TREE_ON_NODE_CLICK,
  DEFAULT_TREE_ON_SELECTION_CLEAR, DEFAULT_TREE_SCALE_EXTENT, DEFAULT_TREE_SCALE_STEP, DEFAULT_TREE_SEARCH_QUERY_KEY,
  DEFAULT_TREE_SVG_CLASS, DEFAULT_TREE_WIDTH, EXPAND, FORWARDARROW, HOVER_COLOR, IMAGEPATH, LEAF_COLOR,
  LINK_COLOR, NODE_COLOR, ROOT_COLOR, SELECTED_COLOR, SUCCESS_COLOR, DEFAULT_TREE_TRANSITION_DURATION, DEFAULT_DETAILS_POPUP,
  DEFAULT_TREE_ISARROWHEAD, DEFAULT_ASSESSMENT_TREE_NODE_DISTANCE, DEFAULT_IS_INTENTED, DEFAULT_IS_SHOW_OPERATIONS, DEFAULT_IS_SHOW_REQUIRED_ACTION, DEFAULT_IS_FIXED_DETAILS, DEFAULT_IS_TOOLTIP
} from '../../constants';
import { TreeModel } from './d3-tree.model';
import { Utilities } from '../../utilities';
import { trigger, transition, style, animate } from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONS } from '../../models/icons';
import { D3Service } from '../../d3.service';
import { TreeType } from "../../models/treetype.enum";
import { osIcons, serviceIcons } from "../../models/os-service-icons";
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'mtl-d3-tree-map',
  templateUrl: './mtl-d3-tree-map.component.html',
  styleUrls: ['./mtl-d3-tree-map.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [NgbAccordionConfig],
  host: {
    "(window:resize)": "updateDimensions()"
  }
})
export class MtlD3TreeMapComponent implements OnInit {
  icons = ICONS;
  public static idCount = 0;
  @Input() public id = '';
  @Input() public isIndented = false;
  @Input() public isZoomOptions = true;
  @Input() public isReset = true;
  @Input() public isExpandable = true;
  @Input() public resetData: TreeModel = hierarchy({});
  @Input() public hideServicesBackButton: boolean = false;
  @Input() public enableStatusTabs: boolean = true;
  @Input() public enableTotalCount: boolean = false;
  @Input() public treeType: TreeType = TreeType.DEFAULT;
  @ViewChild('tree', { static: false }) tree: ElementRef;
  @ViewChild('popover', { static: false }) popover: ElementRef;
  @ViewChild('details', { static: false }) details: ElementRef;
  @Input() public data: TreeModel = hierarchy({});
  @Output() private idChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() private navigation: EventEmitter<any> = new EventEmitter<any>();
  @Output() private appendChild: EventEmitter<any> = new EventEmitter<any>();
  @Output() private gotoParent: EventEmitter<any> = new EventEmitter<any>();
  @Output() private onAction: EventEmitter<any> = new EventEmitter<any>();
  localsearch: any[] = [];
  copytdata: any;
  status = ['all', 'ok', 'critical', 'warning']
  default: any = {};
  isCollapse = false;
  private chartId: any;
  private element: any;
  public tooltipproperties: any[] = [];
  public detailsProperties: any = {};
  public selectedItem: any;
  public tooltipdata: any;
  private margin = { top: 20, right: 120, bottom: 20, left: 120 };
  public isfullscreen = false;
  public dropdownData: any = new BehaviorSubject<any[]>([]);
  private svg: any;
  public search = false;
  public tabs: any[] = []
  public tabdata: any[] = [];
  public dropdownAccordion: any = new BehaviorSubject<any[]>([]);
  public searchQuery
  private zoom;
  public filter = '';
  public loading = false;
  public searchOptions = new BehaviorSubject<any[]>([]);
  @Input() public configuration = {};
  public config = {
    nodeSize: DEFAULT_TREE_NDDE_SIZE,
    nodeDistance: DEFAULT_TREE_NODE_DISTANCE,
    scaleStep: DEFAULT_TREE_SCALE_STEP,
    scaleExtent: DEFAULT_TREE_SCALE_EXTENT,
    childrenKey: DEFAULT_TREE_CHILDREN_KEY,
    itemId: DEFAULT_TREE_ITEM_ID,
    searchQueryKey: DEFAULT_TREE_SEARCH_QUERY_KEY,
    onItemClick: DEFAULT_TREE_ON_NODE_CLICK,
    isDetailsPopUp: DEFAULT_DETAILS_POPUP,
    formatLabelText: DEFAULT_TREE_FORMAT_LABEL_TEXT,
    svgClass: DEFAULT_TREE_SVG_CLASS,
    onSelectionClear: DEFAULT_TREE_ON_SELECTION_CLEAR,
    leafDashArraySize: DEFAULT_TREE_LEAF_DASH_ARRAY_SIZE,
    height: DEFAULT_TREE_HEIGHT,
    width: DEFAULT_TREE_WIDTH,
    imagePath: IMAGEPATH,
    expand: EXPAND,
    collapse: COLLAPSE,
    isArrowHead: DEFAULT_TREE_ISARROWHEAD,
    isforwardArrow: FORWARDARROW,
    isbackwardArrow: BACKWARDARROW,
    isIndented: DEFAULT_IS_INTENTED,
    isShowOperationsIcon: DEFAULT_IS_SHOW_OPERATIONS,
    isShowRequiredAction: DEFAULT_IS_SHOW_REQUIRED_ACTION,
    isTooltip: DEFAULT_IS_TOOLTIP,
    isFixedTooltip: DEFAULT_IS_FIXED_DETAILS,
    isShowLogs: false,
    showDefaultTooltips: true
  };
  private treemap = d3.tree().nodeSize(this.config.nodeSize);
  public radioGroupForm: FormGroup;
  selectedFilter = '';
  tooltipHtml = '';
  @Output() private filterApplied: EventEmitter<any> = new EventEmitter<any>();

  public scale = 1.2
  allTypes: any;
  os_IMGPaths = osIcons;
  service_IMGPaths = serviceIcons;
  cloud_IMGPaths = serviceIcons;
  constructor(_ngbconfig: NgbAccordionConfig,
    private el: ElementRef, private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef, public _d3Service: D3Service, private _clipboardService: Clipboard) {
    _ngbconfig.animation = true;
    if (!this.id) {
      this.id = 'mtl-tree-' + MtlD3TreeMapComponent.idCount;
      this.idChange.emit(this.id);
      MtlD3TreeMapComponent.idCount++;
    }
  }

  ngOnInit(): void {

  }
  /**
   * to avoid data error for img tags
   * @param icon 
   * @returns icon in base64 format
   */
  public sanitizeIcon(icon) {
    return this.sanitizer.bypassSecurityTrustUrl(icon);
  }

  /**
   * after initialization of component, loading topology
   */
  ngAfterViewInit() {
    if (this.treeType == TreeType.ASSESSMENT) {
      this.config.nodeDistance = DEFAULT_ASSESSMENT_TREE_NODE_DISTANCE;
    }

    this.config = { ...this.config, ...this.configuration };

    if (this.config.isIndented && this.treeType == TreeType.DEFAULT) {
      this.config.nodeDistance = 50;
    }

    if (this.data) {
      setTimeout(() => {
        let data = Utilities._mapData([this.data])
        this.data = data[0];
        this.copytdata = Utilities.deepClone(this.data)
        this.default = this.data.children[0];
        this.tabs = this.data.children;
        this.selectedFilter = this.tabs ? this.tabs[0].name : '';
        this._loadTopology(this.data)
        if (!this.allTypes) {
          this.allTypes = this.copytdata.children;
        }
       })
    }
    this.cdr.detectChanges();
  }
  collapse() {
    this.isCollapse = !this.isCollapse;
  }
  /* Close the details */
  close(){
    this.detailsProperties = {};
  }
  /**
   * when input data changes
   * @param changes 
   */
  public ngOnChanges(changes: SimpleChanges) {
    if (
      changes.data &&
      changes.data.currentValue !== changes.data.previousValue &&
      !changes.data.isFirstChange()
    ) {
      if (changes.data.currentValue.children && changes.data.currentValue.children !== null) {
        changes.data.currentValue.children = Utilities._mapData(changes.data.currentValue.children);
        this.resetData.children = Utilities._mapData(this.data.children);
        this.copytdata = Utilities.deepClone(changes.data.currentValue)
        this.allTypes = changes.data.currentValue.children;

        this._loadTopology(changes.data.currentValue);
      }
      this.cdr.detectChanges();
    }
  }
  /***
   * loading topology data
   */
  _loadTopology(data) {
    this.loading = true;
    setTimeout(() => {
      if (this.tree) {
        const native = this.tree.nativeElement;
        this.chartId = native.getAttribute('data-id') || 'tree-id-' + Date.now();
        const container = d3.select(native);
        this.svg = container;

        d3.select('#' + this.id).selectAll('svg').interrupt().remove();
        this._init(container);
        this.updateDimensions();
        this.updateData(data)
        this.reload();
        this.cdr.detectChanges();
      }
    });
  }

  _toggle() {
    this.search = !this.search;
  }

  _goback() {
    this.gotoParent.emit('back')
  }
  _navigate(item) {
    this.navigation.emit(item);
  }

  /**
   * on clicking on node
   * @param item 
   */
  private _handleOnItemClick(item) {
    this._getConfig('onItemClick')(item);
    if (this.config.isFixedTooltip) {
      this.selectedItem = item.data;
      this.selectedItem['title'] = item.data.name;
      this.detailsProperties = this._keyValueConvertion(item);
    }
    d3.selectAll(`.${this.id}options>image`).remove()
    if (this._childrenKeySelector(item) && !this.config.isIndented) {
      this.setSelection(item.data);
      this._collapseDescendants(item);
    } else {
      this._expandChildren(item);
      this.setSelection(item.data)
    }
    this._updateD3Tree(item);
    if (!this._d3Service._itemHasChildren(item, this._getConfig('childrenKey'))) {
      this._navigate(item);
      this.resetSelection();
    }
  }
  private __handleDetails(item) {

  }
  _keyValueConvertion(item) {
    let output: any = {};
    const outputArray = [];
    let i = 0;
    for (const k in item.data) {
      if (typeof item.data[k] === 'object' && Object.keys(item.data[k]).length > 0 && !Array.isArray(item.data[k])) {
        Object.keys(item.data[k]).forEach((type) => {
          let val = Object.values(item.data[k]);
          if (type?.toLowerCase() != 'id' && typeof (val[i]) != 'object' && type?.toLowerCase() != 'type' && type?.toLowerCase() != 'value') {
            outputArray.push({
              name: type,
              value: val[i]
            });
          }
          i++
        });
        output[k] = outputArray
      }
    }
    return Object.keys(output).length ? output : undefined;
  }
  _handleTooltip(event, item) {
    if(this.config.isTooltip){
      this.tooltipproperties = [];
      let eleRect = this.tree.nativeElement?.getBoundingClientRect();
      let targetRect = event.srcElement?.getBoundingClientRect();
      this.tooltipdata = item.data;
      this.tooltipproperties = this._keyValueConvertion(item) ? this._keyValueConvertion(item)?.properties : [];
      if (this.tooltipproperties.length > 0) {
        d3.select(this.popover.nativeElement).style('visibility', 'visible');
        d3.select(this.popover.nativeElement).select('#treepopover').style('visibility', 'visible');
        const that = this;
        const popover = that.popover.nativeElement;
        const container = d3.select(popover)
          .style('position', 'fixed')
          .style(`${(targetRect.right + 350 > eleRect.right) ? 'right' : 'left'}`, `${(targetRect.right + 300 > eleRect.right) ? event.clientX - 24 : event.clientX + 48}px`)
          .style(`${(eleRect.bottom < targetRect.bottom + 200) ? 'bottom' : 'top'}`, `${(targetRect.bottom + 200 > eleRect.bottom) ? event.clientY - 50 : event.clientY + 50}px`)
          .style('z-index', 3);
      } else {
        this._removeTooltip();
      }
    }

  }
  _removeTooltip() {
    d3.select(this.popover.nativeElement).style('visibility', 'hidden');
    d3.select(this.popover.nativeElement).select('#treepopover').style('visibility', 'hidden');
  }
  initializeBreadcrumbTrail() {
    // Add the svg area.
    const trail = d3.select(this.tree.nativeElement).select('#sequence').append('svg:svg')
      .attr('width', 100)
      .attr('height', 50)
      .attr('id', 'trail');
    // Add the label at the end, for the percentage.
    trail.append('svg:text')
      .attr('id', 'endlabel')
      .style('fill', '#000');
  }

  private _handleOnItemMouseOver(event, item) {
    if (this.svg) {
      this.svg
        .selectAll('.item')
        .filter(
          node =>
            item
              .ancestors()
              .reverse()
              .indexOf(node) >= 0
        )
        .attr('is-hover', 'true')
        .each(function () {
          select(this).raise();
        });

      this._formatLinks(
        this.svg
          .selectAll('.link')
          .transition()
          .duration(DEFAULT_TREE_TRANSITION_DURATION)
      );

      this._d3Service._formatIndicators(this.svg
        .selectAll('.indicator')
        .transition()
        .duration(DEFAULT_TREE_TRANSITION_DURATION), this._getConfig('childrenKey'), this.treeType);
      // this._handleTooltip(event, item);
    }
  }

  private _handleOnItemMouseLeave(item) {
    this.tooltipproperties = [];
    if (this.svg) {
      this.svg
        .selectAll('.item')
        .filter(
          node =>
            item
              .ancestors()
              .reverse()
              .indexOf(node) >= 0
        )
        .attr('is-hover', null);

      this._formatLinks(
        this.svg
          .selectAll('.link')
          .transition()
          .duration(DEFAULT_TREE_TRANSITION_DURATION)
      );
      // this._formatIndicators(
      //   this.svg
      //     .selectAll('.indicator')
      //     .transition()
      //     .duration(DEFAULT_TREE_TRANSITION_DURATION)
      // );
      this._d3Service._formatIndicators(this.svg
        .selectAll('.indicator')
        .transition()
        .duration(DEFAULT_TREE_TRANSITION_DURATION), this._getConfig('childrenKey'), this.treeType);
      
      this._removeTooltip();

    }
  }

  private _handleOnDbClick(item) {
    this._getConfig('onItemClick')(item);
    if (this._childrenKeySelector(item)) {
      this.resetSelection();
    }
    if (this._d3Service._itemHasChildren(item, this._getConfig('childrenKey'))) {
      this._navigate(item)
    }
    this._updateD3Tree(item);
  }

  private _generateItems(rootItem, data) {
    const items = this.svg
      .select(`.${this.id}`)
      .selectAll('.item')
      .data(data, d => d.data[this._getConfig('itemId')])

    this._generateExistingItems(items);
    this._generateExitItems(items, rootItem);
    this._generateUpdateItems(
      items,
      this._generateEnterItems(items, rootItem)
    );
  }

  private _generateExistingItems(items) {
    this._formatLinks(items.selectAll('.link'));
    this._d3Service._formatIndicators(items.selectAll('.indicator'), this._getConfig('childrenKey'), this.treeType);
    if (!this.config.isIndented) {
      this._d3Service._formatIcons(items.selectAll(`.${this.id}options`), this._getConfig('childrenKey'), this.treeType);
    }
    if (this.treeType == TreeType.SERVICE) {
      this._d3Service._formatIcons(items.selectAll(`.${this.id}options`), this._getConfig('childrenKey'), this.treeType);
    }
    // this._formatLabels(items.selectAll('.label'));
    this._d3Service._formatroundedcards(items.selectAll('.roundedcard'), this.treeType);
  }

  private _generateEnterItems(items, rootItem) {
    const enterItems = items
      .enter()
      .append('g')
      .attr('class', 'item')
      .attr('transform', () =>
        transform().translate(d => [d.y + 25, d.x])({
          x: rootItem.x0,
          y: rootItem.y0
        })
      )
      .attr('cursor', 'pointer');

    enterItems.call(d => d.lower());

    enterItems
      .style('opacity', 0)
      .transition()
      .duration(DEFAULT_TREE_TRANSITION_DURATION)
      .style('opacity', 1);

    // this._formatLinks(enterItems.append('path', 'g').attr('class', 'link'));
    this._formatLinks(enterItems.append('path', 'g').attr('class', 'link')).on('mouseenter', (event, d) => {
      this._handleLinkTooltip(event, d);
    });
    this._d3Service._formatroundedcards(
      enterItems.append('rect').attr('class', 'roundedcard'), this.treeType
    );
    // if(this.treeType != TreeType.ASSESSMENT){
    this._d3Service._formatIndicators(
      enterItems.append('circle').attr('class', 'indicator'), this._getConfig('childrenKey'), this.treeType);
    // }else if(this.treeType == TreeType.ASSESSMENT){
    //   this._d3Service._formatIndicators(
    //     enterItems.append('rect').attr('class', 'indicator'), this._getConfig('childrenKey')
    //     , this.treeType);
    // }
    if (!this.config.isIndented) {
      this._d3Service._formatIcons(
        enterItems.append('g').attr('class', this.id + 'options'), this._getConfig('childrenKey'), this.treeType)
    }

    // this._formatLabels(enterItems.append('text').attr('class', 'label'));
    this._formatForeignObject(enterItems);

    //#region Added - 21102020
    // if (this.treeType == TreeType.SERVICE) {
    //   this._formatStatusText(enterItems);
    //   this._formatLabelName(enterItems);
    // }
    //#endregion

    /** modify this for operations */
    if (this.config.isShowOperationsIcon) {
      this._formatOperationsObject(enterItems);
    }
    if (this.config.isShowRequiredAction) {
      this._formatStatusTextObject(enterItems);
    }
    return enterItems;
  }

  private _generateExitItems(items, rootItem) {
    const exitItems = items.exit();

    exitItems
      .selectAll('.link')
      .transition()
      .duration(DEFAULT_TREE_TRANSITION_DURATION)
      .attr('d', () => {
        if (this.treeType == TreeType.ASSESSMENT) {
          return pathGenerator(this.config.isIndented, true,
            { x: rootItem.x, y: rootItem.y },
            { x: rootItem.x, y: rootItem.y }
          )
        } else {
          return pathGenerator(this.config.isIndented, false,
            { x: rootItem.x, y: rootItem.y },
            { x: rootItem.x, y: rootItem.y }
          )
        }
      })
      .attr('transform', d =>
        transform().translate(d1 => [d1.y, d1.x])({
          x: this.treeType == TreeType.ASSESSMENT ? 160 - rootItem.x : -rootItem.x,
          y: -rootItem.y
        })
      );

    exitItems
      .style('opacity', 1)
      .transition()
      .duration(DEFAULT_TREE_TRANSITION_DURATION)
      .style('opacity', 0)
      .attr('transform', () =>
        transform().translate(d => [d.y, d.x])({
          x: rootItem.x,
          y: rootItem.y
        })
      )
      .remove();

    return exitItems;
  }

  _generateUpdateItems(items, enterItems) {
    const updateItems = enterItems.merge(items);
    updateItems
      .on('click', (event, item) => this._handleOnItemClick(item))
      .on('dblclick', (event, item) => this._handleOnDbClick(item))
      .on('mouseover', (event, item) => this._handleOnItemMouseOver(event, item))
      .on('mouseleave', (event, item) => this._handleOnItemMouseLeave(item));

    updateItems.attr('transform', d =>
      transform().translate(d2 => [d2.y, d2.x])({
        x: d.x,
        y: d.y
      })
    );

    this._formatLinks(updateItems.selectAll('.link'));
    if (this.treeType == TreeType.SERVICE || this.treeType == TreeType.ASSESSMENT) {
      this._formatLinkLabelText(updateItems);
    }
    return updateItems;
  }

  private _formatLinks(links) {
    const that = this;
    if (this.treeType == TreeType.ASSESSMENT) {
      return links
        .attr('fill', 'none')
        .attr('opacity', function (d) {
          if (this.parentNode.getAttribute('is-selected') === 'true') {
            return 1;
          } else {
            return 0.5;
          }
        })
        .attr('d', (d) => {
          if (!d.parent) {
            return null;
          }
          return pathGenerator(that.config.isIndented, true, d.parent, d);
        })
        .attr('stroke', function (d) {
          if (d['data'] && d['data']['link']?.toLowerCase() == 'yes') {
            return LEAF_COLOR;
          }

          if (d['data'] && d['data']['link']?.toLowerCase() == 'no') {
            return DANGER_COLOR;
          }

          if (this.parentNode.getAttribute('is-selected') === 'true') {
            return SELECTED_COLOR;
          }

          if (this.parentNode.getAttribute('is-hover') === 'true') {
            return HOVER_COLOR;
          }
          if (!that._d3Service._itemHasChildren(d, that._getConfig('childrenKey'))) {
            if (d.data.health !== undefined || d.data.health !== '') {
              return that._d3Service._nodeColor(d.data.health)
            }
            return LEAF_COLOR;
          }

          if (!d.parent) {
            if (d.data.health !== undefined || d.data.health !== '') {
              return that._d3Service._nodeColor(d.data.health)
            }
            return ROOT_COLOR;
          }
          if ((d.parent || that._d3Service._itemHasChildren(d, this.ge))) {
            if (d.data.health !== undefined || d.data.health !== '') {
              return that._d3Service._nodeColor(d.data.health)
            }
            return NODE_COLOR;
          }
          return LINK_COLOR;
        })
        .attr('transform', function (d) {
          if (!d.parent) {
            return null;
          }

          return transform().translate(d4 => [d4.y, d4.x])({
            x: -getTranslation(
              select(this.parentNode).attr('transform')
            )[1],
            y: -getTranslation(
              select(this.parentNode).attr('transform')
            )[0]
          });
        })
        .attr('stroke-width', 1.5)
        .attr('marker-end', () => {
          if (this.config.isArrowHead) {
            if (this.config.isforwardArrow) {
              return 'url(#end-arrow)';
            } else if (this.config.isbackwardArrow) {
              return 'url(#start-arrow)';
            }
          } else {
            return '';
          }
        });
    }
    else {
      return links
        .attr('fill', 'none')
        .attr('opacity', '0.5')
        .attr('d', (d) => {
          if (!d.parent) {
            return null;
          }
          return pathGenerator(that.config.isIndented, false, d.parent, d);
        })
        .attr('stroke', function (d) {
          if (this.parentNode.getAttribute('is-selected') === 'true') {
            return SELECTED_COLOR;
          }

          if (this.parentNode.getAttribute('is-hover') === 'true') {
            return HOVER_COLOR;
          }
          if (!that._d3Service._itemHasChildren(d, that._getConfig('childrenKey'))) {
            if (d.data.health !== undefined || d.data.health !== '') {
              return that._d3Service._nodeColor(d.data.health)
            }
            return LEAF_COLOR;
          }

          if (!d.parent) {
            if (d.data.health !== undefined || d.data.health !== '') {
              return that._d3Service._nodeColor(d.data.health)
            }
            return ROOT_COLOR;
          }
          if ((d.parent || that._d3Service._itemHasChildren(d, that._getConfig('childrenKey')))) {
            if (d.data.health !== undefined || d.data.health !== '') {
              return that._d3Service._nodeColor(d.data.health)
            }
            return NODE_COLOR;
          }
          return LINK_COLOR;
        })
        .attr('transform', function (d) {
          if (!d.parent) {
            return null;
          }

          return transform().translate(d4 => [d4.y, d4.x])({
            x: -getTranslation(
              select(this.parentNode).attr('transform')
            )[1],
            y: -getTranslation(
              select(this.parentNode).attr('transform')
            )[0]
          });
        })
        .attr('stroke-width', 1.5)
        // .attr('marker-end', (d) => { return 'url(#end-arrow)' });
        .attr('marker-end', (d) => {
          if (this.config.isArrowHead) {
            if (this.config.isforwardArrow) {
              return 'url(#end-arrow)';
            } else if (this.config.isbackwardArrow) {
              return 'url(#start-arrow)';
            }
          } else {
            return '';
          }
        });
    }
  }

  private _formatForeignObject(labels) {
    // if (this.treeType == TreeType.DEFAULT || this.treeType == TreeType.ASSESSMENT) {
    return labels.append('foreignObject')
      .attr('x', -10)
      .attr('y', -10)
      .on('mousemove', (event, d) => {
        this._handleTooltip(event, d);
      })
      .attr('width', 165)
      .attr('height', 30)
      .append('xhtml').html((d) => {

        return `<div class='row'>
        <div class='col-md-12 d-flex'>
       
        <span class='text-truncate font-small-2'
        style='max-width: 125px;text-overflow: clip; white-space: normal;word-break: break-all;
        overflow: hidden;max-height: 19px;line-height: 19px;margin-left:8px;'>
          ${d.data.name.length > 16 ? d.data.name.substr(0, 16) + '..' : d.data.name}
        </span></div>
        </div>
       `;
      })
    // }
  }

  private _getConfig(value) {
    return this.config[value];
  }

  private _childrenKeySelector(d) {
    return d[this._getConfig('childrenKey')];
  }

  private _expandItems(items) {
    for (let i = 0, len = items.length; i < len; i += 1) {
      this._expandChildren(items[i]);
      this._updateD3Tree(items[i]);
    }
  }

  private _unselectNodes() {
    if (this.svg) {
      this.svg
        .selectAll('.item')
        .filter(function () {
          return this.getAttribute('is-selected') === 'true';
        })
        .attr('is-selected', null);

      this._formatLinks(this.svg.selectAll('.link'));
      this._d3Service._formatIndicators(this.svg.selectAll('.indicator'), this._getConfig('childrenKey'), this.treeType);
    }
  }

  private _selectNode(d) {
    if (this.svg) {
      this.svg
        .selectAll('.item')
        .filter(
          node =>
            d
              .ancestors()
              .reverse()
              .indexOf(node) >= 0
        )
        .attr('is-selected', 'true')
        .each(function () {
          select(this).raise();
        });

      this._formatLinks(this.svg.selectAll('.link'));
      this._d3Service._formatIndicators(this.svg.selectAll('.indicator'), this._getConfig('childrenKey'), this.treeType);
    }
  }

  private _findSelectedPathItems(node, searchString, pathArray) {
    if (
      String(
        node.data[this._getConfig('itemId')]
      ).toLocaleLowerCase() === searchString.toLocaleLowerCase()
    ) {
      pathArray.push(node);

      return pathArray;
    }
    const children = node[this._getConfig('childrenKey')]
      ? node[this._getConfig('childrenKey')]
      : node[`_${this._getConfig('childrenKey')}`];

    if (!children) {
      return false;
    }

    for (let i = 0; i < children.length; i += 1) {
      pathArray.push(node);

      const found = this._findSelectedPathItems(
        children[i],
        searchString,
        pathArray
      );

      if (found) {
        return found;
      }

      pathArray.pop();
    }

    return null;
  }

  private _collapseDescendants(node) {
    const collapsedNode = node;

    if (this._childrenKeySelector(collapsedNode)) {
      collapsedNode[
        `_${this._getConfig('childrenKey')}`
      ] = this._childrenKeySelector(collapsedNode);
      collapsedNode[`_${this._getConfig('childrenKey')}`].forEach(child =>
        this._collapseDescendants(child)
      );
      collapsedNode[this._getConfig('childrenKey')] = null;
    }

    return collapsedNode;
  }

  private _expandChildren(node) {
    const expandedNode = node;
    if (this._childrenKeySelector(expandedNode) === null) {
      expandedNode[this._getConfig('childrenKey')] =
        expandedNode[`_${this._getConfig('childrenKey')}`];
      expandedNode[`_${this._getConfig('childrenKey')}`] = null;
    }
    return expandedNode;
  }

  private _updateD3Tree(rootItem = this.data) {
    try {
      this._generateItems(
        rootItem,
        this.treemap(this.data)
          .descendants()
          .map(node => {
            const updatedNode = node;
            if (this.config.isIndented) {
              updatedNode.x += updatedNode.depth * this._getConfig('nodeDistance');
            } else {
              updatedNode.y =
                updatedNode.depth * this._getConfig('nodeDistance');
            }
            updatedNode['x0'] = node.x;
            updatedNode['y0'] = node.y;

            return updatedNode;
          })
      );
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  }

  private _zoomToItem(item) {
    setTimeout(() => {
      const { y, x } = select(item).node();
      this._selectNode(item);
      this._zoomToPosition(y, x, 1);
    }, DEFAULT_TREE_TRANSITION_DURATION);
  }

  private _zoomToPosition(y, x, scale) {
    let eleRect = this.tree.nativeElement.getBoundingClientRect();
    this.svg
      .call(this.zoom)
      .transition()
      .duration(DEFAULT_TREE_TRANSITION_DURATION)
      .call(
        this.zoom.transform,
        zoomIdentity
          .translate(
            -y * scale + (eleRect.width ? eleRect.width / 1.4 : this._getConfig('width')) / 2,
            -x * scale + (eleRect.height ? eleRect.height : this._getConfig('height')) / 2
          )
          .scale(scale)
      );
  }

  private _init(root) {
    this.svg = root
      .append('svg')
      .attr('id', this.id)
      .attr('class', this._getConfig('svgClass'))
      .style('pointer-events', 'all');

    this.svg.append('g').attr('class', `${this.id}`)
    this._initArrows();
    this.zoom = zoom()
      .scaleExtent(this._getConfig('scaleExtent'))
      .on('zoom', (event) => {
        d3
          .select(`g.${this.id}`)
          .attr('transform', event.transform);
      });
  }

  private _initArrows() {
    if (this.config.isArrowHead) {
      const defs = this.svg.append('svg:defs');
      this._d3Service.addEndArrow(defs);
      if (this.config.isbackwardArrow) {
        this._d3Service._initBackwardArrowHeads(defs);
      }
      else if (this.config.isforwardArrow) {
        this._d3Service._initForwardArrowHeads(defs, this.config.isforwardArrow);
      }
    }
  }

  private updateData(data, expandTree = true) {
    this.loading = false;
    this.data = hierarchy(data, this._getConfig('childrenKeySelector'));

    if (!expandTree && this.config.isIndented) {
      this._collapseDescendants(this.data);
    } else {
      this._expandItems(this.data)
    }

    this._zoomToPosition(0, 0, 1);

    if (this.searchQuery !== null && this.searchQuery !== undefined) {
      this.setSelection(this.searchQuery);
    }
    this._updateD3Tree();
  }

  updateDimensions() {
    const { width, height } = this.svg.node().getBoundingClientRect();

    this.config.width = width > 0 ? width : DEFAULT_TREE_WIDTH;
    this.config.height = height > 0 ? height : DEFAULT_TREE_HEIGHT;

    this.resetZoom();
  }

  setSelection(selected) {
    const items = this._findSelectedPathItems(
      this.data,
      String(selected.itemId),
      []
    );

    if (items) {
      this.searchQuery = String(selected.name);
      this._unselectNodes();
      this._expandItems(items);
      this._zoomToItem(items.slice(-1)[0]);
    }
    this.searchQuery = null;
  }

  resetSelection() {
    this.searchQuery = null;

    this._unselectNodes();
    this._updateD3Tree();

    this._getConfig('onSelectionClear')();
  }

  reload() {
    this.searchQuery = null;

    this._unselectNodes();

    if (this.data[this._getConfig('childrenKey')] && !this.config.isIndented) {
      this.data[this._getConfig('childrenKey')]?.forEach(child =>
        this._collapseDescendants(child)
      );
    } else {
      this.data[this._getConfig('childrenKey')]?.forEach(child =>
        this._expandItems(child)
      );
      this.loading = false;
    }

    this._zoomToPosition(0, 0, 1);
    this._updateD3Tree();
    this._getConfig('onSelectionClear')();
  }

  resetZoom() {
    if (this.searchQuery) {
      return this._zoomToItem(
        this._findSelectedPathItems(
          this.data,
          this.searchQuery,
          []
        ).pop()
      );
    }

    this._zoomToPosition(0, 0, 1);
  }

  zoomIn() {
    const { k: scale } = zoomTransform(this.svg.node());

    this.zoom.scaleTo(this.svg, scale + this._getConfig('scaleStep'));
  }

  zoomOut() {
    const { k: scale } = zoomTransform(this.svg.node());

    this.zoom.scaleTo(this.svg, scale - this._getConfig('scaleStep'));
  }

  fullscreen() {
    this.updateDimensions();
    this.isfullscreen = !this.isfullscreen;
  }

  _handleLinkTooltip(event, item) {
    if (Object.values(item.data?.linkProperties ? item.data?.linkProperties : {})?.length > 0) {
      let mainDiv = this.tree.nativeElement?.getBoundingClientRect();
      let span = event?.srcElement?.getBoundingClientRect();

      const outputArray = [];
      let i = 0;
      let template = ''
      if (item.data.linkProperties) {
        Object.keys(item.data.linkProperties).forEach((type) => {
          const val = Object.values(item.data.linkProperties)
          outputArray.push({
            name: type,
            value: val[i]
          });
          i++
        });
      }
      if (outputArray.length > 0) {
        outputArray.forEach(val => {
          template += `<b>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</b> : ${val.value} <br>`
        })
      } else {
        template += `No data`
      }
      this.tooltipHtml = `
        ${template}
        <!-- <b>${item.data.name.charAt(0).toUpperCase() + item.data.name.slice(1)}</b>
        <br>
        Discovery Status: <span class="badge badge-pill text-white ml-auto mt-1 ${this._d3Service.getStateColor(item.data)}">
                    <strong>${item.data.discoveryStatus}</strong>-->
        </span>`;
      d3.select('#treepopover').style('visibility', 'visible')
      const popover = this.popover.nativeElement;
      // const container = d3.select(popover)
      //   // .style('will-change', 'transform')
      //   .style('position', 'fixed')
      //   .style('left', `${event.view.screen.width > event.pageX + 200 ? event.pageX+20 : event.clientX - 250}px`)
      //   // .style('top', `${event.view.screen.height > event.pageY + 200 ? event.pageY : event.pageY - 200}px`)
      //   .style('top', `${(event.layerY)}px`)
      //   .style('z-index', 1000);

      const container = d3.select(popover)
        .style('position', 'fixed')
        .style('left', `${span.left + span.width + 350 > (mainDiv.left + mainDiv.width) ? span.left - 350 : span.left + span.width + 50}px`)
        // .style('top', `${(mainDiv.top + span.top + span.height+200)}px`)
        .style('top', `${(span.top > 50 ? span.top - 50 : span.top + span.height)}px`)
        .style('z-index', 1000);
    }
  }

  /**
   * for fomatting statusin orange color grid
   */
  _formatStatusText(labels) {
    return labels.append('foreignObject')
      .attr('x', 0)
      .attr('y', 10)
      .attr('width', (d) => {
        if (d.data && d.data.requiredAction) {
          return 180;
        } else {
          return 0;
        }
      })
      .attr('height', 40)
      .attr('class', 'statusText')
      .append('xhtml').html((d) => {
        return `<div class="row" style="background:orange;padding: 0 5px;border-radius: 3px;font-size: 10px;margin: 0;height: 14px;width:${this.getTextWidth(d.data && d.data.requiredAction ? d.data.requiredAction : '-')}px;">
        <div class="col-md-12 d-flex statusText-div p-0" style="line-height:14px;white-space: nowrap;width:${this.getTextWidth(d.data && d.data.requiredAction ? d.data.requiredAction : '-')}px;" title="${d.data && d.data.requiredAction ? d.data.requiredAction : '-'}">
        ${d.data && d.data.requiredAction ? d.data.requiredAction : '-'}
        </div>
        </div>
       `;
      })
  }

  getTextWidth(data) {
    let len = String(data).length * 8;
    return len > 180 ? 180 : len;
  }

  /**
   * formatting label name
   */
  _formatLabelName(labels) {
    return labels.append('foreignObject')
      .attr('x', -10)
      .attr('y', 22)
      .attr('width', 200)
      .attr('height', 20)
      .attr('class', 'labelName')
      .append('xhtml').html(function (d) {
        return `<div class="row m-0">
        <div class="col-md-12 d-flex labelName-div p-0" >
        <span class="text-truncate text-capitalize font-small-2"
        style="max-width: 160px;text-overflow: clip; white-space: normal;word-break: break-all;
        overflow: hidden;max-height: 19px;line-height: 19px;margin-left:6px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
          ${d.data && d.data.name ? d.data.name : '-'}
        </span>
        </div>
        </div>
        `;
      })
  }

  /**
   * formatting node connecting link labels
   */
  async _formatLinkLabelText(labels) {
    setTimeout(() => {
      this.removeLinkLabels();
    }, 1000);
    setTimeout(() => {
      if (this.treeType == TreeType.ASSESSMENT) {
        return labels.append('foreignObject')
          .attr('x', -10)
          .attr('y', -15)
          .attr('width', (d) => {
            return 30;
          })
          .attr('height', 30)
          .attr('class', 'linkLabel')
          .attr("transform", (d) => {
            return "translate(-60,0)";
          })
          .attr("text-anchor", "middle")
          .append('xhtml').html((d) => {
            if (d.data.link) {
              return `<div class="linkLabel-div" style="background: transparent;font-size:12px; line-height:12px; height:15px;">
            ${d.data.centerNode ? '' : String(d.data.link).length > 20 ? (String(d.data.link).substr(0, 20) + '...') : String(d.data.link)}
            </div>
           `;
            } else {
              return '';
            }
          })
      } else {
        return labels.append('foreignObject')
          .attr('x', 0)
          .attr('y', -10)
          .attr('width', (d) => {
            let t = d.data.centerNode ? '' : (d.data?.link ?? '');
            let t1 = (t?.toString().length > 20 ? 20 : t?.toString().length) * 6;
            return t1;
            // return 60;
          })
          .attr('height', 12)
          .attr('class', 'linkLabel')
          .attr("transform", (d) => {
            let x = (((d.parent ? d.parent.y : 0) - d.y) / 2) + (((d.parent ? d.parent.y : 0) - d.y) / 8);
            return "translate(" +
              (x) + "," +
              (((d.parent ? d.parent.x : 0) - d.x) / 2) + ")";
          })
          .attr("text-anchor", "middle")
          .append('xhtml').html((d) => {
            return `<div class="linkLabel-div" style="background:#fff; font-size:10px; line-height:12px; height:12px;">
          ${d.data.centerNode ? '' : String(d.data.link).length > 20 ? (String(d.data.link).substr(0, 20) + '...') : String(d.data.link)}
          </div>
         `;
          });
      }
    }, 1000);

  }


  /**
   * removes all link labels
   */
  removeLinkLabels() {
    let ct = this.tree.nativeElement;
    let query = ct.getElementsByClassName("linkLabel");

    while (query.length != 0) {

      try {
        d3.selectAll('.linkLabel').interrupt().remove();
      } catch (error) {
        //console.error('740 : ', {error})
      }
      query = ct.getElementsByClassName("linkLabel");
    }
  }


  /** Format operations Icons */
  _formatOperationsObject(labels) {
    return labels.append('foreignObject')
      .attr('x', 130)
      .attr('y', 10)
      .on('mouseenter', (event, d) => {
        this._handleOperationsIcon(event, d);
      })
      .attr('width', 13)
      .attr('height', 13)
      .append('xhtml').html((d) => {
        // return `
        //   <div class="p-0 d-flex">
        //     <img src="${this.icons.ellipsis}" class="op-img" />
        //   </div>`;
        return `<div class="node-op-icon"><div class="icon-placer"></div></div>`
      });
  }

  /** Format operations Icons */
  _formatStatusTextObject(labels) {
    return labels.append('foreignObject')
      .attr('x', (d) => {
        return 130 - (d['data']['requiredAction']?.length ?? 0) * 7;
      })
      .attr('y', -25)
      .attr('width', (d) => {
        return (d['data']['requiredAction']?.length ?? 0) * 7;
      })
      .attr('height', 20)
      .append('xhtml').html((d) => {

        if (d['data']['requiredAction'] && d['data']['requiredAction']?.length > 0) {
          let dt = d['data']['requiredAction']?.toLowerCase() ?? '';
          dt = dt.replace(/ /g, '-')
          return `<div class="node-status-badge node-status-badge-${dt}">${d['data']['requiredAction']}</div>`
        }
        return ``;
      });
  }

  /** on Hovering of Operations Icon */
  _handleOperationsIcon(event, item) {
    d3.select('.operations').style('visibility', 'visible');

    const that = this;

    d3.selectAll('.operations').remove();
    const container = d3.select('body')
      .append('div')
      .attr('class', 'operations d-popover')
      .style('left', (event.pageX - 20) + 'px')
      .style('top', (event.pageY - 10) + 'px')
      .on('mouseenter', () => {
        // d3.select('.operations').style('visibility','visible');
      })
      .on('mouseleave', () => {
        d3.select('.operations.d-popover').style('visibility', 'hidden');

      })
      .style('opacity', 1);

    container.append('foreignObject')
      .attr('x', 16)
      .attr('y', -20)
      .on('click', (d) => {
        this.onEditClick(item);
      })
      .attr('width', 165)
      .attr('height', 50)
      .append('xhtml').html(() => {
        return `
          <div class="p-1">
            <button class="btn btn-sm btn-primary btn-operations text-left"><span></span>&nbsp; Edit </button>
          </div>
         `
      });
  }

  onAddClick(d) {
    this.onAction.emit({ 'action': 'add', 'data': d })
    this.closeOperations();
  }

  onEditClick(d) {
    this.onAction.emit({ 'action': 'edit', 'data': d })
    this.closeOperations();
  }

  onDeleteClick(d) {
    this.onAction.emit({ 'action': 'delete', 'data': d })
    this.closeOperations();
  }

  /** close operations */
  closeOperations() {
    d3.select('.operations').style('visibility', 'hidden');
  }
  copyClipboard(value) {
    this._clipboardService.copy(value);
  }

  ngOnDestroy() {
    d3.selectAll('.popover')
      .remove();

    d3.selectAll('.linkpopover')
      .remove();
  }
}
