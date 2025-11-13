# Application Response Dashboard - Complete Documentation

![Departmental Dashboard Screenshot](https://i.ibb.co/9khP8M15/Screenshot-2025-11-13-171804.png) <br>
![Departmental Dashboard Screenshot](https://i.ibb.co/B5ww7YD7/Screenshot-2025-11-13-171816.png) <br>
![Departmental Dashboard Screenshot](https://i.ibb.co/LmrWWsV/Screenshot-2025-11-13-171830.png)



## Table of Contents
1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Features](#features)
5. [Components Documentation](#components-documentation)
6. [Services](#services)
7. [Routing](#routing)
8. [Styling & Theming](#styling--theming)
9. [Responsive Design](#responsive-design)
10. [Data Flow](#data-flow)
11. [Setup & Installation](#setup--installation)
12. [Build & Deployment](#build--deployment)
13. [Future Enhancements](#future-enhancements)

---

## Project Overview

**Application Response Dashboard** is a production-ready Angular 20 admin dashboard designed to manage and visualize application data, claim statuses, and clarification requests. The dashboard provides real-time insights through interactive charts, data tables, and summary cards.

### Key Highlights
- Built with **Angular 20** (Standalone Components)
- Modern UI with professional blue, white, gray, and green color scheme
- Fully responsive design (mobile, tablet, desktop)
- Interactive charts with export capabilities
- Data tables with CRUD operations and CSV export
- Collapsible sidebar navigation

---

## Technologies Used

### Core Technologies
- **Angular**: 20.x (Standalone Components, Signals)
- **TypeScript**: Latest version
- **SCSS**: For styling
- **RxJS**: For reactive data management

### Libraries & Dependencies
- **ng-apexcharts**: ^2.x (Chart visualization)
- **apexcharts**: ^3.x (Chart library)
- **xlsx**: ^0.18.x (Excel export functionality)
- **Angular Router**: For navigation
- **Angular Forms**: For two-way data binding in filters

### Development Tools
- **Angular CLI**: For project scaffolding and build
- **ESBuild**: Fast bundler for development
- **TypeScript Compiler**: Code transpilation

---

## Project Structure

```
application-response/
├── src/
│   ├── app/
│   │   ├── components/           # Reusable components
│   │   │   ├── sidebar/          # Navigation sidebar
│   │   │   │   ├── sidebar.ts
│   │   │   │   ├── sidebar.html
│   │   │   │   └── sidebar.scss
│   │   │   ├── summary-cards/    # Dashboard summary cards
│   │   │   │   ├── summary-cards.ts
│   │   │   │   ├── summary-cards.html
│   │   │   │   └── summary-cards.scss
│   │   │   ├── charts/           # Chart components
│   │   │   │   ├── line-chart/
│   │   │   │   │   ├── line-chart.ts
│   │   │   │   │   ├── line-chart.html
│   │   │   │   │   └── line-chart.scss
│   │   │   │   ├── pie-chart/
│   │   │   │   │   ├── pie-chart.ts
│   │   │   │   │   ├── pie-chart.html
│   │   │   │   │   └── pie-chart.scss
│   │   │   │   ├── bar-chart/
│   │   │   │   │   ├── bar-chart.ts
│   │   │   │   │   ├── bar-chart.html
│   │   │   │   │   └── bar-chart.scss
│   │   │   │   └── horizontal-bar-chart/
│   │   │   │       ├── horizontal-bar-chart.ts
│   │   │   │       ├── horizontal-bar-chart.html
│   │   │   │       └── horizontal-bar-chart.scss
│   │   │   └── tables/           # Data table components
│   │   │       ├── claim-status-table/
│   │   │       │   ├── claim-status-table.ts
│   │   │       │   ├── claim-status-table.html
│   │   │       │   └── claim-status-table.scss
│   │   │       └── clarification-table/
│   │   │           ├── clarification-table.ts
│   │   │           ├── clarification-table.html
│   │   │           └── clarification-table.scss
│   │   ├── pages/                # Page components
│   │   │   ├── dashboard/        # Main dashboard page
│   │   │   │   ├── dashboard.ts
│   │   │   │   ├── dashboard.html
│   │   │   │   └── dashboard.scss
│   │   │   ├── applications/     # Applications list page
│   │   │   │   ├── applications.ts
│   │   │   │   ├── applications.html
│   │   │   │   └── applications.scss
│   │   │   └── feedback/         # Feedback page
│   │   │       ├── feedback.ts
│   │   │       ├── feedback.html
│   │   │       └── feedback.scss
│   │   ├── services/             # Services for data management
│   │   │   └── dashboard.service.ts
│   │   ├── app.config.ts         # Application configuration
│   │   ├── app.routes.ts         # Route definitions
│   │   ├── app.ts                # Root component
│   │   ├── app.html              # Root template
│   │   └── app.scss              # Root styles
│   ├── styles.scss               # Global styles
│   └── index.html                # Main HTML file
├── public/                       # Static assets
├── angular.json                  # Angular configuration
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript configuration
├── README.md                     # Basic project info
├── requirement.md                # Original requirements
├── PROJECT-REPORT.md             # Quick reference guide
└── DOCUMENTATION.md              # This file (comprehensive documentation)
```

**Note**: Following Angular 20 conventions, component files do not use the `.component` suffix. Files are named simply as `component-name.ts`, `component-name.html`, and `component-name.scss` for better code clarity and reduced verbosity.

---

## Features

### 1. **Dashboard Overview**
- **4 Summary Cards**: Display key metrics (Total Applications, Approved, Pending, Rejected)
- **4 Interactive Charts**: Visualize data trends and distributions
- **2 Data Tables**: Manage claim statuses and clarification requests
- **Export Functionality**: Download data as CSV or charts as SVG/PNG

### 2. **Charts**
#### Line Chart
- **Purpose**: Shows application progress over time
- **Data**: Weekly application counts over 7 weeks
- **Features**: Smooth curve, gradient fill, hover tooltips
- **Export**: SVG, PNG, CSV

#### Pie Chart
- **Purpose**: Displays status distribution (Approved, Pending, Rejected)
- **Data**: Percentage breakdown of application statuses
- **Features**: Interactive legend, responsive sizing
- **Export**: SVG, PNG, CSV

#### Vertical Bar Chart
- **Purpose**: Application status breakdown
- **Data**: Count of Approved, Pending, and Rejected applications
- **Features**: Color-coded bars, data labels
- **Export**: SVG, PNG, CSV

#### Horizontal Bar Chart
- **Purpose**: Pending claims by type
- **Data**: Health, Travel, Property, Auto, Life claims
- **Features**: Horizontal orientation, orange theme
- **Export**: SVG, PNG, CSV

### 3. **Data Tables**
#### Claim Status Table
- **Columns**: ID, Type, Submitted Date, Status, Pending, Actions
- **Features**:
  - **Filters**: Search by ID/Type, filter by Type dropdown, filter by Pending range (input fields)
  - View All / Show Less toggle (3 rows default, expand to all)
  - Export to Excel (.xlsx format with formatted columns)
  - Delete records with confirmation
  - Status badges (Approved: green, Pending: orange, Rejected: red)
- **Data**: 5 claim records

#### Clarification Required Table
- **Columns**: ID, Name, Submitted Date, Status, Actions
- **Features**:
  - **Filters**: Search by ID/Name, filter by Department dropdown, filter by NOC dropdown
  - View All / Show Less toggle (3 rows default, expand to all)
  - Export to Excel (.xlsx format with formatted columns)
  - Delete records with confirmation
  - Conditional alerts:
    - Red alert: "Missing documents" (for missing status)
    - Green alert: "Documents uploaded" (for uploaded status)
- **Data**: 5 clarification records

### 4. **Navigation**
#### Sidebar
- **Routes**:
  - Dashboard (active)
  - Application List (placeholder)
  - Feedback (placeholder)
- **Features**:
  - Collapsible (260px ↔ 80px)
  - Active route highlighting
  - Icon-based navigation when collapsed
  - Smooth transitions

### 5. **Responsive Design**
- **Desktop** (1200px+): Full layout with 2-column charts
- **Large Tablet** (1024px - 1200px): Optimized spacing
- **Tablet** (768px - 1024px): Stacked charts, adjusted padding
- **Mobile** (640px - 768px): Single column layout
- **Small Mobile** (480px - 640px): Compact UI elements
- **Extra Small** (375px - 480px): Minimal padding, smaller fonts

---

## Components Documentation

### Sidebar Component
**Path**: `src/app/components/sidebar/sidebar.ts`

#### Properties
- `isCollapsed: WritableSignal<boolean>` - Sidebar collapse state

#### Methods
- `toggleSidebar()` - Toggles sidebar between collapsed and expanded states
- `constructor()` - Uses `effect()` to update CSS variable `--sidebar-width`

#### Template
**Path**: `src/app/components/sidebar/sidebar.html`

#### Styling
**Path**: `src/app/components/sidebar/sidebar.scss`
- Expanded width: 260px
- Collapsed width: 80px
- Transition: 0.3s ease
- Background: White with shadow

---

### Summary Cards Component
**Path**: `src/app/components/summary-cards/summary-cards.ts`

#### Data Structure
```typescript
{
  total: number;      // Total applications (Blue)
  approved: number;   // Approved count (Green)
  pending: number;    // Pending count (Orange)
  rejected: number;   // Rejected count (Red)
}
```

#### Features
- Color-coded icons and numbers
- Hover animations (scale and shadow)
- Responsive grid layout

#### Template & Styling
- **Template**: `src/app/components/summary-cards/summary-cards.html`
- **Styles**: `src/app/components/summary-cards/summary-cards.scss`

---

### Chart Components

#### Line Chart Component
**Path**: `src/app/components/charts/line-chart/line-chart.ts`

**Chart Configuration**:
- Type: Line
- Height: 350px
- Data: 7 weeks of application data
- Colors: Blue (#2196F3)
- Toolbar: Enabled with download options (SVG, PNG, CSV)

**Files**:
- Component: `line-chart.ts`
- Template: `line-chart.html`
- Styles: `line-chart.scss`

---

#### Pie Chart Component
**Path**: `src/app/components/charts/pie-chart/pie-chart.ts`

**Chart Configuration**:
- Type: Pie
- Height: 380px
- Data: Approved, Pending, Rejected counts
- Colors: Green (#4CAF50), Orange (#FF9800), Red (#F44336)
- Legend: Bottom position
- Toolbar: Enabled with download options (SVG, PNG, CSV)

**Files**:
- Component: `pie-chart.ts`
- Template: `pie-chart.html`
- Styles: `pie-chart.scss`

---

#### Bar Chart Component
**Path**: `src/app/components/charts/bar-chart/bar-chart.ts`

**Chart Configuration**:
- Type: Vertical Bar
- Height: 350px
- Data: Status breakdown
- Colors: Green, Orange, Red
- Features: Data labels, rounded corners
- Toolbar: Enabled with download options (SVG, PNG, CSV)

**Files**:
- Component: `bar-chart.ts`
- Template: `bar-chart.html`
- Styles: `bar-chart.scss`

---

#### Horizontal Bar Chart Component
**Path**: `src/app/components/charts/horizontal-bar-chart/horizontal-bar-chart.ts`

**Chart Configuration**:
- Type: Horizontal Bar
- Height: 350px
- Data: Pending claims by type
- Colors: Orange (#FDA00F)
- Features: Data labels, 60% bar height
- Toolbar: Enabled with download options (SVG, PNG, CSV)

**Files**:
- Component: `horizontal-bar-chart.ts`
- Template: `horizontal-bar-chart.html`
- Styles: `horizontal-bar-chart.scss`

---

### Table Components

#### Claim Status Table Component
**Path**: `src/app/components/tables/claim-status-table/claim-status-table.ts`

**Properties**:
- `claimData: ClaimStatus[]` - Full dataset
- `displayedData: ClaimStatus[]` - Currently visible data (filtered)
- `showAll: boolean` - View All toggle state
- `searchTerm: string` - Search filter value
- `filterType: string` - Type dropdown filter value
- `filterPendingMin: number | null` - Pending range minimum
- `filterPendingMax: number | null` - Pending range maximum

**Methods**:
- `toggleViewAll()` - Toggles between 3 rows and all rows
- `applyFilters()` - Applies search and dropdown filters to data
- `exportToExcel()` - Exports table data to Excel (.xlsx) file with date-stamped filename
- `deleteRecord(id: number)` - Deletes record with confirmation

**Data Interface**:
```typescript
interface ClaimStatus {
  id: number;
  type: string;
  submittedDate: string;
  status: string;
  pending: number;
}
```

**Files**:
- Component: `claim-status-table.ts`
- Template: `claim-status-table.html`
- Styles: `claim-status-table.scss`

**Dependencies**: `FormsModule` for `[(ngModel)]`, `xlsx` library for Excel export

---

#### Clarification Table Component
**Path**: `src/app/components/tables/clarification-table/clarification-table.ts`

**Properties**:
- `clarificationData: ClarificationRequired[]` - Full dataset
- `displayedData: ClarificationRequired[]` - Currently visible data (filtered)
- `showAll: boolean` - View All toggle state
- `searchTerm: string` - Search filter value
- `filterDepartment: string` - Department dropdown filter value
- `filterNOC: string` - NOC dropdown filter value

**Methods**:
- `toggleViewAll()` - Toggles between 3 rows and all rows
- `applyFilters()` - Applies search and dropdown filters to data
- `exportToExcel()` - Exports table data to Excel (.xlsx) file with date-stamped filename
- `deleteRecord(id: number)` - Deletes record with confirmation

**Data Interface**:
```typescript
interface ClarificationRequired {
  id: number;
  name: string;
  submittedDate: string;
  status: string;
}
```

**Conditional Rendering**:
- Status "missing" → Red alert: "Missing documents"
- Status "uploaded" → Green alert: "Documents uploaded"

**Files**:
- Component: `clarification-table.ts`
- Template: `clarification-table.html`
- Styles: `clarification-table.scss`

**Dependencies**: `FormsModule` for `[(ngModel)]`, `xlsx` library for Excel export

---

## Services

### Dashboard Service
**Path**: `src/app/services/dashboard.service.ts`

**Purpose**: Central data management service providing static data for all dashboard components.

#### Methods

##### `getSummaryData(): Observable<DashboardSummary>`
Returns summary statistics for dashboard cards.

**Returns**:
```typescript
{
  total: 120,
  approved: 80,
  pending: 25,
  rejected: 15
}
```

##### `getLineChartData(): Observable<LineChartData[]>`
Returns weekly application data for line chart.

**Returns**: Array of 7 week objects
```typescript
[
  { week: 'Week 1', applications: 45 },
  { week: 'Week 2', applications: 52 },
  // ... 5 more weeks
]
```

##### `getClaimStatusData(): Observable<ClaimStatus[]>`
Returns claim status records for table.

**Returns**: Array of 5 claim objects

##### `getClarificationData(): Observable<ClarificationRequired[]>`
Returns clarification request records for table.

**Returns**: Array of 5 clarification objects

#### Data Interfaces

```typescript
interface DashboardSummary {
  total: number;
  approved: number;
  pending: number;
  rejected: number;
}

interface LineChartData {
  week: string;
  applications: number;
}

interface ClaimStatus {
  id: number;
  type: string;
  submittedDate: string;
  status: string;
  pending: number;
}

interface ClarificationRequired {
  id: number;
  name: string;
  submittedDate: string;
  status: string;
}
```

---

## Routing

### Route Configuration
**Path**: `src/app/app.routes.ts`

```typescript
export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'applications', component: ApplicationsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '**', redirectTo: '/dashboard' }
];
```

### Route Details

| Path | Component | Status | Description |
|------|-----------|--------|-------------|
| `/` | - | Redirect | Redirects to `/dashboard` |
| `/dashboard` | DashboardComponent | ✅ Active | Main dashboard with all widgets |
| `/applications` | ApplicationsComponent | 🚧 Placeholder | Future: Application list with filters |
| `/feedback` | FeedbackComponent | 🚧 Placeholder | Future: Feedback management |
| `/**` | - | Redirect | Wildcard redirects to `/dashboard` |

---

## Styling & Theming

### Color Palette

#### Primary Colors
- **Primary Blue**: `#2196F3` - Used for primary actions, links
- **Success Green**: `#4CAF50` - Approved status, positive indicators
- **Warning Orange**: `#FF9800` - Pending status, warnings
- **Danger Red**: `#F44336` - Rejected status, errors, delete actions
- **Accent Orange**: `#FDA00F` - View All buttons, horizontal bar chart

#### Neutral Colors
- **Text Primary**: `#1e293b` - Headings, important text
- **Text Secondary**: `#64748b` - Body text, labels
- **Background**: `#f8fafc` - Page background
- **White**: `#ffffff` - Cards, panels
- **Border**: `#e2e8f0` - Dividers, borders

### Typography

**Font Family**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)

**Font Sizes**:
- Headings: 18px - 24px
- Body: 14px - 16px
- Small: 12px - 13px

### CSS Variables

**Defined in**: `src/app/app.scss`

```scss
--sidebar-width: 260px; // Dynamically updated on collapse
```

### Animations

#### Glass Animation (View All Buttons)
```scss
@keyframes glass-slide {
  0% { left: -100%; }
  100% { left: 100%; }
}
```
- **Duration**: 0.6s
- **Trigger**: Hover
- **Effect**: Left-to-right shimmer

#### Float Animation (Placeholder Pages)
```scss
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```
- **Duration**: 3s
- **Loop**: Infinite
- **Effect**: Gentle up-down motion

---

## Responsive Design

### Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Desktop | 1200px+ | 2-column charts, full sidebar |
| Large Tablet | 1024px - 1200px | Optimized spacing |
| Tablet | 768px - 1024px | Stacked charts (1 column) |
| Mobile | 640px - 768px | Single column, compact cards |
| Small Mobile | 480px - 640px | Reduced padding, smaller fonts |
| Extra Small | 375px - 480px | Minimal spacing |

### Responsive Features

#### Sidebar
- **Desktop**: Collapsible (260px ↔ 80px)
- **Mobile**: Full-width overlay or compact horizontal nav

#### Charts
- **Desktop**: 2 charts per row (4 total in 2 rows)
- **Tablet/Mobile**: Stacked (1 chart per row)
- **Height**: Adjusts from 450px to 300px on small screens

#### Tables
- **Desktop**: Full table with all columns
- **Mobile**: Horizontal scroll enabled, compact cells

#### Summary Cards
- **Desktop**: 4 cards in a row
- **Tablet**: 2 cards per row
- **Mobile**: 1 card per row, stacked

---

## Data Flow

### Architecture Overview

```
┌─────────────────────────────────────────┐
│         DashboardService                │
│  (Single Source of Truth - Static Data) │
└─────────────────┬───────────────────────┘
                  │
                  │ Observable Streams
                  │
        ┌─────────┴──────────┐
        │                    │
   ┌────▼─────┐       ┌──────▼────┐
   │ Charts   │       │  Tables   │
   │Components│       │Components │
   └──────────┘       └───────────┘
```

### Data Flow Steps

1. **Service Initialization**: `DashboardService` holds static data
2. **Component Subscription**: Components subscribe to service methods
3. **Data Emission**: Service returns Observable with data using `of()`
4. **Component Rendering**: Components update UI with received data
5. **User Interaction**: Actions like delete update component state
6. **Export Operations**: CSV/Chart exports process current component data

### Data Update Flow (Example: Delete Record)

```
User clicks Delete → Confirmation Dialog → 
Component Method (deleteRecord) → 
Filter array (claimData) → 
Update displayed data → 
UI Re-renders
```

**Note**: Currently using static data. Future implementation will use HTTP calls to backend API.

---

## Setup & Installation

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v20.x)

### Installation Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd application-response
```

2. **Install dependencies**
```bash
npm install
```

3. **Install chart and Excel export libraries**
```bash
npm install ng-apexcharts apexcharts xlsx --save
```

4. **Start development server**
```bash
npm start
```

5. **Open browser**
```
http://localhost:4200
```

### Verify Installation

✅ Dashboard loads without errors
✅ All 4 charts render correctly with download menus
✅ Tables display data with functional filters
✅ Excel export works for both tables
✅ Sidebar navigation works
✅ Responsive design functions on mobile
✅ No `.component` suffix in any filenames (Angular 20 convention)

---

## Build & Deployment

### Development Build
```bash
npm run start
```
- Runs on `http://localhost:4200`
- Hot reload enabled
- Source maps available

### Production Build
```bash
npm run build
```
- Output: `dist/application-response/`
- Optimized bundles
- Minified code
- AOT compilation

### Build Configuration
**File**: `angular.json`

```json
{
  "production": {
    "optimization": true,
    "outputHashing": "all",
    "sourceMap": false,
    "namedChunks": false,
    "aot": true,
    "extractLicenses": true,
    "budgets": [
      {
        "type": "initial",
        "maximumWarning": "500kB",
        "maximumError": "1MB"
      }
    ]
  }
}
```

### Deployment Options

#### Option 1: Static Hosting (Netlify, Vercel)
1. Build project: `npm run build`
2. Deploy `dist/application-response/browser/` folder
3. Configure routes to redirect to `index.html`

#### Option 2: Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=0 /app/dist/application-response/browser /usr/share/nginx/html
```

#### Option 3: Traditional Server
1. Build: `npm run build`
2. Copy `dist/` folder to server
3. Configure web server (Apache/Nginx) to serve Angular app

---

## Future Enhancements

### Planned Features

#### 1. Backend Integration
- Replace static data with HTTP API calls
- Implement real-time data updates via WebSocket
- Add loading states and error handling
- Implement pagination for large datasets

#### 2. Authentication & Authorization
- Admin login page
- JWT-based authentication
- Route guards for protected pages
- User roles and permissions

#### 3. Advanced Table Features
- **Search**: Global search across all columns
- **Filters**: Date range, status filters, type filters
- **Sorting**: Multi-column sorting
- **Pagination**: Server-side pagination
- **Inline Editing**: Edit records directly in table

#### 4. Complete Application List Page
- Full CRUD operations
- Advanced filtering and search
- Bulk actions (approve, reject, delete)
- Application detail view

#### 5. Feedback Management
- Create/Edit/Delete feedback
- Category management
- Priority levels
- Response tracking

#### 6. Additional Charts
- Stacked bar chart for comparative analysis
- Area chart for cumulative trends
- Donut chart variants
- Custom date range selection

#### 7. Notifications
- Toast notifications for actions
- Real-time alerts
- In-app notification center

#### 8. Export Enhancements
- PDF export for reports
- Enhanced Excel export with advanced formatting, formulas, and charts
- Scheduled email reports
- Custom report builder

#### 9. Dashboard Customization
- Widget drag-and-drop
- User preferences
- Multiple dashboard views
- Saved filters and views

#### 10. Performance Optimizations
- Lazy loading for routes
- Virtual scrolling for large tables
- Chart data caching
- Service worker for offline support

---

## API Integration (Future)

### Planned Endpoints

```typescript
// Dashboard Service - Future HTTP Implementation
export class DashboardService {
  private apiUrl = 'https://api.example.com';

  getSummaryData(): Observable<DashboardSummary> {
    return this.http.get<DashboardSummary>(`${this.apiUrl}/dashboard/summary`);
  }

  getLineChartData(): Observable<LineChartData[]> {
    return this.http.get<LineChartData[]>(`${this.apiUrl}/dashboard/line-chart`);
  }

  getClaimStatusData(): Observable<ClaimStatus[]> {
    return this.http.get<ClaimStatus[]>(`${this.apiUrl}/claims`);
  }

  getClarificationData(): Observable<ClarificationRequired[]> {
    return this.http.get<ClarificationRequired[]>(`${this.apiUrl}/clarifications`);
  }

  deleteClaimStatus(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/claims/${id}`);
  }

  deleteClarification(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/clarifications/${id}`);
  }
}
```

---

## Troubleshooting

### Common Issues

#### 1. Charts not rendering
**Solution**: Ensure `ng-apexcharts` and `apexcharts` are installed
```bash
npm install ng-apexcharts apexcharts --save
```

#### 2. Excel export not working
**Solution**: Ensure `xlsx` library is installed
```bash
npm install xlsx --save
```
Check that the import statement is correct: `import * as XLSX from 'xlsx';`

#### 3. Filters not working
**Solution**: Verify `FormsModule` is imported in component:
```typescript
import { FormsModule } from '@angular/forms';
```

#### 4. Styles not applying
**Solution**: Check that `styles.scss` is included in `angular.json`

#### 5. Sidebar collapse not working
**Solution**: Verify CSS variable `--sidebar-width` is being updated in `app.scss`

#### 6. Component imports failing after upgrade
**Solution**: After removing `.component` suffix, update all import paths:
```typescript
// Old
import { SidebarComponent } from './sidebar/sidebar.component';
// New
import { SidebarComponent } from './sidebar/sidebar';
```

#### 7. Responsive layout issues
**Solution**: Clear browser cache and ensure viewport meta tag is present

---

## Performance Tips

1. **Use OnPush Change Detection**: For components that don't need frequent updates
2. **Lazy Load Routes**: Load pages only when needed
3. **Optimize Images**: Compress icons and images
4. **Use TrackBy**: In `ngFor` loops for better rendering performance
5. **Debounce Search**: Use RxJS `debounceTime` for search inputs
6. **Virtual Scrolling**: For large tables (100+ rows)

---

## Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest 2 | ✅ Fully Supported |
| Firefox | Latest 2 | ✅ Fully Supported |
| Safari | Latest 2 | ✅ Fully Supported |
| Edge | Latest 2 | ✅ Fully Supported |
| Opera | Latest | ✅ Supported |
| IE | 11 | ❌ Not Supported |

---

## Contributing Guidelines

1. Follow Angular style guide
2. Use meaningful component/variable names
3. Write comments for complex logic
4. Maintain consistent code formatting
5. Test responsive design on multiple devices
6. Update documentation when adding features

---


**Last Updated**: November 13, 2025  
**Version**: 1.0.0  
**Angular Version**: 20.x  
**Git Repository**: [swaagat-departmental-dashboard](https://github.com/gaurav-1220/swaagat-departmental-dashboard)
