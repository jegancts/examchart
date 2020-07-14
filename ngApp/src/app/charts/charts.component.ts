import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import * as CanvasJS from 'D:/Documents/magic-master/ngApp/src/assets/canvasjs.min';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  loginUser () { this._router.navigate(['/events']);  } 

  constructor(private _router: Router) { }

  ngOnInit() {

    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      culture: "es",
      backgroundColor: "#fff",
      animationEnabled: true,
     
      title: {
        text: "Current Quarter Attendance"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: " English Exam " },
          { y: 90, label: "Maths Exam" },
          { y: 100, label: "Chemistry Exam" },
          { y: 89, label: "Physics Exam" },
          { y: 95, label: "Advanced  English Exam " }
      
        ]
      }]
    });
      
    chart.render();

/* next char start here */

    let chart1 = new CanvasJS.Chart("chartContainer1", {
      theme: "light2",
      animationEnabled: true,
      backgroundColor: "#fff",
      
      title:{
        text: "Pass Fail Rate"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
      
        dataPoints: [
          { y: 90, name: "Pass Rate" },
          { y: 10, name: "Fail Rate" }
    
        ]
      }]
    });
      
    chart1.render();

/* next char start here */

    var chart2 = new CanvasJS.Chart("chartContainer2", {
      theme: "light2",
      animationEnabled: true,
      backgroundColor: "#fff",
      title:{
        text: "Exam Qualified %"
        
      },
      data: [{
        type: "doughnut",
        startAngle: 60,
        //innerRadius: 60,
        indexLabelFontSize: 17,
        indexLabel: "{label} - #percent%",
        toolTipContent: "<b>{label}:</b> {y} (#percent%)",
        dataPoints: [
          { y: 78, label: "Maths Exam" },
          { y: 90, label: "Physics Exam" },
          { y: 98, label: "Chemistry Exam" },
          { y: 69, label: " English Exam "},
      
        ]
      }]
    });
    chart2.render();

/* next char start here */
var chart3 = new CanvasJS.Chart("chartContainer3", {
	animationEnabled: true,
  theme: "light2",
  backgroundColor: "#fff",
	title:{
		text: "Weekly Performance"
	},
	axisX:{
		valueFormatString: "DD MMM",
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		}
	},
	axisY: {
		title: "Number of Test Takers (in thousands)",
		crosshair: {
			enabled: true
		}
	},
	toolTip:{
		shared:true
	},  
	legend:{
		cursor:"pointer",
		verticalAlign: "bottom",
		horizontalAlign: "left",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data: [{
		type: "line",
		showInLegend: true,
		name: "Total Test Takers",
		markerType: "square",
		xValueFormatString: "DD MMM, YYYY",
		color: "green",
		dataPoints: [
			{ x: new Date(2017, 0, 3), y: 650 },
			{ x: new Date(2017, 0, 4), y: 700 },
			{ x: new Date(2017, 0, 5), y: 710 },
			{ x: new Date(2017, 0, 6), y: 658 },
			{ x: new Date(2017, 0, 7), y: 734 },
			{ x: new Date(2017, 0, 8), y: 963 },
			{ x: new Date(2017, 0, 9), y: 847 },
			{ x: new Date(2017, 0, 10), y: 853 },
			{ x: new Date(2017, 0, 11), y: 869 },
			{ x: new Date(2017, 0, 12), y: 943 },
			{ x: new Date(2017, 0, 13), y: 970 },
			{ x: new Date(2017, 0, 14), y: 869 },
			{ x: new Date(2017, 0, 15), y: 890 },
			{ x: new Date(2017, 0, 16), y: 930 }
		]
	}
]
});
chart3.render();

function toogleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else{
		e.dataSeries.visible = true;
	}
	chart3.render();
}

}
}
