import { Component, ViewChild } from "@angular/core";
import { NgApexchartsModule } from "ng-apexcharts";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexTooltip,
  ApexFill,
  ApexLegend,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | any;
  stroke: ApexStroke | any;
  title: ApexTitleSubtitle | any;
  tooltip: ApexTooltip | any;
  fill: ApexFill | any;
  legend: ApexLegend | any;
  colors: any;
};

@Component({
  selector: "app-employee-expenses",
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: "./employee-expenses.component.html",
  styleUrl: "./employee-expenses.component.scss",
})
export class EmployeeExpensesComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "bonuses",
          data: [150, 155, 141, 510],
        },
        {
          name: "entertainment",
          data: [610, 312, 133, 120],
        },
        {
          name: "claims",
          data: [210, 117, 111, 140],
        },
        {
          name: "salary",
          data: [310, 117, 111, 412],
        },
      ],
      chart: {
        type: "bar",
        height: 200,
        width: 240,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: 8,
          borderRadius: 5
        },
      },
      colors: ["#74affa", "#60d4f6", "#3c9df8", "#a1a1a1"],
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      fill: {
        opacity: 1,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
    };
  }
}
