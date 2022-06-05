import { Component } from '@angular/core';

@Component({
  selector: 'mtl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Matilda Library';

  chartData = {
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
        "title": "b6vv",
        "target": "etnirearch-awseast.verizon.com",
      },
      {
        "source": "CDEF",
        "title": "b6vv",
        "target": "etnirearch-awseast.verizon.com",
      }
    ]
  };

  nodeData = { "nodes": [{ "id": "721", "application_id": 721, "name": "test-1", "category": 1, "info": { "Name": "test-1", "Status": "Verified" } }, { "id": "722", "application_id": 722, "name": "sample.war", "category": 1, "info": { "Name": "sample.war", "Status": "Verified" } }, { "id": "723", "application_id": 723, "name": "sample1.war", "category": 1, "info": { "Name": "sample1.war", "Status": "Verified" } }, { "id": "724", "application_id": 724, "name": "Kafka1", "category": 1, "info": { "Name": "Kafka1", "Status": "Verified" } }, { "id": "727", "application_id": 727, "name": "QAAug19", "category": 1, "info": { "Name": "QAAug19", "Status": "Verified" } }, { "id": "728", "application_id": 728, "name": "spring-mvc-example", "category": 1, "info": { "Name": "spring-mvc-example", "Status": "Verified" } }, { "id": "729", "application_id": 729, "name": "TestApp21", "category": 1, "info": { "Name": "TestApp21", "Status": "Verified" } }, { "id": "730", "application_id": 730, "name": "Kafka", "category": 1, "info": { "Name": "Kafka", "Status": "Verified" } }, { "id": "731", "application_id": 731, "name": "Webapp", "category": 1, "info": { "Name": "Webapp", "Status": "Verified" } }, { "id": "732", "application_id": 732, "name": "Test_1", "category": 1, "info": { "Name": "Test_1", "Status": "Verified" } }, { "id": "733", "application_id": 733, "name": "Kafka_1", "category": 1, "info": { "Name": "Kafka_1", "Status": "Verified" } }, { "id": "734", "application_id": 734, "name": "TestApp33", "category": 1, "info": { "Name": "TestApp33", "Status": "Verified" } }, { "id": "735", "application_id": 735, "name": "Test12345", "category": 1, "info": { "Name": "Test12345", "Status": "Verified" } }, { "id": "736", "application_id": 736, "name": "test_add_App_1117", "category": 1, "info": { "Name": "test_add_App_1117", "Status": "Verified" } }, { "id": "737", "application_id": 737, "name": "MysqlApp", "category": 1, "info": { "Name": "MysqlApp", "Status": "Verified" } }, { "id": "738", "application_id": 738, "name": "GroupApp1", "category": 1, "info": { "Name": "GroupApp1", "Status": "Verified" } }, { "id": "739", "application_id": 739, "name": "ManagedApp1", "category": 1, "info": { "Name": "ManagedApp1", "Status": "Verified" } }], "links": [], "categories": [{ "name": "Category0", "symbol": "image://../assets/img/svg/topology/application.svg", "icon": "image://../assets/img/svg/topology/application.svg" }, { "name": "Category1", "symbol": "image://../assets/img/svg/topology/application.svg", "icon": "image://../assets/img/svg/topology/application.svg" }] };


  demoData = {
    "nodes": [
      {
        "id": 2,
        "application_id": 2,
        "name": "MatDisc",
        "category": 1,
        "info": {
          "Name": "MatDisc",
          "Status": "Verified"
        }
      },
      {
        "id": 3,
        "application_id": 3,
        "name": "MatMigrate",
        "category": 1,
        "info": {
          "Name": "MatMigrate",
          "Status": "Verified"
        }
      },
      {
        "id": 5,
        "application_id": 5,
        "name": "Aiops",
        "category": 1,
        "info": {
          "Name": "Aiops",
          "Status": "Verified"
        }
      },
      {
        "id": 6,
        "application_id": 6,
        "name": "RootApplication",
        "category": 1,
        "info": {
          "Name": "RootApplication",
          "Status": "Verified"
        }
      },
      {
        "id": 4,
        "application_id": 4,
        "name": "Cello",
        "category": 1,
        "info": {
          "Name": "Cello",
          "Status": "Verified"
        }
      },
      {
        "id": 11,
        "application_id": 11,
        "name": "matilda-dsc",
        "category": 1,
        "info": {
          "Name": "matilda-dsc",
          "Status": "Verified"
        }
      },
      {
        "id": 12,
        "application_id": 12,
        "name": "Discovery",
        "category": 1,
        "info": {
          "Name": "Discovery",
          "Status": "Verified"
        }
      },
      {
        "id": 7,
        "application_id": 7,
        "name": "DBMigration",
        "category": 1,
        "info": {
          "Name": "DBMigration",
          "Status": "Verified"
        }
      }
    ],
    "links": [
      {
        "id": "link_id_2",
        "name": "MatDisc - MatMigrate",
        "source": 2,
        "target": 3,
        "info": {
          "Application": "MatDisc",
          "Dependent Application": "MatMigrate",
          "Dependency Type": "Infrastructure",
          "Status": "Verified"
        }
      },
      {
        "id": "link_id_3",
        "name": "MatDisc - Aiops",
        "source": 2,
        "target": 5,
        "info": {
          "Application": "MatDisc",
          "Dependent Application": "Aiops",
          "Dependency Type": "Infrastructure",
          "Status": "Verified"
        }
      },
      {
        "id": "link_id_4",
        "name": "MatDisc - RootApplication",
        "source": 2,
        "target": 6,
        "info": {
          "Application": "MatDisc",
          "Dependent Application": "RootApplication",
          "Dependency Type": "Infrastructure",
          "Status": "Verified"
        }
      },
      {
        "id": "link_id_6",
        "name": "MatMigrate - MatDisc",
        "source": 3,
        "target": 2,
        "info": {
          "Application": "MatMigrate",
          "Dependent Application": "MatDisc",
          "Dependency Type": "Infrastructure",
          "Status": "Verified"
        }
      },
      {
        "id": "link_id_7",
        "name": "MatMigrate - Aiops",
        "source": 3,
        "target": 5,
        "info": {
          "Application": "MatMigrate",
          "Dependent Application": "Aiops",
          "Dependency Type": "Infrastructure",
          "Status": "Verified"
        }
      },
      {
        "id": "link_id_8",
        "name": "MatMigrate - RootApplication",
        "source": 3,
        "target": 6,
        "info": {
          "Application": "MatMigrate",
          "Dependent Application": "RootApplication",
          "Dependency Type": "Infrastructure",
          "Status": "Verified"
        }
      },
      {
        "id": "link_id_10",
        "name": "Cello - matilda-dsc",
        "source": 4,
        "target": 11,
        "info": {
          "Application": "Cello",
          "Dependent Application": "matilda-dsc",
          "Dependency Type": "Infrastructure",
          "Status": "Verified"
        }
      },
      {
        "id": "link_id_11",
        "name": "Cello - Discovery",
        "source": 4,
        "target": 12,
        "info": {
          "Application": "Cello",
          "Dependent Application": "Discovery",
          "Dependency Type": "Infrastructure",
          "Status": "Verified"
        }
      },
      {
        "id": "link_id_13",
        "name": "Aiops - MatDisc",
        "source": 5,
        "target": 2,
        "info": {
          "Application": "Aiops",
          "Dependent Application": "MatDisc",
          "Dependency Type": "Infrastructure",
          "Status": "Verified"
        }
      },
      {
        "id": "link_id_14",
        "name": "Aiops - MatMigrate",
        "source": 5,
        "target": 3,
        "info": {
          "Application": "Aiops",
          "Dependent Application": "MatMigrate",
          "Dependency Type": "Infrastructure",
          "Status": "Verified"
        }
      },
      {
        "id": "link_id_15",
        "name": "Aiops - RootApplication",
        "source": 5,
        "target": 6,
        "info": {
          "Application": "Aiops",
          "Dependent Application": "RootApplication",
          "Dependency Type": "Infrastructure",
          "Status": "Verified"
        }
      },
      {
        "id": "link_id_16",
        "name": "Aiops - DBMigration",
        "source": 5,
        "target": 7,
        "info": {
          "Application": "Aiops",
          "Dependent Application": "DBMigration",
          "Dependency Type": "Infrastructure",
          "Status": "Verified"
        }
      },
      {
        "id": "link_id_17",
        "name": "Aiops - Discovery",
        "source": 5,
        "target": 12,
        "info": {
          "Application": "Aiops",
          "Dependent Application": "Discovery",
          "Dependency Type": "Infrastructure",
          "Status": "Verified"
        }
      },
      {
        "id": "link_id_19",
        "name": "RootApplication - MatDisc",
        "source": 6,
        "target": 2,
        "info": {
          "Application": "RootApplication",
          "Dependent Application": "MatDisc",
          "Dependency Type": "Infrastructure",
          "Status": "Verified"
        }
      },
      {
        "id": "link_id_20",
        "name": "RootApplication - MatMigrate",
        "source": 6,
        "target": 3,
        "info": {
          "Application": "RootApplication",
          "Dependent Application": "MatMigrate",
          "Dependency Type": "Infrastructure",
          "Status": "Verified"
        }
      },
      {
        "id": "link_id_21",
        "name": "RootApplication - Aiops",
        "source": 6,
        "target": 5,
        "info": {
          "Application": "RootApplication",
          "Dependent Application": "Aiops",
          "Dependency Type": "Infrastructure",
          "Status": "Verified"
        }
      },
      {
        "id": "link_id_23",
        "name": "DBMigration - Aiops",
        "source": 7,
        "target": 5,
        "info": {
          "Application": "DBMigration",
          "Dependent Application": "Aiops",
          "Dependency Type": "Infrastructure",
          "Status": "Verified"
        }
      },
      {
        "id": "link_id_25",
        "name": "matilda-dsc - Cello",
        "source": 11,
        "target": 4,
        "info": {
          "Application": "matilda-dsc",
          "Dependent Application": "Cello",
          "Dependency Type": "Infrastructure",
          "Status": "Verified"
        }
      },
      {
        "id": "link_id_26",
        "name": "matilda-dsc - Discovery",
        "source": 11,
        "target": 12,
        "info": {
          "Application": "matilda-dsc",
          "Dependent Application": "Discovery",
          "Dependency Type": "Infrastructure",
          "Status": "Verified"
        }
      },
      {
        "id": "link_id_28",
        "name": "Discovery - Cello",
        "source": 12,
        "target": 4,
        "info": {
          "Application": "Discovery",
          "Dependent Application": "Cello",
          "Dependency Type": "Infrastructure",
          "Status": "Verified"
        }
      },
      {
        "id": "link_id_29",
        "name": "Discovery - Aiops",
        "source": 12,
        "target": 5,
        "info": {
          "Application": "Discovery",
          "Dependent Application": "Aiops",
          "Dependency Type": "Infrastructure",
          "Status": "Verified"
        }
      },
      {
        "id": "link_id_30",
        "name": "Discovery - matilda-dsc",
        "source": 12,
        "target": 11,
        "info": {
          "Application": "Discovery",
          "Dependent Application": "matilda-dsc",
          "Dependency Type": "Infrastructure",
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

}
