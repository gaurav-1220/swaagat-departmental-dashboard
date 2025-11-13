import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule, ChartComponent, ApexChart, ApexXAxis, ApexDataLabels, ApexStroke, ApexMarkers, ApexYAxis, ApexGrid, ApexTitleSubtitle, ApexLegend } from 'ng-apexcharts';
import { DashboardService, DashboardSummary } from '../../../services/dashboard.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getSummaryData().subscribe((data: DashboardSummary) => {
      this.chartOptions = {
        series: [
          {
            name: 'Approved',
            data: [45, 52, 58, 65, 70, 75, 80]
          },
          {
            name: 'Pending',
            data: [35, 32, 30, 28, 27, 26, 25]
          },
          {
            name: 'Rejected',
            data: [8, 10, 11, 13, 14, 14, 15]
          }
        ],
        chart: {
          height: 350,
          type: 'line',
          toolbar: {
            show: true
          },
          zoom: {
            enabled: false
          }
        },
        colors: ['#4CAF50', '#FF9800', '#F44336'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        markers: {
          size: 5,
          hover: {
            size: 7
          }
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
          }
        },
        xaxis: {
          categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
          title: {
            text: 'Timeline'
          }
        },
        yaxis: {
          title: {
            text: 'Number of Applications'
          },
          min: 0
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right'
        },
        title: {
          text: 'Applications Progress',
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
