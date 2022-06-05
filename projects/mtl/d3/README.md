# MTL-D3

## Features

* Compaptible with the [Neo4j data format](#data-format) and the [D3.js data format](#d3js-data-format).
* Force simulation.
* Info panel that shows nodes and relationships information on hover.
* Hover tooltip.
* Custom node colors color palette.
* Text nodes + SVG image nodes ).
* Sticky nodes (drag to stick, single click to unstick).
* Dynamic graph update.
* Highlight nodes on init.
* Relationship auto-orientation.
* Legends
* Zoom, pan.
* Compatible with D3.js v7.



## Documentation


### Config

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| **isArrowHead** | *boolean* | Show the information panel: `true`, `false`. Default: `true`. |
| **legends** | *boolean* | Show the information panel: `true`, `false`. Default: `true`. |
| **isUtilization** | *boolean* | Show the information panel: `true`, `false`. Default: `true`. |
| **isIcon** | *boolean* | Show the information panel: `true`, `false`. Default: `true`. |
| **isGroups** | *boolean* | Show the information panel: `true`, `false`. Default: `true`. |
| **isNodeCircle** | *boolean* | Show the information panel: `true`, `false`. Default: `true`. |
| **chargeStrength** | *int* | Minimum distance between nodes. Default: 2 * *nodeRadius*. |
| **groupKey** | *string* | Minimum distance between nodes. Default: `group` * *nodeRadius*. |
| **id** | *int* | Render the nodes using id. Default: id * *id*. |
| **sampleData** | *object* | Graph data in (#data-format). |
| **nodeRadius** | *int* | Radius of nodes. Default: 30. |
| **isClickable** | *function* | Callback function to be executed when the user clicks a node. |
| **isCollapsable** | *boolean* | Enables collapse and expand the node: `true`, `false`. Default: `false`. |
| **showDefaultTooltips** | *boolean* | Should show some default fileds or not in tooltip: `true`, `false`. Default: `true`. |
<!-- | **onNodeDoubleClick** | *function* | Callback function to be executed when the user double clicks a node. | -->
| **onNodeDragEnd** | *function* | Callback function to be executed when the user finishes dragging a node. |
| **onNodeDragStart** | *function* | Callback function to be executed when the user starts dragging a node. |
| **mouseenter** | *function* | Callback function to be executed when the mouse enters a node. |
| **mouseleave** | *function* | Callback function to be executed when the mouse leaves a node. |
<!-- | **onRelationshipDoubleClick** | *function* | Callback function to be executed when the user double clicks a relationship. | -->
<!-- | **zoomFit** | *boolean* | Adjust the graph to the container once it has been loaded: `true`, `false`. Default: `false`. | -->


### Documentation

#### D3.js data format

```
{

    "nodes": [
      {

        "id": "ABCD",

        "label": "ABCD",

        "name": "ABCD",

        "true": true,

        "group": "A",

        "type": "application",
        "usage": 10,

        "properties": {

          "APP": "ACD",

          "Criticality": "MC",

          "Owner": ""

        }

      },
      {

        "id": "CDEF",

        "label": "CDEF",

        "name": "CDEF",

        "true": true,

        "group": "A",

        "type": "host",
        "usage": 10,

        "properties": {

          "APP": "ACD",

          "Criticality": "MC",

          "Owner": ""

        }

      }

    ],

    "links": [

      {

        "source": "ABCD",
        "title":"b6vv",
        "target": "etnirearch-awseast.verizon.com",

      },
      {

        "source": "CDEF",
        "title":"b6vv",
        "target": "etnirearch-awseast.verizon.com",

      }

    ]

  }
```
### Example

## Example for D3 Tree graph

```html
 <mtl-d3-tree-map [data]="serviceTree" [resetData]="serviceTree" [treeType]="'DEFAULT'" [configuration]="treeConfig"></mtl-d3-tree-map>
```




Live example @ 192.168.20.166

```javascript
var treeConfig = {
    nodeSize: [60, 160],
    nodeDistance: 300,
    scaleStep:  0.25,
    scaleExtent: [0.5, 2],
    childrenKey: 'children',
    itemId: 'itemId',
    searchQueryKey: 'name',
    svgClass: 'd3-hierarchy',
    leafDashArraySize: '10,5',
    height: 500,
    width: 800,
    isArrowHead: true,
    isforwardArrow: false,
    isbackwardArrow: false,
    isIndented: false,
    isShowOperationsIcon: false,
    isShowRequiredAction: false,
    showDefaultTooltips: true
  };

var treeType = 'DEFAULT';
// Tree types available are 'DEFAULT', 'SERVICE' and 'ASSESSMENT'
```

```html
  <mtl-tree-filter [inputData]="copytdata" (setSelection)="setSelection($event)" (resetSelection)="resetSelection($event)"
  (loadTopology)="loadTopology($event)">
  </mtl-tree-filter>
```

## Example for D3 Network/Forcedirected graph

```html
 <mtl-d3-forcedirected [data]="dataNodes" [configuration]="config" [hideGroups]="hideGroups" (onLegendClick)="onLegendClik($event)" (nodeClick)="onNodeClick($event)"></mtl-d3-forcedirected> 
```
### Config

| Input Parameter | Type | Description |
| --------- | ---- | ----------- |
| **data** | *json Object* | Data to generate Nodes and Node links. |
| **configuration** | *json Object* | Configuration for Chart. |
| **hideGroups** | *Array* | To hide respective nodes with that group name. |

### Events

| Event | Description |
| --------- | ----------- |
| **onLegendClick** | Event emits on clicking on legends. |
| **nodeClick** | Eevent emits on clicking on node. |

## Configration object details for Forced directed graph

| Input Parameter | Default Value | Description |
| --------- | ---- | ----------- |
| **line** | **"#8e8f90"** | Line and Arrow color between nodes |
| **arrowSize** | **3** | Arrow head size |
| **svgClass** | **'d3-forcedirected'** | CSS classname of the D3 chart container |
| **isGroups** | **false** | Show/Hide Groups background for nodes |
| **isBadge** | **true** | Show/Hide badge nodes |
| **isArrowHead** | **true** | Show/Hide arrow for connecting nodes |
| **isUtilization** | **true** | Show/Hide utilization value on nodes |
| **nodeRadius** | **10** | Radius of the node showing |

```javascript
config = {
    line: "#8e8f90",
    arrowSize: 3,
    svgClass: 'd3-forcedirected',
    isGroups: false,
    isBadge: true,
    isArrowHead: true,
    isUtilization: true,
    nodeRadius: 10,
    isIcon: true,
    width: 200,
    height: 200,
    chargeStrength: -300,
    scaleExtent: [0.5, 2],
    isNodeText: true,
    isTitle: true,
    isLegend: true,
    groupKey: 'group',
    utilizationKey: 'usage',
    isNodeCircle: false,
    id: 'id',
    isShowFormatIcon: true,
    nodeLinkDistance: 100,
    defaultIconColor: '#0d6efd',
    onNodeClickReload: true,
    colorScale: ['#81c7f0', '#6490de', '#34bfa3', '#ff9200', '#7a6ffd', '#fff686', '#9e79db'],
    statusColors: { critical: "#FF1616", noncritical: "#49A43B", warning: "#FF8E0D", default: "#d3d3d3", ok: "#49A43B", high: "#C74634", overload: "#FBBC05", notavailable: "#969696", success: "#2a75d7"
    }
  };
```

## Default configration for Forced directed graph

```javascript
config = {
    arrowHead: "#8e8f90",
    line: "#8e8f90",
    arrowSize: 3,
    svgClass: 'd3-forcedirected',
    isGroups: false,
    isCollapsable: false,
    isClickable: true,
    isBadge: true,
    isTooltip: true,
    isArrowHead: true,
    isArrowText: true,
    isUtilization: true,
    isSeverity: true,
    nodeRadius: 10,
    isIcon: true,
    width: 200,
    height: 200,
    chargeStrength: -300,
    scaleExtent: [0.5, 2],
    isNodeText: true,
    isTitle: true,
    isLegend: true,
    groupKey: 'group',
    utilizationKey: 'usage',
    isNodeCircle: false,
    id: 'id',
    isShowFormatIcon: true,
    nodeLinkDistance: 100,
    defaultIconColor: '#0d6efd',
    onNodeClickReload: true,
    colorScale: ['#81c7f0', '#6490de', '#34bfa3', '#ff9200', '#7a6ffd', '#fff686', '#9e79db'],
    statusColors: { critical: "#FF1616", noncritical: "#49A43B", warning: "#FF8E0D", default: "#d3d3d3", ok: "#49A43B", high: "#C74634", overload: "#FBBC05", notavailable: "#969696", success: "#2a75d7"
    }
  };
```
## Example of input data for Forced-direct graph

```javascript
dataNodes = {
    "nodes": [
        {
            "id": 1256,
            "application_id": 1256,
            "name": "mbackend:mENV2",
            "category": 1,
            "info": {
                "Name": "mbackend:mENV2",
                "Status": "Verified"
            }
        }
    ],
    "links": [
        {
            "id": "link_id_2",
            "name": "mbackend:mENV2 - mbackend:mENV2",
            "source": 1256,
            "target": 1256,
            "info": {
                "Application": "mbackend:mENV2",
                "Dependent Application": "mbackend:mENV2",
                "Dependency Type": "Service",
                "Status": "Verified"
            }
        }
    ]
};
```


