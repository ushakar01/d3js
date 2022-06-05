import { Component, OnInit, ViewChild } from '@angular/core';
import { MtlD3TreeMapComponent } from 'projects/mtl/d3/src/lib/components/mtl-d3-tree-map/mtl-d3-tree-map.component';
import { AppService } from '../../app.service';

@Component({
  selector: 'mtl-lib-d3',
  templateUrl: './lib-d3.component.html',
  styleUrls: ['./lib-d3.component.scss'],
})
export class LibD3Component implements OnInit {
    @ViewChild('tree') d3Tree: MtlD3TreeMapComponent
  config = {
    isGroups: false,
    isCollapsable: false,
    isShowFormatIcon: false,
    isLegend: true,
    onNodeClickReload: false,
    // isBadge: true,
    isIcon: false
  };

  treeConfig = {
    isIndented: false,
    isArrowHead: false,
    isforwardArrow: false,
    isbackwardArrow: true,
    isShowOperationsIcon: true,
    isShowRequiredAction: true,
    isShowLogs: false,
    isTooltip:false,
    isFixedTooltip:true,
    showDefaultTooltips: false
  };

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
    ],
    "categories": [
        {
            "name": "Category0"
        },
        {
            "name": "Category1"
        }
    ]
};

  data = {
    "nodes": [
        {
            "label": "E-Billing",
            "id": "hx-tTn0B5RnylR7cVJAl",
            "name": "E-Billing",
            "type": "application",
            "group": null,
            "alert": false,
            "usage": 0,
            "status":'ok',
            "properties": null,
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "kubernetes",
            "id": "Tbmr3yfJVOmqmVDfCsGHV0rVmBPABT",
            "name": "kubernetes",
            "type": "kubernetes",
            "group": null,
            "alert": false,
            "status":'ok',
            "usage": 0,
            "properties": null,
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "ip-172-31-23-192.us-east-2.compute.internal",
            "id": "b1D79BQXsCDEjFYTuN4LA0kOTvptHR",
            "name": "ip-172-31-23-192.us-east-2.compute.internal",
            "type": "node",
            "status":'ok',
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "Size": "4/16208848Ki",
                "Pod Count": "58",
                "Operating System": "linux"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "ip-172-31-46-84.us-east-2.compute.internal",
            "id": "Sq5pSOmrgZkmhKDnOf3imrtHS7L7iU",
            "name": "ip-172-31-46-84.us-east-2.compute.internal",
            "type": "node",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "Size": "4/16208848Ki",
                "Pod Count": "58",
                "Operating System": "linux"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "ip-172-31-7-18.us-east-2.compute.internal",
            "id": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "name": "ip-172-31-7-18.us-east-2.compute.internal",
            "type": "node",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "Size": "4/16208916Ki",
                "Pod Count": "58",
                "Operating System": "linux"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "alert-697979dcb9-7rhwl",
            "id": "1DrxlxGMre4MDSshbizhbhKy8L8TJM",
            "name": "alert-697979dcb9-7rhwl",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-rwxh5",
            "id": "6gQ3THms7LE5x8nvcI8QMjC8g5B3jq",
            "name": "default-token-rwxh5",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "alert-dev",
            "id": "KjqqUmUrYifBOGJFBjMEqNTiWqtbYR",
            "name": "alert-dev",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "alert-dev",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-alert-v7"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "bk-7fbcf54dfd-dggg2",
            "id": "AlNsyLnPGF5jK4etzsTLmGHua4DHEz",
            "name": "bk-7fbcf54dfd-dggg2",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-rwxh5",
            "id": "8Z3d7s6dsANSZ9FbMN9Z8ILjLq6W20",
            "name": "default-token-rwxh5",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "bk-dev",
            "id": "1Ac83V5r9pLaqEVNuJKqSlyQi0SX19",
            "name": "bk-dev",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "bk-dev",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-svc-v79"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "dynamic-dashboard-799d67776c-9w884",
            "id": "iCaSCnQJ2n8eA97RuPtFSMj79p6ZT6",
            "name": "dynamic-dashboard-799d67776c-9w884",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-rwxh5",
            "id": "yOFrGUiBwN2Saq184zShTRC2JTj5Iz",
            "name": "default-token-rwxh5",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "dynamic",
            "id": "KuaINFDtfCSMCZzt3sTnCfEnKnAIH4",
            "name": "dynamic",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "dynamic",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-dashboard-v51"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "dynamic-dashboard-799d67776c-vhq7w",
            "id": "hw1aRNf8fP2lgq9duvnOvd72UzlUKK",
            "name": "dynamic-dashboard-799d67776c-vhq7w",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-rwxh5",
            "id": "QrjMxEWLpLrz4AGwSUl62Ig0w2EXfO",
            "name": "default-token-rwxh5",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "dynamic",
            "id": "LUPpO33RppzYQLkke9fw2wIIwR3iU3",
            "name": "dynamic",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "dynamic",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-dashboard-v51"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "elk-0",
            "id": "dslCOaUmYSbP4L8TpP5ssfGOXaHj5W",
            "name": "elk-0",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "elk",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "elasticsearch",
            "id": "0xiJb5VKc2hJBhxrDELBf9PU2O1fRS",
            "name": "elasticsearch",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/data"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "elk-token-29dxx",
            "id": "ut8wMXnMxaOk2yFimJpRy3uOILBYju",
            "name": "elk-token-29dxx",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "elasticsearch",
            "id": "2CM6mVcLJp4U3NN1Sd9Z94NaVut3vg",
            "name": "elasticsearch",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "elasticsearch",
                "Ready": "true",
                "Image": "elasticsearch:6.8.4"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "jobs-648c8cdd78-xrxqj",
            "id": "gtJevd3wDCNUMEft2CvrVz60PGfDiz",
            "name": "jobs-648c8cdd78-xrxqj",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-rwxh5",
            "id": "TA6XsQ4OgiVPPQAlfd2APJof2IKgfr",
            "name": "default-token-rwxh5",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "jobs-scheduler",
            "id": "khGMiQPof12GOYsogjp6WF6EMgJJJL",
            "name": "jobs-scheduler",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "jobs-scheduler",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-jobs-v10"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "keycloak-67d8b67896-22qx4",
            "id": "9g5ff6WTxK85iiD1dRHGQtwWLVxG0k",
            "name": "keycloak-67d8b67896-22qx4",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-rwxh5",
            "id": "qHQmRHEcQ3mGemANQRKMPbqHAhUmZG",
            "name": "default-token-rwxh5",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "keycloak",
            "id": "EJNO6lBLM251JPROjUA9oLIu9XYVyQ",
            "name": "keycloak",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "keycloak",
                "Ready": "true",
                "Image": "quay.io/keycloak/keycloak:10.0.1"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "mongo-0",
            "id": "XEo8yaxn5sUGrVQ4Zc6epKKXindRgW",
            "name": "mongo-0",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "data-storage",
            "id": "a5wIyR6P2jHMYZuh22IHfdtj5L14sl",
            "name": "data-storage",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/data/db"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-rwxh5",
            "id": "3xA2fYA557ardonMDWyGzmuHAkZnOB",
            "name": "default-token-rwxh5",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "mongo",
            "id": "rLpq37MunbQEP2tRkZGaAtqTIX9rfl",
            "name": "mongo",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "mongo",
                "Ready": "true",
                "Image": "mongo:4.2.3"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "mysql-576b95c98d-dg4q6",
            "id": "yg3i71nyB0u4RwWmvlqJ1RTzdDaev0",
            "name": "mysql-576b95c98d-dg4q6",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "storage-data",
            "id": "Vy7cOuep9Ka2bN3wZgwEHz7ME77tTL",
            "name": "storage-data",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/lib/mysql"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-rwxh5",
            "id": "E2fX3wc3pUwVVXkeNplRL5FThtYwgb",
            "name": "default-token-rwxh5",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "mysql",
            "id": "9OCSVeOkbREhXfHWftIxdFbeNwSsSQ",
            "name": "mysql",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "mysql",
                "Ready": "true",
                "Image": "mysql:5.6"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "ui-6cfd4c7d9d-vfjdl",
            "id": "VyRGXzOJG6v61O9r0jhZVDeZzOGD5Z",
            "name": "ui-6cfd4c7d9d-vfjdl",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-rwxh5",
            "id": "w92hTDbcd5hgwmMcI3zoT4fkSvps4t",
            "name": "default-token-rwxh5",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "frontend",
            "id": "RcUntXZ1hBQQua8DQUO1xVAJbCKMwg",
            "name": "frontend",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "frontend",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-ui-v91"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "ui-6cfd4c7d9d-z8rn4",
            "id": "o8OJjoVeRGfOuQw2QAWxFjHFuWiJJ7",
            "name": "ui-6cfd4c7d9d-z8rn4",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-rwxh5",
            "id": "Nio37u1jzikN3hEp1Q703VmuwQvnGE",
            "name": "default-token-rwxh5",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "frontend",
            "id": "komfDaZGyjehF0fCPMXVES9L2yPh44",
            "name": "frontend",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "frontend",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-ui-v91"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "um-86f7c754bc-d2k4w",
            "id": "bBY3zE1MzH3qw0mgN7cGmjlxEqcF7C",
            "name": "um-86f7c754bc-d2k4w",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-rwxh5",
            "id": "xFkqXWwCC7ooHaCCu2Emr6lBaBRkMw",
            "name": "default-token-rwxh5",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "devum",
            "id": "da5JHk4aCblvkQ7z1XTL1Kbc1oHuim",
            "name": "devum",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "devum",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-um-v3"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "aiops-grafana-786996dcb8-jkk2k",
            "id": "NXb7RnrmGLuTz9f08oDUif143GqXsd",
            "name": "aiops-grafana-786996dcb8-jkk2k",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "aiops-grafana",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "config",
            "id": "JkqazFaxnnhuk2uXC1qrz2n1AWL9cv",
            "name": "config",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/etc/grafana/grafana.ini"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "storage",
            "id": "SkSW1vNw4MdzLMHWwlPcqgCLHcchWe",
            "name": "storage",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/lib/grafana"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "sc-datasources-volume",
            "id": "w4Rptxg96MiNWXNqxdVF3J8hz3bYEl",
            "name": "sc-datasources-volume",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/etc/grafana/provisioning/datasources"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "aiops-grafana-token-cp5wh",
            "id": "xwm20YCDU6NMvfJStYEwTIrl0QNtgN",
            "name": "aiops-grafana-token-cp5wh",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "grafana",
            "id": "RttBgSLVfKsqPizAqbUx72yPiHqC4S",
            "name": "grafana",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "grafana",
                "Ready": "true",
                "Image": "grafana/grafana:7.5.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "aiops-grafana-image-5f5bbf6c5f-744w5",
            "id": "eGRGa6UvaanFYm39BvnJKApqiFlasO",
            "name": "aiops-grafana-image-5f5bbf6c5f-744w5",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-b472t",
            "id": "6eE8r6XTAZITNOr3OtuN9MMmxPHtXJ",
            "name": "default-token-b472t",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "grafanaimage",
            "id": "InJaHW4mA8dg3YLj6GNnP9TqhsTqOo",
            "name": "grafanaimage",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "grafanaimage",
                "Ready": "true",
                "Image": "grafana/grafana-image-renderer:latest"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "aiops-kube-state-metrics-6c78c9ddf-mbqcp",
            "id": "omCEnyQmetELV6Wf71fKFABhCAb3wj",
            "name": "aiops-kube-state-metrics-6c78c9ddf-mbqcp",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "aiops-kube-state-metrics",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "aiops-kube-state-metrics-token-fcd98",
            "id": "1r5ApoRpYI4AteTOuPXvPHlWqMU2Vf",
            "name": "aiops-kube-state-metrics-token-fcd98",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "kube-state-metrics",
            "id": "p5uwTCTHZIKU5jqin877PSVbxlGqiD",
            "name": "kube-state-metrics",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "kube-state-metrics",
                "Ready": "true",
                "Image": "quay.io/coreos/kube-state-metrics:v1.9.7"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "aiops-loki-0",
            "id": "W3E5akhCl0oL9GBXndpyWW4XQ6Eoek",
            "name": "aiops-loki-0",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "aiops-loki",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "config",
            "id": "7PSA34iy7Fcr690y3lMdhnwTxHvHX2",
            "name": "config",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/etc/loki"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "storage",
            "id": "8ITEwWpZoDqXySGIVCY8gD4YfbKAuw",
            "name": "storage",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/data"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "aiops-loki-token-gng5c",
            "id": "tCgS54Hi6EG5h5NeRNVXdSXGFQtp4F",
            "name": "aiops-loki-token-gng5c",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "loki",
            "id": "ErtMCBWTVHSqLnWtZEUcRkfYIAB6Rn",
            "name": "loki",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "loki",
                "Ready": "true",
                "Image": "grafana/loki:2.2.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "aiops-promtail-46jg2",
            "id": "ttViNwftqP12FSlXE68z3QYZo3cyYX",
            "name": "aiops-promtail-46jg2",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "aiops-promtail",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "config",
            "id": "YNSDpt1aNyhzm9vSB5uTXrn8DxHfzy",
            "name": "config",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/etc/promtail"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "run",
            "id": "8ANcXIAuhGtBLbAE9fC3USoubTwYpW",
            "name": "run",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/run/promtail"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "docker",
            "id": "BVsAtTmtIyK60b7mgz4AUidElQ02vl",
            "name": "docker",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/lib/docker/containers"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "pods",
            "id": "zClubieTN5i952mNkpWPjDqyWN2jaO",
            "name": "pods",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/log/pods"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "aiops-promtail-token-vhd8g",
            "id": "Ww4OdrN3zoiX21XdXON9BR9KNF2bY5",
            "name": "aiops-promtail-token-vhd8g",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "promtail",
            "id": "OCzpyUi2f15gQoCwYe10hYnTydgqzi",
            "name": "promtail",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "promtail",
                "Ready": "true",
                "Image": "grafana/promtail:2.1.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "aiops-promtail-bjw24",
            "id": "JQ2PJHhwQeem2jVe1j5ailfmiKQEPr",
            "name": "aiops-promtail-bjw24",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "aiops-promtail",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "config",
            "id": "4RDb0KEE7O1PG6sEVhtyDXcM9IfBue",
            "name": "config",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/etc/promtail"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "run",
            "id": "erti3K70GVNtpz44LTNoXqGfJ46gWz",
            "name": "run",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/run/promtail"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "docker",
            "id": "EnZsSqSGNOTs9kFpJZt9cGztDbGfbY",
            "name": "docker",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/lib/docker/containers"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "pods",
            "id": "NfytSwB7NMR2RDLWJyJXNSFwg3AuBO",
            "name": "pods",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/log/pods"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "aiops-promtail-token-vhd8g",
            "id": "3c77JhpVpRCe6oy6493qWJ8udy83id",
            "name": "aiops-promtail-token-vhd8g",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "promtail",
            "id": "osI04tZz11q8odQe0pLQuPBXni6NgA",
            "name": "promtail",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "promtail",
                "Ready": "true",
                "Image": "grafana/promtail:2.1.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "aiops-promtail-f4cxt",
            "id": "vEV7r3YakgCuImcNR3xE8bYBIk3qdT",
            "name": "aiops-promtail-f4cxt",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "aiops-promtail",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "config",
            "id": "Gs9DrHvlqZsvERZrUzMT5DD1LCwF8n",
            "name": "config",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/etc/promtail"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "run",
            "id": "t3Ray6wBxYHOj9gBwJCZstVHirYM3c",
            "name": "run",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/run/promtail"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "docker",
            "id": "ddh4TzzWGi1UDRqeSbORA0EkcxZh8L",
            "name": "docker",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/lib/docker/containers"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "pods",
            "id": "vFFKRc4SVYIj8yNCpgyG24DodM4U1E",
            "name": "pods",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/log/pods"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "aiops-promtail-token-vhd8g",
            "id": "VuNC4sqCNuZqJMNVzeSnp8A83TeQUe",
            "name": "aiops-promtail-token-vhd8g",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "promtail",
            "id": "omPX49h52IZ0FCMs9UfucTYW1puzDH",
            "name": "promtail",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "promtail",
                "Ready": "true",
                "Image": "grafana/promtail:2.1.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "alertmanager-56b7b4cbf6-7nrhm",
            "id": "BF9F0ZNUsQJgQnig6jIionS0pqPD1N",
            "name": "alertmanager-56b7b4cbf6-7nrhm",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "config-volume",
            "id": "3kfK1sjzjX0VszjxtR2JEVJDRqskYr",
            "name": "config-volume",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/etc/alertmanager"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "templates-volume",
            "id": "hC7n4HTyYU4Yq9bWQQHHpaw5sOVPmb",
            "name": "templates-volume",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/etc/alertmanager-templates"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "alertmanager",
            "id": "T2uGWCsamm5OVzoK1mcYgLwOzI4GSX",
            "name": "alertmanager",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/alertmanager"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-b472t",
            "id": "t3dVuUZRFKST6PG2PoenzfFS8fJudz",
            "name": "default-token-b472t",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "alertmanager",
            "id": "0EPwMF1DnW0fqI7duVZ2G3N8i8qm07",
            "name": "alertmanager",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "alertmanager",
                "Ready": "true",
                "Image": "prom/alertmanager:v0.19.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "metricbeat-kube-state-metrics-5d6986df65-qh59t",
            "id": "Oh1tUyfVwGNcld1i8j0ZRsTCZe2pIy",
            "name": "metricbeat-kube-state-metrics-5d6986df65-qh59t",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "metricbeat-kube-state-metrics",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "metricbeat-kube-state-metrics-token-kl5h4",
            "id": "NlnnzuyZql20kWAUruhyTcCzmXYyog",
            "name": "metricbeat-kube-state-metrics-token-kl5h4",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "kube-state-metrics",
            "id": "mGdWjWVQQgqaKudqPIo0DFBlFCgb2Y",
            "name": "kube-state-metrics",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "kube-state-metrics",
                "Ready": "true",
                "Image": "quay.io/coreos/kube-state-metrics:v1.8.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "metricbeat-metricbeat-867pm",
            "id": "sg8NUZMTkJFDnTvQCtVPA9IMgXRRsA",
            "name": "metricbeat-metricbeat-867pm",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "metricbeat-metricbeat",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "metricbeat-config",
            "id": "fv6fBxZvsItMazSGxf4fjmnDKz9voT",
            "name": "metricbeat-config",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/usr/share/metricbeat/metricbeat.yml"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "data",
            "id": "ML0vvvrZvdAZu4BvL9Zjwzp7ctgWKE",
            "name": "data",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/usr/share/metricbeat/data"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "varrundockersock",
            "id": "Js0UsOIBnJeXV7buWsse1nolAhY5d0",
            "name": "varrundockersock",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/docker.sock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "proc",
            "id": "6Sh9PzAXkLyFbdrBrqJOGRHMx7NNs4",
            "name": "proc",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/hostfs/proc"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "cgroup",
            "id": "O4OXQ5FxNuXvNs78Q499IGyZF1jzpJ",
            "name": "cgroup",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/hostfs/sys/fs/cgroup"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "metricbeat-metricbeat-token-ltz2g",
            "id": "6FgwabNArLDTb05oPaO7L3nG4r1faY",
            "name": "metricbeat-metricbeat-token-ltz2g",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "metricbeat",
            "id": "xQBfVlicbVNO6ckAa3sJfcbUdfp5Xz",
            "name": "metricbeat",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "metricbeat",
                "Ready": "false",
                "Image": "docker.elastic.co/beats/metricbeat:7.15.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "metricbeat-metricbeat-9js98",
            "id": "aqYsKOKja9KOHyoEVWMIGYho7XGpob",
            "name": "metricbeat-metricbeat-9js98",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "metricbeat-metricbeat",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "metricbeat-config",
            "id": "AFFAIac3Qn2LTTAjcgP3c97Mwsdn1W",
            "name": "metricbeat-config",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/usr/share/metricbeat/metricbeat.yml"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "data",
            "id": "A2ZVuESSKrC9gJWEuys40jzEmAmEte",
            "name": "data",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/usr/share/metricbeat/data"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "varrundockersock",
            "id": "qHMC5EP8AJQF5xdV0mTrOhhCQgd03k",
            "name": "varrundockersock",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/docker.sock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "proc",
            "id": "DDSQ42vYzM2qRUypeqAro85OsQIcXg",
            "name": "proc",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/hostfs/proc"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "cgroup",
            "id": "X8pCxOKhdj3gGEnLztPpLo74R0wYgv",
            "name": "cgroup",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/hostfs/sys/fs/cgroup"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "metricbeat-metricbeat-token-ltz2g",
            "id": "3uQptPFAJjv8UqfpvE6Co47o7RIMqA",
            "name": "metricbeat-metricbeat-token-ltz2g",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "metricbeat",
            "id": "mQkDTfMLYZ3wQXvmLv7YwAPi0GAGIW",
            "name": "metricbeat",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "metricbeat",
                "Ready": "false",
                "Image": "docker.elastic.co/beats/metricbeat:7.15.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "metricbeat-metricbeat-metrics-68cf54ddc4-lxq5l",
            "id": "OjyaXeYr7gMD6VqqevVBfo4J8TkdAF",
            "name": "metricbeat-metricbeat-metrics-68cf54ddc4-lxq5l",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "metricbeat-metricbeat",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "metricbeat-config",
            "id": "GqVXJWeFl822N9Xzr2WB0VFKqFaT04",
            "name": "metricbeat-config",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/usr/share/metricbeat/metricbeat.yml"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "metricbeat-metricbeat-token-ltz2g",
            "id": "Qh5VngwY6mCWuD8rZTU4PasKqn61KA",
            "name": "metricbeat-metricbeat-token-ltz2g",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "metricbeat",
            "id": "z4AyIGQhzrMUxY9L8pgUsRXy5kE6Wx",
            "name": "metricbeat",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "metricbeat",
                "Ready": "false",
                "Image": "docker.elastic.co/beats/metricbeat:7.15.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "metricbeat-metricbeat-ttz4d",
            "id": "vb1pL95rlgX0wN64E9REaHnM2thGbs",
            "name": "metricbeat-metricbeat-ttz4d",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "metricbeat-metricbeat",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "metricbeat-config",
            "id": "clOfvyv8q59OYa8C10D43omyjNX3Tw",
            "name": "metricbeat-config",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/usr/share/metricbeat/metricbeat.yml"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "data",
            "id": "ax2jz4ngLU0XlRoD7JVQSRCq6AxLTA",
            "name": "data",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/usr/share/metricbeat/data"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "varrundockersock",
            "id": "RJLevGS8MBPjIbp0m8ejx6CGAVBVg0",
            "name": "varrundockersock",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/docker.sock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "proc",
            "id": "kqgwkrQsR48ufrGfKNq0V90bfKHFI5",
            "name": "proc",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/hostfs/proc"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "cgroup",
            "id": "tSpq2Etz4XGblcHPnvoSYuRKSJY8gI",
            "name": "cgroup",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/hostfs/sys/fs/cgroup"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "metricbeat-metricbeat-token-ltz2g",
            "id": "UVAF08DBMp9fJHb6ETUX7QNhJMjefA",
            "name": "metricbeat-metricbeat-token-ltz2g",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "metricbeat",
            "id": "yV8oKLLw9LIF7on6IsiUOS2SU4BsWp",
            "name": "metricbeat",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "metricbeat",
                "Ready": "false",
                "Image": "docker.elastic.co/beats/metricbeat:7.15.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "node-exporter-6dxg2",
            "id": "uVmJupsObXAjFaG51LwmfXFVh8QOsP",
            "name": "node-exporter-6dxg2",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "sys",
            "id": "7LliPoBGm3pMnGwMVbx7ERJqE7T088",
            "name": "sys",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/host/sys"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "root",
            "id": "16KL7abbAEOyfegkA7A8nC6HqSeYfS",
            "name": "root",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/host/root"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-b472t",
            "id": "hKTvGnSWBgzqZeeJDvS3deVfokpp4z",
            "name": "default-token-b472t",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "node-exporter",
            "id": "KKnWtfY48oIzJnqdRcWnUTwMdLcTOP",
            "name": "node-exporter",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "node-exporter",
                "Ready": "true",
                "Image": "prom/node-exporter"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "node-exporter-qvw57",
            "id": "xbvoDQvAQ1DMc0GbNyj8rD0QCwgWha",
            "name": "node-exporter-qvw57",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "sys",
            "id": "rtydHQg3Eaj9lQSWHUvvUN1ikWq7U9",
            "name": "sys",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/host/sys"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "root",
            "id": "5xHeoi20s5OtZAq4obQuj8EqOwPmlR",
            "name": "root",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/host/root"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-b472t",
            "id": "SYkuXiZS4StOGOwfjOFiQG5nSp0sif",
            "name": "default-token-b472t",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "node-exporter",
            "id": "1OoGzfxAZThQgAUeQqy43tNMl5eyXQ",
            "name": "node-exporter",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "node-exporter",
                "Ready": "true",
                "Image": "prom/node-exporter"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "node-exporter-smh4l",
            "id": "EVSTsfW69llZTaatRqLF0ygxSleCLn",
            "name": "node-exporter-smh4l",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "sys",
            "id": "0qZyVgKFqzUrw2ldLratyc9KtKcZpr",
            "name": "sys",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/host/sys"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "root",
            "id": "xHOPafApDQUqvDjtIoZjvsXe6ic1fO",
            "name": "root",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/host/root"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-b472t",
            "id": "pEIT4EMhCGAEstnVJdVXo9ZE7A6bs4",
            "name": "default-token-b472t",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "node-exporter",
            "id": "WDMN4Br859U1hMj155Ga7E62SFPDOr",
            "name": "node-exporter",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "node-exporter",
                "Ready": "true",
                "Image": "prom/node-exporter"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "prometheus-deployment-dc9c6b578-dbzbs",
            "id": "FKBZ3BWTf2npvBlgB2YpLtmdYmS7p0",
            "name": "prometheus-deployment-dc9c6b578-dbzbs",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "prometheus-config-volume",
            "id": "HUc1S9BR6jEBhpko4QZP1mc57mQLQs",
            "name": "prometheus-config-volume",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/etc/prometheus/"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "prometheus-storage-volume",
            "id": "SjHpAORDe0hXF1icjO6OcNlKwKxgxu",
            "name": "prometheus-storage-volume",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/prometheus/"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-b472t",
            "id": "K1fIPsVEnlfEMAAmTUwBj0AB5hNb2g",
            "name": "default-token-b472t",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "prometheus",
            "id": "FauWICcnGrkmb9IKPEVNhfEGIn6APG",
            "name": "prometheus",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "prometheus",
                "Ready": "true",
                "Image": "prom/prometheus"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "alert-7756fdd6d5-p94s2",
            "id": "8Kc6WvJ4G6DzDEARtO7O6pEyPsrSOi",
            "name": "alert-7756fdd6d5-p94s2",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-qa"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-6h899",
            "id": "IiukjJ2RixWWiEqDwegrxSgewky9yO",
            "name": "default-token-6h899",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "alert-dev",
            "id": "E3GP9KXaGVM6to3l0K6QYVMsShbORU",
            "name": "alert-dev",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "alert-dev",
                "Ready": "true",
                "Image": "matilda1/aiops:qa-alert-v4"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "bk-67f4d7d558-hkx5d",
            "id": "oa6eE2W9iJoDZRSmtapH904u0hmWnZ",
            "name": "bk-67f4d7d558-hkx5d",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-qa"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-6h899",
            "id": "GtLDsloed0Ik0f59Hn0pVlNdTIwMwM",
            "name": "default-token-6h899",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "backend",
            "id": "Qi2znH0cVo8V5Kn3gqR8Uw52XHeZ5U",
            "name": "backend",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "backend",
                "Ready": "true",
                "Image": "matilda1/aiops:qa-bk-v3"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "elk-0",
            "id": "kA8PcdnEt8c0TLWCQ3UrgjlAUqEUWX",
            "name": "elk-0",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "elk",
                "NameSpace": "aiops-qa"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "elasticsearch",
            "id": "M9g8doACDzRbRGIjjDpijIs4Cmk8l2",
            "name": "elasticsearch",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/data"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "elk-token-4j6vr",
            "id": "6YgBoNiAtnO2QMSqPVi3kFqIF8P3J3",
            "name": "elk-token-4j6vr",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "elasticsearch",
            "id": "dnvg6YbLbTDuTpTZP9L3kH4FS1h5mX",
            "name": "elasticsearch",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "elasticsearch",
                "Ready": "true",
                "Image": "elasticsearch:6.8.4"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "keycloak-67d8b67896-b9f7s",
            "id": "9BcRvn8FwDw83PLYlACiLIrrNQRl7F",
            "name": "keycloak-67d8b67896-b9f7s",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-qa"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-6h899",
            "id": "oMLVKPWIbEybKWDLqtSdwUdX0gvnUr",
            "name": "default-token-6h899",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "keycloak",
            "id": "iyDMi1TZNow9NZaVlz0mKGNRORNaP6",
            "name": "keycloak",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "keycloak",
                "Ready": "true",
                "Image": "quay.io/keycloak/keycloak:10.0.1"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "mongo-0",
            "id": "jz3CX3NlbYtEXqJsu6TtL5Vxkfq2nC",
            "name": "mongo-0",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-qa"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "data-storage",
            "id": "PVGpioGNlr30iLvCNKr0ehBxOudXtu",
            "name": "data-storage",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/data/db"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-6h899",
            "id": "6GpDn4oukXI4FOoMxhEOo1rxsysGzj",
            "name": "default-token-6h899",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "mongo",
            "id": "xdCVE04tjC64qErw3JaEbSmS5fvwH6",
            "name": "mongo",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "mongo",
                "Ready": "true",
                "Image": "mongo:4.2.3"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "mysql-576b95c98d-28svm",
            "id": "hdL4RoKRiWfbbFw0kGhlM34qjFl72y",
            "name": "mysql-576b95c98d-28svm",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-qa"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "storage-data",
            "id": "Wd6WP1zU3KiukDKPWGUwSUVYqPxCUF",
            "name": "storage-data",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/lib/mysql"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-6h899",
            "id": "wHMzFuNklMOsAbG2lru4EizYbPE2Oo",
            "name": "default-token-6h899",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "mysql",
            "id": "2Q4JJj7mKuE8H6EBxjzQELKbveVpa7",
            "name": "mysql",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "mysql",
                "Ready": "true",
                "Image": "mysql:5.6"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "ui-5b6b4bbc96-lwkdk",
            "id": "nLxPKdPCVhsnUDH5LpugpVDdkbZbBw",
            "name": "ui-5b6b4bbc96-lwkdk",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-qa"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-6h899",
            "id": "V7nR1UUedp2VWFuPxGM1yJ5Afv6pcQ",
            "name": "default-token-6h899",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "frontend",
            "id": "IiLMCsaKsbS6haaJEWOQ4OJOPC48SU",
            "name": "frontend",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "frontend",
                "Ready": "true",
                "Image": "matilda1/aiops:qa-ui-v5"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "um-6f4bcfc5b4-vvcs5",
            "id": "K0MQQs7BD9gqwIFuf3qj3p7Mx4K6sj",
            "name": "um-6f4bcfc5b4-vvcs5",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-qa"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-6h899",
            "id": "wwUe10lIGKB8ofKxXGOq5SSkKQn91q",
            "name": "default-token-6h899",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "um",
            "id": "RlSbnzSy3ll9ZKCDUysuR7hIwbmiQO",
            "name": "um",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "um",
                "Ready": "true",
                "Image": "matilda1/aiops:qa-um-v4"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "cmdb-7d4d95645d-2scr7",
            "id": "px3EDAkBzTmNVh596SNHIw4We6We5R",
            "name": "cmdb-7d4d95645d-2scr7",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-shell"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-jmcvn",
            "id": "IHZ2XJtEDOZ4egxDChaKVneb3OpeMJ",
            "name": "default-token-jmcvn",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "cmdb",
            "id": "MovQQl2101qab08USQmrWLpX88Wzcu",
            "name": "cmdb",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "cmdb",
                "Ready": "true",
                "Image": "matilda1/aiops:cmdb-v46"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "elk-0",
            "id": "7z0ccGvswMpdyHpTcD2PpzuuhFQzpT",
            "name": "elk-0",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "elk",
                "NameSpace": "aiops-shell"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "elasticsearch",
            "id": "mujyPKBE7iwwyfdh9I0Kt0US2yXSpR",
            "name": "elasticsearch",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/data"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "elk-token-6hw5m",
            "id": "6fJlEcFy4alStwy2qpBxZdqeXRf9PS",
            "name": "elk-token-6hw5m",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "elasticsearch",
            "id": "BMAI6BonJ1GQBUCkUxJmXdLN22Tmyo",
            "name": "elasticsearch",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "elasticsearch",
                "Ready": "true",
                "Image": "elasticsearch:7.10.1"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "keycloak-86f8cdff65-s6ttc",
            "id": "tLIpRGNwiIhI0v1EafJ0PMhZsX0knZ",
            "name": "keycloak-86f8cdff65-s6ttc",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-shell"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "cert",
            "id": "0ZUyXXcRLogbVSlNIajHLwAC1oIsYR",
            "name": "cert",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/etc/x509/https/cert"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "realms",
            "id": "rWL5Z8p7gmrsgLwkuwauPMteeZF49S",
            "name": "realms",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/opt/jboss/keycloak/imports/realms"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "themes",
            "id": "Xa0sALs6w5PeFe4OSUfxuvBr2V3w0G",
            "name": "themes",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/opt/jboss/keycloak/themes/matilda/"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-jmcvn",
            "id": "I33v6rJZ7tnWCsmCzBW7ymHmm3OO12",
            "name": "default-token-jmcvn",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "keycloak",
            "id": "GnWtZetMmxqp4ryeopGUl0vvbJ43Jp",
            "name": "keycloak",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "keycloak",
                "Ready": "true",
                "Image": "matilda1/keycloak:vfx1.3"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "management-5664bbf789-22nch",
            "id": "h4Y8T3y5c3Ot1065l0fgqNueW3vrwF",
            "name": "management-5664bbf789-22nch",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-shell"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "management",
            "id": "eX6GaKl77NgvHxJfKEQBmKqPXi8ngV",
            "name": "management",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/application.properties"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "management",
            "id": "kwTHi7IIlfa6f7Bz9pozQUYKQe4Cyz",
            "name": "management",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/logging.xml"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "management",
            "id": "Kda865jfFgEsjuQut0rCxx2sUEsxGd",
            "name": "management",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/accountdetails.json"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "management",
            "id": "YKBnNkfrD82r33HgnTfoyPvJR81UHe",
            "name": "management",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/namingpattern.json"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "management",
            "id": "Wb9OMhaJFL4P3NyHDAMKyZPKaIsYaP",
            "name": "management",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/favorites.json"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "management-persistent-storage-1",
            "id": "IW9IUAz9tCCPET1hq3aUtZ3klPXt8B",
            "name": "management-persistent-storage-1",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/log/matilda"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-jmcvn",
            "id": "jLFpN1RVGjjH7ByNV0Et803RNgNXN3",
            "name": "default-token-jmcvn",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "matilda-management",
            "id": "G3SN2bGbWVZjUjUrHxsFvdamvJVkIF",
            "name": "matilda-management",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "matilda-management",
                "Ready": "true",
                "Image": "matilda1/management:v2cors.7"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "management1-7cd68f8857-b7d8d",
            "id": "bkRThyB54JESufwDCn1VWKRKh8p8kO",
            "name": "management1-7cd68f8857-b7d8d",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-shell"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "management1",
            "id": "FgcdyE9Y45ZA81hOiXWJuoawu2xQNj",
            "name": "management1",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/application.properties"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "management1",
            "id": "mc03WecRRWLkn6aVnAMeMpwqKS58UW",
            "name": "management1",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/logging.xml"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "management1",
            "id": "AuUpH5pUl2VJKBoGGMgO5QqpU3r0lj",
            "name": "management1",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/accountdetails.json"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "management1",
            "id": "w3PztGwKdosjjMnKf3uPQkor9kHvpI",
            "name": "management1",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/namingpattern.json"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "management1",
            "id": "a9SwjpWjzwMyAVITF2kaUP912dwNtn",
            "name": "management1",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/favorites.json"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "management-persistent-storage-2",
            "id": "CLbYQQKwXLkTb0uw5BPOYvHb6234V7",
            "name": "management-persistent-storage-2",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/log/matilda"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-jmcvn",
            "id": "T2eEiupOoTg0Y1mtHLky1UHtYMQx26",
            "name": "default-token-jmcvn",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "matilda-management1",
            "id": "rOzriF1GKmGQ0cbqLArjR3LtWlr1Qm",
            "name": "matilda-management1",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "matilda-management1",
                "Ready": "true",
                "Image": "matilda1/aiops:usermanagement-v23"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "mongo-0",
            "id": "GIOgmaGj7CN1kciDcBg8YrUm3gt1fr",
            "name": "mongo-0",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-shell"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "data-storage",
            "id": "myZElLIVruhmSEgoG7XSt6Ni6pwMXT",
            "name": "data-storage",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/data/db"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-jmcvn",
            "id": "Hghlr6xxdpk54zMxs0ylbXzOclj23d",
            "name": "default-token-jmcvn",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "mongo",
            "id": "2Ng947vQ2Sm8Fzl07hYdDOWFrdYPIz",
            "name": "mongo",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "mongo",
                "Ready": "true",
                "Image": "mongo:4.2.3"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "mysql-86dfcf8b75-w9vbq",
            "id": "CVMoPAgEEBfOCi2hTbHc6ghoGzPEq9",
            "name": "mysql-86dfcf8b75-w9vbq",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-shell"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "storage-data",
            "id": "dbJwjV7lXgumXeYJhT9UIWduMEe9Nj",
            "name": "storage-data",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/lib/mysql"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-jmcvn",
            "id": "Wg2UGel7RwWGyTpgWa4cSPNJy7sLLV",
            "name": "default-token-jmcvn",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "mysql",
            "id": "w10sFKkSIPqHetR9xvRmizepRUpVVa",
            "name": "mysql",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "mysql",
                "Ready": "true",
                "Image": "mysql:5.7"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "nginx-5668b5dfbb-sppvf",
            "id": "xPWjpKMm6UBGpPHbsRJyFowChfo8pO",
            "name": "nginx-5668b5dfbb-sppvf",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-shell"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "nginx-conf",
            "id": "lP3fOHdLVTR3LN3JihrrNzQwQdZFZh",
            "name": "nginx-conf",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/etc/nginx/nginx.conf"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-jmcvn",
            "id": "8IdN1Y79TiIyhNVSwzFlD6WXV94PFG",
            "name": "default-token-jmcvn",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "nginx",
            "id": "zAx2sh2oNcQwpsTgCzwZO436yaZAoP",
            "name": "nginx",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "nginx",
                "Ready": "true",
                "Image": "nginx"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "ui-shell-5bcb58bb8d-86zrl",
            "id": "aDlEwaZNdEmw4u30yE7IxBxIb86u9N",
            "name": "ui-shell-5bcb58bb8d-86zrl",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-shell"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-jmcvn",
            "id": "NGgx3jZ394d2Ol9DctZqFyWwzaZKyV",
            "name": "default-token-jmcvn",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "frontend",
            "id": "BEbwqpWZGHhp9ib2zME8GootUtZaBZ",
            "name": "frontend",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "frontend",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-ui-shell-v71"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "ui-shell-5bcb58bb8d-flm62",
            "id": "Pncga6iB58tBFRJpvGK88hVJ094Nvb",
            "name": "ui-shell-5bcb58bb8d-flm62",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-shell"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-jmcvn",
            "id": "lwobf29jZckKMfs3dA1inx7NhWJsRr",
            "name": "default-token-jmcvn",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "frontend",
            "id": "mF6AYv2LwS7Ex8kvVEttGEaHEbrVcv",
            "name": "frontend",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "frontend",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-ui-shell-v71"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "aws-node-4c9kx",
            "id": "qAysSjzr8AV51xPaBGSncvyymC6NbS",
            "name": "aws-node-4c9kx",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "aws-node",
                "NameSpace": "kube-system"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "cni-bin-dir",
            "id": "svPQg4SHpdJfPIaFYFUtSbhNIbcdFH",
            "name": "cni-bin-dir",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/host/opt/cni/bin"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "cni-net-dir",
            "id": "5KNBTED2SOfcjc9FgvKqKsKNo2qihu",
            "name": "cni-net-dir",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/host/etc/cni/net.d"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "log-dir",
            "id": "puYNwo5tGUrfjUTiXgpYZMyDAOPdx8",
            "name": "log-dir",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/host/var/log/aws-routed-eni"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "run-dir",
            "id": "wFNzI1c7EYs9AOFIv7L7QozbbJlu7r",
            "name": "run-dir",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/run/aws-node"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "dockershim",
            "id": "W8I2yj8FpCcZKm9r7eOG2iA1vT7vSQ",
            "name": "dockershim",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/run/dockershim.sock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "xtables-lock",
            "id": "G5leV5PZ1DSMOyt5bqDbruUoOTDEtv",
            "name": "xtables-lock",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/run/xtables.lock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "aws-node-token-rq2jv",
            "id": "EoNtmCHGXKFySEqn85br8hEmTow48r",
            "name": "aws-node-token-rq2jv",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "aws-node",
            "id": "Te5PAUo6mTMxoDjVNYh9D8qc0G5bGy",
            "name": "aws-node",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "aws-node",
                "Ready": "true",
                "Image": "602401143452.dkr.ecr.us-east-2.amazonaws.com/amazon-k8s-cni:v1.7.5-eksbuild.1"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "aws-node-fb4gr",
            "id": "gdSno8hr5InGFakTf1DxUbMWPRtXrf",
            "name": "aws-node-fb4gr",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "aws-node",
                "NameSpace": "kube-system"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "cni-bin-dir",
            "id": "yd61TVxVryDyFb6wasDNTIRqvTHVpK",
            "name": "cni-bin-dir",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/host/opt/cni/bin"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "cni-net-dir",
            "id": "Dow2dfYgq2hi16X7ukqE5xJhXG8bCj",
            "name": "cni-net-dir",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/host/etc/cni/net.d"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "log-dir",
            "id": "TCYTDxubEiRPmA4tWjrOvmjXb3T8zi",
            "name": "log-dir",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/host/var/log/aws-routed-eni"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "run-dir",
            "id": "Mp4GvPqSmksHrRqzoXbz77N0CDKY3u",
            "name": "run-dir",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/run/aws-node"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "dockershim",
            "id": "c4YfZn5g3yOHGzzCOlBwUhSNY74Rn2",
            "name": "dockershim",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/run/dockershim.sock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "xtables-lock",
            "id": "Bmvh1aevX81CLw4yxwMBCEjZV6op0n",
            "name": "xtables-lock",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/run/xtables.lock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "aws-node-token-rq2jv",
            "id": "h6UfbEiddZJn5yquVbjeIVYo9w3Sop",
            "name": "aws-node-token-rq2jv",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "aws-node",
            "id": "3hKq4zlNrddU8aOj1eupzCYKd6Hs5v",
            "name": "aws-node",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "aws-node",
                "Ready": "true",
                "Image": "602401143452.dkr.ecr.us-east-2.amazonaws.com/amazon-k8s-cni:v1.7.5-eksbuild.1"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "aws-node-xvhr8",
            "id": "3g4C8sqkTBtgwze59op2cXtGR69OSB",
            "name": "aws-node-xvhr8",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "aws-node",
                "NameSpace": "kube-system"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "cni-bin-dir",
            "id": "N83fZOUWNiBhqpz2hZj5vkYnd5bIpV",
            "name": "cni-bin-dir",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/host/opt/cni/bin"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "cni-net-dir",
            "id": "RpaXjOyNsjGyoggBxgmn11ujlTxKky",
            "name": "cni-net-dir",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/host/etc/cni/net.d"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "log-dir",
            "id": "9sTx57mZWYXSb67jJ0RaPIMTjbrfiK",
            "name": "log-dir",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/host/var/log/aws-routed-eni"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "run-dir",
            "id": "0nOHjDOfj3uJbEdBptkBWlLtRi6WCU",
            "name": "run-dir",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/run/aws-node"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "dockershim",
            "id": "7M1MtHcGD3TcAG0jE4F2cEwwJKMflW",
            "name": "dockershim",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/run/dockershim.sock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "xtables-lock",
            "id": "3J59W3sR6dDUYgoEKNYnQO3g2hA3Js",
            "name": "xtables-lock",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/run/xtables.lock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "aws-node-token-rq2jv",
            "id": "iOWESjRdK5Wa1XseJGviuzEUyqRvJf",
            "name": "aws-node-token-rq2jv",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "aws-node",
            "id": "q54Yq02sbdSvHp3kncha9jtniQ2XYi",
            "name": "aws-node",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "aws-node",
                "Ready": "true",
                "Image": "602401143452.dkr.ecr.us-east-2.amazonaws.com/amazon-k8s-cni:v1.7.5-eksbuild.1"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "coredns-66bc8b7b7b-4g2cd",
            "id": "08o07bw0FYGPFB0FejssxOk73okrwz",
            "name": "coredns-66bc8b7b7b-4g2cd",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "coredns",
                "NameSpace": "kube-system"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "config-volume",
            "id": "Wu74Zf51QA3eEc3S5BirdK6f63ZbEX",
            "name": "config-volume",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/etc/coredns"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "tmp",
            "id": "LcY7bG9WDtkGJZCtjuhznByWIu6Sbz",
            "name": "tmp",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/tmp"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "coredns-token-5l7r2",
            "id": "0liGUi0mqXgyRqy6GVJrCCrpIwZxHb",
            "name": "coredns-token-5l7r2",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "coredns",
            "id": "8vM56ARr83YEU2SRQNEuGvDgjXjGwK",
            "name": "coredns",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "coredns",
                "Ready": "true",
                "Image": "602401143452.dkr.ecr.us-east-2.amazonaws.com/eks/coredns:v1.7.0-eksbuild.1"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "coredns-66bc8b7b7b-vcvpl",
            "id": "HJTYHez6mjXxM26o91wk30IZ5jJoiE",
            "name": "coredns-66bc8b7b7b-vcvpl",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "coredns",
                "NameSpace": "kube-system"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "config-volume",
            "id": "aCE7P5ZHSiGUhfDEz9ChT1XTcC3aCo",
            "name": "config-volume",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/etc/coredns"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "tmp",
            "id": "y0LIfOcPQnqa4jQvfRHGiznnbf01s3",
            "name": "tmp",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/tmp"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "coredns-token-5l7r2",
            "id": "uJIjQ8XfXgBCrpg1lo2yrRzzh8dkfZ",
            "name": "coredns-token-5l7r2",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "coredns",
            "id": "aGbWO3JzTcWmLGKNeJL6yCMQjEDmkr",
            "name": "coredns",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "coredns",
                "Ready": "true",
                "Image": "602401143452.dkr.ecr.us-east-2.amazonaws.com/eks/coredns:v1.7.0-eksbuild.1"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "kube-proxy-6pwls",
            "id": "pMTqFYyrYO0k6yrHay5eVaqhPilEn5",
            "name": "kube-proxy-6pwls",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "kube-proxy",
                "NameSpace": "kube-system"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "varlog",
            "id": "6y82teAyo3Tck5PWlJFstf6VmLPKYH",
            "name": "varlog",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/log"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "xtables-lock",
            "id": "aMry3tDPXEBA6YWTOxHtcMTGzOIf7c",
            "name": "xtables-lock",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/run/xtables.lock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "lib-modules",
            "id": "EPqEqUegC6s3yPRavl5PJUXLgNr79T",
            "name": "lib-modules",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/lib/modules"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "kubeconfig",
            "id": "IogYyR7XmKKl0Of8VAbpT9AfD0KgYg",
            "name": "kubeconfig",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/lib/kube-proxy/"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "config",
            "id": "juL13oZiBUZ23QCAK5GdACz3c4t0sA",
            "name": "config",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/lib/kube-proxy-config/"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "kube-proxy-token-d894t",
            "id": "esb3fJ527ouu1q5G2Wb8ZP7UTxFMh6",
            "name": "kube-proxy-token-d894t",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "kube-proxy",
            "id": "rC0J7z79wa0KvgECCpHWzlLkHL6PGt",
            "name": "kube-proxy",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "kube-proxy",
                "Ready": "true",
                "Image": "602401143452.dkr.ecr.us-east-2.amazonaws.com/eks/kube-proxy:v1.18.8-eksbuild.1"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "kube-proxy-sjl95",
            "id": "m2cKg6q7SDVd7IO2hXIrPNMzqyKAss",
            "name": "kube-proxy-sjl95",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "kube-proxy",
                "NameSpace": "kube-system"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "varlog",
            "id": "WJg5zCHomZQCYZwZJMeZ4YHtgNhODV",
            "name": "varlog",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/log"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "xtables-lock",
            "id": "Iw4aYVBHQ5m0ek4ruDXANmvhgT2s7Z",
            "name": "xtables-lock",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/run/xtables.lock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "lib-modules",
            "id": "4znuEJkVkbmpQpJVyn4c50g0D5OVxs",
            "name": "lib-modules",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/lib/modules"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "kubeconfig",
            "id": "qedZmypOhUWWf7Ffvqz9GMGNe2gNlY",
            "name": "kubeconfig",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/lib/kube-proxy/"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "config",
            "id": "CJeuyzILAISzUZETRNRn2orqZVsTIc",
            "name": "config",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/lib/kube-proxy-config/"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "kube-proxy-token-d894t",
            "id": "Mpntk7cnZldB6m4FLOLoxFCdRkkk70",
            "name": "kube-proxy-token-d894t",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "kube-proxy",
            "id": "QBkKlc4Ev0DuwxiEAWynXttsvMUoFC",
            "name": "kube-proxy",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "kube-proxy",
                "Ready": "true",
                "Image": "602401143452.dkr.ecr.us-east-2.amazonaws.com/eks/kube-proxy:v1.18.8-eksbuild.1"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "kube-proxy-xcz4m",
            "id": "CnwdstZgH9QKWZkpwVDc8Lnk8BMQTM",
            "name": "kube-proxy-xcz4m",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "kube-proxy",
                "NameSpace": "kube-system"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "varlog",
            "id": "q7vWyOzMSmOkJNm70P58ZOW87BDDMw",
            "name": "varlog",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/log"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "xtables-lock",
            "id": "8IwTWNjZODydxRDhse2LqIIecu8wwo",
            "name": "xtables-lock",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/run/xtables.lock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "lib-modules",
            "id": "oD32hvIpd2gpDBF5f5P2ZKZAAsJ71a",
            "name": "lib-modules",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/lib/modules"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "kubeconfig",
            "id": "kndybKk7CBxrxONA8TAtcTFMMzrtL4",
            "name": "kubeconfig",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/lib/kube-proxy/"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "config",
            "id": "31xFSIzsSdEF5XtEKP53hF2D3mfZh0",
            "name": "config",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/lib/kube-proxy-config/"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "kube-proxy-token-d894t",
            "id": "NKYGszwqIWS8hyCESYgrGmLrHGsSRL",
            "name": "kube-proxy-token-d894t",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "kube-proxy",
            "id": "FZGY1Z6VIxS6bB22a7LOuoD8PaV704",
            "name": "kube-proxy",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "kube-proxy",
                "Ready": "true",
                "Image": "602401143452.dkr.ecr.us-east-2.amazonaws.com/eks/kube-proxy:v1.18.8-eksbuild.1"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "metrics-server-76f8d9fc69-zlp9c",
            "id": "PppH6Duo2DJaseolG4hOYmByeNt8HD",
            "name": "metrics-server-76f8d9fc69-zlp9c",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "metrics-server",
                "NameSpace": "kube-system"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "tmp-dir",
            "id": "kNqDeriSOpMY3jNLRBsOJaYYKFLFOJ",
            "name": "tmp-dir",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/tmp"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "metrics-server-token-hmnkm",
            "id": "aBujjR3852ObXSYYMUvWJL4X4HDIP7",
            "name": "metrics-server-token-hmnkm",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "metrics-server",
            "id": "E0tl5x8LcnHNhdhCLPRhDx8SCnJna6",
            "name": "metrics-server",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "metrics-server",
                "Ready": "true",
                "Image": "k8s.gcr.io/metrics-server/metrics-server:v0.4.2"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "dashboard-metrics-scraper-79c5968bdc-btx6g",
            "id": "L4d8dn4n0Sp7yofn49Wj5jwJO3VfNr",
            "name": "dashboard-metrics-scraper-79c5968bdc-btx6g",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "kubernetes-dashboard",
                "NameSpace": "kubernetes-dashboard"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "tmp-volume",
            "id": "Czh9kBd4rnSWqoEBHi4U3eLAuWMViS",
            "name": "tmp-volume",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/tmp"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "kubernetes-dashboard-token-84kp8",
            "id": "w7kSVI2cpDirSo8DA7ZT6Spjol5PYN",
            "name": "kubernetes-dashboard-token-84kp8",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "dashboard-metrics-scraper",
            "id": "oGOKBg9hhf7NOYFbUYdoM5sPdho0WO",
            "name": "dashboard-metrics-scraper",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "dashboard-metrics-scraper",
                "Ready": "true",
                "Image": "kubernetesui/metrics-scraper:v1.0.6"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "kubernetes-dashboard-9f9799597-bggrb",
            "id": "lC0CHolHsLBhasMiPs2d2AwviK5hIO",
            "name": "kubernetes-dashboard-9f9799597-bggrb",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "kubernetes-dashboard",
                "NameSpace": "kubernetes-dashboard"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "kubernetes-dashboard-certs",
            "id": "Je9fplgSn1hlAblT1cxMKrDCSFFJ0j",
            "name": "kubernetes-dashboard-certs",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/certs"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "tmp-volume",
            "id": "sUfk0jufxfgcURywXnxa9dYIWgWkne",
            "name": "tmp-volume",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/tmp"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "kubernetes-dashboard-token-84kp8",
            "id": "8TNf7STGawI2rJyG0ulHXWWh3dlZed",
            "name": "kubernetes-dashboard-token-84kp8",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "kubernetes-dashboard",
            "id": "IdHnHhyGklVQ2yohLs9O0NWmr5wW8y",
            "name": "kubernetes-dashboard",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "kubernetes-dashboard",
                "Ready": "true",
                "Image": "kubernetesui/dashboard:v2.2.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "descision-engine-5f49c6fd88-fgk68",
            "id": "zXYnbsHVXXan51fS1E0p1kdvkn6IvM",
            "name": "descision-engine-5f49c6fd88-fgk68",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "matilda-monitoring-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-48nbb",
            "id": "i2lgN3RqTLNwEc6H8bEaGM4RsKgKm9",
            "name": "default-token-48nbb",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "descision-engine",
            "id": "r905MTRgnRb9btgDANe7bxTHex40pQ",
            "name": "descision-engine",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "descision-engine",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-engine-v63"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "matilda-executor-b6557c9b7-n64z7",
            "id": "vgOCFiFstJ7nabYZbkXZ8S1pPfr40A",
            "name": "matilda-executor-b6557c9b7-n64z7",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "matilda-monitoring-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-48nbb",
            "id": "fH4m8Yjv6xWeTR7fx6iaVcj2lVeRP4",
            "name": "default-token-48nbb",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "matilda-executor",
            "id": "fMQEuohf0gv2FgQnJb0IWVU28yPPDd",
            "name": "matilda-executor",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "matilda-executor",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-matilda-executor-v38"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "mongo-0",
            "id": "s97mgQqVj8xhXOUNARtX5ni7Aled7J",
            "name": "mongo-0",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "matilda-monitoring-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "data-storage",
            "id": "2B8yyMTXaSR4OqXZxRpOmOh7kiqepi",
            "name": "data-storage",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/data/db"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-48nbb",
            "id": "pM6X6Ou2Kxraxq53meaVdl24evUDuH",
            "name": "default-token-48nbb",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "mongo",
            "id": "Zg85hsa9F3LYebBKAhI1NVRZI5uPos",
            "name": "mongo",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "mongo",
                "Ready": "true",
                "Image": "mongo:4.2.3"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "mysql-857d84965f-v6hls",
            "id": "ooIdOrU7qHNxmrnErWrBjmCV9ScQ2r",
            "name": "mysql-857d84965f-v6hls",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "matilda-monitoring-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "storage-data",
            "id": "KE4LjbFeXB3evOUpOOv1RGTGANiJ5e",
            "name": "storage-data",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/lib/mysql"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-48nbb",
            "id": "mzEaVukZDsPm0p8bhPHYksq6Zj7SeP",
            "name": "default-token-48nbb",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "mysql",
            "id": "4zL67folXuWkD5YKlwAlFwebXjnGp1",
            "name": "mysql",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "mysql",
                "Ready": "true",
                "Image": "mysql:5.6"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "notifications-5d855964c9-ps5zg",
            "id": "VAKnSDMf0rY3zWX0Wj4E31Z6bQxa88",
            "name": "notifications-5d855964c9-ps5zg",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "matilda-monitoring-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-48nbb",
            "id": "ceu3854b0uouJORNfHI5XXIhdTXPwV",
            "name": "default-token-48nbb",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "notifications",
            "id": "muQVwOeZOMPuWfS3q9Qw44S7ztlNgx",
            "name": "notifications",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "notifications",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-notifications-v21"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "rules-engine-5678fbcb67-ckzt2",
            "id": "T8U56pIBBLPnNo2WR5RRTfkLAJR6jP",
            "name": "rules-engine-5678fbcb67-ckzt2",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "matilda-monitoring-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-48nbb",
            "id": "gNKVeCoknqtTjgbo2HmS0oSh3wvxva",
            "name": "default-token-48nbb",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "rules-engine",
            "id": "Bwn4ECkG3JxbrQbsdPRtDjsWIVMsWt",
            "name": "rules-engine",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "rules-engine",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-rules-engine-v53"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "scheduler-657b8dc675-jtbd8",
            "id": "dW20d9LOSvsljIhgzKDWHXS72gByoG",
            "name": "scheduler-657b8dc675-jtbd8",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "matilda-monitoring-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-48nbb",
            "id": "g6dTs802yNskzIK7mh3Tp3WlBHWtgB",
            "name": "default-token-48nbb",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "scheduler",
            "id": "B3HbN7IGbDB6sunfJqAFrMpb0oroVh",
            "name": "scheduler",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "scheduler",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-scheduler-v32"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "redis-f46ff57fd-dr7vd",
            "id": "GO5uaNSQKIXw3BjwKDUwNJDZdphfBT",
            "name": "redis-f46ff57fd-dr7vd",
            "type": "pod",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "redis"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "default-token-vcnlx",
            "id": "ddrGitCDeNL6xDTzHB9f5uJVGixNFR",
            "name": "default-token-vcnlx",
            "type": "volumeMount",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "label": "master",
            "id": "ftZBMOuuryDvU7p26WQqKHiAywmvrX",
            "name": "master",
            "type": "container",
            "group": null,
            "alert": false,
            "usage": 0,
            "properties": {
                "RestartCount": "master",
                "Ready": "true",
                "Image": "k8s.gcr.io/redis:e2e"
            },
            "collapsed": false,
            "collapsing": 0
        }
    ],
    "links": [
        {
            "source": "hx-tTn0B5RnylR7cVJAl",
            "title": null,
            "target": "Tbmr3yfJVOmqmVDfCsGHV0rVmBPABT",
            "properties": null,
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Tbmr3yfJVOmqmVDfCsGHV0rVmBPABT",
            "title": null,
            "target": "b1D79BQXsCDEjFYTuN4LA0kOTvptHR",
            "properties": {
                "Size": "4/16208848Ki",
                "Pod Count": "58",
                "Operating System": "linux"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "b1D79BQXsCDEjFYTuN4LA0kOTvptHR",
            "title": null,
            "target": "iCaSCnQJ2n8eA97RuPtFSMj79p6ZT6",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "KuaINFDtfCSMCZzt3sTnCfEnKnAIH4",
            "title": null,
            "target": "yOFrGUiBwN2Saq184zShTRC2JTj5Iz",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "iCaSCnQJ2n8eA97RuPtFSMj79p6ZT6",
            "title": null,
            "target": "KuaINFDtfCSMCZzt3sTnCfEnKnAIH4",
            "properties": {
                "RestartCount": "dynamic",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-dashboard-v51"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "b1D79BQXsCDEjFYTuN4LA0kOTvptHR",
            "title": null,
            "target": "o8OJjoVeRGfOuQw2QAWxFjHFuWiJJ7",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "komfDaZGyjehF0fCPMXVES9L2yPh44",
            "title": null,
            "target": "Nio37u1jzikN3hEp1Q703VmuwQvnGE",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "o8OJjoVeRGfOuQw2QAWxFjHFuWiJJ7",
            "title": null,
            "target": "komfDaZGyjehF0fCPMXVES9L2yPh44",
            "properties": {
                "RestartCount": "frontend",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-ui-v91"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "b1D79BQXsCDEjFYTuN4LA0kOTvptHR",
            "title": null,
            "target": "W3E5akhCl0oL9GBXndpyWW4XQ6Eoek",
            "properties": {
                "ServiceAccount": "aiops-loki",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "ErtMCBWTVHSqLnWtZEUcRkfYIAB6Rn",
            "title": null,
            "target": "7PSA34iy7Fcr690y3lMdhnwTxHvHX2",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/etc/loki"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "ErtMCBWTVHSqLnWtZEUcRkfYIAB6Rn",
            "title": null,
            "target": "8ITEwWpZoDqXySGIVCY8gD4YfbKAuw",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/data"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "ErtMCBWTVHSqLnWtZEUcRkfYIAB6Rn",
            "title": null,
            "target": "tCgS54Hi6EG5h5NeRNVXdSXGFQtp4F",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "W3E5akhCl0oL9GBXndpyWW4XQ6Eoek",
            "title": null,
            "target": "ErtMCBWTVHSqLnWtZEUcRkfYIAB6Rn",
            "properties": {
                "RestartCount": "loki",
                "Ready": "true",
                "Image": "grafana/loki:2.2.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "b1D79BQXsCDEjFYTuN4LA0kOTvptHR",
            "title": null,
            "target": "ttViNwftqP12FSlXE68z3QYZo3cyYX",
            "properties": {
                "ServiceAccount": "aiops-promtail",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "OCzpyUi2f15gQoCwYe10hYnTydgqzi",
            "title": null,
            "target": "YNSDpt1aNyhzm9vSB5uTXrn8DxHfzy",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/etc/promtail"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "OCzpyUi2f15gQoCwYe10hYnTydgqzi",
            "title": null,
            "target": "8ANcXIAuhGtBLbAE9fC3USoubTwYpW",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/run/promtail"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "OCzpyUi2f15gQoCwYe10hYnTydgqzi",
            "title": null,
            "target": "BVsAtTmtIyK60b7mgz4AUidElQ02vl",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/lib/docker/containers"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "OCzpyUi2f15gQoCwYe10hYnTydgqzi",
            "title": null,
            "target": "zClubieTN5i952mNkpWPjDqyWN2jaO",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/log/pods"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "OCzpyUi2f15gQoCwYe10hYnTydgqzi",
            "title": null,
            "target": "Ww4OdrN3zoiX21XdXON9BR9KNF2bY5",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "ttViNwftqP12FSlXE68z3QYZo3cyYX",
            "title": null,
            "target": "OCzpyUi2f15gQoCwYe10hYnTydgqzi",
            "properties": {
                "RestartCount": "promtail",
                "Ready": "true",
                "Image": "grafana/promtail:2.1.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "b1D79BQXsCDEjFYTuN4LA0kOTvptHR",
            "title": null,
            "target": "Oh1tUyfVwGNcld1i8j0ZRsTCZe2pIy",
            "properties": {
                "ServiceAccount": "metricbeat-kube-state-metrics",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "mGdWjWVQQgqaKudqPIo0DFBlFCgb2Y",
            "title": null,
            "target": "NlnnzuyZql20kWAUruhyTcCzmXYyog",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Oh1tUyfVwGNcld1i8j0ZRsTCZe2pIy",
            "title": null,
            "target": "mGdWjWVQQgqaKudqPIo0DFBlFCgb2Y",
            "properties": {
                "RestartCount": "kube-state-metrics",
                "Ready": "true",
                "Image": "quay.io/coreos/kube-state-metrics:v1.8.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "b1D79BQXsCDEjFYTuN4LA0kOTvptHR",
            "title": null,
            "target": "OjyaXeYr7gMD6VqqevVBfo4J8TkdAF",
            "properties": {
                "ServiceAccount": "metricbeat-metricbeat",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "z4AyIGQhzrMUxY9L8pgUsRXy5kE6Wx",
            "title": null,
            "target": "GqVXJWeFl822N9Xzr2WB0VFKqFaT04",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/usr/share/metricbeat/metricbeat.yml"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "z4AyIGQhzrMUxY9L8pgUsRXy5kE6Wx",
            "title": null,
            "target": "Qh5VngwY6mCWuD8rZTU4PasKqn61KA",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "OjyaXeYr7gMD6VqqevVBfo4J8TkdAF",
            "title": null,
            "target": "z4AyIGQhzrMUxY9L8pgUsRXy5kE6Wx",
            "properties": {
                "RestartCount": "metricbeat",
                "Ready": "false",
                "Image": "docker.elastic.co/beats/metricbeat:7.15.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "b1D79BQXsCDEjFYTuN4LA0kOTvptHR",
            "title": null,
            "target": "vb1pL95rlgX0wN64E9REaHnM2thGbs",
            "properties": {
                "ServiceAccount": "metricbeat-metricbeat",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "yV8oKLLw9LIF7on6IsiUOS2SU4BsWp",
            "title": null,
            "target": "clOfvyv8q59OYa8C10D43omyjNX3Tw",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/usr/share/metricbeat/metricbeat.yml"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "yV8oKLLw9LIF7on6IsiUOS2SU4BsWp",
            "title": null,
            "target": "ax2jz4ngLU0XlRoD7JVQSRCq6AxLTA",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/usr/share/metricbeat/data"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "yV8oKLLw9LIF7on6IsiUOS2SU4BsWp",
            "title": null,
            "target": "RJLevGS8MBPjIbp0m8ejx6CGAVBVg0",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/docker.sock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "yV8oKLLw9LIF7on6IsiUOS2SU4BsWp",
            "title": null,
            "target": "kqgwkrQsR48ufrGfKNq0V90bfKHFI5",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/hostfs/proc"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "yV8oKLLw9LIF7on6IsiUOS2SU4BsWp",
            "title": null,
            "target": "tSpq2Etz4XGblcHPnvoSYuRKSJY8gI",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/hostfs/sys/fs/cgroup"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "yV8oKLLw9LIF7on6IsiUOS2SU4BsWp",
            "title": null,
            "target": "UVAF08DBMp9fJHb6ETUX7QNhJMjefA",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "vb1pL95rlgX0wN64E9REaHnM2thGbs",
            "title": null,
            "target": "yV8oKLLw9LIF7on6IsiUOS2SU4BsWp",
            "properties": {
                "RestartCount": "metricbeat",
                "Ready": "false",
                "Image": "docker.elastic.co/beats/metricbeat:7.15.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "b1D79BQXsCDEjFYTuN4LA0kOTvptHR",
            "title": null,
            "target": "xbvoDQvAQ1DMc0GbNyj8rD0QCwgWha",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "1OoGzfxAZThQgAUeQqy43tNMl5eyXQ",
            "title": null,
            "target": "rtydHQg3Eaj9lQSWHUvvUN1ikWq7U9",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/host/sys"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "1OoGzfxAZThQgAUeQqy43tNMl5eyXQ",
            "title": null,
            "target": "5xHeoi20s5OtZAq4obQuj8EqOwPmlR",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/host/root"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "1OoGzfxAZThQgAUeQqy43tNMl5eyXQ",
            "title": null,
            "target": "SYkuXiZS4StOGOwfjOFiQG5nSp0sif",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "xbvoDQvAQ1DMc0GbNyj8rD0QCwgWha",
            "title": null,
            "target": "1OoGzfxAZThQgAUeQqy43tNMl5eyXQ",
            "properties": {
                "RestartCount": "node-exporter",
                "Ready": "true",
                "Image": "prom/node-exporter"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "b1D79BQXsCDEjFYTuN4LA0kOTvptHR",
            "title": null,
            "target": "px3EDAkBzTmNVh596SNHIw4We6We5R",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-shell"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "MovQQl2101qab08USQmrWLpX88Wzcu",
            "title": null,
            "target": "IHZ2XJtEDOZ4egxDChaKVneb3OpeMJ",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "px3EDAkBzTmNVh596SNHIw4We6We5R",
            "title": null,
            "target": "MovQQl2101qab08USQmrWLpX88Wzcu",
            "properties": {
                "RestartCount": "cmdb",
                "Ready": "true",
                "Image": "matilda1/aiops:cmdb-v46"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "b1D79BQXsCDEjFYTuN4LA0kOTvptHR",
            "title": null,
            "target": "tLIpRGNwiIhI0v1EafJ0PMhZsX0knZ",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-shell"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "GnWtZetMmxqp4ryeopGUl0vvbJ43Jp",
            "title": null,
            "target": "0ZUyXXcRLogbVSlNIajHLwAC1oIsYR",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/etc/x509/https/cert"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "GnWtZetMmxqp4ryeopGUl0vvbJ43Jp",
            "title": null,
            "target": "rWL5Z8p7gmrsgLwkuwauPMteeZF49S",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/opt/jboss/keycloak/imports/realms"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "GnWtZetMmxqp4ryeopGUl0vvbJ43Jp",
            "title": null,
            "target": "Xa0sALs6w5PeFe4OSUfxuvBr2V3w0G",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/opt/jboss/keycloak/themes/matilda/"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "GnWtZetMmxqp4ryeopGUl0vvbJ43Jp",
            "title": null,
            "target": "I33v6rJZ7tnWCsmCzBW7ymHmm3OO12",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "tLIpRGNwiIhI0v1EafJ0PMhZsX0knZ",
            "title": null,
            "target": "GnWtZetMmxqp4ryeopGUl0vvbJ43Jp",
            "properties": {
                "RestartCount": "keycloak",
                "Ready": "true",
                "Image": "matilda1/keycloak:vfx1.3"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "b1D79BQXsCDEjFYTuN4LA0kOTvptHR",
            "title": null,
            "target": "bkRThyB54JESufwDCn1VWKRKh8p8kO",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-shell"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "rOzriF1GKmGQ0cbqLArjR3LtWlr1Qm",
            "title": null,
            "target": "FgcdyE9Y45ZA81hOiXWJuoawu2xQNj",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/application.properties"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "rOzriF1GKmGQ0cbqLArjR3LtWlr1Qm",
            "title": null,
            "target": "mc03WecRRWLkn6aVnAMeMpwqKS58UW",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/logging.xml"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "rOzriF1GKmGQ0cbqLArjR3LtWlr1Qm",
            "title": null,
            "target": "AuUpH5pUl2VJKBoGGMgO5QqpU3r0lj",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/accountdetails.json"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "rOzriF1GKmGQ0cbqLArjR3LtWlr1Qm",
            "title": null,
            "target": "w3PztGwKdosjjMnKf3uPQkor9kHvpI",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/namingpattern.json"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "rOzriF1GKmGQ0cbqLArjR3LtWlr1Qm",
            "title": null,
            "target": "a9SwjpWjzwMyAVITF2kaUP912dwNtn",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/favorites.json"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "rOzriF1GKmGQ0cbqLArjR3LtWlr1Qm",
            "title": null,
            "target": "CLbYQQKwXLkTb0uw5BPOYvHb6234V7",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/log/matilda"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "rOzriF1GKmGQ0cbqLArjR3LtWlr1Qm",
            "title": null,
            "target": "T2eEiupOoTg0Y1mtHLky1UHtYMQx26",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "bkRThyB54JESufwDCn1VWKRKh8p8kO",
            "title": null,
            "target": "rOzriF1GKmGQ0cbqLArjR3LtWlr1Qm",
            "properties": {
                "RestartCount": "matilda-management1",
                "Ready": "true",
                "Image": "matilda1/aiops:usermanagement-v23"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "b1D79BQXsCDEjFYTuN4LA0kOTvptHR",
            "title": null,
            "target": "Pncga6iB58tBFRJpvGK88hVJ094Nvb",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-shell"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "mF6AYv2LwS7Ex8kvVEttGEaHEbrVcv",
            "title": null,
            "target": "lwobf29jZckKMfs3dA1inx7NhWJsRr",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Pncga6iB58tBFRJpvGK88hVJ094Nvb",
            "title": null,
            "target": "mF6AYv2LwS7Ex8kvVEttGEaHEbrVcv",
            "properties": {
                "RestartCount": "frontend",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-ui-shell-v71"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "b1D79BQXsCDEjFYTuN4LA0kOTvptHR",
            "title": null,
            "target": "gdSno8hr5InGFakTf1DxUbMWPRtXrf",
            "properties": {
                "ServiceAccount": "aws-node",
                "NameSpace": "kube-system"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "3hKq4zlNrddU8aOj1eupzCYKd6Hs5v",
            "title": null,
            "target": "yd61TVxVryDyFb6wasDNTIRqvTHVpK",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/host/opt/cni/bin"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "3hKq4zlNrddU8aOj1eupzCYKd6Hs5v",
            "title": null,
            "target": "Dow2dfYgq2hi16X7ukqE5xJhXG8bCj",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/host/etc/cni/net.d"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "3hKq4zlNrddU8aOj1eupzCYKd6Hs5v",
            "title": null,
            "target": "TCYTDxubEiRPmA4tWjrOvmjXb3T8zi",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/host/var/log/aws-routed-eni"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "3hKq4zlNrddU8aOj1eupzCYKd6Hs5v",
            "title": null,
            "target": "Mp4GvPqSmksHrRqzoXbz77N0CDKY3u",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/run/aws-node"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "3hKq4zlNrddU8aOj1eupzCYKd6Hs5v",
            "title": null,
            "target": "c4YfZn5g3yOHGzzCOlBwUhSNY74Rn2",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/run/dockershim.sock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "3hKq4zlNrddU8aOj1eupzCYKd6Hs5v",
            "title": null,
            "target": "Bmvh1aevX81CLw4yxwMBCEjZV6op0n",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/run/xtables.lock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "3hKq4zlNrddU8aOj1eupzCYKd6Hs5v",
            "title": null,
            "target": "h6UfbEiddZJn5yquVbjeIVYo9w3Sop",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "gdSno8hr5InGFakTf1DxUbMWPRtXrf",
            "title": null,
            "target": "3hKq4zlNrddU8aOj1eupzCYKd6Hs5v",
            "properties": {
                "RestartCount": "aws-node",
                "Ready": "true",
                "Image": "602401143452.dkr.ecr.us-east-2.amazonaws.com/amazon-k8s-cni:v1.7.5-eksbuild.1"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "b1D79BQXsCDEjFYTuN4LA0kOTvptHR",
            "title": null,
            "target": "m2cKg6q7SDVd7IO2hXIrPNMzqyKAss",
            "properties": {
                "ServiceAccount": "kube-proxy",
                "NameSpace": "kube-system"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "QBkKlc4Ev0DuwxiEAWynXttsvMUoFC",
            "title": null,
            "target": "WJg5zCHomZQCYZwZJMeZ4YHtgNhODV",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/log"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "QBkKlc4Ev0DuwxiEAWynXttsvMUoFC",
            "title": null,
            "target": "Iw4aYVBHQ5m0ek4ruDXANmvhgT2s7Z",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/run/xtables.lock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "QBkKlc4Ev0DuwxiEAWynXttsvMUoFC",
            "title": null,
            "target": "4znuEJkVkbmpQpJVyn4c50g0D5OVxs",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/lib/modules"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "QBkKlc4Ev0DuwxiEAWynXttsvMUoFC",
            "title": null,
            "target": "qedZmypOhUWWf7Ffvqz9GMGNe2gNlY",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/lib/kube-proxy/"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "QBkKlc4Ev0DuwxiEAWynXttsvMUoFC",
            "title": null,
            "target": "CJeuyzILAISzUZETRNRn2orqZVsTIc",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/lib/kube-proxy-config/"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "QBkKlc4Ev0DuwxiEAWynXttsvMUoFC",
            "title": null,
            "target": "Mpntk7cnZldB6m4FLOLoxFCdRkkk70",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "m2cKg6q7SDVd7IO2hXIrPNMzqyKAss",
            "title": null,
            "target": "QBkKlc4Ev0DuwxiEAWynXttsvMUoFC",
            "properties": {
                "RestartCount": "kube-proxy",
                "Ready": "true",
                "Image": "602401143452.dkr.ecr.us-east-2.amazonaws.com/eks/kube-proxy:v1.18.8-eksbuild.1"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "b1D79BQXsCDEjFYTuN4LA0kOTvptHR",
            "title": null,
            "target": "zXYnbsHVXXan51fS1E0p1kdvkn6IvM",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "matilda-monitoring-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "r905MTRgnRb9btgDANe7bxTHex40pQ",
            "title": null,
            "target": "i2lgN3RqTLNwEc6H8bEaGM4RsKgKm9",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "zXYnbsHVXXan51fS1E0p1kdvkn6IvM",
            "title": null,
            "target": "r905MTRgnRb9btgDANe7bxTHex40pQ",
            "properties": {
                "RestartCount": "descision-engine",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-engine-v63"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "b1D79BQXsCDEjFYTuN4LA0kOTvptHR",
            "title": null,
            "target": "vgOCFiFstJ7nabYZbkXZ8S1pPfr40A",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "matilda-monitoring-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "fMQEuohf0gv2FgQnJb0IWVU28yPPDd",
            "title": null,
            "target": "fH4m8Yjv6xWeTR7fx6iaVcj2lVeRP4",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "vgOCFiFstJ7nabYZbkXZ8S1pPfr40A",
            "title": null,
            "target": "fMQEuohf0gv2FgQnJb0IWVU28yPPDd",
            "properties": {
                "RestartCount": "matilda-executor",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-matilda-executor-v38"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "b1D79BQXsCDEjFYTuN4LA0kOTvptHR",
            "title": null,
            "target": "VAKnSDMf0rY3zWX0Wj4E31Z6bQxa88",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "matilda-monitoring-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "muQVwOeZOMPuWfS3q9Qw44S7ztlNgx",
            "title": null,
            "target": "ceu3854b0uouJORNfHI5XXIhdTXPwV",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "VAKnSDMf0rY3zWX0Wj4E31Z6bQxa88",
            "title": null,
            "target": "muQVwOeZOMPuWfS3q9Qw44S7ztlNgx",
            "properties": {
                "RestartCount": "notifications",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-notifications-v21"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "b1D79BQXsCDEjFYTuN4LA0kOTvptHR",
            "title": null,
            "target": "T8U56pIBBLPnNo2WR5RRTfkLAJR6jP",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "matilda-monitoring-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Bwn4ECkG3JxbrQbsdPRtDjsWIVMsWt",
            "title": null,
            "target": "gNKVeCoknqtTjgbo2HmS0oSh3wvxva",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "T8U56pIBBLPnNo2WR5RRTfkLAJR6jP",
            "title": null,
            "target": "Bwn4ECkG3JxbrQbsdPRtDjsWIVMsWt",
            "properties": {
                "RestartCount": "rules-engine",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-rules-engine-v53"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Tbmr3yfJVOmqmVDfCsGHV0rVmBPABT",
            "title": null,
            "target": "Sq5pSOmrgZkmhKDnOf3imrtHS7L7iU",
            "properties": {
                "Size": "4/16208848Ki",
                "Pod Count": "58",
                "Operating System": "linux"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Sq5pSOmrgZkmhKDnOf3imrtHS7L7iU",
            "title": null,
            "target": "hw1aRNf8fP2lgq9duvnOvd72UzlUKK",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "LUPpO33RppzYQLkke9fw2wIIwR3iU3",
            "title": null,
            "target": "QrjMxEWLpLrz4AGwSUl62Ig0w2EXfO",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "hw1aRNf8fP2lgq9duvnOvd72UzlUKK",
            "title": null,
            "target": "LUPpO33RppzYQLkke9fw2wIIwR3iU3",
            "properties": {
                "RestartCount": "dynamic",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-dashboard-v51"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Sq5pSOmrgZkmhKDnOf3imrtHS7L7iU",
            "title": null,
            "target": "dslCOaUmYSbP4L8TpP5ssfGOXaHj5W",
            "properties": {
                "ServiceAccount": "elk",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "2CM6mVcLJp4U3NN1Sd9Z94NaVut3vg",
            "title": null,
            "target": "0xiJb5VKc2hJBhxrDELBf9PU2O1fRS",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/data"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "2CM6mVcLJp4U3NN1Sd9Z94NaVut3vg",
            "title": null,
            "target": "ut8wMXnMxaOk2yFimJpRy3uOILBYju",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "dslCOaUmYSbP4L8TpP5ssfGOXaHj5W",
            "title": null,
            "target": "2CM6mVcLJp4U3NN1Sd9Z94NaVut3vg",
            "properties": {
                "RestartCount": "elasticsearch",
                "Ready": "true",
                "Image": "elasticsearch:6.8.4"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Sq5pSOmrgZkmhKDnOf3imrtHS7L7iU",
            "title": null,
            "target": "XEo8yaxn5sUGrVQ4Zc6epKKXindRgW",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "rLpq37MunbQEP2tRkZGaAtqTIX9rfl",
            "title": null,
            "target": "a5wIyR6P2jHMYZuh22IHfdtj5L14sl",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/data/db"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "rLpq37MunbQEP2tRkZGaAtqTIX9rfl",
            "title": null,
            "target": "3xA2fYA557ardonMDWyGzmuHAkZnOB",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "XEo8yaxn5sUGrVQ4Zc6epKKXindRgW",
            "title": null,
            "target": "rLpq37MunbQEP2tRkZGaAtqTIX9rfl",
            "properties": {
                "RestartCount": "mongo",
                "Ready": "true",
                "Image": "mongo:4.2.3"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Sq5pSOmrgZkmhKDnOf3imrtHS7L7iU",
            "title": null,
            "target": "yg3i71nyB0u4RwWmvlqJ1RTzdDaev0",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "9OCSVeOkbREhXfHWftIxdFbeNwSsSQ",
            "title": null,
            "target": "Vy7cOuep9Ka2bN3wZgwEHz7ME77tTL",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/lib/mysql"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "9OCSVeOkbREhXfHWftIxdFbeNwSsSQ",
            "title": null,
            "target": "E2fX3wc3pUwVVXkeNplRL5FThtYwgb",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "yg3i71nyB0u4RwWmvlqJ1RTzdDaev0",
            "title": null,
            "target": "9OCSVeOkbREhXfHWftIxdFbeNwSsSQ",
            "properties": {
                "RestartCount": "mysql",
                "Ready": "true",
                "Image": "mysql:5.6"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Sq5pSOmrgZkmhKDnOf3imrtHS7L7iU",
            "title": null,
            "target": "VyRGXzOJG6v61O9r0jhZVDeZzOGD5Z",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RcUntXZ1hBQQua8DQUO1xVAJbCKMwg",
            "title": null,
            "target": "w92hTDbcd5hgwmMcI3zoT4fkSvps4t",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "VyRGXzOJG6v61O9r0jhZVDeZzOGD5Z",
            "title": null,
            "target": "RcUntXZ1hBQQua8DQUO1xVAJbCKMwg",
            "properties": {
                "RestartCount": "frontend",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-ui-v91"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Sq5pSOmrgZkmhKDnOf3imrtHS7L7iU",
            "title": null,
            "target": "JQ2PJHhwQeem2jVe1j5ailfmiKQEPr",
            "properties": {
                "ServiceAccount": "aiops-promtail",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "osI04tZz11q8odQe0pLQuPBXni6NgA",
            "title": null,
            "target": "4RDb0KEE7O1PG6sEVhtyDXcM9IfBue",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/etc/promtail"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "osI04tZz11q8odQe0pLQuPBXni6NgA",
            "title": null,
            "target": "erti3K70GVNtpz44LTNoXqGfJ46gWz",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/run/promtail"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "osI04tZz11q8odQe0pLQuPBXni6NgA",
            "title": null,
            "target": "EnZsSqSGNOTs9kFpJZt9cGztDbGfbY",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/lib/docker/containers"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "osI04tZz11q8odQe0pLQuPBXni6NgA",
            "title": null,
            "target": "NfytSwB7NMR2RDLWJyJXNSFwg3AuBO",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/log/pods"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "osI04tZz11q8odQe0pLQuPBXni6NgA",
            "title": null,
            "target": "3c77JhpVpRCe6oy6493qWJ8udy83id",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "JQ2PJHhwQeem2jVe1j5ailfmiKQEPr",
            "title": null,
            "target": "osI04tZz11q8odQe0pLQuPBXni6NgA",
            "properties": {
                "RestartCount": "promtail",
                "Ready": "true",
                "Image": "grafana/promtail:2.1.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Sq5pSOmrgZkmhKDnOf3imrtHS7L7iU",
            "title": null,
            "target": "sg8NUZMTkJFDnTvQCtVPA9IMgXRRsA",
            "properties": {
                "ServiceAccount": "metricbeat-metricbeat",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "xQBfVlicbVNO6ckAa3sJfcbUdfp5Xz",
            "title": null,
            "target": "fv6fBxZvsItMazSGxf4fjmnDKz9voT",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/usr/share/metricbeat/metricbeat.yml"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "xQBfVlicbVNO6ckAa3sJfcbUdfp5Xz",
            "title": null,
            "target": "ML0vvvrZvdAZu4BvL9Zjwzp7ctgWKE",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/usr/share/metricbeat/data"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "xQBfVlicbVNO6ckAa3sJfcbUdfp5Xz",
            "title": null,
            "target": "Js0UsOIBnJeXV7buWsse1nolAhY5d0",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/docker.sock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "xQBfVlicbVNO6ckAa3sJfcbUdfp5Xz",
            "title": null,
            "target": "6Sh9PzAXkLyFbdrBrqJOGRHMx7NNs4",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/hostfs/proc"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "xQBfVlicbVNO6ckAa3sJfcbUdfp5Xz",
            "title": null,
            "target": "O4OXQ5FxNuXvNs78Q499IGyZF1jzpJ",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/hostfs/sys/fs/cgroup"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "xQBfVlicbVNO6ckAa3sJfcbUdfp5Xz",
            "title": null,
            "target": "6FgwabNArLDTb05oPaO7L3nG4r1faY",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "sg8NUZMTkJFDnTvQCtVPA9IMgXRRsA",
            "title": null,
            "target": "xQBfVlicbVNO6ckAa3sJfcbUdfp5Xz",
            "properties": {
                "RestartCount": "metricbeat",
                "Ready": "false",
                "Image": "docker.elastic.co/beats/metricbeat:7.15.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Sq5pSOmrgZkmhKDnOf3imrtHS7L7iU",
            "title": null,
            "target": "uVmJupsObXAjFaG51LwmfXFVh8QOsP",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "KKnWtfY48oIzJnqdRcWnUTwMdLcTOP",
            "title": null,
            "target": "7LliPoBGm3pMnGwMVbx7ERJqE7T088",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/host/sys"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "KKnWtfY48oIzJnqdRcWnUTwMdLcTOP",
            "title": null,
            "target": "16KL7abbAEOyfegkA7A8nC6HqSeYfS",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/host/root"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "KKnWtfY48oIzJnqdRcWnUTwMdLcTOP",
            "title": null,
            "target": "hKTvGnSWBgzqZeeJDvS3deVfokpp4z",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "uVmJupsObXAjFaG51LwmfXFVh8QOsP",
            "title": null,
            "target": "KKnWtfY48oIzJnqdRcWnUTwMdLcTOP",
            "properties": {
                "RestartCount": "node-exporter",
                "Ready": "true",
                "Image": "prom/node-exporter"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Sq5pSOmrgZkmhKDnOf3imrtHS7L7iU",
            "title": null,
            "target": "kA8PcdnEt8c0TLWCQ3UrgjlAUqEUWX",
            "properties": {
                "ServiceAccount": "elk",
                "NameSpace": "aiops-qa"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "dnvg6YbLbTDuTpTZP9L3kH4FS1h5mX",
            "title": null,
            "target": "M9g8doACDzRbRGIjjDpijIs4Cmk8l2",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/data"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "dnvg6YbLbTDuTpTZP9L3kH4FS1h5mX",
            "title": null,
            "target": "6YgBoNiAtnO2QMSqPVi3kFqIF8P3J3",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "kA8PcdnEt8c0TLWCQ3UrgjlAUqEUWX",
            "title": null,
            "target": "dnvg6YbLbTDuTpTZP9L3kH4FS1h5mX",
            "properties": {
                "RestartCount": "elasticsearch",
                "Ready": "true",
                "Image": "elasticsearch:6.8.4"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Sq5pSOmrgZkmhKDnOf3imrtHS7L7iU",
            "title": null,
            "target": "jz3CX3NlbYtEXqJsu6TtL5Vxkfq2nC",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-qa"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "xdCVE04tjC64qErw3JaEbSmS5fvwH6",
            "title": null,
            "target": "PVGpioGNlr30iLvCNKr0ehBxOudXtu",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/data/db"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "xdCVE04tjC64qErw3JaEbSmS5fvwH6",
            "title": null,
            "target": "6GpDn4oukXI4FOoMxhEOo1rxsysGzj",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "jz3CX3NlbYtEXqJsu6TtL5Vxkfq2nC",
            "title": null,
            "target": "xdCVE04tjC64qErw3JaEbSmS5fvwH6",
            "properties": {
                "RestartCount": "mongo",
                "Ready": "true",
                "Image": "mongo:4.2.3"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Sq5pSOmrgZkmhKDnOf3imrtHS7L7iU",
            "title": null,
            "target": "hdL4RoKRiWfbbFw0kGhlM34qjFl72y",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-qa"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "2Q4JJj7mKuE8H6EBxjzQELKbveVpa7",
            "title": null,
            "target": "Wd6WP1zU3KiukDKPWGUwSUVYqPxCUF",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/lib/mysql"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "2Q4JJj7mKuE8H6EBxjzQELKbveVpa7",
            "title": null,
            "target": "wHMzFuNklMOsAbG2lru4EizYbPE2Oo",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "hdL4RoKRiWfbbFw0kGhlM34qjFl72y",
            "title": null,
            "target": "2Q4JJj7mKuE8H6EBxjzQELKbveVpa7",
            "properties": {
                "RestartCount": "mysql",
                "Ready": "true",
                "Image": "mysql:5.6"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Sq5pSOmrgZkmhKDnOf3imrtHS7L7iU",
            "title": null,
            "target": "7z0ccGvswMpdyHpTcD2PpzuuhFQzpT",
            "properties": {
                "ServiceAccount": "elk",
                "NameSpace": "aiops-shell"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "BMAI6BonJ1GQBUCkUxJmXdLN22Tmyo",
            "title": null,
            "target": "mujyPKBE7iwwyfdh9I0Kt0US2yXSpR",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/data"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "BMAI6BonJ1GQBUCkUxJmXdLN22Tmyo",
            "title": null,
            "target": "6fJlEcFy4alStwy2qpBxZdqeXRf9PS",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "7z0ccGvswMpdyHpTcD2PpzuuhFQzpT",
            "title": null,
            "target": "BMAI6BonJ1GQBUCkUxJmXdLN22Tmyo",
            "properties": {
                "RestartCount": "elasticsearch",
                "Ready": "true",
                "Image": "elasticsearch:7.10.1"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Sq5pSOmrgZkmhKDnOf3imrtHS7L7iU",
            "title": null,
            "target": "GIOgmaGj7CN1kciDcBg8YrUm3gt1fr",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-shell"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "2Ng947vQ2Sm8Fzl07hYdDOWFrdYPIz",
            "title": null,
            "target": "myZElLIVruhmSEgoG7XSt6Ni6pwMXT",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/data/db"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "2Ng947vQ2Sm8Fzl07hYdDOWFrdYPIz",
            "title": null,
            "target": "Hghlr6xxdpk54zMxs0ylbXzOclj23d",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "GIOgmaGj7CN1kciDcBg8YrUm3gt1fr",
            "title": null,
            "target": "2Ng947vQ2Sm8Fzl07hYdDOWFrdYPIz",
            "properties": {
                "RestartCount": "mongo",
                "Ready": "true",
                "Image": "mongo:4.2.3"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Sq5pSOmrgZkmhKDnOf3imrtHS7L7iU",
            "title": null,
            "target": "CVMoPAgEEBfOCi2hTbHc6ghoGzPEq9",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-shell"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "w10sFKkSIPqHetR9xvRmizepRUpVVa",
            "title": null,
            "target": "dbJwjV7lXgumXeYJhT9UIWduMEe9Nj",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/lib/mysql"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "w10sFKkSIPqHetR9xvRmizepRUpVVa",
            "title": null,
            "target": "Wg2UGel7RwWGyTpgWa4cSPNJy7sLLV",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "CVMoPAgEEBfOCi2hTbHc6ghoGzPEq9",
            "title": null,
            "target": "w10sFKkSIPqHetR9xvRmizepRUpVVa",
            "properties": {
                "RestartCount": "mysql",
                "Ready": "true",
                "Image": "mysql:5.7"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Sq5pSOmrgZkmhKDnOf3imrtHS7L7iU",
            "title": null,
            "target": "aDlEwaZNdEmw4u30yE7IxBxIb86u9N",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-shell"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "BEbwqpWZGHhp9ib2zME8GootUtZaBZ",
            "title": null,
            "target": "NGgx3jZ394d2Ol9DctZqFyWwzaZKyV",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "aDlEwaZNdEmw4u30yE7IxBxIb86u9N",
            "title": null,
            "target": "BEbwqpWZGHhp9ib2zME8GootUtZaBZ",
            "properties": {
                "RestartCount": "frontend",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-ui-shell-v71"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Sq5pSOmrgZkmhKDnOf3imrtHS7L7iU",
            "title": null,
            "target": "3g4C8sqkTBtgwze59op2cXtGR69OSB",
            "properties": {
                "ServiceAccount": "aws-node",
                "NameSpace": "kube-system"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "q54Yq02sbdSvHp3kncha9jtniQ2XYi",
            "title": null,
            "target": "N83fZOUWNiBhqpz2hZj5vkYnd5bIpV",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/host/opt/cni/bin"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "q54Yq02sbdSvHp3kncha9jtniQ2XYi",
            "title": null,
            "target": "RpaXjOyNsjGyoggBxgmn11ujlTxKky",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/host/etc/cni/net.d"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "q54Yq02sbdSvHp3kncha9jtniQ2XYi",
            "title": null,
            "target": "9sTx57mZWYXSb67jJ0RaPIMTjbrfiK",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/host/var/log/aws-routed-eni"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "q54Yq02sbdSvHp3kncha9jtniQ2XYi",
            "title": null,
            "target": "0nOHjDOfj3uJbEdBptkBWlLtRi6WCU",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/run/aws-node"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "q54Yq02sbdSvHp3kncha9jtniQ2XYi",
            "title": null,
            "target": "7M1MtHcGD3TcAG0jE4F2cEwwJKMflW",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/run/dockershim.sock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "q54Yq02sbdSvHp3kncha9jtniQ2XYi",
            "title": null,
            "target": "3J59W3sR6dDUYgoEKNYnQO3g2hA3Js",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/run/xtables.lock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "q54Yq02sbdSvHp3kncha9jtniQ2XYi",
            "title": null,
            "target": "iOWESjRdK5Wa1XseJGviuzEUyqRvJf",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "3g4C8sqkTBtgwze59op2cXtGR69OSB",
            "title": null,
            "target": "q54Yq02sbdSvHp3kncha9jtniQ2XYi",
            "properties": {
                "RestartCount": "aws-node",
                "Ready": "true",
                "Image": "602401143452.dkr.ecr.us-east-2.amazonaws.com/amazon-k8s-cni:v1.7.5-eksbuild.1"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Sq5pSOmrgZkmhKDnOf3imrtHS7L7iU",
            "title": null,
            "target": "CnwdstZgH9QKWZkpwVDc8Lnk8BMQTM",
            "properties": {
                "ServiceAccount": "kube-proxy",
                "NameSpace": "kube-system"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "FZGY1Z6VIxS6bB22a7LOuoD8PaV704",
            "title": null,
            "target": "q7vWyOzMSmOkJNm70P58ZOW87BDDMw",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/log"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "FZGY1Z6VIxS6bB22a7LOuoD8PaV704",
            "title": null,
            "target": "8IwTWNjZODydxRDhse2LqIIecu8wwo",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/run/xtables.lock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "FZGY1Z6VIxS6bB22a7LOuoD8PaV704",
            "title": null,
            "target": "oD32hvIpd2gpDBF5f5P2ZKZAAsJ71a",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/lib/modules"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "FZGY1Z6VIxS6bB22a7LOuoD8PaV704",
            "title": null,
            "target": "kndybKk7CBxrxONA8TAtcTFMMzrtL4",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/lib/kube-proxy/"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "FZGY1Z6VIxS6bB22a7LOuoD8PaV704",
            "title": null,
            "target": "31xFSIzsSdEF5XtEKP53hF2D3mfZh0",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/lib/kube-proxy-config/"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "FZGY1Z6VIxS6bB22a7LOuoD8PaV704",
            "title": null,
            "target": "NKYGszwqIWS8hyCESYgrGmLrHGsSRL",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "CnwdstZgH9QKWZkpwVDc8Lnk8BMQTM",
            "title": null,
            "target": "FZGY1Z6VIxS6bB22a7LOuoD8PaV704",
            "properties": {
                "RestartCount": "kube-proxy",
                "Ready": "true",
                "Image": "602401143452.dkr.ecr.us-east-2.amazonaws.com/eks/kube-proxy:v1.18.8-eksbuild.1"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Sq5pSOmrgZkmhKDnOf3imrtHS7L7iU",
            "title": null,
            "target": "s97mgQqVj8xhXOUNARtX5ni7Aled7J",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "matilda-monitoring-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Zg85hsa9F3LYebBKAhI1NVRZI5uPos",
            "title": null,
            "target": "2B8yyMTXaSR4OqXZxRpOmOh7kiqepi",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/data/db"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Zg85hsa9F3LYebBKAhI1NVRZI5uPos",
            "title": null,
            "target": "pM6X6Ou2Kxraxq53meaVdl24evUDuH",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "s97mgQqVj8xhXOUNARtX5ni7Aled7J",
            "title": null,
            "target": "Zg85hsa9F3LYebBKAhI1NVRZI5uPos",
            "properties": {
                "RestartCount": "mongo",
                "Ready": "true",
                "Image": "mongo:4.2.3"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Sq5pSOmrgZkmhKDnOf3imrtHS7L7iU",
            "title": null,
            "target": "ooIdOrU7qHNxmrnErWrBjmCV9ScQ2r",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "matilda-monitoring-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "4zL67folXuWkD5YKlwAlFwebXjnGp1",
            "title": null,
            "target": "KE4LjbFeXB3evOUpOOv1RGTGANiJ5e",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/lib/mysql"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "4zL67folXuWkD5YKlwAlFwebXjnGp1",
            "title": null,
            "target": "mzEaVukZDsPm0p8bhPHYksq6Zj7SeP",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "ooIdOrU7qHNxmrnErWrBjmCV9ScQ2r",
            "title": null,
            "target": "4zL67folXuWkD5YKlwAlFwebXjnGp1",
            "properties": {
                "RestartCount": "mysql",
                "Ready": "true",
                "Image": "mysql:5.6"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Sq5pSOmrgZkmhKDnOf3imrtHS7L7iU",
            "title": null,
            "target": "dW20d9LOSvsljIhgzKDWHXS72gByoG",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "matilda-monitoring-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "B3HbN7IGbDB6sunfJqAFrMpb0oroVh",
            "title": null,
            "target": "g6dTs802yNskzIK7mh3Tp3WlBHWtgB",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "dW20d9LOSvsljIhgzKDWHXS72gByoG",
            "title": null,
            "target": "B3HbN7IGbDB6sunfJqAFrMpb0oroVh",
            "properties": {
                "RestartCount": "scheduler",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-scheduler-v32"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Tbmr3yfJVOmqmVDfCsGHV0rVmBPABT",
            "title": null,
            "target": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "properties": {
                "Size": "4/16208916Ki",
                "Pod Count": "58",
                "Operating System": "linux"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "1DrxlxGMre4MDSshbizhbhKy8L8TJM",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "KjqqUmUrYifBOGJFBjMEqNTiWqtbYR",
            "title": null,
            "target": "6gQ3THms7LE5x8nvcI8QMjC8g5B3jq",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "1DrxlxGMre4MDSshbizhbhKy8L8TJM",
            "title": null,
            "target": "KjqqUmUrYifBOGJFBjMEqNTiWqtbYR",
            "properties": {
                "RestartCount": "alert-dev",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-alert-v7"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "AlNsyLnPGF5jK4etzsTLmGHua4DHEz",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "1Ac83V5r9pLaqEVNuJKqSlyQi0SX19",
            "title": null,
            "target": "8Z3d7s6dsANSZ9FbMN9Z8ILjLq6W20",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "AlNsyLnPGF5jK4etzsTLmGHua4DHEz",
            "title": null,
            "target": "1Ac83V5r9pLaqEVNuJKqSlyQi0SX19",
            "properties": {
                "RestartCount": "bk-dev",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-svc-v79"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "gtJevd3wDCNUMEft2CvrVz60PGfDiz",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "khGMiQPof12GOYsogjp6WF6EMgJJJL",
            "title": null,
            "target": "TA6XsQ4OgiVPPQAlfd2APJof2IKgfr",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "gtJevd3wDCNUMEft2CvrVz60PGfDiz",
            "title": null,
            "target": "khGMiQPof12GOYsogjp6WF6EMgJJJL",
            "properties": {
                "RestartCount": "jobs-scheduler",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-jobs-v10"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "9g5ff6WTxK85iiD1dRHGQtwWLVxG0k",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "EJNO6lBLM251JPROjUA9oLIu9XYVyQ",
            "title": null,
            "target": "qHQmRHEcQ3mGemANQRKMPbqHAhUmZG",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "9g5ff6WTxK85iiD1dRHGQtwWLVxG0k",
            "title": null,
            "target": "EJNO6lBLM251JPROjUA9oLIu9XYVyQ",
            "properties": {
                "RestartCount": "keycloak",
                "Ready": "true",
                "Image": "quay.io/keycloak/keycloak:10.0.1"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "bBY3zE1MzH3qw0mgN7cGmjlxEqcF7C",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-dev"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "da5JHk4aCblvkQ7z1XTL1Kbc1oHuim",
            "title": null,
            "target": "xFkqXWwCC7ooHaCCu2Emr6lBaBRkMw",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "bBY3zE1MzH3qw0mgN7cGmjlxEqcF7C",
            "title": null,
            "target": "da5JHk4aCblvkQ7z1XTL1Kbc1oHuim",
            "properties": {
                "RestartCount": "devum",
                "Ready": "true",
                "Image": "matilda1/aiops:dev-um-v3"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "NXb7RnrmGLuTz9f08oDUif143GqXsd",
            "properties": {
                "ServiceAccount": "aiops-grafana",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RttBgSLVfKsqPizAqbUx72yPiHqC4S",
            "title": null,
            "target": "JkqazFaxnnhuk2uXC1qrz2n1AWL9cv",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/etc/grafana/grafana.ini"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RttBgSLVfKsqPizAqbUx72yPiHqC4S",
            "title": null,
            "target": "SkSW1vNw4MdzLMHWwlPcqgCLHcchWe",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/lib/grafana"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RttBgSLVfKsqPizAqbUx72yPiHqC4S",
            "title": null,
            "target": "w4Rptxg96MiNWXNqxdVF3J8hz3bYEl",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/etc/grafana/provisioning/datasources"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RttBgSLVfKsqPizAqbUx72yPiHqC4S",
            "title": null,
            "target": "xwm20YCDU6NMvfJStYEwTIrl0QNtgN",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "NXb7RnrmGLuTz9f08oDUif143GqXsd",
            "title": null,
            "target": "RttBgSLVfKsqPizAqbUx72yPiHqC4S",
            "properties": {
                "RestartCount": "grafana",
                "Ready": "true",
                "Image": "grafana/grafana:7.5.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "eGRGa6UvaanFYm39BvnJKApqiFlasO",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "InJaHW4mA8dg3YLj6GNnP9TqhsTqOo",
            "title": null,
            "target": "6eE8r6XTAZITNOr3OtuN9MMmxPHtXJ",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "eGRGa6UvaanFYm39BvnJKApqiFlasO",
            "title": null,
            "target": "InJaHW4mA8dg3YLj6GNnP9TqhsTqOo",
            "properties": {
                "RestartCount": "grafanaimage",
                "Ready": "true",
                "Image": "grafana/grafana-image-renderer:latest"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "omCEnyQmetELV6Wf71fKFABhCAb3wj",
            "properties": {
                "ServiceAccount": "aiops-kube-state-metrics",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "p5uwTCTHZIKU5jqin877PSVbxlGqiD",
            "title": null,
            "target": "1r5ApoRpYI4AteTOuPXvPHlWqMU2Vf",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "omCEnyQmetELV6Wf71fKFABhCAb3wj",
            "title": null,
            "target": "p5uwTCTHZIKU5jqin877PSVbxlGqiD",
            "properties": {
                "RestartCount": "kube-state-metrics",
                "Ready": "true",
                "Image": "quay.io/coreos/kube-state-metrics:v1.9.7"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "vEV7r3YakgCuImcNR3xE8bYBIk3qdT",
            "properties": {
                "ServiceAccount": "aiops-promtail",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "omPX49h52IZ0FCMs9UfucTYW1puzDH",
            "title": null,
            "target": "Gs9DrHvlqZsvERZrUzMT5DD1LCwF8n",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/etc/promtail"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "omPX49h52IZ0FCMs9UfucTYW1puzDH",
            "title": null,
            "target": "t3Ray6wBxYHOj9gBwJCZstVHirYM3c",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/run/promtail"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "omPX49h52IZ0FCMs9UfucTYW1puzDH",
            "title": null,
            "target": "ddh4TzzWGi1UDRqeSbORA0EkcxZh8L",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/lib/docker/containers"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "omPX49h52IZ0FCMs9UfucTYW1puzDH",
            "title": null,
            "target": "vFFKRc4SVYIj8yNCpgyG24DodM4U1E",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/log/pods"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "omPX49h52IZ0FCMs9UfucTYW1puzDH",
            "title": null,
            "target": "VuNC4sqCNuZqJMNVzeSnp8A83TeQUe",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "vEV7r3YakgCuImcNR3xE8bYBIk3qdT",
            "title": null,
            "target": "omPX49h52IZ0FCMs9UfucTYW1puzDH",
            "properties": {
                "RestartCount": "promtail",
                "Ready": "true",
                "Image": "grafana/promtail:2.1.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "BF9F0ZNUsQJgQnig6jIionS0pqPD1N",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "0EPwMF1DnW0fqI7duVZ2G3N8i8qm07",
            "title": null,
            "target": "3kfK1sjzjX0VszjxtR2JEVJDRqskYr",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/etc/alertmanager"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "0EPwMF1DnW0fqI7duVZ2G3N8i8qm07",
            "title": null,
            "target": "hC7n4HTyYU4Yq9bWQQHHpaw5sOVPmb",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/etc/alertmanager-templates"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "0EPwMF1DnW0fqI7duVZ2G3N8i8qm07",
            "title": null,
            "target": "T2uGWCsamm5OVzoK1mcYgLwOzI4GSX",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/alertmanager"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "0EPwMF1DnW0fqI7duVZ2G3N8i8qm07",
            "title": null,
            "target": "t3dVuUZRFKST6PG2PoenzfFS8fJudz",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "BF9F0ZNUsQJgQnig6jIionS0pqPD1N",
            "title": null,
            "target": "0EPwMF1DnW0fqI7duVZ2G3N8i8qm07",
            "properties": {
                "RestartCount": "alertmanager",
                "Ready": "true",
                "Image": "prom/alertmanager:v0.19.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "aqYsKOKja9KOHyoEVWMIGYho7XGpob",
            "properties": {
                "ServiceAccount": "metricbeat-metricbeat",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "mQkDTfMLYZ3wQXvmLv7YwAPi0GAGIW",
            "title": null,
            "target": "AFFAIac3Qn2LTTAjcgP3c97Mwsdn1W",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/usr/share/metricbeat/metricbeat.yml"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "mQkDTfMLYZ3wQXvmLv7YwAPi0GAGIW",
            "title": null,
            "target": "A2ZVuESSKrC9gJWEuys40jzEmAmEte",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/usr/share/metricbeat/data"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "mQkDTfMLYZ3wQXvmLv7YwAPi0GAGIW",
            "title": null,
            "target": "qHMC5EP8AJQF5xdV0mTrOhhCQgd03k",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/docker.sock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "mQkDTfMLYZ3wQXvmLv7YwAPi0GAGIW",
            "title": null,
            "target": "DDSQ42vYzM2qRUypeqAro85OsQIcXg",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/hostfs/proc"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "mQkDTfMLYZ3wQXvmLv7YwAPi0GAGIW",
            "title": null,
            "target": "X8pCxOKhdj3gGEnLztPpLo74R0wYgv",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/hostfs/sys/fs/cgroup"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "mQkDTfMLYZ3wQXvmLv7YwAPi0GAGIW",
            "title": null,
            "target": "3uQptPFAJjv8UqfpvE6Co47o7RIMqA",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "aqYsKOKja9KOHyoEVWMIGYho7XGpob",
            "title": null,
            "target": "mQkDTfMLYZ3wQXvmLv7YwAPi0GAGIW",
            "properties": {
                "RestartCount": "metricbeat",
                "Ready": "false",
                "Image": "docker.elastic.co/beats/metricbeat:7.15.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "EVSTsfW69llZTaatRqLF0ygxSleCLn",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "WDMN4Br859U1hMj155Ga7E62SFPDOr",
            "title": null,
            "target": "0qZyVgKFqzUrw2ldLratyc9KtKcZpr",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/host/sys"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "WDMN4Br859U1hMj155Ga7E62SFPDOr",
            "title": null,
            "target": "xHOPafApDQUqvDjtIoZjvsXe6ic1fO",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/host/root"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "WDMN4Br859U1hMj155Ga7E62SFPDOr",
            "title": null,
            "target": "pEIT4EMhCGAEstnVJdVXo9ZE7A6bs4",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "EVSTsfW69llZTaatRqLF0ygxSleCLn",
            "title": null,
            "target": "WDMN4Br859U1hMj155Ga7E62SFPDOr",
            "properties": {
                "RestartCount": "node-exporter",
                "Ready": "true",
                "Image": "prom/node-exporter"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "FKBZ3BWTf2npvBlgB2YpLtmdYmS7p0",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-monitoring"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "FauWICcnGrkmb9IKPEVNhfEGIn6APG",
            "title": null,
            "target": "HUc1S9BR6jEBhpko4QZP1mc57mQLQs",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/etc/prometheus/"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "FauWICcnGrkmb9IKPEVNhfEGIn6APG",
            "title": null,
            "target": "SjHpAORDe0hXF1icjO6OcNlKwKxgxu",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/prometheus/"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "FauWICcnGrkmb9IKPEVNhfEGIn6APG",
            "title": null,
            "target": "K1fIPsVEnlfEMAAmTUwBj0AB5hNb2g",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "FKBZ3BWTf2npvBlgB2YpLtmdYmS7p0",
            "title": null,
            "target": "FauWICcnGrkmb9IKPEVNhfEGIn6APG",
            "properties": {
                "RestartCount": "prometheus",
                "Ready": "true",
                "Image": "prom/prometheus"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "8Kc6WvJ4G6DzDEARtO7O6pEyPsrSOi",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-qa"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "E3GP9KXaGVM6to3l0K6QYVMsShbORU",
            "title": null,
            "target": "IiukjJ2RixWWiEqDwegrxSgewky9yO",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "8Kc6WvJ4G6DzDEARtO7O6pEyPsrSOi",
            "title": null,
            "target": "E3GP9KXaGVM6to3l0K6QYVMsShbORU",
            "properties": {
                "RestartCount": "alert-dev",
                "Ready": "true",
                "Image": "matilda1/aiops:qa-alert-v4"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "oa6eE2W9iJoDZRSmtapH904u0hmWnZ",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-qa"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Qi2znH0cVo8V5Kn3gqR8Uw52XHeZ5U",
            "title": null,
            "target": "GtLDsloed0Ik0f59Hn0pVlNdTIwMwM",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "oa6eE2W9iJoDZRSmtapH904u0hmWnZ",
            "title": null,
            "target": "Qi2znH0cVo8V5Kn3gqR8Uw52XHeZ5U",
            "properties": {
                "RestartCount": "backend",
                "Ready": "true",
                "Image": "matilda1/aiops:qa-bk-v3"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "9BcRvn8FwDw83PLYlACiLIrrNQRl7F",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-qa"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "iyDMi1TZNow9NZaVlz0mKGNRORNaP6",
            "title": null,
            "target": "oMLVKPWIbEybKWDLqtSdwUdX0gvnUr",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "9BcRvn8FwDw83PLYlACiLIrrNQRl7F",
            "title": null,
            "target": "iyDMi1TZNow9NZaVlz0mKGNRORNaP6",
            "properties": {
                "RestartCount": "keycloak",
                "Ready": "true",
                "Image": "quay.io/keycloak/keycloak:10.0.1"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "nLxPKdPCVhsnUDH5LpugpVDdkbZbBw",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-qa"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "IiLMCsaKsbS6haaJEWOQ4OJOPC48SU",
            "title": null,
            "target": "V7nR1UUedp2VWFuPxGM1yJ5Afv6pcQ",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "nLxPKdPCVhsnUDH5LpugpVDdkbZbBw",
            "title": null,
            "target": "IiLMCsaKsbS6haaJEWOQ4OJOPC48SU",
            "properties": {
                "RestartCount": "frontend",
                "Ready": "true",
                "Image": "matilda1/aiops:qa-ui-v5"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "K0MQQs7BD9gqwIFuf3qj3p7Mx4K6sj",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-qa"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RlSbnzSy3ll9ZKCDUysuR7hIwbmiQO",
            "title": null,
            "target": "wwUe10lIGKB8ofKxXGOq5SSkKQn91q",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "K0MQQs7BD9gqwIFuf3qj3p7Mx4K6sj",
            "title": null,
            "target": "RlSbnzSy3ll9ZKCDUysuR7hIwbmiQO",
            "properties": {
                "RestartCount": "um",
                "Ready": "true",
                "Image": "matilda1/aiops:qa-um-v4"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "h4Y8T3y5c3Ot1065l0fgqNueW3vrwF",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-shell"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "G3SN2bGbWVZjUjUrHxsFvdamvJVkIF",
            "title": null,
            "target": "eX6GaKl77NgvHxJfKEQBmKqPXi8ngV",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/application.properties"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "G3SN2bGbWVZjUjUrHxsFvdamvJVkIF",
            "title": null,
            "target": "kwTHi7IIlfa6f7Bz9pozQUYKQe4Cyz",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/logging.xml"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "G3SN2bGbWVZjUjUrHxsFvdamvJVkIF",
            "title": null,
            "target": "Kda865jfFgEsjuQut0rCxx2sUEsxGd",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/accountdetails.json"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "G3SN2bGbWVZjUjUrHxsFvdamvJVkIF",
            "title": null,
            "target": "YKBnNkfrD82r33HgnTfoyPvJR81UHe",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/namingpattern.json"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "G3SN2bGbWVZjUjUrHxsFvdamvJVkIF",
            "title": null,
            "target": "Wb9OMhaJFL4P3NyHDAMKyZPKaIsYaP",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/favorites.json"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "G3SN2bGbWVZjUjUrHxsFvdamvJVkIF",
            "title": null,
            "target": "IW9IUAz9tCCPET1hq3aUtZ3klPXt8B",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/log/matilda"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "G3SN2bGbWVZjUjUrHxsFvdamvJVkIF",
            "title": null,
            "target": "jLFpN1RVGjjH7ByNV0Et803RNgNXN3",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "h4Y8T3y5c3Ot1065l0fgqNueW3vrwF",
            "title": null,
            "target": "G3SN2bGbWVZjUjUrHxsFvdamvJVkIF",
            "properties": {
                "RestartCount": "matilda-management",
                "Ready": "true",
                "Image": "matilda1/management:v2cors.7"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "xPWjpKMm6UBGpPHbsRJyFowChfo8pO",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "aiops-shell"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "zAx2sh2oNcQwpsTgCzwZO436yaZAoP",
            "title": null,
            "target": "lP3fOHdLVTR3LN3JihrrNzQwQdZFZh",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/etc/nginx/nginx.conf"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "zAx2sh2oNcQwpsTgCzwZO436yaZAoP",
            "title": null,
            "target": "8IdN1Y79TiIyhNVSwzFlD6WXV94PFG",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "xPWjpKMm6UBGpPHbsRJyFowChfo8pO",
            "title": null,
            "target": "zAx2sh2oNcQwpsTgCzwZO436yaZAoP",
            "properties": {
                "RestartCount": "nginx",
                "Ready": "true",
                "Image": "nginx"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "qAysSjzr8AV51xPaBGSncvyymC6NbS",
            "properties": {
                "ServiceAccount": "aws-node",
                "NameSpace": "kube-system"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Te5PAUo6mTMxoDjVNYh9D8qc0G5bGy",
            "title": null,
            "target": "svPQg4SHpdJfPIaFYFUtSbhNIbcdFH",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/host/opt/cni/bin"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Te5PAUo6mTMxoDjVNYh9D8qc0G5bGy",
            "title": null,
            "target": "5KNBTED2SOfcjc9FgvKqKsKNo2qihu",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/host/etc/cni/net.d"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Te5PAUo6mTMxoDjVNYh9D8qc0G5bGy",
            "title": null,
            "target": "puYNwo5tGUrfjUTiXgpYZMyDAOPdx8",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/host/var/log/aws-routed-eni"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Te5PAUo6mTMxoDjVNYh9D8qc0G5bGy",
            "title": null,
            "target": "wFNzI1c7EYs9AOFIv7L7QozbbJlu7r",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/run/aws-node"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Te5PAUo6mTMxoDjVNYh9D8qc0G5bGy",
            "title": null,
            "target": "W8I2yj8FpCcZKm9r7eOG2iA1vT7vSQ",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/run/dockershim.sock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Te5PAUo6mTMxoDjVNYh9D8qc0G5bGy",
            "title": null,
            "target": "G5leV5PZ1DSMOyt5bqDbruUoOTDEtv",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/run/xtables.lock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "Te5PAUo6mTMxoDjVNYh9D8qc0G5bGy",
            "title": null,
            "target": "EoNtmCHGXKFySEqn85br8hEmTow48r",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "qAysSjzr8AV51xPaBGSncvyymC6NbS",
            "title": null,
            "target": "Te5PAUo6mTMxoDjVNYh9D8qc0G5bGy",
            "properties": {
                "RestartCount": "aws-node",
                "Ready": "true",
                "Image": "602401143452.dkr.ecr.us-east-2.amazonaws.com/amazon-k8s-cni:v1.7.5-eksbuild.1"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "08o07bw0FYGPFB0FejssxOk73okrwz",
            "properties": {
                "ServiceAccount": "coredns",
                "NameSpace": "kube-system"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "8vM56ARr83YEU2SRQNEuGvDgjXjGwK",
            "title": null,
            "target": "Wu74Zf51QA3eEc3S5BirdK6f63ZbEX",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/etc/coredns"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "8vM56ARr83YEU2SRQNEuGvDgjXjGwK",
            "title": null,
            "target": "LcY7bG9WDtkGJZCtjuhznByWIu6Sbz",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/tmp"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "8vM56ARr83YEU2SRQNEuGvDgjXjGwK",
            "title": null,
            "target": "0liGUi0mqXgyRqy6GVJrCCrpIwZxHb",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "08o07bw0FYGPFB0FejssxOk73okrwz",
            "title": null,
            "target": "8vM56ARr83YEU2SRQNEuGvDgjXjGwK",
            "properties": {
                "RestartCount": "coredns",
                "Ready": "true",
                "Image": "602401143452.dkr.ecr.us-east-2.amazonaws.com/eks/coredns:v1.7.0-eksbuild.1"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "HJTYHez6mjXxM26o91wk30IZ5jJoiE",
            "properties": {
                "ServiceAccount": "coredns",
                "NameSpace": "kube-system"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "aGbWO3JzTcWmLGKNeJL6yCMQjEDmkr",
            "title": null,
            "target": "aCE7P5ZHSiGUhfDEz9ChT1XTcC3aCo",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/etc/coredns"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "aGbWO3JzTcWmLGKNeJL6yCMQjEDmkr",
            "title": null,
            "target": "y0LIfOcPQnqa4jQvfRHGiznnbf01s3",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/tmp"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "aGbWO3JzTcWmLGKNeJL6yCMQjEDmkr",
            "title": null,
            "target": "uJIjQ8XfXgBCrpg1lo2yrRzzh8dkfZ",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "HJTYHez6mjXxM26o91wk30IZ5jJoiE",
            "title": null,
            "target": "aGbWO3JzTcWmLGKNeJL6yCMQjEDmkr",
            "properties": {
                "RestartCount": "coredns",
                "Ready": "true",
                "Image": "602401143452.dkr.ecr.us-east-2.amazonaws.com/eks/coredns:v1.7.0-eksbuild.1"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "pMTqFYyrYO0k6yrHay5eVaqhPilEn5",
            "properties": {
                "ServiceAccount": "kube-proxy",
                "NameSpace": "kube-system"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "rC0J7z79wa0KvgECCpHWzlLkHL6PGt",
            "title": null,
            "target": "6y82teAyo3Tck5PWlJFstf6VmLPKYH",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/log"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "rC0J7z79wa0KvgECCpHWzlLkHL6PGt",
            "title": null,
            "target": "aMry3tDPXEBA6YWTOxHtcMTGzOIf7c",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/run/xtables.lock"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "rC0J7z79wa0KvgECCpHWzlLkHL6PGt",
            "title": null,
            "target": "EPqEqUegC6s3yPRavl5PJUXLgNr79T",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/lib/modules"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "rC0J7z79wa0KvgECCpHWzlLkHL6PGt",
            "title": null,
            "target": "IogYyR7XmKKl0Of8VAbpT9AfD0KgYg",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/lib/kube-proxy/"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "rC0J7z79wa0KvgECCpHWzlLkHL6PGt",
            "title": null,
            "target": "juL13oZiBUZ23QCAK5GdACz3c4t0sA",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/var/lib/kube-proxy-config/"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "rC0J7z79wa0KvgECCpHWzlLkHL6PGt",
            "title": null,
            "target": "esb3fJ527ouu1q5G2Wb8ZP7UTxFMh6",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "pMTqFYyrYO0k6yrHay5eVaqhPilEn5",
            "title": null,
            "target": "rC0J7z79wa0KvgECCpHWzlLkHL6PGt",
            "properties": {
                "RestartCount": "kube-proxy",
                "Ready": "true",
                "Image": "602401143452.dkr.ecr.us-east-2.amazonaws.com/eks/kube-proxy:v1.18.8-eksbuild.1"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "PppH6Duo2DJaseolG4hOYmByeNt8HD",
            "properties": {
                "ServiceAccount": "metrics-server",
                "NameSpace": "kube-system"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "E0tl5x8LcnHNhdhCLPRhDx8SCnJna6",
            "title": null,
            "target": "kNqDeriSOpMY3jNLRBsOJaYYKFLFOJ",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/tmp"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "E0tl5x8LcnHNhdhCLPRhDx8SCnJna6",
            "title": null,
            "target": "aBujjR3852ObXSYYMUvWJL4X4HDIP7",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "PppH6Duo2DJaseolG4hOYmByeNt8HD",
            "title": null,
            "target": "E0tl5x8LcnHNhdhCLPRhDx8SCnJna6",
            "properties": {
                "RestartCount": "metrics-server",
                "Ready": "true",
                "Image": "k8s.gcr.io/metrics-server/metrics-server:v0.4.2"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "L4d8dn4n0Sp7yofn49Wj5jwJO3VfNr",
            "properties": {
                "ServiceAccount": "kubernetes-dashboard",
                "NameSpace": "kubernetes-dashboard"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "oGOKBg9hhf7NOYFbUYdoM5sPdho0WO",
            "title": null,
            "target": "Czh9kBd4rnSWqoEBHi4U3eLAuWMViS",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/tmp"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "oGOKBg9hhf7NOYFbUYdoM5sPdho0WO",
            "title": null,
            "target": "w7kSVI2cpDirSo8DA7ZT6Spjol5PYN",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "L4d8dn4n0Sp7yofn49Wj5jwJO3VfNr",
            "title": null,
            "target": "oGOKBg9hhf7NOYFbUYdoM5sPdho0WO",
            "properties": {
                "RestartCount": "dashboard-metrics-scraper",
                "Ready": "true",
                "Image": "kubernetesui/metrics-scraper:v1.0.6"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "lC0CHolHsLBhasMiPs2d2AwviK5hIO",
            "properties": {
                "ServiceAccount": "kubernetes-dashboard",
                "NameSpace": "kubernetes-dashboard"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "IdHnHhyGklVQ2yohLs9O0NWmr5wW8y",
            "title": null,
            "target": "Je9fplgSn1hlAblT1cxMKrDCSFFJ0j",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/certs"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "IdHnHhyGklVQ2yohLs9O0NWmr5wW8y",
            "title": null,
            "target": "sUfk0jufxfgcURywXnxa9dYIWgWkne",
            "properties": {
                "ReadOnly": "false",
                "Mount Path": "/tmp"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "IdHnHhyGklVQ2yohLs9O0NWmr5wW8y",
            "title": null,
            "target": "8TNf7STGawI2rJyG0ulHXWWh3dlZed",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "lC0CHolHsLBhasMiPs2d2AwviK5hIO",
            "title": null,
            "target": "IdHnHhyGklVQ2yohLs9O0NWmr5wW8y",
            "properties": {
                "RestartCount": "kubernetes-dashboard",
                "Ready": "true",
                "Image": "kubernetesui/dashboard:v2.2.0"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "RUVqqYuGFh8cHRPz9FZ9OZiKWzBvUH",
            "title": null,
            "target": "GO5uaNSQKIXw3BjwKDUwNJDZdphfBT",
            "properties": {
                "ServiceAccount": "default",
                "NameSpace": "redis"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "ftZBMOuuryDvU7p26WQqKHiAywmvrX",
            "title": null,
            "target": "ddrGitCDeNL6xDTzHB9f5uJVGixNFR",
            "properties": {
                "ReadOnly": "true",
                "Mount Path": "/var/run/secrets/kubernetes.io/serviceaccount"
            },
            "collapsed": false,
            "collapsing": 0
        },
        {
            "source": "GO5uaNSQKIXw3BjwKDUwNJDZdphfBT",
            "title": null,
            "target": "ftZBMOuuryDvU7p26WQqKHiAywmvrX",
            "properties": {
                "RestartCount": "master",
                "Ready": "true",
                "Image": "k8s.gcr.io/redis:e2e"
            },
            "collapsed": false,
            "collapsing": 0
        }
    ]
};
  /**
   * server_type ==> group
   */
  discoveryData = {
    "nodes": [
        {
            "id": "35.83.7.27",
            "host_id": 7848,
            "ip": "35.83.7.27",
            "name": "WIN-R6LKVQ6MT9H",
            "category": 0,
            "type": "Database",
            "group": "Database",
            "status": "non-critical",
            "properties": {
                "Name": "WIN-R6LKVQ6MT9H",
                "IP Address": "35.83.7.27",
                "Service Running": "Yes",
                "Avg CPU Utilization": "1.0 %",
                "Avg Memory Utilization": "82.68 %",
                "Avg Storage Utilization": "70.08 %"
            }
        },
        {
            "id": "129.159.106.54",
            "host_id": 7869,
            "ip": "129.159.106.54",
            "name": "upstart-backend",
            "category": 3,
            "type": "Infra",
            "group": "Infra",
            "status": "non-critical",
            "properties": {
                "Name": "upstart-backend",
                "IP Address": "129.159.106.54",
                "Service Running": "No",
                "Avg CPU Utilization": "0.43 %",
                "Avg Memory Utilization": "8.77 %",
                "Avg Storage Utilization": "11.0 %"
            }
        },
        {
            "id": "141.101.196.233",
            "host_id": null,
            "ip": "141.101.196.233",
            "name": "141.101.196.233",
            "category": 4,
            "type": "Unknown",
            "group": "Unknown",
            "status": "non-critical",
            "properties": {
                "Name": "141.101.196.233",
                "IP Address": "141.101.196.233",
                "Service Running": "No",
                "Avg CPU Utilization": "Not Defined",
                "Avg Memory Utilization": "Not Defined",
                "Avg Storage Utilization": "Not Defined"
            }
        },
        {
            "id": "192.241.206.162",
            "host_id": null,
            "ip": "192.241.206.162",
            "name": "192.241.206.162",
            "category": 4,
            "type": "Unknown",
            "group": "Unknown",
            "status": "non-critical",
            "properties": {
                "Name": "192.241.206.162",
                "IP Address": "192.241.206.162",
                "Service Running": "No",
                "Avg CPU Utilization": "Not Defined",
                "Avg Memory Utilization": "Not Defined",
                "Avg Storage Utilization": "Not Defined"
            }
        },
        {
            "id": "44.242.5.184",
            "host_id": 7870,
            "ip": "44.242.5.184",
            "name": "mui",
            "category": 2,
            "type": "Web Server",
            "group": "Web Server",
            "status": "non-critical",
            "properties": {
                "Name": "mui",
                "IP Address": "44.242.5.184",
                "Service Running": "Yes",
                "Avg CPU Utilization": "0.51 %",
                "Avg Memory Utilization": "10.79 %",
                "Avg Storage Utilization": "37.29 %"
            }
        },
        {
            "id": "47.185.207.136",
            "host_id": null,
            "ip": "47.185.207.136",
            "name": "47.185.207.136",
            "category": 4,
            "type": "Unknown",
            "group": "Unknown",
            "status": "non-critical",
            "properties": {
                "Name": "47.185.207.136",
                "IP Address": "47.185.207.136",
                "Service Running": "No",
                "Avg CPU Utilization": "Not Defined",
                "Avg Memory Utilization": "Not Defined",
                "Avg Storage Utilization": "Not Defined"
            }
        },
        {
            "id": "152.70.202.185",
            "host_id": 7868,
            "ip": "152.70.202.185",
            "name": "upstart-database",
            "category": 0,
            "type": "Database",
            "group": "Database",
            "status": "non-critical",
            "properties": {
                "Name": "upstart-database",
                "IP Address": "152.70.202.185",
                "Service Running": "Yes",
                "Avg CPU Utilization": "0.22 %",
                "Avg Memory Utilization": "6.94 %",
                "Avg Storage Utilization": "12.0 %"
            }
        },
        {
            "id": "35.83.33.27",
            "host_id": 7878,
            "ip": "35.83.33.27",
            "name": "ip-172-31-24-91",
            "category": 0,
            "type": "Database",
            "group": "Database",
            "status": "non-critical",
            "properties": {
                "Name": "ip-172-31-24-91",
                "IP Address": "35.83.33.27",
                "Service Running": "Yes",
                "Avg CPU Utilization": "0.13 %",
                "Avg Memory Utilization": "23.29 %",
                "Avg Storage Utilization": "27.0 %"
            }
        }
    ],
    "links": [
        {
            "id": "link_id_2",
            "name": "141.101.196.233 - upstart-backend",
            "source": "141.101.196.233",
            "target": "129.159.106.54",
            "status": "Non-critical",
            "properties": {
                "Source Port": "random_port",
                "Source Service": "-",
                "Target Port": "8080",
                "Target Service": "java",
                "Criticality": "Non-critical"
            }
        },
        {
            "id": "link_id_3",
            "name": "192.241.206.162 - upstart-backend",
            "source": "192.241.206.162",
            "target": "129.159.106.54",
            "status": "Non-critical",
            "properties": {
                "Source Port": "random_port",
                "Source Service": "-",
                "Target Port": "8080",
                "Target Service": "java",
                "Criticality": "Non-critical"
            }
        },
        {
            "id": "link_id_4",
            "name": "mui - upstart-backend",
            "source": "44.242.5.184",
            "target": "129.159.106.54",
            "status": "Non-critical",
            "properties": {
                "Source Port": "random_port",
                "Source Service": "-",
                "Target Port": "8080",
                "Target Service": "java",
                "Criticality": "Non-critical"
            }
        },
        {
            "id": "link_id_5",
            "name": "47.185.207.136 - upstart-backend",
            "source": "47.185.207.136",
            "target": "129.159.106.54",
            "status": "Non-critical",
            "properties": {
                "Source Port": "random_port",
                "Source Service": "-",
                "Target Port": "8080",
                "Target Service": "java",
                "Criticality": "Non-critical"
            }
        },
        {
            "id": "link_id_6",
            "name": "upstart-backend - upstart-database",
            "source": "129.159.106.54",
            "target": "152.70.202.185",
            "status": "Non-critical",
            "properties": {
                "Source Port": "random_port",
                "Source Service": "java",
                "Target Port": "27017",
                "Target Service": "-",
                "Criticality": "Non-critical"
            }
        }
    ],
    "categories": [
        {
            "name": "Database Server"
        },
        {
            "name": "Application Server"
        },
        {
            "name": "Web Server"
        },
        {
            "name": "Infrastructure Server"
        },
        {
            "name": "Unknown"
        }
    ]
};
  treedata = {
    id: '5ebb0404407ab076bd143526',
    name: 'EKUY',
    type: 'Application',
    state: 'Active',
    health: 'critical',
    properties: { Name: 'AIOps-QA-1', VSAD: 'EKUY', Status: 'critical' },
    requiredAction: 'Active',
    children: [
      {
        name: 'Hosts',
        type: 'instances',
        health: 'ok',
        properties: { 'Number of hosts': '8' },
        requiredAction: 'Expired',
        children: [
          {
            id: '5fa08d96e8d77c692a26255b',
            name: '192.168.20.202',
            hostName: '192.168.20.202',
            type: 'instances',
            health: 'OK',
            discoveryStatus: 'In Progress',
            properties: {
              'IP Address': '192.168.20.202',
              'Operating System': 'Unknown ',
              'Host Name': '192.168.20.202',
            },
          },
          {
            id: '612d4d5f48dd854dda01237b',
            name: '3.18.214.225',
            hostName: '3.18.214.225',
            type:'instances',
            health: 'OK',
            discoveryStatus: 'Not Discovered',
            properties: {
              'IP Address': '3.18.214.225',
              'Operating System': 'Unknown ',
              'Host Name': '3.18.214.225',
            },
            severity: 'medium',
          },
          {
            id: '5fa00099e8d77c692a262536',
            name: 'Cent OS 7',
            hostName: 'Cent OS 7',
            type:'instances',
            health: 'OK',
            discoveryStatus: 'In Progress',
            properties: {
              'IP Address': '192.168.20.204',
              'Operating System': 'Unknown ',
              'Host Name': 'Cent OS 7',
            },
            severity: 'medium',
          },
          {
            id: '6050ca88d8d88f250db9e7ef',
            name: 'CentOS',
            hostName: 'CentOS',
            type:'instances',
            health: 'OK',
            discoveryStatus: 'In Progress',
            properties: {
              'User Severity': 'medium',
              'IP Address': '192.168.20.215',
              'Operating System': 'Unknown ',
              'Host Name': 'CentOS',
            },
            severity: 'medium',
          },
          {
            id: '60f7063b309f24275b3f4cb5',
            name: 'Ubuntu',
            hostName: 'Ubuntu',
            type:'instances',
            health: 'OK',
            discoveryStatus: 'Not Discovered',
            properties: {
              'IP Address': '192.168.10.23',
              'Operating System': 'Unknown ',
              'Host Name': 'Ubuntu',
            },
            severity: 'medium',
          },
          {
            id: '5fa09524bf1f0528488737e4',
            name: 'WIN-BNQLBIS6TPP',
            hostName: 'WIN-BNQLBIS6TPP',
            type:'instances',
            health: 'OK',
            discoveryStatus: 'success',
            properties: {
              'IP Address': '192.168.20.187',
              'Operating System': 'Windows 6.3.9600 N/A Build 9600',
              'Host Name': 'WIN-BNQLBIS6TPP',
            },
          },
          {
            id: '60f706ef0f176123ca3bff95',
            name: 'Windows',
            hostName: 'Windows',
            type:'instances',
            health: 'OK',
            discoveryStatus: 'Not Discovered',
            properties: {
              'User Severity': 'low',
              'IP Address': '192.168.30.22',
              'Operating System': 'Unknown ',
              'Host Name': 'Windows',
            },
            severity: 'low',
          },
          {
            id: '5fa0632ce8d77c692a262556',
            name: 'cnet-ubuntu14',
            hostName: 'cnet-ubuntu14',
            type:'instances',
            health: 'OK',
            discoveryStatus: 'success',
            properties: {
              'IP Address': '192.168.20.207',
              'Operating System': 'Ubuntu 14.04',
              'Host Name': 'cnet-ubuntu14',
            },
            severity: 'medium',
          },
        ],
      },
      {
        name: 'Services',
        type: 'Service',
        health: 'ok',
        properties: { 'Number of services': '3' },
        requiredAction: 'Expires Soon',
        children: [
          { name: 'iis', type: 'Service' },
          { name: 'WebLogic', type: 'Service', health: 'ok' },
          {
            id: 'mssql',
            name: 'Mssql',
            type: 'mssql',
            health: 'ok',
            requiredAction: 'Not defined',
            children: [
              {
                id: '5fa0655abf1f0528488730c5',
                name: '44.231.36.16:3306?serverTimezone=UTC',
                hostName: '44.231.36.16:3306?serverTimezone=UTC',
                type: 'service',
                health: 'ok',
                discoveryStatus: 'Failed',
                properties: {
                  Status: 'ok',
                  'Master Host': '44.231.36.16:3306?serverTimezone=UTC',
                },
              },
            ],
          },
        ],
        derivedHealth: 'ok',
      },
      {
        name: 'Alerts',
        type: 'Alert',
        health: 'ok',
        properties: { 'Number of sources': '0' },
        children: [],
      },
    ],
  };

  serviceTree = {
    "name": "spring-mvc-example",
    "centerNode": true,
    "isExpand": true,
    "type": "app",
    health: "good",
    "requiredAction": "Active",
    "properties": {
      "Name": "spring-mvc-example"
    },
    "children": [
      {
        "name": "Infrastructure",
        "type": "Infrastructure",
        health: "good",
        "properties": {
          "name": "Infrastructure"
        },
        "children": [
          {
            "name": "WIN-R6LKVQ6MT9H",
            "type": "Windows",
            health: "good",
            "properties": {
              "Host": "WIN-R6LKVQ6MT9H",
              "IP": "35.83.7.27",
              "OS": "Windows Server 2012 R2 Standard",
              "requiredAction": "Not Defined",
              "Device Type": "compute",
              "Instance Type": "Virtual",
              "Domain": "WORKGROUP"
            }
          }
        ]
      },
      {
        "name": "Services",
        "type": "Service",
        health: "good",
        "properties": {
          "name": "Services"
        },
        "children": [
          {
            "name": "apache",
            "type": "Service",
            health: "good",
            "requiredAction": null,
            "properties": {
              "Service": "apache",
              "Version": "2.4.48",
              "Type": "Web Server",
              "Count": 1
            }
          },
          {
            "name": "iis",
            "type": "Service",
            health: "good",
            "requiredAction": "Expired",
            "properties": {
              "Service": "iis",
              "Version": "8.5",
              "Type": "Web Server",
              "Count": 1
            }
          },
          {
            "name": "tomcat",
            "type": "Service",
            health: "good",
            "requiredAction": null,
            "properties": {
              "Service": "tomcat",
              "Version": "8.5.69",
              "Type": "Web Server",
              "Count": 1
            }
          },
          {
            "name": "weblogic",
            "type": "Service",
            health: "good",
            "requiredAction": null,
            "properties": {
              "Service": "weblogic",
              "Version": "14.1.1.0.0",
              "Type": "Application Server",
              "Count": 1
            }
          }
        ]
      },
      {
        "name": "Database",
        "type": "Database",
        health: "good",
        "properties": {
          "name": "Database"
        },
        "children": [
          {
            "name": "mssql",
            "type": "Database",
            health: "good",
            "requiredAction": "Expiring Soon",
            "properties": {
              "Database": "mssql",
              "Version": "2014",
              "Port": "['1433']"
            }
          }
        ]
      }
    ]
  };
  tooltipOverflow
  assessmentTree={"taskId":1143,"name":"OperatingSystemEolDuration > 3 ","createDt":null,"plannedStartDt":"2021-11-18T18:54:08.000Z","plannedEndDt":null,"actualStartDt":null,"actualEndDt":null,"owner":null,"status":"defined","service":null,"action":"condition","payload":null,"output":null,"emailList":null,"emailStrategy":null,"source":null,"taskDependencyList":null,"stageId":265,"sourceChildWorkflowId":"0","trueTaskUiId":null,"falseTaskUiId":null,"conditionExpression":"OperatingSystemEolDuration > 3 ","relationshipType":null,"properties":{},"parentIdMap":null,"children":[{"taskId":1144,"name":"CpuUtilizationPercent >100","createDt":null,"plannedStartDt":"2021-11-18T18:54:08.000Z","plannedEndDt":null,"actualStartDt":null,"actualEndDt":null,"owner":null,"status":"defined","service":null,"action":"condition","payload":null,"output":null,"emailList":null,"emailStrategy":null,"source":null,"taskDependencyList":null,"stageId":265,"sourceChildWorkflowId":"0","trueTaskUiId":null,"falseTaskUiId":null,"conditionExpression":"CpuUtilizationPercent >100","relationshipType":"Yes","properties":{"id":1144,"name":"CpuUtilizationPercent >100","type":"Yes","value":"CpuUtilizationPercent >100","parameters":null},"parentIdMap":null,"children":[{"taskId":1166,"name":"Expired","createDt":null,"plannedStartDt":"2021-11-24T20:39:59.000Z","plannedEndDt":null,"actualStartDt":null,"actualEndDt":null,"owner":null,"status":"defined","service":null,"action":"result","payload":null,"output":null,"emailList":null,"emailStrategy":null,"source":null,"taskDependencyList":null,"stageId":265,"sourceChildWorkflowId":"0","trueTaskUiId":null,"falseTaskUiId":null,"conditionExpression":"Expired","relationshipType":"Yes","properties":{"id":1166,"name":"Expired","type":"Yes","value":"Expired","parameters":null},"parentIdMap":null,"children":[],"link":"Yes","id":"y0y3ta9ii","itemId":"_1onc160yp",health:"ok","type":"","state":"","linkProperties":{},"discoveryStatus":"Not Discovered","kids":[]},{"taskId":1167,"name":"Task 5","createDt":null,"plannedStartDt":"2021-11-24T20:39:59.000Z","plannedEndDt":null,"actualStartDt":null,"actualEndDt":null,"owner":null,"status":"defined","service":null,"action":"result","payload":null,"output":null,"emailList":null,"emailStrategy":null,"source":null,"taskDependencyList":null,"stageId":265,"sourceChildWorkflowId":"0","trueTaskUiId":null,"falseTaskUiId":null,"conditionExpression":null,"relationshipType":"No","properties":{"id":1167,"name":"Task 5","type":"No","value":"Task 5","parameters":null},"parentIdMap":null,"children":[],"link":"No","id":"b36ppi0rj","itemId":"_bxzhvjup5",health:"ok","type":"","state":"","linkProperties":{},"discoveryStatus":"Not Discovered","kids":[]}],"link":"Yes","id":"gwvxw2ldt","itemId":"_hgr39escd",health:"ok","type":"","state":"","linkProperties":{},"discoveryStatus":"Not Discovered","kids":[{"taskId":1166,"name":"Expired","createDt":null,"plannedStartDt":"2021-11-24T20:39:59.000Z","plannedEndDt":null,"actualStartDt":null,"actualEndDt":null,"owner":null,"status":"defined","service":null,"action":"result","payload":null,"output":null,"emailList":null,"emailStrategy":null,"source":null,"taskDependencyList":null,"stageId":265,"sourceChildWorkflowId":"0","trueTaskUiId":null,"falseTaskUiId":null,"conditionExpression":"Expired","relationshipType":"Yes","properties":{"id":1166,"name":"Expired","type":"Yes","value":"Expired","parameters":null},"parentIdMap":null,"children":[],"link":"Yes","id":"y0y3ta9ii","itemId":"_ue3v6ylew",health:"ok","type":"","state":"","linkProperties":{},"discoveryStatus":"Not Discovered","kids":[]},{"taskId":1167,"name":"Task 5","createDt":null,"plannedStartDt":"2021-11-24T20:39:59.000Z","plannedEndDt":null,"actualStartDt":null,"actualEndDt":null,"owner":null,"status":"defined","service":null,"action":"result","payload":null,"output":null,"emailList":null,"emailStrategy":null,"source":null,"taskDependencyList":null,"stageId":265,"sourceChildWorkflowId":"0","trueTaskUiId":null,"falseTaskUiId":null,"conditionExpression":null,"relationshipType":"No","properties":{"id":1167,"name":"Task 5","type":"No","value":"Task 5","parameters":null},"parentIdMap":null,"children":[],"link":"No","id":"b36ppi0rj","itemId":"_gkki0m8vn",health:"ok","type":"","state":"","linkProperties":{},"discoveryStatus":"Not Discovered","kids":[]}]},{"taskId":1145,"name":"expired","createDt":null,"plannedStartDt":"2021-11-18T18:54:08.000Z","plannedEndDt":null,"actualStartDt":null,"actualEndDt":null,"owner":null,"status":"defined","service":null,"action":"result","payload":null,"output":null,"emailList":null,"emailStrategy":null,"source":null,"taskDependencyList":null,"stageId":265,"sourceChildWorkflowId":"0","trueTaskUiId":null,"falseTaskUiId":null,"conditionExpression":"expired","relationshipType":"No","properties":{"id":1145,"name":"expired","type":"No","value":"expired","parameters":null},"parentIdMap":null,"children":[],"link":"No","id":"u4veoo7g7","itemId":"_322hdo21x",health:"ok","type":"","state":"","linkProperties":{},"discoveryStatus":"Not Discovered","kids":[]}],"link":"","id":"mbuvuw99w","itemId":"_3e0eblh3y",health:"ok","type":"","state":"","linkProperties":{},"discoveryStatus":"Not Discovered","kids":[{"taskId":1144,"name":"CpuUtilizationPercent >100","createDt":null,"plannedStartDt":"2021-11-18T18:54:08.000Z","plannedEndDt":null,"actualStartDt":null,"actualEndDt":null,"owner":null,"status":"defined","service":null,"action":"condition","payload":null,"output":null,"emailList":null,"emailStrategy":null,"source":null,"taskDependencyList":null,"stageId":265,"sourceChildWorkflowId":"0","trueTaskUiId":null,"falseTaskUiId":null,"conditionExpression":"CpuUtilizationPercent >100","relationshipType":"Yes","properties":{"id":1144,"name":"CpuUtilizationPercent >100","type":"Yes","value":"CpuUtilizationPercent >100","parameters":null},"parentIdMap":null,"children":[{"taskId":1166,"name":"Expired","createDt":null,"plannedStartDt":"2021-11-24T20:39:59.000Z","plannedEndDt":null,"actualStartDt":null,"actualEndDt":null,"owner":null,"status":"defined","service":null,"action":"result","payload":null,"output":null,"emailList":null,"emailStrategy":null,"source":null,"taskDependencyList":null,"stageId":265,"sourceChildWorkflowId":"0","trueTaskUiId":null,"falseTaskUiId":null,"conditionExpression":"Expired","relationshipType":"Yes","properties":{"id":1166,"name":"Expired","type":"Yes","value":"Expired","parameters":null},"parentIdMap":null,"children":[],"link":"Yes","id":"y0y3ta9ii","itemId":"_1onc160yp",health:"ok","type":"","state":"","linkProperties":{},"discoveryStatus":"Not Discovered","kids":[]},{"taskId":1167,"name":"Task 5","createDt":null,"plannedStartDt":"2021-11-24T20:39:59.000Z","plannedEndDt":null,"actualStartDt":null,"actualEndDt":null,"owner":null,"status":"defined","service":null,"action":"result","payload":null,"output":null,"emailList":null,"emailStrategy":null,"source":null,"taskDependencyList":null,"stageId":265,"sourceChildWorkflowId":"0","trueTaskUiId":null,"falseTaskUiId":null,"conditionExpression":null,"relationshipType":"No","properties":{"id":1167,"name":"Task 5","type":"No","value":"Task 5","parameters":null},"parentIdMap":null,"children":[],"link":"No","id":"b36ppi0rj","itemId":"_bxzhvjup5",health:"ok","type":"","state":"","linkProperties":{},"discoveryStatus":"Not Discovered","kids":[]}],"link":"Yes","id":"gwvxw2ldt","itemId":"_nlxyci57a",health:"ok","type":"","state":"","linkProperties":{},"discoveryStatus":"Not Discovered","kids":[{"taskId":1166,"name":"Expired","createDt":null,"plannedStartDt":"2021-11-24T20:39:59.000Z","plannedEndDt":null,"actualStartDt":null,"actualEndDt":null,"owner":null,"status":"defined","service":null,"action":"result","payload":null,"output":null,"emailList":null,"emailStrategy":null,"source":null,"taskDependencyList":null,"stageId":265,"sourceChildWorkflowId":"0","trueTaskUiId":null,"falseTaskUiId":null,"conditionExpression":"Expired","relationshipType":"Yes","properties":{"id":1166,"name":"Expired","type":"Yes","value":"Expired","parameters":null},"parentIdMap":null,"children":[],"link":"Yes","id":"y0y3ta9ii","itemId":"_ue3v6ylew",health:"ok","type":"","state":"","linkProperties":{},"discoveryStatus":"Not Discovered","kids":[]},{"taskId":1167,"name":"Task 5","createDt":null,"plannedStartDt":"2021-11-24T20:39:59.000Z","plannedEndDt":null,"actualStartDt":null,"actualEndDt":null,"owner":null,"status":"defined","service":null,"action":"result","payload":null,"output":null,"emailList":null,"emailStrategy":null,"source":null,"taskDependencyList":null,"stageId":265,"sourceChildWorkflowId":"0","trueTaskUiId":null,"falseTaskUiId":null,"conditionExpression":null,"relationshipType":"No","properties":{"id":1167,"name":"Task 5","type":"No","value":"Task 5","parameters":null},"parentIdMap":null,"children":[],"link":"No","id":"b36ppi0rj","itemId":"_gkki0m8vn",health:"ok","type":"","state":"","linkProperties":{},"discoveryStatus":"Not Discovered","kids":[]}]},{"taskId":1145,"name":"expired","createDt":null,"plannedStartDt":"2021-11-18T18:54:08.000Z","plannedEndDt":null,"actualStartDt":null,"actualEndDt":null,"owner":null,"status":"defined","service":null,"action":"result","payload":null,"output":null,"emailList":null,"emailStrategy":null,"source":null,"taskDependencyList":null,"stageId":265,"sourceChildWorkflowId":"0","trueTaskUiId":null,"falseTaskUiId":null,"conditionExpression":"expired","relationshipType":"No","properties":{"id":1145,"name":"expired","type":"No","value":"expired","parameters":null},"parentIdMap":null,"children":[],"link":"No","id":"u4veoo7g7","itemId":"_lu1rf74gg",health:"ok","type":"","state":"","linkProperties":{},"discoveryStatus":"Not Discovered","kids":[]}]};

  hideGroups = ['Unknown'];
  showGraph = true;
  constructor( private _appService: AppService) { }

  ngOnInit(): void 
  {
      this._appService.getData().subscribe(val =>{
          this.tooltipOverflow = val[0];
          console.log(this.tooltipOverflow)
      })
   }

  onLegendClik(data){
    this.hideGroups = data;
    // setTimeout(() => {
    //   this.showGraph = false;
    // }, 2000);
    // setTimeout(() => {
    //   this.showGraph = true;
    // }, 3000);
  }

  onNodeClick(data){
    console.log('onNodeClick : ',{data});
  }

  disctree= {
        "name": "Don't Delete Verified Ushakar:mENV2",
        "centerNode": true,
        "isExpand": true,
        "type": "app",
        health: "good",
        "requiredAction": "Active",
        "properties": {
            "Name": "Don't Delete Verified Ushakar:mENV2"
        },
        "children": [
            {
                "name": "Infrastructure",
                "type": "Infrastructure",
                health: "good",
                "properties": {
                    "name": "Infrastructure"
                },
                "children": [
                    {
                        "name": "mbackend1",
                        "type": "Ubuntu",
                        health: "good",
                        "properties": {
                            "Host": "mbackend1",
                            "IP": "44.228.183.148",
                            "OS": "Ubuntu 20.04",
                            "requiredAction": "Not Defined",
                            "Device Type": "compute",
                            "Instance Type": "virtual",
                            "Domain": "Not Defined"
                        }
                    },
                    {
                        "name": "mui",
                        "type": "Ubuntu",
                        health: "good",
                        "properties": {
                            "Host": "mui",
                            "IP": "44.242.5.184",
                            "OS": "Ubuntu 20.04",
                            "requiredAction": "Not Defined",
                            "Device Type": "compute",
                            "Instance Type": "virtual",
                            "Domain": "Not Defined"
                        }
                    }
                ]
            },
            {
                "name": "Services",
                "type": "Service",
                health: "good",
                "properties": {
                    "name": "Services"
                },
                "children": [
                    {
                        "name": "nginx",
                        "type": "Service",
                        health: "good",
                        "requiredAction": "Not Defined",
                        "children": [
                            {
                                "name": "Instances",
                                "children": [
                                    {
                                        "name": "Port:80",
                                        health: "good",
                                        "type": "Configuration"
                                    }
                                ],
                                health: "good",
                                "type": "Configuration"
                            },
                            {
                                "name": "FoldersList",
                                "children": [
                                    {
                                        "name": "/usr/share/nginx/modules/*.conf",
                                        health: "good",
                                        "type": "Configuration"
                                    },
                                    {
                                        "name": "/etc/nginx//etc/nginx/mime.types",
                                        health: "good",
                                        "type": "Configuration"
                                    },
                                    {
                                        "name": "/etc/nginx//etc/nginx/conf.d/*.conf",
                                        health: "good",
                                        "type": "Configuration"
                                    },
                                    {
                                        "name": "/usr/share/nginx/html/",
                                        health: "good",
                                        "type": "Configuration"
                                    }
                                ],
                                health: "good",
                                "type": "Configuration"
                            }
                        ],
                        "properties": {
                            "Service": "nginx",
                            "Version": "1.18.0",
                            "Type": "Web Server",
                            "Count": 1
                        }
                    },
                    {
                        "name": "springboot",
                        "type": "Service",
                        health: "good",
                        "requiredAction": "Not Defined",
                        "children": [
                            {
                                "name": "AppInfo",
                                "children": [
                                    {
                                        "name": " reactive-web",
                                        health: "good",
                                        "type": "Configuration"
                                    },
                                    {
                                        "port": "8097"
                                    }
                                ],
                                health: "good",
                                "type": "Configuration"
                            },
                            {
                                "name": "DataSource",
                                "children": [
                                    {
                                        "name": "MongoDb",
                                        "properties": {
                                            "ConnectionURL": "mongodb://nodejs:A4qzqyeF9CNeAufC@54.184.36.172:27017,52.24.3.106:27017,35.85.241.19:27017/local?retryWrites=false&authSource=admin&readPreference=primary&?replicaSet=matilda"
                                        },
                                        health: "good",
                                        "type": "Configuration"
                                    }
                                ],
                                health: "good",
                                "type": "Configuration"
                            },
                            {}
                        ],
                        "properties": {
                            "Service": "springboot",
                            "Version": null,
                            "Type": "Spring Boot",
                            "Count": 1
                        }
                    }
                ]
            }
        ]
    };

    // tooltipOverflow = {"id":"621eac2f9f9b9720711a4356","name":"ESQV","type":"Application","health":"critical","properties":{"Name":"Enterprise Solutions Platform","VSAD":"ESQV","Status":"critical","Alert Reason":"Application has alerts with critical status\nApplication has host alerts on 7 servers"},"children":[{"name":"Hosts","type":"Host","health":"warning","properties":{"Number of hosts":"10"},"children":[{"id":"621ec88f9f9b9720711a7d38","name":"63-21-73-50","hostName":"63-21-73-50","type":"Host","health":"CRITICAL","discoveryStatus":"Not Discovered","properties":{"IP Address":"63.21.73.50","Operating System":"CentOS 7.9.2009","Host Name":"63-21-73-50"},"severity":"medium"},{"id":"621ec88f9f9b9720711a7c20","name":"fldlpesqva001.verizon.com","hostName":"fldlpesqva001.verizon.com","type":"Host","health":"OK","discoveryStatus":"success","properties":{"IP Address":"166.50.187.147","Operating System":"RHEL 7","Host Name":"fldlpesqva001.verizon.com"},"severity":"medium"},{"id":"621ec88f9f9b9720711a7c1a","name":"fldlpesqva002.verizon.com","hostName":"fldlpesqva002.verizon.com","type":"Host","health":"OK","discoveryStatus":"In Progress","properties":{"IP Address":"166.50.187.73","Operating System":"RHEL 7","Host Name":"fldlpesqva002.verizon.com"},"severity":"medium"},{"id":"624f3e041a71d9568ff269fa","name":"fldlpesqva002.verizon.com","hostName":"fldlpesqva002.verizon.com","type":"Host","health":"OK","discoveryStatus":"success","properties":{"IP Address":"166.50.187.73","Operating System":"RHEL 7","Host Name":"fldlpesqva002.verizon.com"},"severity":"medium"},{"id":"621ec8aa9f9b9720711aa0ae","name":"tpalpesqva001.verizon.com","hostName":"tpalpesqva001.verizon.com","type":"Host","health":"CRITICAL","discoveryStatus":"success","properties":{"IP Address":"63.25.131.166","Operating System":"CentOS 7","Host Name":"tpalpesqva001.verizon.com"},"severity":"medium"},{"id":"621ec8aa9f9b9720711aa0b2","name":"tpalpesqva002.verizon.com","hostName":"tpalpesqva002.verizon.com","type":"Host","health":"CRITICAL","discoveryStatus":"success","properties":{"IP Address":"63.25.131.167","Operating System":"CentOS 7","Host Name":"tpalpesqva002.verizon.com"},"severity":"medium"},{"id":"621ec8aa9f9b9720711aa0ba","name":"tpalpesqva003.verizon.com","hostName":"tpalpesqva003.verizon.com","type":"Host","health":"CRITICAL","discoveryStatus":"success","properties":{"IP Address":"63.25.131.168","Operating System":"CentOS 7","Host Name":"tpalpesqva003.verizon.com"},"severity":"medium"},{"id":"621ec8aa9f9b9720711aa0b6","name":"tpalpesqva004.verizon.com","hostName":"tpalpesqva004.verizon.com","type":"Host","health":"CRITICAL","discoveryStatus":"success","properties":{"IP Address":"63.25.131.169","Operating System":"CentOS 7","Host Name":"tpalpesqva004.verizon.com"},"severity":"medium"},{"id":"621ec8aa9f9b9720711aa0be","name":"tpalpesqva005.verizon.com","hostName":"tpalpesqva005.verizon.com","type":"Host","health":"CRITICAL","discoveryStatus":"success","properties":{"IP Address":"63.25.131.170","Operating System":"CentOS 7","Host Name":"tpalpesqva005.verizon.com"},"severity":"medium"},{"id":"621ec8aa9f9b9720711aa0c2","name":"tpalpesqva006.verizon.com","hostName":"tpalpesqva006.verizon.com","type":"Host","health":"CRITICAL","discoveryStatus":"success","properties":{"IP Address":"63.25.131.171","Operating System":"CentOS 7","Host Name":"tpalpesqva006.verizon.com"},"severity":"medium"}]},{"name":"Services","type":"Service","health":"ok","properties":{"Number of services":"4"},"children":[{"name":"Apache","type":"Service","health":"ok","properties":{"Count":"2"},"children":[{"name":"null","type":"Domain","health":"ok","properties":{"Count":"4"},"children":[{"id":"621ec8aa9f9b9720711aa0b6","name":"63.25.131.169","type":"Host","health":"ok","discoveryStatus":"success","properties":{"Port":"Null","host":"63.25.131.169"}},{"id":"621ec8aa9f9b9720711aa0be","name":"63.25.131.170","type":"Host","health":"ok","discoveryStatus":"success","properties":{"Port":"Null","host":"63.25.131.170"}},{"id":"621ec8aa9f9b9720711aa0c2","name":"63.25.131.171","type":"Host","health":"ok","discoveryStatus":"success","properties":{"Port":"Null","host":"63.25.131.171"}},{"id":"621ec8aa9f9b9720711aa0ae","name":"63.25.131.166","type":"Host","health":"ok","discoveryStatus":"success","properties":{"Port":"Null","host":"63.25.131.166"}}]},{"name":"-C directives\u0000Invalid file path \u0000","type":"Domain","health":"ok","properties":{"Count":"2"},"children":[{"id":"621ec8aa9f9b9720711aa0ba","name":"63.25.131.168","type":"Host","health":"ok","discoveryStatus":"success","properties":{"Port":"Null","host":"63.25.131.168"}},{"id":"624f3e041a71d9568ff269fa","name":"166.50.187.73","type":"Host","health":"ok","discoveryStatus":"success","properties":{"Port":"Null","host":"166.50.187.73"}}]}]},{"id":"jboss","name":"Jboss","type":"jboss","health":"ok","children":[{"id":"621f9cc3ea9f9477de989a5d","name":"63.25.131.167","hostName":"63.25.131.167","type":"service","health":"ok","discoveryStatus":"Success","properties":{"Status":"ok","Master Host":"63.25.131.167","Version":"2.2"}},{"id":"621f9cb8ea9f9477de9894e1","name":"63.25.131.166","hostName":"63.25.131.166","type":"service","health":"ok","discoveryStatus":"Success","properties":{"Status":"ok","Master Host":"63.25.131.166"}},{"id":"621f9c89ea9f9477de98819d","name":"63.25.131.169","hostName":"63.25.131.169","type":"service","health":"ok","discoveryStatus":"Success","properties":{"Status":"ok","Master Host":"63.25.131.169"}},{"id":"621f9c8eea9f9477de988697","name":"63.25.131.168","hostName":"63.25.131.168","type":"service","health":"ok","discoveryStatus":"Success","properties":{"Status":"ok","Master Host":"63.25.131.168","Version":"2.2"}},{"id":"621f9d11ea9f9477de98a4da","name":"166.50.187.147","hostName":"166.50.187.147","type":"service","health":"ok","discoveryStatus":"Success","properties":{"Status":"ok","Master Host":"166.50.187.147","Version":"2.2"}},{"id":"621f9c93ea9f9477de988be5","name":"63.25.131.170","hostName":"63.25.131.170","type":"service","health":"ok","discoveryStatus":"Success","properties":{"Status":"ok","Master Host":"63.25.131.170"}},{"id":"621f9c96ea9f9477de989020","name":"63.25.131.171","hostName":"63.25.131.171","type":"service","health":"ok","discoveryStatus":"Success","properties":{"Status":"ok","Master Host":"63.25.131.171"}},{"id":"621ede7e9f9b9720712121a2","name":"166.50.187.73","hostName":"166.50.187.73","type":"service","health":"ok","discoveryStatus":"Success","properties":{"Status":"ok","Master Host":"166.50.187.73","Version":"2.2"}}]},{"name":"WebLogic","type":"Service","health":"ok","properties":{"Domain Count":"6"},"children":[{"id":"esp_timeout_comm","name":"esp_timeout_comm","type":"domain","health":"ok","properties":{"Domain name":"Esp_timeout_comm"},"children":[{"id":"fldlpesqva001","name":"AdminServer","type":"domainServer","health":"ok","properties":{"IPAddress":"fldlpesqva001","Domain":"Esp_timeout_comm","Port":"5001","Type":"Admin Server","Cluster":"AdminServer"},"children":[{"name":"Datasources","type":"datasources","health":"ok","properties":{"Type":"Datasources"},"children":[{"id":"ESPJtsDataSource","name":"ESPJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPJtsDataSource"}},{"id":"LynxJtsDataSource","name":"LynxJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"LynxJtsDataSource"}}]},{"name":"Queues","type":"queues","health":"ok","properties":{"Type":"Queues"},"children":[{"id":"AutoProgress","name":"AutoProgress","type":"queues","health":"ok","properties":{"Name":"AutoProgress"}},{"id":"BulkDQQueue","name":"BulkDQQueue","type":"queues","health":"ok","properties":{"Name":"BulkDQQueue"}},{"id":"BulkLoadQueue","name":"BulkLoadQueue","type":"queues","health":"ok","properties":{"Name":"BulkLoadQueue"}},{"id":"BulkMssOrderQueue","name":"BulkMssOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkMssOrderQueue"}},{"id":"BulkOrderProcessorQueue","name":"BulkOrderProcessorQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderProcessorQueue"}},{"id":"BulkOrderQueue","name":"BulkOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderQueue"}},{"id":"BulkRLCQueue","name":"BulkRLCQueue","type":"queues","health":"ok","properties":{"Name":"BulkRLCQueue"}},{"id":"CACustomDeleteUploadQueue","name":"CACustomDeleteUploadQueue","type":"queues","health":"ok","properties":{"Name":"CACustomDeleteUploadQueue"}},{"id":"CompareViewQueue","name":"CompareViewQueue","type":"queues","health":"ok","properties":{"Name":"CompareViewQueue"}},{"id":"E911UploadQueue","name":"E911UploadQueue","type":"queues","health":"ok","properties":{"Name":"E911UploadQueue"}},{"id":"HandoffQueue","name":"HandoffQueue","type":"queues","health":"ok","properties":{"Name":"HandoffQueue"}},{"id":"iConfigQueue","name":"iConfigQueue","type":"queues","health":"ok","properties":{"Name":"IConfigQueue"}},{"id":"MBQueue","name":"MBQueue","type":"queues","health":"ok","properties":{"Name":"MBQueue"}},{"id":"NetProQueue","name":"NetProQueue","type":"queues","health":"ok","properties":{"Name":"NetProQueue"}},{"id":"OrderActivityQueue","name":"OrderActivityQueue","type":"queues","health":"ok","properties":{"Name":"OrderActivityQueue"}},{"id":"PCQueue","name":"PCQueue","type":"queues","health":"ok","properties":{"Name":"PCQueue"}},{"id":"RapidMTOOrderQueue","name":"RapidMTOOrderQueue","type":"queues","health":"ok","properties":{"Name":"RapidMTOOrderQueue"}},{"id":"SiteMoveQueue","name":"SiteMoveQueue","type":"queues","health":"ok","properties":{"Name":"SiteMoveQueue"}},{"id":"SPIMQueue","name":"SPIMQueue","type":"queues","health":"ok","properties":{"Name":"SPIMQueue"}},{"id":"VDDSQueue","name":"VDDSQueue","type":"queues","health":"ok","properties":{"Name":"VDDSQueue"}},{"id":"VRDMigrationQueue","name":"VRDMigrationQueue","type":"queues","health":"ok","properties":{"Name":"VRDMigrationQueue"}},{"id":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer"}},{"id":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer"}}]}]},{"id":"fldlpesqva001","name":"esp_timeout_comm_srv_01","type":"domainServer","health":"ok","properties":{"IPAddress":"fldlpesqva001","Domain":"Esp_timeout_comm","Port":"5002","Type":"Managed Server","Cluster":"esp_timeout_comm_srv_01"},"children":[{"name":"Applications","type":"applications","health":"ok","properties":{"Type":"Applications"},"children":[{"name":"vzcare_web","type":"applications","health":"ok","properties":{"App name":"vzcare_web","path":"/esp/esp_projects/12c/esp_timeout_comm/autodeploy/vzcare_web.war","type":"war"},"children":[]},{"name":"my-team-task","type":"applications","health":"ok","properties":{"App name":"my-team-task","path":"/esp/esp_projects/12c/esp_timeout_comm/autodeploy/my-team-task.war","type":"war"},"children":[]},{"name":"esp-userAuth-service","type":"applications","health":"ok","properties":{"App name":"esp-userAuth-service","path":"/esp/esp_projects/12c/esp_timeout_comm/autodeploy/esp-userAuth-service.war","type":"war"},"children":[]},{"name":"espmicroapps","type":"applications","health":"ok","properties":{"App name":"espmicroapps","path":"/esp/esp_projects/12c/esp_timeout_comm/autodeploy/espmicroapps.war","type":"war"},"children":[]},{"name":"checklist","type":"applications","health":"ok","properties":{"App name":"checklist","path":"/esp/esp_projects/12c/esp_timeout_comm/autodeploy/checklist.war","type":"war"},"children":[]},{"name":"inventory-summary","type":"applications","health":"ok","properties":{"App name":"inventory-summary","path":"/esp/esp_projects/12c/esp_timeout_comm/autodeploy/inventory-summary.war","type":"war"},"children":[]},{"name":"pir","type":"applications","health":"ok","properties":{"App name":"pir","path":"/esp/esp_projects/12c/esp_timeout_comm/autodeploy/pir.war","type":"war"},"children":[]},{"name":"espgui","type":"applications","health":"ok","properties":{"App name":"espgui","path":"/esp/esp_projects/12c/esp_timeout_comm/autodeploy/espgui.war","type":"war"},"children":[]},{"name":"thirdparty","type":"applications","health":"ok","properties":{"App name":"thirdparty","path":"/esp/esp_projects/12c/esp_timeout_comm/autodeploy/thirdparty.war","type":"war"},"children":[]},{"name":"esp-self-service","type":"applications","health":"ok","properties":{"App name":"esp-self-service","path":"/esp/esp_projects/12c/esp_timeout_comm/autodeploy/esp-self-service.war","type":"war"},"children":[]},{"name":"m3-cloud-status","type":"applications","health":"ok","properties":{"App name":"m3-cloud-status","path":"/esp/esp_projects/12c/esp_timeout_comm/autodeploy/m3-cloud-status.war","type":"war"},"children":[]},{"name":"bulkmtoui","type":"applications","health":"ok","properties":{"App name":"bulkmtoui","path":"/esp/esp_projects/12c/esp_timeout_comm/applications/bulkmtoui","type":"war"},"children":[]},{"name":"ESP","type":"applications","health":"ok","properties":{"App name":"ESP","path":"/esp/esp_projects/12c/esp_timeout_comm/applications","type":"ear"},"children":[]},{"name":"espvirtualservice","type":"applications","health":"ok","properties":{"App name":"espvirtualservice","path":"/esp/esp_projects/12c/esp_timeout_comm/autodeploy/espvirtualservice.war","type":"war"},"children":[]},{"name":"reject-reasons","type":"applications","health":"ok","properties":{"App name":"reject-reasons","path":"/esp/esp_projects/12c/esp_timeout_comm/autodeploy/reject-reasons.war","type":"war"},"children":[]}]},{"name":"Datasources","type":"datasources","health":"ok","properties":{"Type":"Datasources"},"children":[{"id":"ESPJtsDataSource","name":"ESPJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPJtsDataSource"}},{"id":"LynxJtsDataSource","name":"LynxJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"LynxJtsDataSource"}}]},{"name":"Queues","type":"queues","health":"ok","properties":{"Type":"Queues"},"children":[{"id":"AutoProgress","name":"AutoProgress","type":"queues","health":"ok","properties":{"Name":"AutoProgress"}},{"id":"BulkDQQueue","name":"BulkDQQueue","type":"queues","health":"ok","properties":{"Name":"BulkDQQueue"}},{"id":"BulkLoadQueue","name":"BulkLoadQueue","type":"queues","health":"ok","properties":{"Name":"BulkLoadQueue"}},{"id":"BulkMssOrderQueue","name":"BulkMssOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkMssOrderQueue"}},{"id":"BulkOrderProcessorQueue","name":"BulkOrderProcessorQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderProcessorQueue"}},{"id":"BulkOrderQueue","name":"BulkOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderQueue"}},{"id":"BulkRLCQueue","name":"BulkRLCQueue","type":"queues","health":"ok","properties":{"Name":"BulkRLCQueue"}},{"id":"CACustomDeleteUploadQueue","name":"CACustomDeleteUploadQueue","type":"queues","health":"ok","properties":{"Name":"CACustomDeleteUploadQueue"}},{"id":"CompareViewQueue","name":"CompareViewQueue","type":"queues","health":"ok","properties":{"Name":"CompareViewQueue"}},{"id":"E911UploadQueue","name":"E911UploadQueue","type":"queues","health":"ok","properties":{"Name":"E911UploadQueue"}},{"id":"HandoffQueue","name":"HandoffQueue","type":"queues","health":"ok","properties":{"Name":"HandoffQueue"}},{"id":"iConfigQueue","name":"iConfigQueue","type":"queues","health":"ok","properties":{"Name":"IConfigQueue"}},{"id":"MBQueue","name":"MBQueue","type":"queues","health":"ok","properties":{"Name":"MBQueue"}},{"id":"NetProQueue","name":"NetProQueue","type":"queues","health":"ok","properties":{"Name":"NetProQueue"}},{"id":"OrderActivityQueue","name":"OrderActivityQueue","type":"queues","health":"ok","properties":{"Name":"OrderActivityQueue"}},{"id":"PCQueue","name":"PCQueue","type":"queues","health":"ok","properties":{"Name":"PCQueue"}},{"id":"RapidMTOOrderQueue","name":"RapidMTOOrderQueue","type":"queues","health":"ok","properties":{"Name":"RapidMTOOrderQueue"}},{"id":"SiteMoveQueue","name":"SiteMoveQueue","type":"queues","health":"ok","properties":{"Name":"SiteMoveQueue"}},{"id":"SPIMQueue","name":"SPIMQueue","type":"queues","health":"ok","properties":{"Name":"SPIMQueue"}},{"id":"VDDSQueue","name":"VDDSQueue","type":"queues","health":"ok","properties":{"Name":"VDDSQueue"}},{"id":"VRDMigrationQueue","name":"VRDMigrationQueue","type":"queues","health":"ok","properties":{"Name":"VRDMigrationQueue"}},{"id":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer"}},{"id":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer"}}]}]}]},{"id":"esp_async_comm","name":"esp_async_comm","type":"domain","health":"ok","properties":{"Domain name":"Esp_async_comm"},"children":[{"id":"fldlpesqva001","name":"AdminServer","type":"domainServer","health":"ok","properties":{"IPAddress":"fldlpesqva001","Domain":"Esp_async_comm","Port":"5010","Type":"Admin Server","Cluster":"AdminServer"},"children":[{"name":"Datasources","type":"datasources","health":"ok","properties":{"Type":"Datasources"},"children":[{"id":"ESPJtsDataSource","name":"ESPJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPJtsDataSource"}},{"id":"LynxJtsDataSource","name":"LynxJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"LynxJtsDataSource"}}]},{"name":"Queues","type":"queues","health":"ok","properties":{"Type":"Queues"},"children":[{"id":"GenisysOrderQueue","name":"GenisysOrderQueue","type":"queues","health":"ok","properties":{"Name":"GenisysOrderQueue"}},{"id":"ESPGenisysQueue","name":"ESPGenisysQueue","type":"queues","health":"ok","properties":{"Name":"ESPGenisysQueue"}},{"id":"HandoffQueue","name":"HandoffQueue","type":"queues","health":"ok","properties":{"Name":"HandoffQueue"}},{"id":"BulkOrderQueue","name":"BulkOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderQueue"}},{"id":"BulkLoadQueue","name":"BulkLoadQueue","type":"queues","health":"ok","properties":{"Name":"BulkLoadQueue"}},{"id":"BulkMssOrderQueue","name":"BulkMssOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkMssOrderQueue"}},{"id":"SiteMoveQueue","name":"SiteMoveQueue","type":"queues","health":"ok","properties":{"Name":"SiteMoveQueue"}},{"id":"BulkOrderProcessorQueue","name":"BulkOrderProcessorQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderProcessorQueue"}},{"id":"MBQueue","name":"MBQueue","type":"queues","health":"ok","properties":{"Name":"MBQueue"}},{"id":"SPIMQueue","name":"SPIMQueue","type":"queues","health":"ok","properties":{"Name":"SPIMQueue"}},{"id":"OrderActivityQueue","name":"OrderActivityQueue","type":"queues","health":"ok","properties":{"Name":"OrderActivityQueue"}},{"id":"VDDSQueue","name":"VDDSQueue","type":"queues","health":"ok","properties":{"Name":"VDDSQueue"}},{"id":"NetProQueue","name":"NetProQueue","type":"queues","health":"ok","properties":{"Name":"NetProQueue"}},{"id":"PCQueue","name":"PCQueue","type":"queues","health":"ok","properties":{"Name":"PCQueue"}},{"id":"CompareViewQueue","name":"CompareViewQueue","type":"queues","health":"ok","properties":{"Name":"CompareViewQueue"}},{"id":"RapidMTOOrderQueue","name":"RapidMTOOrderQueue","type":"queues","health":"ok","properties":{"Name":"RapidMTOOrderQueue"}},{"id":"VRDMigrationQueue","name":"VRDMigrationQueue","type":"queues","health":"ok","properties":{"Name":"VRDMigrationQueue"}},{"id":"BulkRLCQueue","name":"BulkRLCQueue","type":"queues","health":"ok","properties":{"Name":"BulkRLCQueue"}},{"id":"BulkDQQueue","name":"BulkDQQueue","type":"queues","health":"ok","properties":{"Name":"BulkDQQueue"}},{"id":"AutoProgressQueue","name":"AutoProgressQueue","type":"queues","health":"ok","properties":{"Name":"AutoProgressQueue"}},{"id":"E911UploadQueue","name":"E911UploadQueue","type":"queues","health":"ok","properties":{"Name":"E911UploadQueue"}},{"id":"CACustomDeleteUploadQueue","name":"CACustomDeleteUploadQueue","type":"queues","health":"ok","properties":{"Name":"CACustomDeleteUploadQueue"}},{"id":"iConfigQueue","name":"iConfigQueue","type":"queues","health":"ok","properties":{"Name":"IConfigQueue"}},{"id":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer"}},{"id":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer"}}]}]},{"id":"fldlpesqva001","name":"esp_async_comm_srv_01","type":"domainServer","health":"ok","properties":{"IPAddress":"fldlpesqva001","Domain":"Esp_async_comm","Port":"5011","Type":"Managed Server","Cluster":"esp_async_comm_srv_01"},"children":[{"name":"Applications","type":"applications","health":"ok","properties":{"Type":"Applications"},"children":[{"name":"ESP","type":"applications","health":"ok","properties":{"App name":"ESP","path":"/esp/esp_projects/12c/esp_async_comm/applications","type":"ear"},"children":[]}]},{"name":"Datasources","type":"datasources","health":"ok","properties":{"Type":"Datasources"},"children":[{"id":"ESPJtsDataSource","name":"ESPJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPJtsDataSource"}},{"id":"LynxJtsDataSource","name":"LynxJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"LynxJtsDataSource"}}]},{"name":"Queues","type":"queues","health":"ok","properties":{"Type":"Queues"},"children":[{"id":"GenisysOrderQueue","name":"GenisysOrderQueue","type":"queues","health":"ok","properties":{"Name":"GenisysOrderQueue"}},{"id":"ESPGenisysQueue","name":"ESPGenisysQueue","type":"queues","health":"ok","properties":{"Name":"ESPGenisysQueue"}},{"id":"HandoffQueue","name":"HandoffQueue","type":"queues","health":"ok","properties":{"Name":"HandoffQueue"}},{"id":"BulkOrderQueue","name":"BulkOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderQueue"}},{"id":"BulkLoadQueue","name":"BulkLoadQueue","type":"queues","health":"ok","properties":{"Name":"BulkLoadQueue"}},{"id":"BulkMssOrderQueue","name":"BulkMssOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkMssOrderQueue"}},{"id":"SiteMoveQueue","name":"SiteMoveQueue","type":"queues","health":"ok","properties":{"Name":"SiteMoveQueue"}},{"id":"BulkOrderProcessorQueue","name":"BulkOrderProcessorQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderProcessorQueue"}},{"id":"MBQueue","name":"MBQueue","type":"queues","health":"ok","properties":{"Name":"MBQueue"}},{"id":"SPIMQueue","name":"SPIMQueue","type":"queues","health":"ok","properties":{"Name":"SPIMQueue"}},{"id":"OrderActivityQueue","name":"OrderActivityQueue","type":"queues","health":"ok","properties":{"Name":"OrderActivityQueue"}},{"id":"VDDSQueue","name":"VDDSQueue","type":"queues","health":"ok","properties":{"Name":"VDDSQueue"}},{"id":"NetProQueue","name":"NetProQueue","type":"queues","health":"ok","properties":{"Name":"NetProQueue"}},{"id":"PCQueue","name":"PCQueue","type":"queues","health":"ok","properties":{"Name":"PCQueue"}},{"id":"CompareViewQueue","name":"CompareViewQueue","type":"queues","health":"ok","properties":{"Name":"CompareViewQueue"}},{"id":"RapidMTOOrderQueue","name":"RapidMTOOrderQueue","type":"queues","health":"ok","properties":{"Name":"RapidMTOOrderQueue"}},{"id":"VRDMigrationQueue","name":"VRDMigrationQueue","type":"queues","health":"ok","properties":{"Name":"VRDMigrationQueue"}},{"id":"BulkRLCQueue","name":"BulkRLCQueue","type":"queues","health":"ok","properties":{"Name":"BulkRLCQueue"}},{"id":"BulkDQQueue","name":"BulkDQQueue","type":"queues","health":"ok","properties":{"Name":"BulkDQQueue"}},{"id":"AutoProgressQueue","name":"AutoProgressQueue","type":"queues","health":"ok","properties":{"Name":"AutoProgressQueue"}},{"id":"E911UploadQueue","name":"E911UploadQueue","type":"queues","health":"ok","properties":{"Name":"E911UploadQueue"}},{"id":"CACustomDeleteUploadQueue","name":"CACustomDeleteUploadQueue","type":"queues","health":"ok","properties":{"Name":"CACustomDeleteUploadQueue"}},{"id":"iConfigQueue","name":"iConfigQueue","type":"queues","health":"ok","properties":{"Name":"IConfigQueue"}},{"id":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer"}},{"id":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer"}}]}]},{"id":"tpalpesqva002","name":"AdminServer","type":"domainServer","health":"ok","properties":{"IPAddress":"tpalpesqva002","Domain":"Esp_async_comm","Port":"5010","Type":"Admin Server","Cluster":"AdminServer"},"children":[{"name":"Datasources","type":"datasources","health":"ok","properties":{"Type":"Datasources"},"children":[{"id":"ESPJtsDataSource","name":"ESPJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPJtsDataSource"}},{"id":"LynxJtsDataSource","name":"LynxJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"LynxJtsDataSource"}}]},{"name":"Queues","type":"queues","health":"ok","properties":{"Type":"Queues"},"children":[{"id":"GenisysOrderQueue","name":"GenisysOrderQueue","type":"queues","health":"ok","properties":{"Name":"GenisysOrderQueue"}},{"id":"ESPGenisysQueue","name":"ESPGenisysQueue","type":"queues","health":"ok","properties":{"Name":"ESPGenisysQueue"}},{"id":"BulkMssOrderQueue","name":"BulkMssOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkMssOrderQueue"}},{"id":"HandoffQueue","name":"HandoffQueue","type":"queues","health":"ok","properties":{"Name":"HandoffQueue"}},{"id":"BulkOrderQueue","name":"BulkOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderQueue"}},{"id":"BulkLoadQueue","name":"BulkLoadQueue","type":"queues","health":"ok","properties":{"Name":"BulkLoadQueue"}},{"id":"SiteMoveQueue","name":"SiteMoveQueue","type":"queues","health":"ok","properties":{"Name":"SiteMoveQueue"}},{"id":"BulkOrderProcessorQueue","name":"BulkOrderProcessorQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderProcessorQueue"}},{"id":"MBQueue","name":"MBQueue","type":"queues","health":"ok","properties":{"Name":"MBQueue"}},{"id":"SPIMQueue","name":"SPIMQueue","type":"queues","health":"ok","properties":{"Name":"SPIMQueue"}},{"id":"OrderActivityQueue","name":"OrderActivityQueue","type":"queues","health":"ok","properties":{"Name":"OrderActivityQueue"}},{"id":"VDDSQueue","name":"VDDSQueue","type":"queues","health":"ok","properties":{"Name":"VDDSQueue"}},{"id":"NetProQueue","name":"NetProQueue","type":"queues","health":"ok","properties":{"Name":"NetProQueue"}},{"id":"PCQueue","name":"PCQueue","type":"queues","health":"ok","properties":{"Name":"PCQueue"}},{"id":"CompareViewQueue","name":"CompareViewQueue","type":"queues","health":"ok","properties":{"Name":"CompareViewQueue"}},{"id":"RapidMTOOrderQueue","name":"RapidMTOOrderQueue","type":"queues","health":"ok","properties":{"Name":"RapidMTOOrderQueue"}},{"id":"VRDMigrationQueue","name":"VRDMigrationQueue","type":"queues","health":"ok","properties":{"Name":"VRDMigrationQueue"}},{"id":"BulkRLCQueue","name":"BulkRLCQueue","type":"queues","health":"ok","properties":{"Name":"BulkRLCQueue"}},{"id":"BulkDQQueue","name":"BulkDQQueue","type":"queues","health":"ok","properties":{"Name":"BulkDQQueue"}},{"id":"AutoProgressQueue","name":"AutoProgressQueue","type":"queues","health":"ok","properties":{"Name":"AutoProgressQueue"}},{"id":"E911UploadQueue","name":"E911UploadQueue","type":"queues","health":"ok","properties":{"Name":"E911UploadQueue"}},{"id":"CACustomDeleteUploadQueue","name":"CACustomDeleteUploadQueue","type":"queues","health":"ok","properties":{"Name":"CACustomDeleteUploadQueue"}},{"id":"iConfigQueue","name":"iConfigQueue","type":"queues","health":"ok","properties":{"Name":"IConfigQueue"}},{"id":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer"}},{"id":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer"}}]}]},{"id":"tpalpesqva002","name":"esp_async_comm_srv_01","type":"domainServer","health":"ok","properties":{"IPAddress":"tpalpesqva002","Domain":"Esp_async_comm","Port":"5011","Type":"Managed Server","Cluster":"esp_async_comm_srv_01"},"children":[{"name":"Applications","type":"applications","health":"ok","properties":{"Type":"Applications"},"children":[{"name":"ESP","type":"applications","health":"ok","properties":{"App name":"ESP","path":"/esp/esp_projects/12c/esp_async_comm/applications","type":"ear"},"children":[]}]},{"name":"Datasources","type":"datasources","health":"ok","properties":{"Type":"Datasources"},"children":[{"id":"ESPJtsDataSource","name":"ESPJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPJtsDataSource"}},{"id":"LynxJtsDataSource","name":"LynxJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"LynxJtsDataSource"}}]},{"name":"Queues","type":"queues","health":"ok","properties":{"Type":"Queues"},"children":[{"id":"GenisysOrderQueue","name":"GenisysOrderQueue","type":"queues","health":"ok","properties":{"Name":"GenisysOrderQueue"}},{"id":"ESPGenisysQueue","name":"ESPGenisysQueue","type":"queues","health":"ok","properties":{"Name":"ESPGenisysQueue"}},{"id":"BulkMssOrderQueue","name":"BulkMssOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkMssOrderQueue"}},{"id":"HandoffQueue","name":"HandoffQueue","type":"queues","health":"ok","properties":{"Name":"HandoffQueue"}},{"id":"BulkOrderQueue","name":"BulkOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderQueue"}},{"id":"BulkLoadQueue","name":"BulkLoadQueue","type":"queues","health":"ok","properties":{"Name":"BulkLoadQueue"}},{"id":"SiteMoveQueue","name":"SiteMoveQueue","type":"queues","health":"ok","properties":{"Name":"SiteMoveQueue"}},{"id":"BulkOrderProcessorQueue","name":"BulkOrderProcessorQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderProcessorQueue"}},{"id":"MBQueue","name":"MBQueue","type":"queues","health":"ok","properties":{"Name":"MBQueue"}},{"id":"SPIMQueue","name":"SPIMQueue","type":"queues","health":"ok","properties":{"Name":"SPIMQueue"}},{"id":"OrderActivityQueue","name":"OrderActivityQueue","type":"queues","health":"ok","properties":{"Name":"OrderActivityQueue"}},{"id":"VDDSQueue","name":"VDDSQueue","type":"queues","health":"ok","properties":{"Name":"VDDSQueue"}},{"id":"NetProQueue","name":"NetProQueue","type":"queues","health":"ok","properties":{"Name":"NetProQueue"}},{"id":"PCQueue","name":"PCQueue","type":"queues","health":"ok","properties":{"Name":"PCQueue"}},{"id":"CompareViewQueue","name":"CompareViewQueue","type":"queues","health":"ok","properties":{"Name":"CompareViewQueue"}},{"id":"RapidMTOOrderQueue","name":"RapidMTOOrderQueue","type":"queues","health":"ok","properties":{"Name":"RapidMTOOrderQueue"}},{"id":"VRDMigrationQueue","name":"VRDMigrationQueue","type":"queues","health":"ok","properties":{"Name":"VRDMigrationQueue"}},{"id":"BulkRLCQueue","name":"BulkRLCQueue","type":"queues","health":"ok","properties":{"Name":"BulkRLCQueue"}},{"id":"BulkDQQueue","name":"BulkDQQueue","type":"queues","health":"ok","properties":{"Name":"BulkDQQueue"}},{"id":"AutoProgressQueue","name":"AutoProgressQueue","type":"queues","health":"ok","properties":{"Name":"AutoProgressQueue"}},{"id":"E911UploadQueue","name":"E911UploadQueue","type":"queues","health":"ok","properties":{"Name":"E911UploadQueue"}},{"id":"CACustomDeleteUploadQueue","name":"CACustomDeleteUploadQueue","type":"queues","health":"ok","properties":{"Name":"CACustomDeleteUploadQueue"}},{"id":"iConfigQueue","name":"iConfigQueue","type":"queues","health":"ok","properties":{"Name":"IConfigQueue"}},{"id":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer"}},{"id":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer"}}]}]},{"id":"tpalpesqva003","name":"AdminServer","type":"domainServer","health":"ok","properties":{"IPAddress":"tpalpesqva003","Domain":"Esp_async_comm","Port":"5010","Type":"Admin Server","Cluster":"AdminServer"},"children":[{"name":"Datasources","type":"datasources","health":"ok","properties":{"Type":"Datasources"},"children":[{"id":"ESPJtsDataSource","name":"ESPJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPJtsDataSource"}},{"id":"LynxJtsDataSource","name":"LynxJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"LynxJtsDataSource"}}]},{"name":"Queues","type":"queues","health":"ok","properties":{"Type":"Queues"},"children":[{"id":"HandoffQueue","name":"HandoffQueue","type":"queues","health":"ok","properties":{"Name":"HandoffQueue"}},{"id":"BulkOrderQueue","name":"BulkOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderQueue"}},{"id":"BulkLoadQueue","name":"BulkLoadQueue","type":"queues","health":"ok","properties":{"Name":"BulkLoadQueue"}},{"id":"SiteMoveQueue","name":"SiteMoveQueue","type":"queues","health":"ok","properties":{"Name":"SiteMoveQueue"}},{"id":"BulkOrderProcessorQueue","name":"BulkOrderProcessorQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderProcessorQueue"}},{"id":"MBQueue","name":"MBQueue","type":"queues","health":"ok","properties":{"Name":"MBQueue"}},{"id":"SPIMQueue","name":"SPIMQueue","type":"queues","health":"ok","properties":{"Name":"SPIMQueue"}},{"id":"OrderActivityQueue","name":"OrderActivityQueue","type":"queues","health":"ok","properties":{"Name":"OrderActivityQueue"}},{"id":"VDDSQueue","name":"VDDSQueue","type":"queues","health":"ok","properties":{"Name":"VDDSQueue"}},{"id":"NetProQueue","name":"NetProQueue","type":"queues","health":"ok","properties":{"Name":"NetProQueue"}},{"id":"PCQueue","name":"PCQueue","type":"queues","health":"ok","properties":{"Name":"PCQueue"}},{"id":"CompareViewQueue","name":"CompareViewQueue","type":"queues","health":"ok","properties":{"Name":"CompareViewQueue"}},{"id":"RapidMTOOrderQueue","name":"RapidMTOOrderQueue","type":"queues","health":"ok","properties":{"Name":"RapidMTOOrderQueue"}},{"id":"VRDMigrationQueue","name":"VRDMigrationQueue","type":"queues","health":"ok","properties":{"Name":"VRDMigrationQueue"}},{"id":"BulkRLCQueue","name":"BulkRLCQueue","type":"queues","health":"ok","properties":{"Name":"BulkRLCQueue"}},{"id":"BulkDQQueue","name":"BulkDQQueue","type":"queues","health":"ok","properties":{"Name":"BulkDQQueue"}},{"id":"AutoProgressQueue","name":"AutoProgressQueue","type":"queues","health":"ok","properties":{"Name":"AutoProgressQueue"}},{"id":"E911UploadQueue","name":"E911UploadQueue","type":"queues","health":"ok","properties":{"Name":"E911UploadQueue"}},{"id":"CACustomDeleteUploadQueue","name":"CACustomDeleteUploadQueue","type":"queues","health":"ok","properties":{"Name":"CACustomDeleteUploadQueue"}},{"id":"iConfigQueue","name":"iConfigQueue","type":"queues","health":"ok","properties":{"Name":"IConfigQueue"}},{"id":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer"}},{"id":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer"}}]}]},{"id":"tpalpesqva003","name":"esp_async_comm_srv_01","type":"domainServer","health":"ok","properties":{"IPAddress":"tpalpesqva003","Domain":"Esp_async_comm","Port":"5011","Type":"Managed Server","Cluster":"esp_async_comm_srv_01"},"children":[{"name":"Applications","type":"applications","health":"ok","properties":{"Type":"Applications"},"children":[{"name":"ESP","type":"applications","health":"ok","properties":{"App name":"ESP","path":"/esp/esp_projects/12c/esp_async_comm/applications","type":"ear"},"children":[]}]},{"name":"Datasources","type":"datasources","health":"ok","properties":{"Type":"Datasources"},"children":[{"id":"ESPJtsDataSource","name":"ESPJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPJtsDataSource"}},{"id":"LynxJtsDataSource","name":"LynxJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"LynxJtsDataSource"}}]},{"name":"Queues","type":"queues","health":"ok","properties":{"Type":"Queues"},"children":[{"id":"HandoffQueue","name":"HandoffQueue","type":"queues","health":"ok","properties":{"Name":"HandoffQueue"}},{"id":"BulkOrderQueue","name":"BulkOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderQueue"}},{"id":"BulkLoadQueue","name":"BulkLoadQueue","type":"queues","health":"ok","properties":{"Name":"BulkLoadQueue"}},{"id":"SiteMoveQueue","name":"SiteMoveQueue","type":"queues","health":"ok","properties":{"Name":"SiteMoveQueue"}},{"id":"BulkOrderProcessorQueue","name":"BulkOrderProcessorQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderProcessorQueue"}},{"id":"MBQueue","name":"MBQueue","type":"queues","health":"ok","properties":{"Name":"MBQueue"}},{"id":"SPIMQueue","name":"SPIMQueue","type":"queues","health":"ok","properties":{"Name":"SPIMQueue"}},{"id":"OrderActivityQueue","name":"OrderActivityQueue","type":"queues","health":"ok","properties":{"Name":"OrderActivityQueue"}},{"id":"VDDSQueue","name":"VDDSQueue","type":"queues","health":"ok","properties":{"Name":"VDDSQueue"}},{"id":"NetProQueue","name":"NetProQueue","type":"queues","health":"ok","properties":{"Name":"NetProQueue"}},{"id":"PCQueue","name":"PCQueue","type":"queues","health":"ok","properties":{"Name":"PCQueue"}},{"id":"CompareViewQueue","name":"CompareViewQueue","type":"queues","health":"ok","properties":{"Name":"CompareViewQueue"}},{"id":"RapidMTOOrderQueue","name":"RapidMTOOrderQueue","type":"queues","health":"ok","properties":{"Name":"RapidMTOOrderQueue"}},{"id":"VRDMigrationQueue","name":"VRDMigrationQueue","type":"queues","health":"ok","properties":{"Name":"VRDMigrationQueue"}},{"id":"BulkRLCQueue","name":"BulkRLCQueue","type":"queues","health":"ok","properties":{"Name":"BulkRLCQueue"}},{"id":"BulkDQQueue","name":"BulkDQQueue","type":"queues","health":"ok","properties":{"Name":"BulkDQQueue"}},{"id":"AutoProgressQueue","name":"AutoProgressQueue","type":"queues","health":"ok","properties":{"Name":"AutoProgressQueue"}},{"id":"E911UploadQueue","name":"E911UploadQueue","type":"queues","health":"ok","properties":{"Name":"E911UploadQueue"}},{"id":"CACustomDeleteUploadQueue","name":"CACustomDeleteUploadQueue","type":"queues","health":"ok","properties":{"Name":"CACustomDeleteUploadQueue"}},{"id":"iConfigQueue","name":"iConfigQueue","type":"queues","health":"ok","properties":{"Name":"IConfigQueue"}},{"id":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer"}},{"id":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer"}}]}]}]},{"id":"espws_prod_comm","name":"espws_prod_comm","type":"domain","health":"ok","properties":{"Domain name":"Espws_prod_comm"},"children":[{"id":"fldlpesqva001","name":"AdminServer","type":"domainServer","health":"ok","properties":{"IPAddress":"fldlpesqva001","Domain":"Espws_prod_comm","Port":"4010","Type":"Admin Server","Cluster":"AdminServer"},"children":[{"name":"Datasources","type":"datasources","health":"ok","properties":{"Type":"Datasources"},"children":[{"id":"ESPCpeJtsDataSource","name":"ESPCpeJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPCpeJtsDataSource"}},{"id":"ESPEncrJtsDataSource","name":"ESPEncrJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPEncrJtsDataSource"}},{"id":"ESPVoipJtsDataSource","name":"ESPVoipJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPVoipJtsDataSource"}},{"id":"ESPJtsDataSource","name":"ESPJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPJtsDataSource"}},{"id":"LynxJtsDataSource","name":"LynxJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"LynxJtsDataSource"}}]}]},{"id":"fldlpesqva001","name":"espws_prod_comm_srv_01","type":"domainServer","health":"ok","properties":{"IPAddress":"fldlpesqva001","Domain":"Espws_prod_comm","Port":"4012","Type":"Managed Server","Cluster":"espws_prod_comm_srv_01"},"children":[{"name":"Applications","type":"applications","health":"ok","properties":{"Type":"Applications"},"children":[{"name":"art-dashboard","type":"applications","health":"ok","properties":{"App name":"art-dashboard","path":"/esp/esp_projects/12c/espws_prod_comm/autodeploy/saat-0.0.1-SNAPSHOT.war","type":"war"},"children":[]},{"name":"ngsaatutilities","type":"applications","health":"ok","properties":{"App name":"ngsaatutilities","path":"/esp/esp_projects/12c/espws_prod_comm/autodeploy/dni-search-0.0.1-SNAPSHOT","type":"war"},"children":[]},{"name":"project-0.0.1","type":"applications","health":"ok","properties":{"App name":"project-0.0.1","path":"/esp/esp_projects/12c/espws_prod_comm/autodeploy/project-0.0.1-SNAPSHOT.war","type":"war"},"children":[]},{"name":"art-dashboard-service","type":"applications","health":"ok","properties":{"App name":"art-dashboard-service","path":"/esp/esp_projects/12c/espws_prod_comm/autodeploy/device-query-0.0.1-SNAPSHOT","type":"war"},"children":[]},{"name":"profile-group","type":"applications","health":"ok","properties":{"App name":"profile-group","path":"/esp/esp_projects/12c/espws_prod_comm/autodeploy/order-0.0.1-SNAPSHOT","type":"war"},"children":[]},{"name":"customer-0.0.1","type":"applications","health":"ok","properties":{"App name":"customer-0.0.1","path":"/esp/esp_projects/12c/espws_prod_comm/autodeploy/customer-0.0.1-SNAPSHOT.war","type":"ear"},"children":[]},{"name":"espws.PROD","type":"applications","health":"ok","properties":{"App name":"espws.PROD","path":"/esp/esp_projects/12c/espws_prod_comm/autodeploy/espws.PROD.ear","type":"war"},"children":[]},{"name":"art-ui","type":"applications","health":"ok","properties":{"App name":"art-ui","path":"/esp/esp_projects/12c/espws_prod_comm/autodeploy/handOff-0.0.1-SNAPSHOT.war","type":"war"},"children":[]}]},{"name":"Datasources","type":"datasources","health":"ok","properties":{"Type":"Datasources"},"children":[{"id":"ESPCpeJtsDataSource","name":"ESPCpeJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPCpeJtsDataSource"}},{"id":"ESPEncrJtsDataSource","name":"ESPEncrJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPEncrJtsDataSource"}},{"id":"ESPVoipJtsDataSource","name":"ESPVoipJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPVoipJtsDataSource"}},{"id":"ESPJtsDataSource","name":"ESPJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPJtsDataSource"}},{"id":"LynxJtsDataSource","name":"LynxJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"LynxJtsDataSource"}}]}]},{"id":"fldlpesqva002","name":"AdminServer","type":"domainServer","health":"ok","properties":{"IPAddress":"fldlpesqva002","Domain":"Espws_prod_comm","Port":"4010","Type":"Admin Server","Cluster":"AdminServer"},"children":[{"name":"Datasources","type":"datasources","health":"ok","properties":{"Type":"Datasources"},"children":[{"id":"ESPCpeJtsDataSource","name":"ESPCpeJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPCpeJtsDataSource"}},{"id":"ESPEncrJtsDataSource","name":"ESPEncrJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPEncrJtsDataSource"}},{"id":"ESPVoipJtsDataSource","name":"ESPVoipJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPVoipJtsDataSource"}},{"id":"ESPJtsDataSource","name":"ESPJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPJtsDataSource"}},{"id":"LynxJtsDataSource","name":"LynxJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"LynxJtsDataSource"}}]}]},{"id":"fldlpesqva002","name":"espws_prod_comm_srv_01","type":"domainServer","health":"ok","properties":{"IPAddress":"fldlpesqva002","Domain":"Espws_prod_comm","Port":"4012","Type":"Managed Server","Cluster":"espws_prod_comm_srv_01"},"children":[{"name":"Applications","type":"applications","health":"ok","properties":{"Type":"Applications"},"children":[{"name":"espws.PROD","type":"applications","health":"ok","properties":{"App name":"espws.PROD","path":"/esp/esp_projects/12c/espws_prod_comm/autodeploy/espws.PROD.ear","type":"war"},"children":[]},{"name":"art-dashboard","type":"applications","health":"ok","properties":{"App name":"art-dashboard","path":"/esp/esp_projects/12c/espws_prod_comm/autodeploy/saat-0.0.1-SNAPSHOT.war","type":"war"},"children":[]},{"name":"art-dashboard-service","type":"applications","health":"ok","properties":{"App name":"art-dashboard-service","path":"/esp/esp_projects/12c/espws_prod_comm/autodeploy/device-query-0.0.1-SNAPSHOT","type":"war"},"children":[]},{"name":"customer-0.0.1","type":"applications","health":"ok","properties":{"App name":"customer-0.0.1","path":"/esp/esp_projects/12c/espws_prod_comm/autodeploy/customer-0.0.1-SNAPSHOT.war","type":"ear"},"children":[]},{"name":"project-0.0.1","type":"applications","health":"ok","properties":{"App name":"project-0.0.1","path":"/esp/esp_projects/12c/espws_prod_comm/autodeploy/project-0.0.1-SNAPSHOT.war","type":"war"},"children":[]},{"name":"art-ui","type":"applications","health":"ok","properties":{"App name":"art-ui","path":"/esp/esp_projects/12c/espws_prod_comm/autodeploy/handOff-0.0.1-SNAPSHOT.war","type":"war"},"children":[]},{"name":"ngsaatutilities","type":"applications","health":"ok","properties":{"App name":"ngsaatutilities","path":"/esp/esp_projects/12c/espws_prod_comm/autodeploy/dni-search-0.0.1-SNAPSHOT","type":"war"},"children":[]},{"name":"profile-group","type":"applications","health":"ok","properties":{"App name":"profile-group","path":"/esp/esp_projects/12c/espws_prod_comm/autodeploy/order-0.0.1-SNAPSHOT","type":"war"},"children":[]}]},{"name":"Datasources","type":"datasources","health":"ok","properties":{"Type":"Datasources"},"children":[{"id":"ESPCpeJtsDataSource","name":"ESPCpeJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPCpeJtsDataSource"}},{"id":"ESPEncrJtsDataSource","name":"ESPEncrJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPEncrJtsDataSource"}},{"id":"ESPVoipJtsDataSource","name":"ESPVoipJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPVoipJtsDataSource"}},{"id":"ESPJtsDataSource","name":"ESPJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPJtsDataSource"}},{"id":"LynxJtsDataSource","name":"LynxJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"LynxJtsDataSource"}}]}]}]},{"id":"esp_shakeout","name":"esp_shakeout","type":"domain","health":"ok","properties":{"Domain name":"Esp_shakeout"},"children":[{"id":"tpalpesqva002","name":"AdminServer","type":"domainServer","health":"ok","properties":{"IPAddress":"tpalpesqva002","Domain":"Esp_shakeout","Port":"4020","Type":"Admin Server","Cluster":"AdminServer"},"children":[{"name":"Datasources","type":"datasources","health":"ok","properties":{"Type":"Datasources"},"children":[{"id":"ESPJtsDataSource","name":"ESPJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPJtsDataSource"}},{"id":"LynxJtsDataSource","name":"LynxJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"LynxJtsDataSource"}}]},{"name":"Queues","type":"queues","health":"ok","properties":{"Type":"Queues"},"children":[{"id":"BulkMssOrderQueue","name":"BulkMssOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkMssOrderQueue"}},{"id":"GenisysOrderQueue","name":"GenisysOrderQueue","type":"queues","health":"ok","properties":{"Name":"GenisysOrderQueue"}},{"id":"ESPGenisysQueue","name":"ESPGenisysQueue","type":"queues","health":"ok","properties":{"Name":"ESPGenisysQueue"}},{"id":"HandoffQueue","name":"HandoffQueue","type":"queues","health":"ok","properties":{"Name":"HandoffQueue"}},{"id":"BulkOrderQueue","name":"BulkOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderQueue"}},{"id":"BulkLoadQueue","name":"BulkLoadQueue","type":"queues","health":"ok","properties":{"Name":"BulkLoadQueue"}},{"id":"SiteMoveQueue","name":"SiteMoveQueue","type":"queues","health":"ok","properties":{"Name":"SiteMoveQueue"}},{"id":"BulkOrderProcessorQueue","name":"BulkOrderProcessorQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderProcessorQueue"}},{"id":"MBQueue","name":"MBQueue","type":"queues","health":"ok","properties":{"Name":"MBQueue"}},{"id":"SPIMQueue","name":"SPIMQueue","type":"queues","health":"ok","properties":{"Name":"SPIMQueue"}},{"id":"OrderActivityQueue","name":"OrderActivityQueue","type":"queues","health":"ok","properties":{"Name":"OrderActivityQueue"}},{"id":"VDDSQueue","name":"VDDSQueue","type":"queues","health":"ok","properties":{"Name":"VDDSQueue"}},{"id":"NetProQueue","name":"NetProQueue","type":"queues","health":"ok","properties":{"Name":"NetProQueue"}},{"id":"PCQueue","name":"PCQueue","type":"queues","health":"ok","properties":{"Name":"PCQueue"}},{"id":"CompareViewQueue","name":"CompareViewQueue","type":"queues","health":"ok","properties":{"Name":"CompareViewQueue"}},{"id":"RapidMTOOrderQueue","name":"RapidMTOOrderQueue","type":"queues","health":"ok","properties":{"Name":"RapidMTOOrderQueue"}},{"id":"VRDMigrationQueue","name":"VRDMigrationQueue","type":"queues","health":"ok","properties":{"Name":"VRDMigrationQueue"}},{"id":"BulkRLCQueue","name":"BulkRLCQueue","type":"queues","health":"ok","properties":{"Name":"BulkRLCQueue"}},{"id":"BulkDQQueue","name":"BulkDQQueue","type":"queues","health":"ok","properties":{"Name":"BulkDQQueue"}},{"id":"iConfigQueue","name":"iConfigQueue","type":"queues","health":"ok","properties":{"Name":"IConfigQueue"}},{"id":"AutoProgressQueue","name":"AutoProgressQueue","type":"queues","health":"ok","properties":{"Name":"AutoProgressQueue"}},{"id":"E911UploadQueue","name":"E911UploadQueue","type":"queues","health":"ok","properties":{"Name":"E911UploadQueue"}},{"id":"CACustomDeleteUploadQueue","name":"CACustomDeleteUploadQueue","type":"queues","health":"ok","properties":{"Name":"CACustomDeleteUploadQueue"}},{"id":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer"}},{"id":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer"}}]}]},{"id":"tpalpesqva002","name":"esp_shakeout_srv_01","type":"domainServer","health":"ok","properties":{"IPAddress":"tpalpesqva002","Domain":"Esp_shakeout","Port":"4021","Type":"Managed Server","Cluster":"esp_shakeout_srv_01"},"children":[{"name":"Applications","type":"applications","health":"ok","properties":{"Type":"Applications"},"children":[{"name":"vzcare_web","type":"applications","health":"ok","properties":{"App name":"vzcare_web","path":"/esp/esp_projects/12c/esp_comm_shakeout/autodeploy/vzcare_web.war","type":"war"},"children":[]},{"name":"reject-reasons","type":"applications","health":"ok","properties":{"App name":"reject-reasons","path":"/esp/esp_projects/12c/esp_comm_shakeout/autodeploy/reject-reasons.war","type":"war"},"children":[]},{"name":"m3-cloud-status","type":"applications","health":"ok","properties":{"App name":"m3-cloud-status","path":"/esp/esp_projects/12c/esp_comm_shakeout/autodeploy/m3-cloud-status.war","type":"war"},"children":[]},{"name":"my-team-task","type":"applications","health":"ok","properties":{"App name":"my-team-task","path":"/esp/esp_projects/12c/esp_comm_shakeout/autodeploy/my-team-task.war","type":"war"},"children":[]},{"name":"esqv-dni","type":"applications","health":"ok","properties":{"App name":"esqv-dni","path":"/esp/esp_projects/12c/esp_comm_shakeout/autodeploy/esqv-dni-0.0.1-SNAPSHOT.war","type":"war"},"children":[]},{"name":"esp-self-service","type":"applications","health":"ok","properties":{"App name":"esp-self-service","path":"/esp/esp_projects/12c/esp_comm_shakeout/autodeploy/esp-self-service.war","type":"war"},"children":[]},{"name":"esqv-web","type":"applications","health":"ok","properties":{"App name":"esqv-web","path":"/esp/esp_projects/12c/esp_comm_shakeout/autodeploy/esqv-web.war","type":"war"},"children":[]},{"name":"ops-search","type":"applications","health":"ok","properties":{"App name":"ops-search","path":"/esp/esp_projects/12c/esp_comm_shakeout/autodeploy/ops-search-0.0.1-SNAPSHOT.war","type":"war"},"children":[]},{"name":"ESP","type":"applications","health":"ok","properties":{"App name":"ESP","path":"/esp/esp_projects/12c/esp_comm_shakeout/applications","type":"ear"},"children":[]},{"name":"bulkmtoui","type":"applications","health":"ok","properties":{"App name":"bulkmtoui","path":"/esp/esp_projects/12c/esp_comm_shakeout/applications/bulkmtoui","type":"war"},"children":[]},{"name":"thirdparty","type":"applications","health":"ok","properties":{"App name":"thirdparty","path":"/esp/esp_projects/12c/esp_comm_shakeout/autodeploy/thirdparty.war","type":"war"},"children":[]},{"name":"esp-userAuth-service","type":"applications","health":"ok","properties":{"App name":"esp-userAuth-service","path":"/esp/esp_projects/12c/esp_comm_shakeout/autodeploy/esp-userAuth-service.war","type":"war"},"children":[]},{"name":"inventory-summary","type":"applications","health":"ok","properties":{"App name":"inventory-summary","path":"/esp/esp_projects/12c/esp_comm_shakeout/autodeploy/inventory-summary.war","type":"war"},"children":[]},{"name":"checklist","type":"applications","health":"ok","properties":{"App name":"checklist","path":"/esp/esp_projects/12c/esp_comm_shakeout/autodeploy/checklist_new.war","type":"war"},"children":[]},{"name":"pir","type":"applications","health":"ok","properties":{"App name":"pir","path":"/esp/esp_projects/12c/esp_comm_shakeout/autodeploy/pir.war","type":"war"},"children":[]},{"name":"espvirtualservice","type":"applications","health":"ok","properties":{"App name":"espvirtualservice","path":"/esp/esp_projects/12c/esp_comm_shakeout/autodeploy/espvirtualservice-1.0-SNAPSHOT.war","type":"war"},"children":[]},{"name":"espmicroapps","type":"applications","health":"ok","properties":{"App name":"espmicroapps","path":"/esp/esp_projects/12c/esp_comm_shakeout/autodeploy/espmicroapps.war","type":"war"},"children":[]}]},{"name":"Datasources","type":"datasources","health":"ok","properties":{"Type":"Datasources"},"children":[{"id":"ESPJtsDataSource","name":"ESPJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPJtsDataSource"}},{"id":"LynxJtsDataSource","name":"LynxJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"LynxJtsDataSource"}}]},{"name":"Queues","type":"queues","health":"ok","properties":{"Type":"Queues"},"children":[{"id":"BulkMssOrderQueue","name":"BulkMssOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkMssOrderQueue"}},{"id":"GenisysOrderQueue","name":"GenisysOrderQueue","type":"queues","health":"ok","properties":{"Name":"GenisysOrderQueue"}},{"id":"ESPGenisysQueue","name":"ESPGenisysQueue","type":"queues","health":"ok","properties":{"Name":"ESPGenisysQueue"}},{"id":"HandoffQueue","name":"HandoffQueue","type":"queues","health":"ok","properties":{"Name":"HandoffQueue"}},{"id":"BulkOrderQueue","name":"BulkOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderQueue"}},{"id":"BulkLoadQueue","name":"BulkLoadQueue","type":"queues","health":"ok","properties":{"Name":"BulkLoadQueue"}},{"id":"SiteMoveQueue","name":"SiteMoveQueue","type":"queues","health":"ok","properties":{"Name":"SiteMoveQueue"}},{"id":"BulkOrderProcessorQueue","name":"BulkOrderProcessorQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderProcessorQueue"}},{"id":"MBQueue","name":"MBQueue","type":"queues","health":"ok","properties":{"Name":"MBQueue"}},{"id":"SPIMQueue","name":"SPIMQueue","type":"queues","health":"ok","properties":{"Name":"SPIMQueue"}},{"id":"OrderActivityQueue","name":"OrderActivityQueue","type":"queues","health":"ok","properties":{"Name":"OrderActivityQueue"}},{"id":"VDDSQueue","name":"VDDSQueue","type":"queues","health":"ok","properties":{"Name":"VDDSQueue"}},{"id":"NetProQueue","name":"NetProQueue","type":"queues","health":"ok","properties":{"Name":"NetProQueue"}},{"id":"PCQueue","name":"PCQueue","type":"queues","health":"ok","properties":{"Name":"PCQueue"}},{"id":"CompareViewQueue","name":"CompareViewQueue","type":"queues","health":"ok","properties":{"Name":"CompareViewQueue"}},{"id":"RapidMTOOrderQueue","name":"RapidMTOOrderQueue","type":"queues","health":"ok","properties":{"Name":"RapidMTOOrderQueue"}},{"id":"VRDMigrationQueue","name":"VRDMigrationQueue","type":"queues","health":"ok","properties":{"Name":"VRDMigrationQueue"}},{"id":"BulkRLCQueue","name":"BulkRLCQueue","type":"queues","health":"ok","properties":{"Name":"BulkRLCQueue"}},{"id":"BulkDQQueue","name":"BulkDQQueue","type":"queues","health":"ok","properties":{"Name":"BulkDQQueue"}},{"id":"iConfigQueue","name":"iConfigQueue","type":"queues","health":"ok","properties":{"Name":"IConfigQueue"}},{"id":"AutoProgressQueue","name":"AutoProgressQueue","type":"queues","health":"ok","properties":{"Name":"AutoProgressQueue"}},{"id":"E911UploadQueue","name":"E911UploadQueue","type":"queues","health":"ok","properties":{"Name":"E911UploadQueue"}},{"id":"CACustomDeleteUploadQueue","name":"CACustomDeleteUploadQueue","type":"queues","health":"ok","properties":{"Name":"CACustomDeleteUploadQueue"}},{"id":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer"}},{"id":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer"}}]}]}]},{"id":"esp_prod_comm","name":"esp_prod_comm","type":"domain","health":"ok","properties":{"Domain name":"Esp_prod_comm"},"children":[{"id":"tpalpesqva002","name":"AdminServer","type":"domainServer","health":"ok","properties":{"IPAddress":"tpalpesqva002","Domain":"Esp_prod_comm","Port":"4001","Type":"Admin Server","Cluster":"AdminServer"},"children":[{"name":"Datasources","type":"datasources","health":"ok","properties":{"Type":"Datasources"},"children":[{"id":"ESPJtsDataSource","name":"ESPJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPJtsDataSource"}},{"id":"LynxJtsDataSource","name":"LynxJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"LynxJtsDataSource"}}]},{"name":"Queues","type":"queues","health":"ok","properties":{"Type":"Queues"},"children":[{"id":"BulkMssOrderQueue","name":"BulkMssOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkMssOrderQueue"}},{"id":"GenisysOrderQueue","name":"GenisysOrderQueue","type":"queues","health":"ok","properties":{"Name":"GenisysOrderQueue"}},{"id":"ESPGenisysQueue","name":"ESPGenisysQueue","type":"queues","health":"ok","properties":{"Name":"ESPGenisysQueue"}},{"id":"HandoffQueue","name":"HandoffQueue","type":"queues","health":"ok","properties":{"Name":"HandoffQueue"}},{"id":"BulkOrderQueue","name":"BulkOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderQueue"}},{"id":"BulkLoadQueue","name":"BulkLoadQueue","type":"queues","health":"ok","properties":{"Name":"BulkLoadQueue"}},{"id":"SiteMoveQueue","name":"SiteMoveQueue","type":"queues","health":"ok","properties":{"Name":"SiteMoveQueue"}},{"id":"BulkOrderProcessorQueue","name":"BulkOrderProcessorQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderProcessorQueue"}},{"id":"MBQueue","name":"MBQueue","type":"queues","health":"ok","properties":{"Name":"MBQueue"}},{"id":"SPIMQueue","name":"SPIMQueue","type":"queues","health":"ok","properties":{"Name":"SPIMQueue"}},{"id":"OrderActivityQueue","name":"OrderActivityQueue","type":"queues","health":"ok","properties":{"Name":"OrderActivityQueue"}},{"id":"VDDSQueue","name":"VDDSQueue","type":"queues","health":"ok","properties":{"Name":"VDDSQueue"}},{"id":"NetProQueue","name":"NetProQueue","type":"queues","health":"ok","properties":{"Name":"NetProQueue"}},{"id":"PCQueue","name":"PCQueue","type":"queues","health":"ok","properties":{"Name":"PCQueue"}},{"id":"CompareViewQueue","name":"CompareViewQueue","type":"queues","health":"ok","properties":{"Name":"CompareViewQueue"}},{"id":"RapidMTOOrderQueue","name":"RapidMTOOrderQueue","type":"queues","health":"ok","properties":{"Name":"RapidMTOOrderQueue"}},{"id":"VRDMigrationQueue","name":"VRDMigrationQueue","type":"queues","health":"ok","properties":{"Name":"VRDMigrationQueue"}},{"id":"BulkRLCQueue","name":"BulkRLCQueue","type":"queues","health":"ok","properties":{"Name":"BulkRLCQueue"}},{"id":"BulkDQQueue","name":"BulkDQQueue","type":"queues","health":"ok","properties":{"Name":"BulkDQQueue"}},{"id":"iConfigQueue","name":"iConfigQueue","type":"queues","health":"ok","properties":{"Name":"IConfigQueue"}},{"id":"AutoProgressQueue","name":"AutoProgressQueue","type":"queues","health":"ok","properties":{"Name":"AutoProgressQueue"}},{"id":"E911UploadQueue","name":"E911UploadQueue","type":"queues","health":"ok","properties":{"Name":"E911UploadQueue"}},{"id":"CACustomDeleteUploadQueue","name":"CACustomDeleteUploadQueue","type":"queues","health":"ok","properties":{"Name":"CACustomDeleteUploadQueue"}},{"id":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer"}},{"id":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer"}}]}]},{"id":"tpalpesqva002","name":"esp_prod_comm_srv_01","type":"domainServer","health":"ok","properties":{"IPAddress":"tpalpesqva002","Domain":"Esp_prod_comm","Port":"4002","Type":"Managed Server","Cluster":"esp_prod_comm_srv_01"},"children":[{"name":"Applications","type":"applications","health":"ok","properties":{"Type":"Applications"},"children":[{"name":"espvirtualservice","type":"applications","health":"ok","properties":{"App name":"espvirtualservice","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/espvirtualservice-1.0-SNAPSHOT.war","type":"war"},"children":[]},{"name":"espmicroapps","type":"applications","health":"ok","properties":{"App name":"espmicroapps","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/espmicroapps.war","type":"war"},"children":[]},{"name":"ESP","type":"applications","health":"ok","properties":{"App name":"ESP","path":"/esp/esp_projects/12c/esp_prod_comm/applications","type":"ear"},"children":[]},{"name":"esp-self-service","type":"applications","health":"ok","properties":{"App name":"esp-self-service","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/esp-self-service.war","type":"war"},"children":[]},{"name":"vzcare_web","type":"applications","health":"ok","properties":{"App name":"vzcare_web","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/vzcare_web.war","type":"war"},"children":[]},{"name":"my-team-task","type":"applications","health":"ok","properties":{"App name":"my-team-task","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/my-team-task.war","type":"war"},"children":[]},{"name":"bulkmtoui","type":"applications","health":"ok","properties":{"App name":"bulkmtoui","path":"/esp/esp_projects/12c/esp_prod_comm/applications/bulkmtoui","type":"war"},"children":[]},{"name":"m3-cloud-status","type":"applications","health":"ok","properties":{"App name":"m3-cloud-status","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/m3-cloud-status.war","type":"war"},"children":[]},{"name":"esqv-web","type":"applications","health":"ok","properties":{"App name":"esqv-web","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/esqv-web.war","type":"war"},"children":[]},{"name":"pir","type":"applications","health":"ok","properties":{"App name":"pir","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/pir.war","type":"war"},"children":[]},{"name":"inventory-summary","type":"applications","health":"ok","properties":{"App name":"inventory-summary","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/inventory-summary.war","type":"war"},"children":[]},{"name":"checklist","type":"applications","health":"ok","properties":{"App name":"checklist","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/checklist_new.war","type":"war"},"children":[]},{"name":"thirdparty","type":"applications","health":"ok","properties":{"App name":"thirdparty","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/thirdparty.war","type":"war"},"children":[]},{"name":"esp-userAuth-service","type":"applications","health":"ok","properties":{"App name":"esp-userAuth-service","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/esp-userAuth-service.war","type":"war"},"children":[]}]},{"name":"Datasources","type":"datasources","health":"ok","properties":{"Type":"Datasources"},"children":[{"id":"ESPJtsDataSource","name":"ESPJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPJtsDataSource"}},{"id":"LynxJtsDataSource","name":"LynxJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"LynxJtsDataSource"}}]},{"name":"Queues","type":"queues","health":"ok","properties":{"Type":"Queues"},"children":[{"id":"BulkMssOrderQueue","name":"BulkMssOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkMssOrderQueue"}},{"id":"GenisysOrderQueue","name":"GenisysOrderQueue","type":"queues","health":"ok","properties":{"Name":"GenisysOrderQueue"}},{"id":"ESPGenisysQueue","name":"ESPGenisysQueue","type":"queues","health":"ok","properties":{"Name":"ESPGenisysQueue"}},{"id":"HandoffQueue","name":"HandoffQueue","type":"queues","health":"ok","properties":{"Name":"HandoffQueue"}},{"id":"BulkOrderQueue","name":"BulkOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderQueue"}},{"id":"BulkLoadQueue","name":"BulkLoadQueue","type":"queues","health":"ok","properties":{"Name":"BulkLoadQueue"}},{"id":"SiteMoveQueue","name":"SiteMoveQueue","type":"queues","health":"ok","properties":{"Name":"SiteMoveQueue"}},{"id":"BulkOrderProcessorQueue","name":"BulkOrderProcessorQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderProcessorQueue"}},{"id":"MBQueue","name":"MBQueue","type":"queues","health":"ok","properties":{"Name":"MBQueue"}},{"id":"SPIMQueue","name":"SPIMQueue","type":"queues","health":"ok","properties":{"Name":"SPIMQueue"}},{"id":"OrderActivityQueue","name":"OrderActivityQueue","type":"queues","health":"ok","properties":{"Name":"OrderActivityQueue"}},{"id":"VDDSQueue","name":"VDDSQueue","type":"queues","health":"ok","properties":{"Name":"VDDSQueue"}},{"id":"NetProQueue","name":"NetProQueue","type":"queues","health":"ok","properties":{"Name":"NetProQueue"}},{"id":"PCQueue","name":"PCQueue","type":"queues","health":"ok","properties":{"Name":"PCQueue"}},{"id":"CompareViewQueue","name":"CompareViewQueue","type":"queues","health":"ok","properties":{"Name":"CompareViewQueue"}},{"id":"RapidMTOOrderQueue","name":"RapidMTOOrderQueue","type":"queues","health":"ok","properties":{"Name":"RapidMTOOrderQueue"}},{"id":"VRDMigrationQueue","name":"VRDMigrationQueue","type":"queues","health":"ok","properties":{"Name":"VRDMigrationQueue"}},{"id":"BulkRLCQueue","name":"BulkRLCQueue","type":"queues","health":"ok","properties":{"Name":"BulkRLCQueue"}},{"id":"BulkDQQueue","name":"BulkDQQueue","type":"queues","health":"ok","properties":{"Name":"BulkDQQueue"}},{"id":"iConfigQueue","name":"iConfigQueue","type":"queues","health":"ok","properties":{"Name":"IConfigQueue"}},{"id":"AutoProgressQueue","name":"AutoProgressQueue","type":"queues","health":"ok","properties":{"Name":"AutoProgressQueue"}},{"id":"E911UploadQueue","name":"E911UploadQueue","type":"queues","health":"ok","properties":{"Name":"E911UploadQueue"}},{"id":"CACustomDeleteUploadQueue","name":"CACustomDeleteUploadQueue","type":"queues","health":"ok","properties":{"Name":"CACustomDeleteUploadQueue"}},{"id":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer"}},{"id":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer"}}]}]},{"id":"tpalpesqva003","name":"AdminServer","type":"domainServer","health":"ok","properties":{"IPAddress":"tpalpesqva003","Domain":"Esp_prod_comm","Port":"4001","Type":"Admin Server","Cluster":"AdminServer"},"children":[{"name":"Datasources","type":"datasources","health":"ok","properties":{"Type":"Datasources"},"children":[{"id":"ESPJtsDataSource","name":"ESPJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPJtsDataSource"}},{"id":"LynxJtsDataSource","name":"LynxJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"LynxJtsDataSource"}}]},{"name":"Queues","type":"queues","health":"ok","properties":{"Type":"Queues"},"children":[{"id":"BulkMssOrderQueue","name":"BulkMssOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkMssOrderQueue"}},{"id":"GenisysOrderQueue","name":"GenisysOrderQueue","type":"queues","health":"ok","properties":{"Name":"GenisysOrderQueue"}},{"id":"ESPGenisysQueue","name":"ESPGenisysQueue","type":"queues","health":"ok","properties":{"Name":"ESPGenisysQueue"}},{"id":"HandoffQueue","name":"HandoffQueue","type":"queues","health":"ok","properties":{"Name":"HandoffQueue"}},{"id":"BulkOrderQueue","name":"BulkOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderQueue"}},{"id":"BulkLoadQueue","name":"BulkLoadQueue","type":"queues","health":"ok","properties":{"Name":"BulkLoadQueue"}},{"id":"SiteMoveQueue","name":"SiteMoveQueue","type":"queues","health":"ok","properties":{"Name":"SiteMoveQueue"}},{"id":"BulkOrderProcessorQueue","name":"BulkOrderProcessorQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderProcessorQueue"}},{"id":"MBQueue","name":"MBQueue","type":"queues","health":"ok","properties":{"Name":"MBQueue"}},{"id":"SPIMQueue","name":"SPIMQueue","type":"queues","health":"ok","properties":{"Name":"SPIMQueue"}},{"id":"OrderActivityQueue","name":"OrderActivityQueue","type":"queues","health":"ok","properties":{"Name":"OrderActivityQueue"}},{"id":"VDDSQueue","name":"VDDSQueue","type":"queues","health":"ok","properties":{"Name":"VDDSQueue"}},{"id":"NetProQueue","name":"NetProQueue","type":"queues","health":"ok","properties":{"Name":"NetProQueue"}},{"id":"PCQueue","name":"PCQueue","type":"queues","health":"ok","properties":{"Name":"PCQueue"}},{"id":"CompareViewQueue","name":"CompareViewQueue","type":"queues","health":"ok","properties":{"Name":"CompareViewQueue"}},{"id":"RapidMTOOrderQueue","name":"RapidMTOOrderQueue","type":"queues","health":"ok","properties":{"Name":"RapidMTOOrderQueue"}},{"id":"VRDMigrationQueue","name":"VRDMigrationQueue","type":"queues","health":"ok","properties":{"Name":"VRDMigrationQueue"}},{"id":"BulkRLCQueue","name":"BulkRLCQueue","type":"queues","health":"ok","properties":{"Name":"BulkRLCQueue"}},{"id":"BulkDQQueue","name":"BulkDQQueue","type":"queues","health":"ok","properties":{"Name":"BulkDQQueue"}},{"id":"iConfigQueue","name":"iConfigQueue","type":"queues","health":"ok","properties":{"Name":"IConfigQueue"}},{"id":"AutoProgressQueue","name":"AutoProgressQueue","type":"queues","health":"ok","properties":{"Name":"AutoProgressQueue"}},{"id":"E911UploadQueue","name":"E911UploadQueue","type":"queues","health":"ok","properties":{"Name":"E911UploadQueue"}},{"id":"CACustomDeleteUploadQueue","name":"CACustomDeleteUploadQueue","type":"queues","health":"ok","properties":{"Name":"CACustomDeleteUploadQueue"}},{"id":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer"}},{"id":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer"}}]}]},{"id":"tpalpesqva003","name":"esp_prod_comm_srv_01","type":"domainServer","health":"ok","properties":{"IPAddress":"tpalpesqva003","Domain":"Esp_prod_comm","Port":"4002","Type":"Managed Server","Cluster":"esp_prod_comm_srv_01"},"children":[{"name":"Applications","type":"applications","health":"ok","properties":{"Type":"Applications"},"children":[{"name":"inventory-summary","type":"applications","health":"ok","properties":{"App name":"inventory-summary","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/inventory-summary.war","type":"war"},"children":[]},{"name":"vzcare_web","type":"applications","health":"ok","properties":{"App name":"vzcare_web","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/vzcare_web.war","type":"war"},"children":[]},{"name":"m3-cloud-status","type":"applications","health":"ok","properties":{"App name":"m3-cloud-status","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/m3-cloud-status.war","type":"war"},"children":[]},{"name":"esp-self-service","type":"applications","health":"ok","properties":{"App name":"esp-self-service","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/esp-self-service.war","type":"war"},"children":[]},{"name":"pir","type":"applications","health":"ok","properties":{"App name":"pir","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/pir.war","type":"war"},"children":[]},{"name":"espvirtualservice","type":"applications","health":"ok","properties":{"App name":"espvirtualservice","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/espvirtualservice-1.0-SNAPSHOT.war","type":"war"},"children":[]},{"name":"esqv-web","type":"applications","health":"ok","properties":{"App name":"esqv-web","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/esqv-web.war","type":"war"},"children":[]},{"name":"ESP","type":"applications","health":"ok","properties":{"App name":"ESP","path":"/esp/esp_projects/12c/esp_prod_comm/applications","type":"ear"},"children":[]},{"name":"my-team-task","type":"applications","health":"ok","properties":{"App name":"my-team-task","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/my-team-task.war","type":"war"},"children":[]},{"name":"thirdparty","type":"applications","health":"ok","properties":{"App name":"thirdparty","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/thirdparty.war","type":"war"},"children":[]},{"name":"espmicroapps","type":"applications","health":"ok","properties":{"App name":"espmicroapps","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/espmicroapps.war","type":"war"},"children":[]},{"name":"checklist","type":"applications","health":"ok","properties":{"App name":"checklist","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/checklist_new.war","type":"war"},"children":[]},{"name":"bulkmtoui","type":"applications","health":"ok","properties":{"App name":"bulkmtoui","path":"/esp/esp_projects/12c/esp_prod_comm/applications/bulkmtoui","type":"war"},"children":[]},{"name":"esp-userAuth-service","type":"applications","health":"ok","properties":{"App name":"esp-userAuth-service","path":"/esp/esp_projects/12c/esp_prod_comm/autodeploy/esp-userAuth-service.war","type":"war"},"children":[]}]},{"name":"Datasources","type":"datasources","health":"ok","properties":{"Type":"Datasources"},"children":[{"id":"ESPJtsDataSource","name":"ESPJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPJtsDataSource"}},{"id":"LynxJtsDataSource","name":"LynxJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"LynxJtsDataSource"}}]},{"name":"Queues","type":"queues","health":"ok","properties":{"Type":"Queues"},"children":[{"id":"BulkMssOrderQueue","name":"BulkMssOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkMssOrderQueue"}},{"id":"GenisysOrderQueue","name":"GenisysOrderQueue","type":"queues","health":"ok","properties":{"Name":"GenisysOrderQueue"}},{"id":"ESPGenisysQueue","name":"ESPGenisysQueue","type":"queues","health":"ok","properties":{"Name":"ESPGenisysQueue"}},{"id":"HandoffQueue","name":"HandoffQueue","type":"queues","health":"ok","properties":{"Name":"HandoffQueue"}},{"id":"BulkOrderQueue","name":"BulkOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderQueue"}},{"id":"BulkLoadQueue","name":"BulkLoadQueue","type":"queues","health":"ok","properties":{"Name":"BulkLoadQueue"}},{"id":"SiteMoveQueue","name":"SiteMoveQueue","type":"queues","health":"ok","properties":{"Name":"SiteMoveQueue"}},{"id":"BulkOrderProcessorQueue","name":"BulkOrderProcessorQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderProcessorQueue"}},{"id":"MBQueue","name":"MBQueue","type":"queues","health":"ok","properties":{"Name":"MBQueue"}},{"id":"SPIMQueue","name":"SPIMQueue","type":"queues","health":"ok","properties":{"Name":"SPIMQueue"}},{"id":"OrderActivityQueue","name":"OrderActivityQueue","type":"queues","health":"ok","properties":{"Name":"OrderActivityQueue"}},{"id":"VDDSQueue","name":"VDDSQueue","type":"queues","health":"ok","properties":{"Name":"VDDSQueue"}},{"id":"NetProQueue","name":"NetProQueue","type":"queues","health":"ok","properties":{"Name":"NetProQueue"}},{"id":"PCQueue","name":"PCQueue","type":"queues","health":"ok","properties":{"Name":"PCQueue"}},{"id":"CompareViewQueue","name":"CompareViewQueue","type":"queues","health":"ok","properties":{"Name":"CompareViewQueue"}},{"id":"RapidMTOOrderQueue","name":"RapidMTOOrderQueue","type":"queues","health":"ok","properties":{"Name":"RapidMTOOrderQueue"}},{"id":"VRDMigrationQueue","name":"VRDMigrationQueue","type":"queues","health":"ok","properties":{"Name":"VRDMigrationQueue"}},{"id":"BulkRLCQueue","name":"BulkRLCQueue","type":"queues","health":"ok","properties":{"Name":"BulkRLCQueue"}},{"id":"BulkDQQueue","name":"BulkDQQueue","type":"queues","health":"ok","properties":{"Name":"BulkDQQueue"}},{"id":"iConfigQueue","name":"iConfigQueue","type":"queues","health":"ok","properties":{"Name":"IConfigQueue"}},{"id":"AutoProgressQueue","name":"AutoProgressQueue","type":"queues","health":"ok","properties":{"Name":"AutoProgressQueue"}},{"id":"E911UploadQueue","name":"E911UploadQueue","type":"queues","health":"ok","properties":{"Name":"E911UploadQueue"}},{"id":"CACustomDeleteUploadQueue","name":"CACustomDeleteUploadQueue","type":"queues","health":"ok","properties":{"Name":"CACustomDeleteUploadQueue"}},{"id":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer"}},{"id":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer"}}]}]}]},{"id":"esp_prov_comm","name":"esp_prov_comm","type":"domain","health":"ok","properties":{"Domain name":"Esp_prov_comm"},"children":[{"id":"tpalpesqva002","name":"AdminServer","type":"domainServer","health":"ok","properties":{"IPAddress":"tpalpesqva002","Domain":"Esp_prov_comm","Port":"6010","Type":"Admin Server","Cluster":"AdminServer"},"children":[{"name":"Datasources","type":"datasources","health":"ok","properties":{"Type":"Datasources"},"children":[{"id":"ESPJtsDataSource","name":"ESPJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPJtsDataSource"}},{"id":"LynxJtsDataSource","name":"LynxJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"LynxJtsDataSource"}}]},{"name":"Queues","type":"queues","health":"ok","properties":{"Type":"Queues"},"children":[{"id":"HandoffQueue","name":"HandoffQueue","type":"queues","health":"ok","properties":{"Name":"HandoffQueue"}},{"id":"BulkOrderQueue","name":"BulkOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderQueue"}},{"id":"BulkLoadQueue","name":"BulkLoadQueue","type":"queues","health":"ok","properties":{"Name":"BulkLoadQueue"}},{"id":"SiteMoveQueue","name":"SiteMoveQueue","type":"queues","health":"ok","properties":{"Name":"SiteMoveQueue"}},{"id":"BulkOrderProcessorQueue","name":"BulkOrderProcessorQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderProcessorQueue"}},{"id":"MBQueue","name":"MBQueue","type":"queues","health":"ok","properties":{"Name":"MBQueue"}},{"id":"SPIMQueue","name":"SPIMQueue","type":"queues","health":"ok","properties":{"Name":"SPIMQueue"}},{"id":"OrderActivityQueue","name":"OrderActivityQueue","type":"queues","health":"ok","properties":{"Name":"OrderActivityQueue"}},{"id":"VDDSQueue","name":"VDDSQueue","type":"queues","health":"ok","properties":{"Name":"VDDSQueue"}},{"id":"NetProQueue","name":"NetProQueue","type":"queues","health":"ok","properties":{"Name":"NetProQueue"}},{"id":"PCQueue","name":"PCQueue","type":"queues","health":"ok","properties":{"Name":"PCQueue"}},{"id":"CompareViewQueue","name":"CompareViewQueue","type":"queues","health":"ok","properties":{"Name":"CompareViewQueue"}},{"id":"RapidMTOOrderQueue","name":"RapidMTOOrderQueue","type":"queues","health":"ok","properties":{"Name":"RapidMTOOrderQueue"}},{"id":"VRDMigrationQueue","name":"VRDMigrationQueue","type":"queues","health":"ok","properties":{"Name":"VRDMigrationQueue"}},{"id":"BulkRLCQueue","name":"BulkRLCQueue","type":"queues","health":"ok","properties":{"Name":"BulkRLCQueue"}},{"id":"BulkDQQueue","name":"BulkDQQueue","type":"queues","health":"ok","properties":{"Name":"BulkDQQueue"}},{"id":"iConfigQueue","name":"iConfigQueue","type":"queues","health":"ok","properties":{"Name":"IConfigQueue"}},{"id":"AutoProgressQueue","name":"AutoProgressQueue","type":"queues","health":"ok","properties":{"Name":"AutoProgressQueue"}},{"id":"E911UploadQueue","name":"E911UploadQueue","type":"queues","health":"ok","properties":{"Name":"E911UploadQueue"}},{"id":"CACustomDeleteUploadQueue","name":"CACustomDeleteUploadQueue","type":"queues","health":"ok","properties":{"Name":"CACustomDeleteUploadQueue"}},{"id":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer"}},{"id":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer"}}]}]},{"id":"tpalpesqva002","name":"esp_prov_comm_srv_01","type":"domainServer","health":"ok","properties":{"IPAddress":"tpalpesqva002","Domain":"Esp_prov_comm","Port":"6011","Type":"Managed Server","Cluster":"esp_prov_comm_srv_01"},"children":[{"name":"Applications","type":"applications","health":"ok","properties":{"Type":"Applications"},"children":[{"name":"ESP","type":"applications","health":"ok","properties":{"App name":"ESP","path":"/esp/esp_projects/12c/esp_prov_comm/applications","type":"ear"},"children":[]}]},{"name":"Datasources","type":"datasources","health":"ok","properties":{"Type":"Datasources"},"children":[{"id":"ESPJtsDataSource","name":"ESPJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"ESPJtsDataSource"}},{"id":"LynxJtsDataSource","name":"LynxJtsDataSource","type":"datasources","health":"ok","properties":{"Name":"LynxJtsDataSource"}}]},{"name":"Queues","type":"queues","health":"ok","properties":{"Type":"Queues"},"children":[{"id":"HandoffQueue","name":"HandoffQueue","type":"queues","health":"ok","properties":{"Name":"HandoffQueue"}},{"id":"BulkOrderQueue","name":"BulkOrderQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderQueue"}},{"id":"BulkLoadQueue","name":"BulkLoadQueue","type":"queues","health":"ok","properties":{"Name":"BulkLoadQueue"}},{"id":"SiteMoveQueue","name":"SiteMoveQueue","type":"queues","health":"ok","properties":{"Name":"SiteMoveQueue"}},{"id":"BulkOrderProcessorQueue","name":"BulkOrderProcessorQueue","type":"queues","health":"ok","properties":{"Name":"BulkOrderProcessorQueue"}},{"id":"MBQueue","name":"MBQueue","type":"queues","health":"ok","properties":{"Name":"MBQueue"}},{"id":"SPIMQueue","name":"SPIMQueue","type":"queues","health":"ok","properties":{"Name":"SPIMQueue"}},{"id":"OrderActivityQueue","name":"OrderActivityQueue","type":"queues","health":"ok","properties":{"Name":"OrderActivityQueue"}},{"id":"VDDSQueue","name":"VDDSQueue","type":"queues","health":"ok","properties":{"Name":"VDDSQueue"}},{"id":"NetProQueue","name":"NetProQueue","type":"queues","health":"ok","properties":{"Name":"NetProQueue"}},{"id":"PCQueue","name":"PCQueue","type":"queues","health":"ok","properties":{"Name":"PCQueue"}},{"id":"CompareViewQueue","name":"CompareViewQueue","type":"queues","health":"ok","properties":{"Name":"CompareViewQueue"}},{"id":"RapidMTOOrderQueue","name":"RapidMTOOrderQueue","type":"queues","health":"ok","properties":{"Name":"RapidMTOOrderQueue"}},{"id":"VRDMigrationQueue","name":"VRDMigrationQueue","type":"queues","health":"ok","properties":{"Name":"VRDMigrationQueue"}},{"id":"BulkRLCQueue","name":"BulkRLCQueue","type":"queues","health":"ok","properties":{"Name":"BulkRLCQueue"}},{"id":"BulkDQQueue","name":"BulkDQQueue","type":"queues","health":"ok","properties":{"Name":"BulkDQQueue"}},{"id":"iConfigQueue","name":"iConfigQueue","type":"queues","health":"ok","properties":{"Name":"IConfigQueue"}},{"id":"AutoProgressQueue","name":"AutoProgressQueue","type":"queues","health":"ok","properties":{"Name":"AutoProgressQueue"}},{"id":"E911UploadQueue","name":"E911UploadQueue","type":"queues","health":"ok","properties":{"Name":"E911UploadQueue"}},{"id":"CACustomDeleteUploadQueue","name":"CACustomDeleteUploadQueue","type":"queues","health":"ok","properties":{"Name":"CACustomDeleteUploadQueue"}},{"id":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSStoreForwardQueueespServer"}},{"id":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer","type":"queues","health":"ok","properties":{"Name":"WSInternaljms.internal.queue.WSDupsEliminationMessageQueueespServer"}}]}]}]}]},{"name":"springboot","type":"Service","children":[{"children":[{"children":[]}]},{"name":"lynx-admin-service","children":[{"name":"166.50.187.73","properties":{},"children":[]}]},{"name":"lynx-admin-service","children":[{"name":"63.25.131.168","properties":{"port":"8091"},"children":[]}]}]}],"derivedHealth":"ok"},{"name":"Alerts","type":"Alert","health":"critical","properties":{"Number of sources":"2"},"children":[{"name":"newrelic","type":"Source","health":"critical","properties":{"Number of alerts":"3"},"children":[{"id":"6255c7ade1960a350b362b91","name":"Error percentage > 10% for at least 5 minutes on 'VBIT-ESQV-ESPWS-JAVA-PROD (fldlpesqva002:4011)'","type":"Alert","state":"open","health":"warning","properties":{"Description":"Error percentage > 10% for at least 5 minutes on 'VBIT-ESQV-ESPWS-JAVA-PROD (fldlpesqva002:4011)'"}},{"id":"6255ce0ce1960a350b362b9f","name":"Error percentage > 20% at least once in 5 minutes on 'VBIT-ESQV-ESPWS-JAVA-PROD (fldlpesqva001:4011)'","type":"Alert","state":"open","health":"critical","properties":{"Description":"Error percentage > 20% at least once in 5 minutes on 'VBIT-ESQV-ESPWS-JAVA-PROD (fldlpesqva001:4011)'"}},{"id":"6255ce0ce1960a350b362ba0","name":"Error percentage > 20% at least once in 5 minutes on 'VBIT-ESQV-ESPWS-JAVA-PROD (fldlpesqva002:4011)'","type":"Alert","state":"open","health":"critical","properties":{"Description":"Error percentage > 20% at least once in 5 minutes on 'VBIT-ESQV-ESPWS-JAVA-PROD (fldlpesqva002:4011)'"}}]},{"name":"hp-omi","type":"Source","health":"critical","properties":{"Number of alerts":"4"},"children":[{"id":"621eb866877f45795a2a5d68","name":"Node:          \nMessage group: APP\nApplication:   ov_disk_check\nObject:        0:/dev/mapper/vgapp-lvvarweblogic:/apps/opt/var/weblogic\nSeverity:      Critical\nText:          DISK SPACE: /apps/opt/var/weblogic is at 100%, threshold is 98% (Owner: APP)\n","type":"Alert","state":"open","health":"critical","properties":{"Description":"Node:          \nMessage group: APP\nApplication:   ov_disk_check\nObject:        0:/dev/mapper/vgapp-lvvarweblogic:/apps/opt/var/weblogic\nSeverity:      Critical\nText:          DISK SPACE: /apps/opt/var/weblogic is at 100%, threshold is 98% (Owner: APP)\n"}},{"id":"622b7abc34369e42b6dec775","name":"Node:          \nMessage group: Performance\nApplication:   alarmgen\nObject:        CPU\nSeverity:      Critical\nText:          \"CPU Utilization exceeded threshold of 95% and runq exceeded twice the number of cpus for 15 minutes\" START: 03/11/2022 11:30:00 (-b 1647016200 -e 1647016200)\n","type":"Alert","state":"open","health":"critical","properties":{"Description":"Node:          \nMessage group: Performance\nApplication:   alarmgen\nObject:        CPU\nSeverity:      Critical\nText:          \"CPU Utilization exceeded threshold of 95% and runq exceeded twice the number of cpus for 15 minutes\" START: 03/11/2022 11:30:00 (-b 1647016200 -e 1647016200)\n"}},{"id":"62524d26bbbb45295106ea65","name":"Node:          \nMessage group: Performance\nApplication:   alarmgen\nObject:        CPU\nSeverity:      Critical\nText:          \"CPU Utilization exceeded threshold of 95% and runq exceeded twice the number of cpus for 15 minutes\" START: 04/09/2022 23:10:00 (-b 1649560200 -e 1649560200)\n","type":"Alert","state":"open","health":"critical","properties":{"Description":"Node:          \nMessage group: Performance\nApplication:   alarmgen\nObject:        CPU\nSeverity:      Critical\nText:          \"CPU Utilization exceeded threshold of 95% and runq exceeded twice the number of cpus for 15 minutes\" START: 04/09/2022 23:10:00 (-b 1649560200 -e 1649560200)\n"}},{"id":"62524d27bbbb45295106ea66","name":"Node:          \nMessage group: Performance\nApplication:   alarmgen\nObject:        CPU\nSeverity:      Critical\nText:          \"CPU Utilization exceeded threshold of 95% and runq exceeded twice the number of cpus for 15 minutes\" START: 04/09/2022 23:10:00 (-b 1649560200 -e 1649560200)\n","type":"Alert","state":"open","health":"critical","properties":{"Description":"Node:          \nMessage group: Performance\nApplication:   alarmgen\nObject:        CPU\nSeverity:      Critical\nText:          \"CPU Utilization exceeded threshold of 95% and runq exceeded twice the number of cpus for 15 minutes\" START: 04/09/2022 23:10:00 (-b 1649560200 -e 1649560200)\n"}}]}]}]}
    
  setSelection(event) {
    this.d3Tree.setSelection(event)
  }

  resetSelection(event) {
    // this.topologyTemplate.resetSelection(event)
  }

  loadTopology(event) {
    // this.topologyTemplate._loadTopology(event)
  }
}