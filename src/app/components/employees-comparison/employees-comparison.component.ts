import { Component, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  NgApexchartsModule,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis | any;
  fill: ApexFill | any;
  tooltip: ApexTooltip | any;
  stroke: ApexStroke | any;
  legend: ApexLegend | any;
  toolbar: any;
  colors: string[] | any;
};

@Component({
  selector: "app-employees-comparison",
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: "./employees-comparison.component.html",
  styleUrl: "./employees-comparison.component.scss",
})
export class EmployeesComparisonComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [44, 55, 57, 56],
        },
        {
          data: [76, 85, 10, 98],
        },
      ],
      colors: ["#3c9df8", "#a1a1a1"],
      chart: {
        type: "bar",
        height: 250,
        width: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: ["(Apr/Jun)", "(Jul/Sep)", "(Oct/Dec)", "(Jan/Mar)"],
      },
      yaxis: {
        title: {
          text: "Comparison",
        },
      },
    };
  }
}
