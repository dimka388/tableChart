import { Component, OnInit, OnChanges, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tableChart',
	moduleId: module.id,
  templateUrl: 'tablechart.component.html',
  styleUrls: ['tablechart.component.scss']
})

export class TablechartComponent implements OnInit, OnChanges {
	@ViewChild('table') private table: ElementRef;
  @Input() private data: any;
  @Input() private chartTitle: string;
  @Input() private columns: Array<string>;
  private chart: any;
	private dataLoaded: boolean = false;
  private maxValue: number = 0;
  private tableWidth: number = 0;
  private formatHelper = {
    name: (item) => item.name,
    supplierCount: (item) => item.supplierCount,
    spend: (item) => this.getSpendValue(item),
    percentageDifference: (item) => this.getChangeValue(item)
  }

  ngOnInit() {
    this.tableWidth = this.table.nativeElement.offsetWidth;
    this.dataLoaded = true;
    this.createChart();
    this.updateChart();
  }

  ngOnChanges() {
    this.updateChart();
  }

  getProgressWidth(item) {
    return item.spend / this.maxValue * this.tableWidth + 'px';
  }

  getSpendValue(item) {
    return `${this.data.metaData.currencySymbol} ${(item.spend / 1e6).toFixed(2)}`;
  }

  getChangeValue(item) {
    return `${item.percentageDifference.toFixed(2)} %`;
  }

  getColumnData(item, key, index) {
    if (this.formatHelper[key]) {
      return this.formatHelper[key](item);
    } else {
      return item[key];
    }
  }

  createChart() {
    this.maxValue = Math.max(...this.data.rowData.map(item => item.spend));
  }
  
  updateChart() {
    this.maxValue = Math.max(...this.data.rowData.map(item => item.spend));
  }

  constructor() { }
}
