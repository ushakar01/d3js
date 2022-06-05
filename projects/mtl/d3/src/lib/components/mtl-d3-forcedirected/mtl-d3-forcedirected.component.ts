import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation, SimpleChange, Output, EventEmitter } from '@angular/core';
import * as d3 from "d3";
import { zoom, zoomIdentity, zoomTransform } from 'd3-zoom';
import { select } from 'd3-selection';
import 'd3-transition';
import {
  DEFAULT_HEIGHT, DEFAULT_ITEM_ID,
  DEFAULT_NODE_DISTANCE, DEFAULT_SCALE_EXTENT,
  DEFAULT_SVG_CLASS, DEFAULT_WIDTH, ICON_TYPES,
  TRANSITION_DURATION, DEFAULT_COLOR_SCALE,
  DEFAULT_ISNODETEXT, DEFAULT_ISARROWHEAD,
  DEFAULT_ISARROWTITLE, DEFAULT_ISBADGE,
  DEFAULT_ISCLICKABLE, DEFAULT_ISGROUPS, DEFAULT_ISICON,
  DEFAULT_ISLEGEND, DEFAULT_ISSEVERITY, DEFAULT_ISTOOLTIP,
  DEFAULT_ISUTILIZATION, DEFAULT_NODE_RADIUS, DEFAUTL_ISTITLE,
  DEFAULT_ARROW_HEAD_COLOR, DEFAULT_LINE_COLOR,
  DEFAULT_ARROW_SIZE, DEFAULT_GROUP_KEY, DEFAULT_UTILIZATION_KEY,
  DEFAULT_IS_NODE_CIRCLE, DEFAUTL_ISCOLLAPSABLE, DEFAULT_STATUS_COLORS,
  DEFAULT_IS_SHOW_FORMAT_ICON, DEFAULT_NODE_LINK_DISTANCE, DEFAULT_ICON_COLOR, DEFAULT_ON_NODE_CLICK_RELOAD, DEFAULT_NODE_TOOLTIP_OBJECT,
  DEFAULT_LINK_TOOLTIP_OBJECT
} from './constants';
import { convexHulls, drawCluster } from './lib';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONS } from '../../models/icons';

