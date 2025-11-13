import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule, ChartComponent, ApexChart, ApexXAxis, ApexYAxis, ApexDataLabels, ApexPlotOptions, ApexGrid, ApexTitleSubtitle } from 'ng-apexcharts';
import { DashboardService, ClaimStatus } from '../../../services/dashboard.service';

export type HorizontalBarChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  colors: string[];
  grid: ApexGrid;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-horizontal-bar-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './horizontal-bar-chart.html',
  styleUrl: './horizontal-bar-chart.scss'
})
export class HorizontalBarChartComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: Partial<HorizontalBarChartOptions>;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getClaimStatusData().subscribe((data: ClaimStatus[]) => {
      const categories = data.map(item => item.type);
      const pendingData = data.map(item => item.pending);
      
      this.chartOptions = {
        series: [
          {
            name: 'Pending Claims',
            data: pendingData
          }
        ],
        chart: {
          type: 'bar',
          height: 350,
          toolbar: {
            show: true
          }
        },
        colors: ['#FDA00F'],
        plotOptions: {
          bar: {
            horizontal: true,
            borderRadius: 6,
            barHeight: '60%'
          }
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: '12px',
            fontWeight: 600,
            colors: ['#fff']
          }
        },
        grid: {
          borderColor: '#e7e7e7'
        },
        xaxis: {
          categories: categories,
          title: {
            text: 'Number of Pending Claims'
          }
        },
        yaxis: {
          title: {
            text: 'Claim Type'
          }
        },
        title: {
          text: 'Pending Claims by Type',
          align: 'left',
          style: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#1e293b'
          }
        }
      };
    });
  }
}
