import { Injectable } from '@angular/core';
import { ICONS } from './models/icons';
import { Utilities } from './utilities';
import {
  AMBER_COLOR,
  BACKWARDARROW,
  COLLAPSE, DANGER_COLOR, DEFAULT_TREE_CHILDREN_KEY, DEFAULT_TREE_FORMAT_LABEL_TEXT, DEFAULT_TREE_HEIGHT, DEFAULT_TREE_ITEM_ID,
  DEFAULT_TREE_LEAF_DASH_ARRAY_SIZE, DEFAULT_TREE_NDDE_SIZE, DEFAULT_TREE_NODE_DISTANCE, DEFAULT_TREE_ON_NODE_CLICK,
  DEFAULT_TREE_ON_SELECTION_CLEAR, DEFAULT_TREE_SCALE_EXTENT, DEFAULT_TREE_SCALE_STEP, DEFAULT_TREE_SEARCH_QUERY_KEY,
  DEFAULT_TREE_SVG_CLASS, DEFAULT_TREE_WIDTH, EXPAND, FORWARDARROW, HOVER_COLOR, IMAGEPATH, LEAF_COLOR,
  LINK_COLOR, NODE_COLOR, ROOT_COLOR, SELECTED_COLOR, SUCCESS_COLOR, DEFAULT_TREE_TRANSITION_DURATION,
  DEFAULT_TREE_ISARROWHEAD
} from './constants';
import { TreeType } from './models/treetype.enum';

@Injectable({
  providedIn: 'root'
})
export class D3Service {

  icons = ICONS;
  constructor() { }

  //#region Topology related

  /**
   * @param data 
   * @returns node color
   */
   getStateColor(data) {
    if (data.type === 'host') {
      return Utilities.getStatusBadge(Utilities.converStatusCode(data.discoveryStatus))
    } else {
      return
    }
  }

  nodeImages(type = '') {
    if (['application', 'applications', 'host', 'hosts'].indexOf(type.toLowerCase()) > -1) {
      return this.icons.computer;
    } else if (['alert', 'alerts'].indexOf(type.toLowerCase()) > -1) {
      return this.icons.shield;
    } else {
      return this.icons.services;
    }
  }

