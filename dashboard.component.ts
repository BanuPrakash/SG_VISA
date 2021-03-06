import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    /* accordian */
    index = -1;
    openNext() {
        this.index = (this.index === 3) ? 0 : this.index + 1;
      }
    
      openPrev() {
        this.index = (this.index <= 0) ? 3 : this.index - 1;
      }
    /* end accordian */
  employees  = [
    {
      "id": 1,
      "firstName": "Rachel",
      "lastName": "Green ",
      "gender": "female",
      "address": "Blore"
    },
    {
      "id": 2,
      "firstName": "Chandler",
      "lastName": "Bing",
      "gender": "male",
      "address": "West Street"
    },
    {
      "id": 3,
      "firstName": "Joey",
      "lastName": "Tribbiani",
      "gender": "male",
      "address": "some address"
    },
    {
      "id": 4,
      "firstName": "Monica",
      "lastName": "Geller",
      "gender": "female",
      "address": "some address"
    },
    {
      "id": 5,
      "firstName": "Ross",
      "lastName": "Geller",
      "gender": "male",
      "address": "some address "
    },
     {
      "id": 6,
      "firstName": "Phoebe",
      "lastName": "Buffay",
      "gender": "female",
      "address": "some address"
    }
  ];
  
  orders = [
    {
        "orddate":"10/06/2017",
        "orderId":"10",
        "status":"pending",
        "orderToal":"2000",
        "totalLines":"4",
        "supplierName":"Xyz Stationaries",
        "lines":[
            {
                "orderlineId":101,
                "productID":"123",
                "productName":"Bottle",
                "qty":"20",
                "unitPrice":"10",
                "linePrice":"200"
            },
            {
                "orderlineId":102,
                "productID":"124",
                "productName":"Pen",
                "qty":"10",
                "unitPrice":"30",
                "linePrice":"300"
            },
            {
                "orderlineId":103,
                "productID":"124",
                "productName":"Head Phones",
                "qty":"2",
                "unitPrice":"500",
                "linePrice":"1000"
            },
            {
                "orderlineId":104,
                "productID":"125",
                "productName":"Charger",
                "qty":"5",
                "unitPrice":"100",
                "linePrice":"500"
            }
        ]
    },
    {
        "orddate":"10/06/2017",
        "orderId":"20",
        "status":"comfirmed",
        "orderToal":"2500",
        "totalLines":"3",
        "supplierName":"ABC Stationaries",
        "lines":[
            {
                "orderlineId":201,
                "productID":"124",
                "productName":"Head Phones",
                "qty":"2",
                "unitPrice":"500",
                "linePrice":"1000"
            },
            {
                "orderlineId":202,
                "productID":"125",
                "productName":"Charger",
                "qty":"15",
                "unitPrice":"100",
                "linePrice":"1500"
            }
        ]
    },
    {
        "orddate":"10/02/2017",
        "orderId":"30",
        "status":"pending",
        "orderToal":"2000",
        "totalLines":"4",
        "supplierName":"Henedy Stationaries",
        "lines":[
            {
                "orderlineId":301,
                "productID":"123",
                "productName":"Bottle",
                "qty":"20",
                "unitPrice":"10",
                "linePrice":"200"
            },
            {
                "orderlineId":302,
                "productID":"124",
                "productName":"Pen",
                "qty":"10",
                "unitPrice":"30",
                "linePrice":"300"
            },
            {
                "orderlineId":303,
                "productID":"124",
                "productName":"Head Phones",
                "qty":"2",
                "unitPrice":"500",
                "linePrice":"1000"
            },
            {
                "orderlineId":304,
                "productID":"125",
                "productName":"Charger",
                "qty":"5",
                "unitPrice":"100",
                "linePrice":"500"
            }
        ]
    },
    {
        "orddate":"10/02/2017",
        "orderId":"40",
        "status":"comfirmed",
        "orderToal":"2500",
        "totalLines":"3",
        "supplierName":"Hillary Stationaries",
        "lines":[
            {
                "orderlineId":401,
                "productID":"124",
                "productName":"Head Phones",
                "qty":"2",
                "unitPrice":"500",
                "linePrice":"1000"
            },
            {
                "orderlineId":402,
                "productID":"125",
                "productName":"Charger",
                "qty":"15",
                "unitPrice":"100",
                "linePrice":"1500"
            }
        ]
    },
    {
        "orddate":"10/03/2017",
        "orderId":"50",
        "status":"pending",
        "orderToal":"2000",
        "totalLines":"4",
        "supplierName":"John Stationaries",
        "lines":[
            {
                "orderlineId":501,
                "productID":"123",
                "productName":"Bottle",
                "qty":"20",
                "unitPrice":"10",
                "linePrice":"200"
            },
            {
                "orderlineId":502,
                "productID":"124",
                "productName":"Pen",
                "qty":"10",
                "unitPrice":"30",
                "linePrice":"300"
            },
            {
                "orderlineId":503,
                "productID":"124",
                "productName":"Head Phones",
                "qty":"2",
                "unitPrice":"500",
                "linePrice":"1000"
            },
            {
                "orderlineId":504,
                "productID":"125",
                "productName":"Charger",
                "qty":"5",
                "unitPrice":"100",
                "linePrice":"500"
            }
        ]
    },
    {
        "orddate":"10/07/2017",
        "orderId":"60",
        "status":"comfirmed",
        "orderToal":"2500",
        "totalLines":"3",
        "supplierName":"Shorien Stationaries",
        "lines":[
            {
                "orderlineId":601,
                "productID":"124",
                "productName":"Head Phones",
                "qty":"2",
                "unitPrice":"500",
                "linePrice":"1000"
            },
            {
                "orderlineId":602,
                "productID":"125",
                "productName":"Charger",
                "qty":"15",
                "unitPrice":"100",
                "linePrice":"1500"
            }
        ]
    }
];
    selectedEmployee: any;
    newEmployee: boolean;
    displayDialog: boolean;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    
  }

  addEmployee() {
    this.newEmployee = true;
    this.selectedEmployee = {};
    this.displayDialog = true;
}
save() {
    let employees = [...this.employees];
    if (this.newEmployee) {
        employees.push(this.selectedEmployee);
        this.messageService.add({severity:'success', summary:'Employee Message', detail:'Employee added!!'});
    } else {
         employees[this.selectedEmployee.id -1] = this.selectedEmployee;
         this.messageService.add({severity:'success', summary:'Employee Message', detail:'Employee edited!!'});
    }
    this.employees = employees;
    this.selectedEmployee = null;
    this.displayDialog = false;
}

  onRowSelectCRUD(event: any) {
    this.newEmployee = false;
    this.selectedEmployee = Object.assign({}, event.data);
    this.displayDialog = true;
}
}