import { Component, OnInit } from '@angular/core';
declare let d3: any;

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  options;
  data;
  ngOnInit() {
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.2f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'Products'
        },
        yAxis: {
          axisLabel: 'Orders',
          axisLabelDistance: -10
        }
      }
    }
    this.data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label" : "Bar Soap" ,
            "value" : 36
          } ,
          {
            "label" : "Body Cream" ,
            "value" : 44
          } ,
          {
            "label" : "Body Lotion" ,
            "value" : 39
          } ,
          {
            "label" : "Body Oil" ,
            "value" : 46
          } ,
          {
            "label" : "Cracked Heel Treatment" ,
            "value" : 28
          } ,
          {
            "label" : "Face Mask" ,
            "value" : 38
          } ,
          {
            "label" : "Facial Soap" ,
            "value" : 10
          } ,
          {
            "label" : "Foot Cream" ,
            "value" : 30
          },
          {
            "label" : "Hand Cream" ,
            "value" : 51
          } ,
          {
            "label" : "Hand Soap" ,
            "value" : 19
          } ,
          {
            "label" : "Shower Gel" ,
            "value" : 39
          }
        ]
      }
    ];
  }



}