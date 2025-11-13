import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService, DashboardSummary } from '../../services/dashboard.service';

interface SummaryCard {
  title: string;
  value: number;
  icon: string;
  color: string;
  change: string;
}

@Component({
  selector: 'app-summary-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-cards.component.html',
  styleUrl: './summary-cards.component.scss'
})
export class SummaryCardsComponent implements OnInit {
  cards: SummaryCard[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getSummaryData().subscribe((data: DashboardSummary) => {
      this.cards = [
        {
          title: 'Total Applications',
          value: data.total,
          icon: '📝',
          color: 'blue',
          change: '+12% from last month'
        },
        {
          title: 'Approved',
          value: data.approved,
          icon: '✅',
          color: 'green',
          change: '+8% from last month'
        },
        {
          title: 'Pending',
          value: data.pending,
          icon: '⏳',
          color: 'orange',
          change: '-3% from last month'
        },
        {
          title: 'Rejected',
          value: data.rejected,
          icon: '❌',
          color: 'red',
          change: '+2% from last month'
        }
      ];
    });
  }
}
