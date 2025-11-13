import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryCardsComponent } from '../../components/summary-cards/summary-cards.component';
import { LineChartComponent } from '../../components/charts/line-chart/line-chart.component';
import { PieChartComponent } from '../../components/charts/pie-chart/pie-chart.component';
import { BarChartComponent } from '../../components/charts/bar-chart/bar-chart.component';
import { HorizontalBarChartComponent } from '../../components/charts/horizontal-bar-chart/horizontal-bar-chart.component';
import { ClaimStatusTableComponent } from '../../components/tables/claim-status-table/claim-status-table.component';
import { ClarificationTableComponent } from '../../components/tables/clarification-table/clarification-table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    SummaryCardsComponent,
    LineChartComponent,
    PieChartComponent,
    BarChartComponent,
    HorizontalBarChartComponent,
    ClaimStatusTableComponent,
    ClarificationTableComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
}
