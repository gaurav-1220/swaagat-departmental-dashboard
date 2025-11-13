import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryCardsComponent } from '../../components/summary-cards/summary-cards';
import { LineChartComponent } from '../../components/charts/line-chart/line-chart';
import { PieChartComponent } from '../../components/charts/pie-chart/pie-chart';
import { BarChartComponent } from '../../components/charts/bar-chart/bar-chart';
import { HorizontalBarChartComponent } from '../../components/charts/horizontal-bar-chart/horizontal-bar-chart';
import { ClaimStatusTableComponent } from '../../components/tables/claim-status-table/claim-status-table';
import { ClarificationTableComponent } from '../../components/tables/clarification-table/clarification-table';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    SummaryCardsComponent,
    // LineChartComponent,
    PieChartComponent,
    BarChartComponent,
    // HorizontalBarChartComponent,
    ClaimStatusTableComponent,
    ClarificationTableComponent
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent {
  
}