  _initForwardArrowHeads(defs, isForward: boolean) {
    defs.append('marker')
      .attr('id', 'end-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', !isForward ? -18 : 25)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', !isForward ? 180 : 'auto')
      .attr('class', 'arrow')
      .append('path')
      .attr('d', 'M0,-5L10,0L0,5');
    // End arrow selected
    defs.append('marker')
      .attr('id', 'end-arrow-selected')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', !isForward ? -18 : 25)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', !isForward ? 180 : 'auto')
      .attr('class', 'arrowselected')
      .append('path')
      .attr('d', 'M0,-5L10,0L0,5');
  }

  _initBackwardArrowHeads(defs) {
    // Start arrow
    defs.append('marker')
      .attr('id', 'start-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 25)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .attr('class', 'arrow')
      .append('path')
      .attr('d', 'M10,-5L0,0L10,5');
    // Start arrow selected
    defs.append('marker')
      .attr('id', 'start-arrow-selected')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 25)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .attr('class', 'arrowselected')
      .append('path')
      .attr('d', 'M10,-5L0,0L10,5');
  }

  addEndArrow(svg){
    return svg.append('marker')
    .attr('id', 'end-arrow')
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 30)
    .attr('refY', 0)
    .attr('markerWidth', 5)
    .attr('markerHeight', 5)
    .attr('orient', 'auto')
    .attr('class', 'arrow')
    .append('path')
    .attr('d', 'M0,-5L10,0L0,5');
  }

  _formatroundedcards(node, treeType: TreeType) {
    return node
    .attr('x', -15)
    .attr('y', -15)
    .attr('height', 30)
    .attr('width', 175)
    .attr('rx', 15)
    .attr('ry', 120)
    .attr('fill', 'white')
    .style('pointer-events', 'all')
    .style('stroke', 'rgb(179,178,178)');
  }

  _formatIndicators(indicators, childrenKey, treeType: TreeType) {
    const that = this;
    if(treeType != TreeType.ASSESSMENT){
      return indicators
      .attr('r', 13.5)
      .attr('cx', 0)
      .attr('cy', 0)
      .style('stroke-opacity', '1')
      .attr('stroke-width', 1)
      .attr('stroke',
        // 'white'
        function (d) {
          if (this.parentNode.getAttribute('is-selected') === 'true') {
            return SELECTED_COLOR;
          }

          if (this.parentNode.getAttribute('is-hover') === 'true') {
            return HOVER_COLOR;
          }

          if (!that._itemHasChildren(d, childrenKey)) {
            if (d.data.health !== undefined || d.data.health !== '') {
              return that._nodeColor(d.data.health)
            }
            return LEAF_COLOR;
          }

          if (!d.parent) {
            if (d.data.health !== undefined || d.data.health !== '') {
              return that._nodeColor(d.data.health)
            }
            return ROOT_COLOR;
          }
          if ((d.parent || that._itemHasChildren(d, childrenKey))) {
            if (d.data.health) {
              return that._nodeColor(d.data.health)
            }
            return NODE_COLOR;
          }
        }
      )
      .attr('fill', function (d) {
        if (this.parentNode.getAttribute('is-selected') === 'true') {
          return SELECTED_COLOR;
        }

        if (this.parentNode.getAttribute('is-hover') === 'true') {
          return HOVER_COLOR;
        }

        if (!that._itemHasChildren(d, childrenKey)) {
          if (d.data.health !== undefined || d.data.health !== '') {
            return that._nodeColor(d.data.health)
          }
          return LEAF_COLOR;
        }

        if (!d.parent) {
          if (d.data.health) {
            return that._nodeColor(d.data.health)
          }
          return ROOT_COLOR;
        }
        if ((d.parent || that._itemHasChildren(d, childrenKey))) {
          if (d.data.health) {
            return that._nodeColor(d.data.health)
          }
          return NODE_COLOR;
        }
      })
    }else if(treeType == TreeType.ASSESSMENT){
        return indicators
        .attr('r', 13.5)
        .attr('rx', 0)
        .attr('ry', 0)
        .style('stroke-opacity', '1')
        .attr('stroke-width', 1)
        .attr('stroke',
          // 'white'
          function (d) {
            return '#006BD4';
          }
        )
        .attr('fill', function (d) {
          return '#006BD4';
        })
      }
      
  }

  _itemHasChildren(item, childrenKey) {
    if (!Array.isArray(item.data[childrenKey])) {
      return false;
    }

    if (item.data[childrenKey].length === 0) {
      return false;
    }

    return true;
  }

  _nodeColor(d) {
    if (d === 'ok' || d === 'Ok') {
      return SUCCESS_COLOR;
    }
    if (d === 'Warning' || d === 'warning') {
      return AMBER_COLOR;
    }
    if (d === 'Critical' || d === 'critical') {
      return DANGER_COLOR
    }
    return LEAF_COLOR;
  }

  createNoChildNodes(data) {
    const dataObj = {
      'centerNode': true,
      'isExpand': true,
      'children': [],
      'reCenterNode': data
    };
    let recenterDepth = data.depth;
    if (data.name === (data.parent ?
      (data.parent.data.showPreNodes ? data.parent.data.actualName : data.parent.data.name) : data.data.name)) {
      dataObj.children = data.children;
      recenterDepth = data.depth + 1;
    } else {
      if (data.children && data.children.length) {
        data.children.forEach(function (obj) {
          if (obj.name === (data.parent ?
            (data.parent.data.showPreNodes ? data.parent.data.actualName : data.parent.data.name) : data.name)) {
            dataObj.children = obj.children;
            recenterDepth = obj.depth + 1;
          } else {
            if (obj.children) {
              obj.children.forEach(el => { return this.createNoChildNodes(el) });
            }
          }

        });
      }
    }
    return data;
  }

  _formatIcons(node, childrenKey, treeType: TreeType) {
    const el = node
      .style('visibility', 'visible');
      el.append('image')
      .attr('xlink:href', (d) => {
        if (d._children) {
          return this.icons.expand;
        } else {
          return this._itemHasChildren(d,childrenKey) ? this.icons.collapse : '';
        }
      })
      .attr('x', 138)
      .attr('y', -10)
      .attr('width', 18)
      .attr('height', 18)
      .style('cursor', 'pointer');
    return el;
    
  }

  _formatLabels(labels, childrenKey, formatLabelText) {
    return labels
      .attr('font-weight', d => {
        if (!this._itemHasChildren(d, childrenKey)) {
          return 600;
        }
        return 300;
      })
      .attr('dy', 5)
      .attr('x', 60)
      .style('fill', '#10183a')
      .attr('text-anchor', () => 'middle')
      .text(formatLabelText);
  }
  //#endregion
}
