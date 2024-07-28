import { style } from "@angular/animations";
import { Component, ViewChild } from "@angular/core";
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ChartComponent,
  NgApexchartsModule,
  ApexStroke,
  ApexFill,
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexNonAxisChartSeries | any;
  chart?: ApexChart | any;
  labels: string[] | any;
  plotOptions: ApexPlotOptions | any;
  fill: ApexFill | any;
  stroke: ApexStroke | any;
};

@Component({
  selector: "app-employee-analytics",
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: "./employee-analytics.component.html",
  styleUrl: "./employee-analytics.component.scss",
})
export class EmployeeAnalyticsComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [83],
      chart: {
        height: 250,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "60%",
          },
          dataLabels: {
            showOn: "always",
            name: {
              offsetY: 140,
              show: true,
              color: "#3486d3",
              fontSize: "30px",
            },
            value: {
              color: "#3486d3",
              fontSize: "30px",
              show: true,
              offsetY: -5,
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
    };
  }
}
