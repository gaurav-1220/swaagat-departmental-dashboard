import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardService, ClarificationItem } from '../../../services/dashboard.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-clarification-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clarification-table.html',
  styleUrl: './clarification-table.scss'
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

  exportToExcel(): void {
    // Prepare data for Excel export
    const exportData = this.filteredData.map(item => ({
      'Application ID': item.applicationId,
      'Department': item.department,
      'NOC': item.noc,
      'Clarification': item.clarification,
      'Status': item.status,
      'Document': item.documentName || 'N/A'
    }));

    // Create worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportData);

    // Set column widths
    const colWidths = [
      { wch: 15 }, // Application ID
      { wch: 15 }, // Department
      { wch: 12 }, // NOC
      { wch: 25 }, // Clarification
      { wch: 12 }, // Status
      { wch: 20 }  // Document
    ];
    ws['!cols'] = colWidths;

    // Create workbook and add worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Clarification Required');

    // Generate Excel file and download
    const fileName = `clarification-required-${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(wb, fileName);
  }

  deleteRecord(applicationId: string): void {
    if (confirm(`Are you sure you want to delete application ${applicationId}?`)) {
      this.clarificationData = this.clarificationData.filter(item => item.applicationId !== applicationId);
      this.applyFilters();
    }
  }
}
