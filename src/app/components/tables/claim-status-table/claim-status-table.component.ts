import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardService, ClaimStatus } from '../../../services/dashboard.service';

@Component({
  selector: 'app-claim-status-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './claim-status-table.component.html',
  styleUrl: './claim-status-table.component.scss'
})
export class ClaimStatusTableComponent implements OnInit {
  claimData: ClaimStatus[] = [];
  filteredData: ClaimStatus[] = [];
  displayedData: ClaimStatus[] = [];
  showAll = false;
  initialDisplayCount = 3;

  // Filter options
  selectedType = '';
  selectedPendingRange = '';
  types: string[] = [];
  pendingRanges = [
    { label: 'All', value: '' },
    { label: '1-3', value: '1-3' },
    { label: '4-6', value: '4-6' },
    { label: '7-9', value: '7-9' },
    { label: '10+', value: '10+' }
  ];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dashboardService.getClaimStatusData().subscribe(data => {
      this.claimData = data;
      this.extractFilterOptions();
      this.applyFilters();
    });
  }

  extractFilterOptions(): void {
    // Extract unique types
    this.types = [...new Set(this.claimData.map(item => item.type))].sort();
  }

  applyFilters(): void {
    // Start with all data
    let filtered = [...this.claimData];

    // Apply type filter
    if (this.selectedType) {
      filtered = filtered.filter(item => item.type === this.selectedType);
    }

    // Apply pending range filter
    if (this.selectedPendingRange) {
      filtered = filtered.filter(item => {
        const pending = item.pending;
        switch (this.selectedPendingRange) {
          case '1-3':
            return pending >= 1 && pending <= 3;
          case '4-6':
            return pending >= 4 && pending <= 6;
          case '7-9':
            return pending >= 7 && pending <= 9;
          case '10+':
            return pending >= 10;
          default:
            return true;
        }
      });
    }

    this.filteredData = filtered;
    this.updateDisplayedData();
  }

  updateDisplayedData(): void {
    if (this.showAll) {
      this.displayedData = this.filteredData;
    } else {
      this.displayedData = this.filteredData.slice(0, this.initialDisplayCount);
    }
  }

  onTypeChange(): void {
    this.applyFilters();
  }

  onPendingRangeChange(): void {
    this.applyFilters();
  }

  clearFilters(): void {
    this.selectedType = '';
    this.selectedPendingRange = '';
    this.applyFilters();
  }

  toggleViewAll(): void {
    this.showAll = !this.showAll;
    this.updateDisplayedData();
  }

  deleteClaim(type: string): void {
    if (confirm(`Are you sure you want to delete ${type} claim?`)) {
      this.dashboardService.deleteClaimStatus(type).subscribe(success => {
        if (success) {
          this.loadData();
        }
      });
    }
  }

  exportToCSV(): void {
    // Export filtered data instead of all data
    const headers = ['Type', 'Claim Submitted', 'Approved Claim', 'Claim Received', 'Pending'];
    const rows = this.filteredData.map(item => [
      item.type,
      item.claimSubmitted,
      item.approvedClaim,
      item.claimReceived,
      item.pending
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'claim-status-export.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
