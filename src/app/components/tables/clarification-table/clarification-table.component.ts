import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardService, ClarificationItem } from '../../../services/dashboard.service';

@Component({
  selector: 'app-clarification-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clarification-table.component.html',
  styleUrl: './clarification-table.component.scss'
})
export class ClarificationTableComponent implements OnInit {
  clarificationData: ClarificationItem[] = [];
  filteredData: ClarificationItem[] = [];
  displayedData: ClarificationItem[] = [];
  showAll = false;
  initialDisplayCount = 3;

  // Filter options
  searchText = '';
  selectedDepartment = '';
  selectedNoc = '';
  departments: string[] = [];
  nocs: string[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getClarificationData().subscribe(data => {
      this.clarificationData = data;
      this.extractFilterOptions();
      this.applyFilters();
    });
  }

  extractFilterOptions(): void {
    // Extract unique departments
    this.departments = [...new Set(this.clarificationData.map(item => item.department))].sort();
    
    // Extract unique NOCs
    this.nocs = [...new Set(this.clarificationData.map(item => item.noc))].sort();
  }

  applyFilters(): void {
    // Start with all data
    let filtered = [...this.clarificationData];

    // Apply search filter
    if (this.searchText.trim()) {
      const searchLower = this.searchText.toLowerCase();
      filtered = filtered.filter(item =>
        item.applicationId.toLowerCase().includes(searchLower) ||
        item.department.toLowerCase().includes(searchLower) ||
        item.noc.toLowerCase().includes(searchLower) ||
        item.clarification.toLowerCase().includes(searchLower) ||
        (item.documentName && item.documentName.toLowerCase().includes(searchLower))
      );
    }

    // Apply department filter
    if (this.selectedDepartment) {
      filtered = filtered.filter(item => item.department === this.selectedDepartment);
    }

    // Apply NOC filter
    if (this.selectedNoc) {
      filtered = filtered.filter(item => item.noc === this.selectedNoc);
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

  onSearchChange(): void {
    this.applyFilters();
  }

  onDepartmentChange(): void {
    this.applyFilters();
  }

  onNocChange(): void {
    this.applyFilters();
  }

  clearFilters(): void {
    this.searchText = '';
    this.selectedDepartment = '';
    this.selectedNoc = '';
    this.applyFilters();
  }

  toggleViewAll(): void {
    this.showAll = !this.showAll;
    this.updateDisplayedData();
  }

  exportToCSV(): void {
    const headers = ['Application ID', 'Department', 'NOC', 'Clarification', 'Status', 'Document'];
    // Export filtered data instead of all data
    const rows = this.filteredData.map(item => [
      item.applicationId,
      item.department,
      item.noc,
      item.clarification,
      item.status,
      item.documentName || 'N/A'
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
      link.setAttribute('download', 'clarification-export.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  deleteRecord(applicationId: string): void {
    if (confirm(`Are you sure you want to delete application ${applicationId}?`)) {
      this.clarificationData = this.clarificationData.filter(item => item.applicationId !== applicationId);
      this.applyFilters();
    }
  }
}
