import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-tableChart',
	moduleId: module.id,
  templateUrl: 'barchart.component.html',
  styleUrls: ['barchart.component.scss']
})

export class BarchartComponent implements OnInit, OnChanges {
  @Input() private data: any;
  @Input() private chartTitle: string;
  private chart: any;
	private dataLoaded: boolean = false;
	private maxValue: number = 0;
  
  constructor() { }
  
  ngOnInit() {
    this.dataLoaded = true;
    this.createChart();
    this.updateChart();
  }

  ngOnChanges() {
    this.updateChart();
  }

  createChart() {
    this.maxValue = Math.max(...this.data.rowData.map(item => item.spend));
  }
  
  updateChart() {
    this.maxValue = Math.max(...this.data.rowData.map(item => item.spend));
  }
}
