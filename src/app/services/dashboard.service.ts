import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface DashboardSummary {
  total: number;
  approved: number;
  pending: number;
  rejected: number;
}

export interface ClaimStatus {
  type: string;
  claimSubmitted: number;
  approvedClaim: number;
  claimReceived: number;
  pending: number;
}

export interface ClarificationItem {
  applicationId: string;
  department: string;
  noc: string;
  clarification: string;
  status: 'missing' | 'uploaded';
  documentName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  // Static data for summary cards
  private summaryData: DashboardSummary = {
    total: 120,
    approved: 80,
    pending: 25,
    rejected: 15
  };

  // Static data for claim status table
  private claimStatusData: ClaimStatus[] = [
    {
      type: 'Home',
      claimSubmitted: 10,
      approvedClaim: 6,
      claimReceived: 6,
      pending: 4
    },
    {
      type: 'Medical',
      claimSubmitted: 20,
      approvedClaim: 14,
      claimReceived: 14,
      pending: 6
    },
    {
      type: 'Travel',
      claimSubmitted: 15,
      approvedClaim: 10,
      claimReceived: 8,
      pending: 5
    },
    {
      type: 'Education',
      claimSubmitted: 25,
      approvedClaim: 18,
      claimReceived: 18,
      pending: 7
    },
    {
      type: 'Other',
      claimSubmitted: 12,
      approvedClaim: 8,
      claimReceived: 7,
      pending: 4
    }
  ];

  // Static data for clarification table
  private clarificationData: ClarificationItem[] = [
    {
      applicationId: 'APP-2314',
      department: 'HR',
      noc: 'NOC-22',
      clarification: 'Document Missing',
      status: 'missing'
    },
    {
      applicationId: 'APP-8921',
      department: 'Finance',
      noc: 'NOC-03',
      clarification: 'Documents verified',
      status: 'uploaded',
      documentName: 'Aadhaar.pdf'
    },
    {
      applicationId: 'APP-5642',
      department: 'IT',
      noc: 'NOC-15',
      clarification: 'Document Missing',
      status: 'missing'
    },
    {
      applicationId: 'APP-7823',
      department: 'Operations',
      noc: 'NOC-08',
      clarification: 'Documents verified',
      status: 'uploaded',
      documentName: 'PAN.pdf'
    },
    {
      applicationId: 'APP-4521',
      department: 'Sales',
      noc: 'NOC-12',
      clarification: 'Documents verified',
      status: 'uploaded',
      documentName: 'Passport.pdf'
    }
  ];

  constructor() { }

  getSummaryData(): Observable<DashboardSummary> {
    return of(this.summaryData);
  }

  getClaimStatusData(): Observable<ClaimStatus[]> {
    return of(this.claimStatusData);
  }

  getClarificationData(): Observable<ClarificationItem[]> {
    return of(this.clarificationData);
  }

  deleteClaimStatus(type: string): Observable<boolean> {
    // Simulate deletion
    const index = this.claimStatusData.findIndex(item => item.type === type);
    if (index > -1) {
      this.claimStatusData.splice(index, 1);
      return of(true);
    }
    return of(false);
  }

  // Method to export claim status data to CSV
  exportClaimStatusToCSV(): string {
    const headers = ['Type', 'Claim Submitted', 'Approved Claim', 'Claim Received', 'Pending'];
    const rows = this.claimStatusData.map(item => [
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

    return csvContent;
  }
}
