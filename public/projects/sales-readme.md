# 📊 Sales Performance & Product Analysis Dashboard

## 📌 Project Overview
An interactive **Power BI Sales Analytics Dashboard** developed to analyze sales performance, profitability, product performance, customer activity, and promotional impact.

The dashboard transforms raw sales data into meaningful business insights using **Power Query, DAX, data modeling, interactive filters, and data visualization**.


---

## 🎯 Business Objective

The main objective of this project is to help business teams quickly understand:

- Overall sales and profitability
- Order volume and units sold
- Sales and profit trends over time
- Top and bottom-performing products
- Relationship between sales, profit, and quantity
- Impact of discounts and promotional categories
- Customer and product-level performance
- Geographic distribution of sales

---

# 📊 Dashboard Pages

## 1. Sales Overview
<img width="1298" height="726" alt="image" src="https://github.com/user-attachments/assets/b3735239-481f-4aa8-8c77-2a03b976cbd5" />
The Overview dashboard provides a high-level summary of business performance.

### Key KPIs

The dashboard uses KPI cards to monitor:

- **Total Orders** → Measures overall order volume
- **Total Sales** → Measures generated revenue
- **Total Profit** → Measures business profitability
- **Units Sold** → Measures product volume

These KPIs allow users to understand the overall business position at a glance.

### Visualizations

#### 📈 Sales & Profit Trend

**Columns used:**
- Date → X-axis
- Sales → Y-axis
- Profit → Y-axis

**Purpose:**
Shows how sales and profitability change over time and helps identify growth patterns, peaks, and periods of weaker performance.

---

#### 📊 Sales vs Profit Analysis

**Columns used:**
- Sales
- Profit

**Purpose:**
Compares revenue generation with the corresponding profit to understand whether higher sales are translating into stronger profitability.

---

#### 📊 Average Discount by Promotion Category

**Columns used:**
- Promotion Category → Category/Axis
- Discount → Average/Value

**Purpose:**
Analyzes how discount levels vary across promotional categories and helps understand the effect of promotional strategies on pricing.

---

#### 🌍 Geographic Sales Analysis

**Columns used:**
- Geographic location
- Sales

**Purpose:**
Visualizes the distribution of sales across different geographical locations and helps identify stronger and weaker sales regions.

---

# 🏆 2. Top & Bottom 5 Product Analysis
<img width="1312" height="732" alt="image" src="https://github.com/user-attachments/assets/2f0906a7-a5c7-4998-b650-1cfd2c4359f7" />

This page focuses on identifying the products that contribute most and least to business performance.

### Top 5 / Bottom 5 by Sales

**Columns used:**
- Product
- Sales

**Purpose:**
Identifies the products generating the highest and lowest sales.

### Top 5 / Bottom 5 by Quantity

**Columns used:**
- Product
- Units Sold / Quantity

**Purpose:**
Identifies products with the highest and lowest sales volume.

### Top 5 / Bottom 5 by Profit

**Columns used:**
- Product
- Profit

**Purpose:**
Identifies the products contributing the most and least to profitability.

### Business Value

This analysis can help businesses:

- Identify high-performing products
- Detect products with weak performance
- Support inventory planning
- Prioritize profitable products
- Identify products requiring further investigation

---

# 📈 3. Sales, Profit & Quantity Comparison
<img width="1305" height="735" alt="image" src="https://github.com/user-attachments/assets/ca65f7f7-a837-4015-b94b-a909cc3ef5a8" />

This page allows users to compare the three major performance metrics:

- **Sales**
- **Profit**
- **Quantity**

### Filters Used

The dashboard includes date-based filtering to allow users to analyze performance for different periods.

### Purpose

The comparison helps answer questions such as:

- How does sales performance change over time?
- Does an increase in sales result in higher profit?
- How does product quantity relate to sales?
- Which periods show stronger business performance?

This provides a more detailed view of business performance than the high-level KPI dashboard.

---

# 📋 4. Detailed Sales Data

The detailed table provides transaction-level information for deeper analysis.

### Fields included

- Customer
- Product
- Promotion
- Date
- Discount
- Net Sales
- Total Sales
- Total Profit
- Units Sold

### Purpose

This page allows users to move from **high-level business insights to detailed transaction-level analysis**.

It can be used to investigate individual customers, products, promotions, and transactions behind the summarized dashboard results.

---

# 🎛️ Interactive Features

The dashboard includes several interactive Power BI features:

- Date filters
- Category filters
- Product filtering
- Cross-filtering
- Visual interactions
- Top/Bottom N analysis
- Dynamic comparison
- Drill-down style analysis
- Interactive table exploration

These features allow users to explore the data instead of relying only on static reports.

---

# 🛠️ Tools & Technologies

| Technology | Usage |
|------------|-------|
| **Power BI Desktop** | Dashboard development & visualization |
| **Power Query** | Data cleaning and transformation |
| **DAX** | Calculations and analytical measures |
| **Data Modeling** | Structuring data for analysis |
| **Power BI Visuals** | Interactive data storytelling |

---

# 🔄 Data Analysis Workflow

```text
Raw Sales Data
      ↓
Data Cleaning & Transformation
      ↓
Power Query
      ↓
Data Modeling
      ↓
DAX Measures & Calculations
      ↓
Interactive Visualizations
      ↓
Business Insights