@Component({
  selector: 'mtl-d3-forcedirected',
  templateUrl: './mtl-d3-forcedirected.component.html',
  styleUrls: ['./mtl-d3-forcedirected.component.scss'],
  host: {
    '(window:resize)': 'resize()',
  },
  encapsulation: ViewEncapsulation.None,
})
export class MtlD3ForcedirectedComponent
  implements AfterViewInit, OnChanges, OnDestroy {
  @ViewChild('topoforcedirected', { static: false })
  private topoforcedirected: ElementRef;
  @ViewChild('forcedirectedpopover', { static: false }) popover: ElementRef;
  @ViewChild('legend', { static: false }) legend: ElementRef;
  icons = ICONS;
  @Input() configuration = {}
  config = {
    arrowHead: DEFAULT_ARROW_HEAD_COLOR,
    line: DEFAULT_LINE_COLOR,
    arrowSize: DEFAULT_ARROW_SIZE,
    svgClass: DEFAULT_SVG_CLASS,
    isGroups: DEFAULT_ISGROUPS,
    isCollapsable: DEFAUTL_ISCOLLAPSABLE,
    isClickable: DEFAULT_ISCLICKABLE,
    isBadge: DEFAULT_ISBADGE,
    isTooltip: DEFAULT_ISTOOLTIP,
    isArrowHead: DEFAULT_ISARROWHEAD,
    isArrowText: DEFAULT_ISARROWTITLE,
    isUtilization: DEFAULT_ISUTILIZATION,
    isSeverity: DEFAULT_ISSEVERITY,
    nodeRadius: DEFAULT_NODE_RADIUS,
    isIcon: DEFAULT_ISICON,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    chargeStrength: DEFAULT_NODE_DISTANCE,
    colorScale: DEFAULT_COLOR_SCALE,
    scaleExtent: DEFAULT_SCALE_EXTENT,
    isNodeText: DEFAULT_ISNODETEXT,
    isTitle: DEFAUTL_ISTITLE,
    isLegend: DEFAULT_ISLEGEND,
    groupKey: DEFAULT_GROUP_KEY,
    utilizationKey: DEFAULT_UTILIZATION_KEY,
    isNodeCircle: DEFAULT_IS_NODE_CIRCLE,
    id: DEFAULT_ITEM_ID,
    statusColors: DEFAULT_STATUS_COLORS,
    isShowFormatIcon: DEFAULT_IS_SHOW_FORMAT_ICON,
    nodeLinkDistance: DEFAULT_NODE_LINK_DISTANCE,
    defaultIconColor: DEFAULT_ICON_COLOR,
    onNodeClickReload: DEFAULT_ON_NODE_CLICK_RELOAD,
    nodeTooltipDataobject: DEFAULT_NODE_TOOLTIP_OBJECT,
    linkTooltipDataobject: DEFAULT_LINK_TOOLTIP_OBJECT
  };
  ICON_TYPES = ICON_TYPES;
  tooltip;
  public tooltipproperties: any[] = [];
  private node;
  private link;
  private hull;
  private edgepath;
  public nodes;
  public links;
  public edgepaths;
  public root;
  public svg;
  public legends;
  private svgLinks;
  private svgNodes;
  private svgHulls;
  private svgEdgePaths;
  public simulation;
  public groups;
  public width = 1000;
  public height = document.documentElement.clientHeight - 100;
  public i = 0;
  public isfullscreen = false;
  private line;
  chartId: any;
  public scale = 1.2;
  @Input() public data: any = {};
  @Input() public isExpandable = true;
  @Input() public isZoomconfig = true;
  @Input() public isIndented = false;
  @Input() public hideGroups: string[] = [];
  @Output() public nodeClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() private onLegendClick: EventEmitter<any> = new EventEmitter<any>();
  clonedData: any = {};
  zoom: any;
  searchQuery: any;
  colorScale;
  clonedHideGroups = [];
  public loading = true;
  graphid = '';
  constructor(private sanitizer: DomSanitizer) {
    this.graphid = 'mtl-force-' + Date.now();
    this.chartId = 'force-id-' + Date.now();
  }

  ngAfterViewInit() {
    this.clonedHideGroups = [...this.hideGroups];
    this.config = { ...this.config, ...this.configuration };
    this._loadTopology();
  }
  public sanitizeIcon(icon) {
    return this.sanitizer.bypassSecurityTrustUrl(icon);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.data && changes.data.currentValue !== changes.data.previousValue && !changes.data.isFirstChange()) {
      this.data = changes.data.currentValue;
      this.config = { ...this.config, ...this.configuration };
      this.clonedHideGroups = [...this.hideGroups];
      this._init();
    }
  }
  private _loadTopology() {
  this.loading = true;  
    if (this.data) {
      this.clonedData = { ...this.data }
      this._init();
    }
  }
  _getConfig(value) {
    return this.config[value];
  }
  updateDimensions() {
    const { width, height } = this.svg.node().getBoundingClientRect();

    this.config.width = width > 0 ? width : DEFAULT_WIDTH;
    this.config.height = height > 0 ? height : DEFAULT_HEIGHT;

    this.resetZoom();
  }

  _init() {
    const native = this.topoforcedirected.nativeElement;

    const container = d3.select(native);
    this.svg = container;
    d3.select(this.topoforcedirected.nativeElement).select('.' + this._getConfig('svgClass')).remove();
    this.svg = container
      .append('svg')
      .attr('class', this._getConfig('svgClass'))
      .style('pointer-events', 'all');
    const g = this.svg
      .append('g')
      .attr('class', 'container')
      .attr('width', '100%')
      .attr('height', '100%')
      .on('mousedown', this._mouseDown)
      .on('mouseup', this._mouseUp);

    this.zoom = zoom()
      .scaleExtent(this._getConfig('scaleExtent'))
      .on('zoom', (event) => {
        d3.select(this.topoforcedirected.nativeElement).select('g.container').attr('transform', event.transform);
      });
    if (this.config.isGroups) {
      this.svgHulls = g.append('g').attr('class', 'hulls');
    }

    this.svgLinks = g.append('g').attr('class', 'links');

    this.svgNodes = g.append('g').attr('class', 'nodes');

    this.svgEdgePaths = g.append('g').attr('class', 'edgepaths');

    this._initArrows();
    this._initSimulation();
    if (this.config.isLegend) {
      this._initLegends();
    }
    this._updateColorscale();
    this._updateChart(this.data);
    this.updateDimensions();
    this.zoomIn();
    this.onGroupLegendTransition();
  }

  private _initLegends() {
    let thisComp = this;
    d3.select(this.legend.nativeElement).select('svg.legends').remove();
    let legends = d3.select(this.legend.nativeElement);

    this.legends = legends
      .append('svg')
      .attr('class', 'legends')
      .append('g')
      .attr('transform', 'translate(10,30)');
    let groups =
      ([
        ...new Set(
          this.data.nodes.map((item) => item[this._getConfig('groupKey')])
        ),
      ] as string[]) ?? [];
    const legend_g = this.legends
      .selectAll('.legend')
      .data(groups)
      .enter()
      .append('g')
      .attr('height', '30')
      .style('cursor', 'pointer')
      .attr('opacity', (d, p) => {
        return this.hideGroups.indexOf(d) > -1 ? 0.5 : 1;
      })
      .on('click', function (d, p) {
        let indx = thisComp.hideGroups.indexOf(p);
        if (indx == -1) {
          thisComp.hideGroups.push(p);
          thisComp.onGroupLegendTransition();
          d3.select(this).style('opacity', 0.5);
          thisComp.onLegendClick.emit(thisComp.hideGroups);
        } else {
          d3.select(this).style('opacity', 1);
          thisComp.revertLegend(p);
        }
      })
      .attr('transform', (d, i) => `translate(0,${i * 20})`);

    let ImgSVgs = new Set();
    for (let i = 0; i < groups?.length; i++) {
      if (groups[i]) {
        // let imgName = '<div>' + this.iconService.getIcon('icon', groups[i]?.toLowerCase() == 'unknown' ? '' : ( groups[i]?.toLowerCase() ?? ''), this.config.defaultIconColor, '15px', '15px') + '</div>';
        // ImgSVgs.add(imgName);
      }
    }

    legend_g
      .append('foreignObject')
      .attr('width', 20)
      .attr('height', 20)
      .attr('x', -10)
      .attr('y', -12)
      .append('xhtml').html(d3.scaleOrdinal().domain([]).range(ImgSVgs));

    legend_g
      .append('text')
      .attr('x', 10)
      .attr('y', 5)
      .attr('class', 'svg-legend-text')
      .text((d) => d);
  }

  revertLegend(p) {
    let indx = this.hideGroups.indexOf(p);
    if (indx > -1) {
      let groups = this.hideGroups.filter(f => f != p);
      this.hideGroups = groups;
      this.onGroupLegendRevert(p);
      this.onLegendClick.emit(this.hideGroups);
    }
  }

  setHideLegends(data) {
    this.hideGroups = data;
  }

  onGroupLegendTransition() {
    this.hideGroups.forEach(p => {
      d3.select(this.topoforcedirected.nativeElement).selectAll('.node')
        .filter((e, d) => e.group == p)
        .style('opacity', 0);

      d3.select(this.topoforcedirected.nativeElement).selectAll('.link')
        .filter((e, d) => e.source.group == p || e.target.group == p)
        .style('opacity', 0);
    });
  }

  onGroupLegendRevert(legend) {
    d3.selectAll('.node')
      .filter((e, d) => e.group == legend)
      .style('opacity', 1);

    d3.selectAll('.link')
      .filter((e, d) => this.hideGroups.indexOf(e?.source?.group) == -1 && this.hideGroups.indexOf(e?.target?.group) == -1)
      .style('opacity', 1);
  }

  getIconNames(name: string) {
    name = name ? name.toLowerCase() : '';
    if (name == 'web' || name == 'web server') {
      return 'web';
    } else if (name == 'application server' || name == 'app server') {
      return 'applicationserver';
    } else if (name == 'infrastructure' || name == 'infra') {
      return 'infra';
    } else if (name == 'database' || name == 'database server') {
      return 'databaseserver';
    } else if (name == 'middleware' || name == 'middleware server') {
      return 'middleware';
    } else if (name == 'host' || name == 'host server') {
      return 'host';
    } else if (name == 'service' || name == 'service server') {
      return 'service';
    } else {
      return 'unknown';
    }
  }
  private _updateColorscale() {
    this.groups = [
      ...new Set(
        this.data.nodes.map((item) => item[this._getConfig('groupKey')])
      ),
    ];
    this.colorScale = d3
      .scaleOrdinal() //=d3.scaleOrdinal(d3.schemeSet2)
      .domain([])
      .range(this.config.colorScale);
  }
  private _initArrows() {
    let defs = this.svg.append('defs');
    defs
      .append('marker')
      .attr('id', 'arrowhead')
      .attr('viewBox', '-0 -5 10 10') //the bound of the SVG viewport for the current SVG fragment. defines a coordinate system 10 wide and 10 high starting on (0,-5)
      .attr(
        'refX',
        this.config.isGroups
          ? this.config.nodeRadius + 5 * this.config.arrowSize
          : 30
      ) // x coordinate for the reference point of the marker. If circle is bigger, this need to be bigger.
      .attr('refY', 0)
      .attr('orient', 'auto')
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('xoverflow', 'visible')
      .append('svg:path')
      .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
      .attr('fill', this.config.line)
      .style('stroke', 'none');

    this._initShadow(defs);
  }

  private _initShadow(defs) {
    defs
      .append('filter')
      .attr('id', 'node-icon-image')
      .append('feDropShadow')
      .attr('dx', '0')
      .attr('dy', '0')
      .attr('stdDeviation', '3')
      .attr('flood-opacity', '0.5')
      .attr('flood-color', '#363636');
  }

  private _initSimulation() {
    this.simulation = d3
      .forceSimulation()
      .force(
        'collide',
        d3.forceCollide().radius((d) => {
          return this.config.nodeRadius * 1.2;
        })
      )
      .force(
        'x',
        d3
          .forceX(
            this.topoforcedirected.nativeElement.getBoundingClientRect().width
          )
          .strength(0.05)
      )
      .force(
        'y',
        d3
          .forceY(
            this.topoforcedirected.nativeElement.getBoundingClientRect()
              .height / 2
          )
          .strength(0.05)
      )
      .force('charge', d3.forceManyBody().strength(this.config.chargeStrength))
      .force(
        'link',
        d3
          .forceLink()
          .id((d) => {
            return d[this._getConfig('id')];
          })
          .distance(this.config.nodeLinkDistance)
      )
      .force(
        'center',
        d3.forceCenter(
          this.topoforcedirected.nativeElement.getBoundingClientRect().width /
          2,
          this.topoforcedirected.nativeElement.getBoundingClientRect().height /
          2
        )
      )
      .on('tick', () => {
        this.tick();
      });
    return this.simulation;
  }
  private _updateChart(data?) {    
    this.nodes = data.nodes;
    this.links = data.links;
    this._updateNodesAndLinks(this.nodes, this.links);
    this.loading = false;
  }
  private _updateHulls(n) {
    this.hull = this.svgHulls
      .selectAll('path.hull')
      .data([
        ...new Set(
          this.data.nodes.map((item) => item[this._getConfig('groupKey')])
        ),
      ]);
    let hullEnter = this._appendHullToGraph();
    this.hull = hullEnter.merge(this.hull);
  }
  private _appendHullToGraph() {
    let n = this._appendHull();
    this._appendHullGroup(n);

    return n;
  }
  private _appendHull() {
    return this.hull.enter().append('g').attr('class', 'hullg');
  }
  private _appendHullGroup(n) {
    return n
      .append('path')
      .attr('class', 'hull')
      .attr('class', 'hull')
      .style('fill', (d) => this.colorScale(d))
      .style('fill-opacity', '0.3');
  }

  private _updateNodesAndLinks(n, l) {
    if (this.config.isGroups) {
      this._updateHulls(n);
    }
    this._updateLinks(l);
    this._updateLinkText(l);
    this._updateNodes(n);
    this.simulation.nodes(n);
    this.simulation.force('link').links(l);
    setTimeout(() => {
      this.simulation.stop();
    }, 3000);
  }

  /**
   * Updates links
   * @param link
   */
  private _updateLinks(link) {
    this.link = this.svgLinks.selectAll('.link').data(link, (d) => {
      return d[this._getConfig('id')];
    });
    let linkEnter = this._appendLinkGraph();
    this.link = linkEnter.merge(this.link);
    this.line = this.svgLinks.selectAll('.link .line').data(this.links);
  }

  /**
   * Updates link text
   * @param link
   */
  private _updateLinkText(link) {
    this.edgepath = this.svgEdgePaths
      .selectAll('.edgepath')
      .data(link, (d) => d[this._getConfig('id')]);
    let edgePathEnter = this._appendEdgePath();
    this.edgepath = edgePathEnter.merge(this.edgepath);
    this.edgepaths = this.svgEdgePaths.selectAll('.edgepath').data(this.links);
  }
  private _updateNodes(n) {
    this.node = this.svgNodes.selectAll('.node').data(n, (d) => {
      return d[this._getConfig('id')];
    });
    let nodeEnter = this._appendNodeGraph();
    this.node = nodeEnter.merge(this.node);
  }

  /**
   * Tick  of mtl d3 forcedirected component
   */
  tick = () => {
    if (this.config.isGroups) {
      this._tickHulls();
    }
    this._tickNodes();
    this._tickLinks();
    this._tickLinkText();
  };

  /**
   * Ticks hulls
   */
  private _tickHulls() {
    let convex = convexHulls(this.nodes);
    for (let index = 0; index < convex?.length; index++) {
      const element = convex[index];
      let hull = select(this.hull._groups[0][index]);
      hull.select('.hull').attr('d', drawCluster(element));
    }
  }

  /**
   * Tick nodes of mtl d3 forcedirected component
   */
  private _tickNodes = () => {
    this.node.attr('transform', (d) => `translate(${d.x},${d.y})`);
  }

  /**
   * Tick links of mtl d3 forcedirected component
   */
  private _tickLinks = () => {
    this.line
      .attr('x1', (d) => d.source.x)
      .attr('y1', (d) => d.source.y)
      .attr('x2', (d) => d.target.x)
      .attr('y2', (d) => d.target.y)
      .on('mouseleave', this.mouseleave);
  };

  /**
   * Tick link text of mtl d3 forcedirected component
   */
  private _tickLinkText = () => {
    this.edgepaths.attr(
      'd',
      (d) =>
        'M ' +
        d.source.x +
        ' ' +
        d.source.y +
        ' L ' +
        d.target.x +
        ' ' +
        d.target.y
    );
  };

  /**
   * Appends node graph
   * @returns
   */
  private _appendNodeGraph() {
    let n = this._appendNode();
    if (this.config.isNodeCircle) {
      this._appendCircleToNode(n);
    }
    if (this.config.isUtilization) {
      this._appendUtilization(n);
    }
    if (this.config.isBadge) {
      this._appendBadgeToNode(n);
    }
    if (this.config.isNodeText) {
      this._appendTextToNode(n);
    }
    if (this.config.isIcon || !this.config.isNodeCircle) {
      this._appendIconToNode(n);
    }
    if (this.config.isShowFormatIcon) {
      this._formatIcons(n)
    }

    return n
  }

  /**
   * Appends node
   * @returns
   */
  private _appendNode() {
    return this.node
      .enter()
      .append('g')
      .attr('class', 'node')
      .on('click', (event, data) => this.mouseclick(event, data))
      .on('mouseover', () => this.mouseover)
      .on('mouseleave', this.mouseleave)
      .call(
        d3
          .drag()
          .on('start', this.dragstarted)
          .on('drag', this.dragged)
          .on('end', this.dragended)
      );
  }
  private _appendCircleToNode(n) {
    return n
      .append('circle')
      .attr('r', (d) => this.config.nodeRadius) //+ d.runtime/20 )
      .style('stroke', 'grey')
      .style('stroke-opacity', 0.3)
      .attr('id', (d) => 'circle' + d[this._getConfig('id')])
      .style('stroke-width', (d) => d.runtime / 10)
      .style('fill', (d) => this.colorScale(d[this._getConfig('groupKey')]))
      .on('mouseenter', this.mousemove)
      .on('mouseleave', this.mouseleave)
      .on("mouseover", this.mouseover);
  }
  private _appendBadgeToNode(n) {
    return n
      .append('circle')
      .attr('r', (d) => (d.alert ? 8 : 0)) //+ d.runtime/20 )
      .attr('cy', -((this.config.nodeRadius * 2) / 3.14))
      .attr('cx', (this.config.nodeRadius * 2) / 3.14 + 5)
      .style('stroke', 'white')
      .style('stroke-width', 2)
      .style('stroke-opacity', 1)
      .style('fill', (d) =>
        d.alert ? '#ec0304' : this.colorScale(d[this._getConfig('groupKey')])
      )
      .on('mouseenter', this.mousemove)
      .on('mouseleave', this.mouseleave);
  }
  private _appendTextToNode(n) {
    if (this.config.isIcon || !this.config.isNodeCircle) {
      let group = n.append('g');
      return group
        .append('text')
        .attr('x', (d) => -(d.name?.length / 2) * 2.5)
        .attr('y', 14)
        .attr(
          'dy',
          !this.config.isNodeCircle ? this.config.nodeRadius : Math.PI
        )
        .attr(
          'dx',
          !this.config.isNodeCircle
            ? -this.config.nodeRadius / 2
            : -(this.config.nodeRadius / Math.PI)
        )
        .text((d) => d.name);
    } else {
      return n
        .append('text')
        .attr(
          'dy',
          !this.config.isNodeCircle ? this.config.nodeRadius : Math.PI
        )
        .attr(
          'dx',
          !this.config.isNodeCircle
            ? -this.config.nodeRadius / 2
            : -(this.config.nodeRadius / Math.PI)
        )
        .text((d) => d.name);
    }
  }
  private _appendIconToNode(n) {
    if (this.config.isIcon || !this.config.isNodeCircle) {
      let group = n.append('g');
      group
        .append('circle')
        .attr('cx', -1)
        .attr('cy', -2)
        .attr('r', 13)
        .attr('filter', 'url(#node-icon-image)')
        .attr('stroke-width', 1.5)
        .attr('stroke', '#fff')
        .attr('fill', '#fff');

      group
        .append('foreignObject')
        .attr('height', this.config.isNodeCircle ? 25 : 35)
        .attr('width', this.config.isNodeCircle ? 25 : 35)
        .attr('x', -11)
        .attr('y', -15)
        .on('mouseenter', this.mousemove)
        .on('mouseleave', this.mouseleave)
        .on("mouseover", this.mouseover)
        .on("click", this.mouseclick)
        // .append('xhtml').html((d) => '<div style="opactiy:1;width:100%;height:35px;">' + this.iconService.getIcon('icon',  d?.type?.toLowerCase() == 'unknown' ? '' :( d?.type ?? ''), this.config.defaultIconColor, '20px', '20px') + '</div>')

      return group
        .append('circle')
        .attr('cx', 8)
        .attr('cy', 8)
        .attr('r', 6)
        .attr('stroke-width', 1.5)
        .attr('stroke', '#fff')
        .attr('fill', this.getStatusColor);
    } else {
      return n
        .append('foreignObject')
        .attr('height', this.config.isNodeCircle ? 25 : 35)
        .attr('width', this.config.isNodeCircle ? 25 : 35)
        .attr('filter', 'url(#node-icon-image)')
        .attr('x', -11)
        .attr('y', -15)
        // .append('xhtml').html((d) => '<div style="opactiy:1;width:100%;height:35px;">' + this.iconService.getIcon('icon', d?.type?.toLowerCase() == 'unknown' ? '' :( d?.type ?? ''), this.config.defaultIconColor, '20px', '20px') + '</div>');
    }
  }
  private _formatIcons(node) {
    return node.append('foreignObject')
      .attr('height', 10)
      .attr('width', 10)
      .attr('x', 15)
      .attr('y', -15)
      .attr("filter", "url(#node-icon-image)")
      // .append('xhtml').html((d) => d.children && d.collapsed ? this.iconService.getIcon('icon', 'collapse', 'white', '20px', '20px') : this.iconService.getIcon('icon', 'expand', 'white', '20px', '20px'))
  }
  private _appendUtilization(n) {
    let arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius((event, d) => 10)
      .startAngle(0)
      .endAngle(2 * Math.PI);
    var arcTmp = d3
      .arc()
      .innerRadius(() => {
        return this.config.nodeRadius + 3;
      })
      .outerRadius(() => {
        return this.config.nodeRadius + 8;
      })
      .startAngle(0)
      .endAngle(2 * Math.PI);

    var arc1 = d3
      .arc()
      .innerRadius(() => {
        return this.config.nodeRadius + 3;
      })
      .outerRadius(() => {
        return this.config.nodeRadius + 8;
      })
      .startAngle(0)
      .endAngle((d) => {
        return (d[this._getConfig('utilizationKey')] / 100) * 2 * Math.PI;
      });
    n.append('path')
      .attr('class', 'path-foreground')
      .attr('d', (d) =>
        d[this._getConfig('utilizationKey')] ? arcTmp(d) : null
      )
      .style('fill', '#e1e1e1');
    n.append('path')
      .attr('class', 'path-foreground')
      .attr('d', (d) =>
        d[this._getConfig('utilizationKey')] &&
          d[this._getConfig('utilizationKey')] > 0
          ? arc1(d)
          : null
      )
      .style('fill', (d) => {
        return d[this._getConfig('utilizationKey')] &&
          d[this._getConfig('utilizationKey')] > 0
          ? this.perc2color(d[this._getConfig('utilizationKey')], 5, 70)
          : null;
      });
  }

  private perc2color = (perc, min, max) => {
    var hue = ((1 - perc / 100) * 120).toString(10);
    return ['hsl(', hue, ',100%,50%)'].join('');
  };
  private _appendLinkGraph() {
    let l = this._appendLink();
    this._appendLinkToNode(l);
    this._appendTextToLink(l);
    this._appendTextToPath(l);
    return l;
  }
  private _appendLink() {
    return this.link
      .enter()
      .append('g')
      .attr('class', 'link')
      .attr('stroke-width', 2)
      .attr('stroke', (d) => {
        return this.getStatusColor(d);
      })
      .on('mouseover', function (d, i, p) {
        d3.select(this).select('line').attr('stroke-width', '3');
      })
      .on('mouseenter', this.linkmousemove)
      .on('mouseleave', function (d) {
        d3.select(this).select('line').attr('stroke-width', '2');
      });
  }

  private _appendLinkToNode(l) {
    return l
      .append('line')
      .attr('class', 'line')
      .attr('id', (d, i) => {
        return '#edgepath' + i;
      })
      .attr('marker-end', this.config.isArrowHead ? 'url(#arrowhead)' : '')
      .join('line');
  }

  private _appendTextToLink(l) {
    return l.append('title').text((d) => d.title);
  }
  private _appendEdgePath() {
    let e = this._appendEdgeTextPath();
    this._appendPathForText(e);
    this._appendTextPathToPath(this._appendTextToPath(e));
    return e;
  }
  private _appendEdgeTextPath() {
    return this.edgepath
      .enter()
      .append('g')
      .attr('class', 'edgepathgroup')
      .on('mouseenter', this.mousemove)
      .on('mouseleave', this.mouseleave);
  }
  private _appendPathForText(edge) {
    return edge
      .append('path')
      .attr('class', 'edgepath')
      .attr('fill-opacity', 0)
      .attr('stroke-opacity', 0)
      .attr('id', (d, i) => {
        return 'edgepath' + i;
      })
      .style('pointer-events', 'none');
  }

  private _appendTextToPath(e) {
    return e
      .append('text')
      .style('pointer-events', 'none')
      .attr('class', 'edgelabel')
      .attr('id', (d, i) => {
        return 'edgelabel' + i;
      })
      .attr('font-size', 10)
      .attr('fill', '#aaa')
      .attr('dy', -5);
  }
  private _appendTextPathToPath(text) {
    return text
      .append('textPath') //To render text along the shape of a <path>, enclose the text in a <textPath> element that has an href attribute with a reference to the <path> element.
      .attr('xlink:href', (d, i) => {
        return '#edgepath' + i;
      })
      .style('text-anchor', 'middle')
      .style('pointer-events', 'none')
      .attr('startOffset', '50%')
      .text((d) => d.title);
  }

  private dragstarted = (event, d) => {
    if (!event.active) this.simulation.alphaTarget(0.3).restart(); //sets the current target alpha to the specified number in the range [0,1].
    d.fy = d.y; //fx - the node’s fixed x-position. Original is null.
    d.fx = d.x; //fy - the node’s fixed y-position. Original is null.
  }
  private dragged = (event, d) => {
    d.fx = event.x;
    d.fy = event.y;
    this.fixNodes(d);
  }
  private fixNodes = (drag) => {
    this.nodes.forEach((node) => {
      if (drag.id != node.id) {
        node.fx = node.x;
        node.fy = node.y;
      }
    });
  }
  private dragended = (d) => {
    if (!d.active) {
      this.simulation.alphaTarget(0);
    }
    d.fx = null;
    d.fy = null;
  };
  private mouseover = (event, element) => {
    // select(element).raise();
    // to stop tooltip for hided links/nodes
    let sIndx = this.hideGroups?.indexOf(element.group);
    if (sIndx > -1) {
      return
    }
    //
    d3.select(this.topoforcedirected.nativeElement).selectAll('.link')
      .filter((e, d) => {
        return (
          (element[this._getConfig('id')] !=
            e['source'][this._getConfig('id')] &&
            element[this._getConfig('id')] != e['target'][this._getConfig('id')]) && (this.hideGroups.indexOf(e?.source?.group) == -1 && this.hideGroups.indexOf(e?.target?.group) == -1)
        );
      })
      .style('opacity', 0.1);
    let links = d3.select(this.topoforcedirected.nativeElement)
      .selectAll('.link')
      .filter(
        (e, d) =>
          (element[this._getConfig('id')] ==
            e['source'][this._getConfig('id')] ||
            element[this._getConfig('id')] == e['target'][this._getConfig('id')]) && (this.hideGroups.indexOf(e?.source?.group) == -1 && this.hideGroups.indexOf(e?.target?.group) == -1)
      )
      .style('opacity', 1);
    // get list of connected nodes
    let involved_nodes: any[] = links
      .data()
      .map((d) => [
        d['source'][this._getConfig('id')],
        d['target'][this._getConfig('id')],
      ])
      .flat();
    involved_nodes = !involved_nodes.length
      ? element[this._getConfig('id')]
      : involved_nodes;
    involved_nodes = involved_nodes?.length >0 ? involved_nodes : [];
    d3.select(this.topoforcedirected.nativeElement).selectAll('.node')
      .filter((d) => (!involved_nodes?.includes(d[this._getConfig('id')])) && (this.hideGroups?.indexOf(d?.group) == -1) && d[this._getConfig('id')] != element[this._getConfig('id')])
      .style('opacity', 0.1);
    d3.select(this.topoforcedirected.nativeElement).selectAll('.link')
      .filter((d) => !involved_nodes?.includes(d[this._getConfig('id')]))
      .style('stroke-opacity', 1);
    d3.select(this.topoforcedirected.nativeElement).selectAll('.hull').style('fill-opacity', 0.1);
  };

  private mouseclick = (event, d) => {
    let data = this.data;
    if (d) {
      d['collapsed'] = !d['collapsed']
      this.nodeClick.emit({ d, data });
      if (this.config.onNodeClickReload) {
        this._init();
      }
    }
    else{
      this._init();
    }
    // if (!event.defaultPrevented) {
    //   let links
    //   if (this.config.isCollapsable) {
    //     links = this.recurse(d);
    //     this.data.nodes[d.index].collapsed = !d.collapsed;
    //     this.data.links = links;
    //   }
    // }
  }


  private recurse = (d) => {
    var inc = d.collapsed ? -1 : 1;
    //check if link is from this node, and if so, collapse
    this.data.links.forEach((l) => {
      if (l.source.id === d.id) {
        l.target.collapsing += inc;
        this.recurse(l.target);
      }
    });
    return this.data.links;
  }

  private mousemove = (event, d) => {
    // to stop tooltip for hided links/nodes
    let sIndx = this.hideGroups.indexOf(d.group);
    if (sIndx > -1) {
      return
    }
    //

    const outputArray = [];
    let i = 0;
    if (d.hasOwnProperty(this._getConfig('nodeTooltipDataobject'))) {
      const popover = this.popover.nativeElement;
      let mainDiv = this.topoforcedirected.nativeElement?.getBoundingClientRect();
      let span = event?.srcElement?.getBoundingClientRect();


      Object.keys(d[this._getConfig('nodeTooltipDataobject')] ?? {}).forEach((type) => {
        let val = Object.values(d[this._getConfig('nodeTooltipDataobject')]?? {});
        outputArray.push({
          name: type,
          value: val[i],
        });
        i++;
      });
      this.tooltipproperties = outputArray;
      if (this.tooltipproperties.length > 0) {
        select(this.popover.nativeElement).style('visibility', 'visible');
        select(this.popover.nativeElement).select('.popover').style('visibility', 'visible');
      }
      // const container = d3.select(popover)
      //   .style('position', 'fixed')
      //   .style('left', `${span.left + span.width+350 > (mainDiv.left + mainDiv.width) ? span.left - 350 : span.left + span.width + 50}px`)
      //   .style('top', `${(span.top > 50 ? span.top-50: span.top+span.height)}px`)
      //   .style('z-index', 1000);

      let yVal = event.pageY - 380 > 0 ? event.pageY - 380 : 25;
      let xVal =
        event.view.screen.width > event.pageX + 550
          ? event.pageX - 150
          : event.pageX - 600;

      if (event.offsetX < event.view.screen.width / 2) {
        xVal = event.offsetX + 100 + (this.isfullscreen ? -150 : 0)
      }

      if (event.offsetX > event.view.screen.width / 2) {
        xVal = event.offsetX - 380 + (this.isfullscreen ? -200 : 0)
      }
      const container = select(popover)
      .style('position', 'fixed')
      .style('left', `${event.view.screen.width > event.pageX + 380 ? event.pageX + 20 : event.pageX - 380}px`)
      .style('top', `${(event.layerY)}px`)
      .style('z-index', 10000000);
    
    }
    
    
  };

  private linkmousemove = (event, d) => {
    // to stop tooltip for hided links/nodes
    let sIndx = this.hideGroups.indexOf(d.source.group);
    let tIndx = this.hideGroups.indexOf(d.target.group);
    if (sIndx > -1 || tIndx > -1) {
      return
    }
    //

    const outputArray = [];
    let i = 0;
    if (d.hasOwnProperty(this._getConfig('linkTooltipDataobject'))) {
      let mainDiv = this.topoforcedirected.nativeElement?.getBoundingClientRect();
      let span = event?.srcElement?.getBoundingClientRect();
      Object.keys(d[this._getConfig('linkTooltipDataobject')]??{}).forEach((type) => {
        let val = Object.values(d[this._getConfig('linkTooltipDataobject')]??{});
        outputArray.push({
          name: type,
          value: val[i],
        });
        i++;
      });
      this.tooltipproperties = outputArray;
      if (this.tooltipproperties.length > 0) {
        select(this.popover.nativeElement).style('visibility', 'visible');
        select(this.popover.nativeElement).select('.popover').style('visibility', 'visible');
        const popover = this.popover.nativeElement;

        // let yVal = event.pageY - 380 > 0 ? event.pageY - 380 : 25;
      let yVal = event.pageY - 380 < 25 ? 25 : event.pageY - 380;
      let xVal =
        event.view.screen.width > event.pageX + 550
          ? event.pageX - 150
          : event.pageX - 600;

      if (event.offsetX < event.view.screen.width / 2) {
        xVal = event.offsetX + 100 + (this.isfullscreen ? -150 : 0)
      }

      if (event.offsetX > event.view.screen.width / 2) {
        xVal = event.offsetX - 380 + (this.isfullscreen ? -200 : 0)
      }
      const container = d3.select(popover)
        .style('position', 'fixed')
        .style('left', `${event.view.screen.width > event.pageX + 380 ? event.pageX + 20 : event.pageX - 380}px`)
        .style('top', `${(event.layerY)}px`)
        .style('z-index', 10000000);

        // const container = d3.select(popover)
        //   .style('position', 'fixed')
        //   .style('left', `${span.left + span.width+350 > (mainDiv.left + mainDiv.width) ? span.left - 350 : span.left + span.width + 50}px`)
        //   .style('top', `${(span.top > 50 ? span.top-50: span.top+span.height)}px`)
        //   .style('z-index', 1000);
      }
      
    }
  };

  private _mouseDown = (d) => {
    // console.log('clicked')
  };
  private _mouseUp = (d) => {
    // console.log('released')
  };
  private mouseleave = (d) => {
    d3.selectAll('.popover')
      .transition()
      .style('transitionDelay', '2s')
      .style('visibility', 'hidden');
    d3.select(this.popover.nativeElement).style('visibility', 'hidden');
    d3.select('#' + this.chartId).selectAll('.node').style('opacity', 1);
    d3.select('#' + this.chartId).selectAll('.link').style('opacity', 1);
    d3.select('#' + this.chartId).selectAll('.nodename').attr('font-weight', 400).style('opacity', 0.35);

    d3.select('#' + this.chartId).selectAll('.hull').style('fill-opacity', 0.35);
    this.onGroupLegendTransition();
  };
  resize() {
    this.width =
      this.topoforcedirected.nativeElement.getBoundingClientRect().width || 800;
    this.height =
      this.topoforcedirected.nativeElement.getBoundingClientRect().height ||
      900;

    this.svg.attr('width', this.width).attr('height', this.height);

    this._init()
  }

  reload() {
    this._zoomToPosition(0, 0, 1.2);
    this.resize();
    this.scale = 1.2
    this.data = { ...this.clonedData };
    this.hideGroups = [...this.clonedHideGroups];
    this.config = { ...this.config, ...this.configuration };
    this.onLegendClick.emit(this.hideGroups);
    this._init();
  }

  resetZoom() {
    this._zoomToPosition(0, 0, 1);
  }

  _zoomToItem(item) {
    setTimeout(() => {
      const { y, x } = select(item).node();
      this._zoomToPosition(y, x, 1);
    }, TRANSITION_DURATION);
  }

  _zoomToPosition(y, x, scale) {
    this.svg
      .call(this.zoom)
      .transition()
      .duration(TRANSITION_DURATION)
      .call(
        (event) => event.transform,
        zoomIdentity
          .translate(-y * scale + this.width / 2, -x * scale + this.height / 2)
          .scale(scale)
      );
  }

  zoomIn() {
    const { k: scale } = zoomTransform(this.svg.node());
    this.zoom.scaleTo(this.svg, scale + 0.25);
    this.scale = scale;
  }

  zoomOut() {
    const { k: scale } = zoomTransform(this.svg.node());
    this.zoom.scaleTo(this.svg, scale - 0.25);
    this.scale = scale;
  }
  ngOnDestroy() {
    this.data = {};
  }
  fullscreen() {
    this.updateDimensions();
    this.isfullscreen = !this.isfullscreen;
  }

  private getStatusColor = (nodeData) => {
    let status = nodeData?.status?.toLowerCase() ?? '';
    if (status == 'non-critical') {
      status = 'noncritical';
    }

    let color = this.config.statusColors[status];
    if (color) {
      return color;
    } else {
      return this.config.statusColors?.default;
    }
  }
}

