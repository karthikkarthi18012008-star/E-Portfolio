# 💳 UPI Transaction Analysis Dashboard — Power BI

## 📊 Project Overview

An interactive **UPI Transaction Analysis Dashboard** developed using **Microsoft Power BI** to analyze digital payment transactions across cities, banks, devices, users, merchants, payment methods, and transaction types.

The project transforms raw UPI transaction data into an interactive analytical report using **Power Query, data transformation, DAX, slicers, matrix visuals, line charts, bookmarks, and interactive filtering**.

The dashboard is designed to help users understand **transaction trends, transaction amounts, remaining balances, geographic patterns, and customer/device behavior**.

---

## 🎯 Business Objectives

The main objectives of this project are to:

- Analyze UPI transaction trends over time.
- Compare transaction amounts across different months.
- Analyze transaction activity across cities.
- Compare bank-wise transaction performance.
- Understand transaction behavior across different age groups.
- Analyze transactions by device type, gender, merchant, and payment method.
- Compare transaction types and purposes.
- Provide interactive filtering for deeper analysis.
- Present transaction data in a business-friendly dashboard.

---

# 📊 Dashboard Pages

## 1. Transaction Overview
<img width="1302" height="732" alt="image" src="https://github.com/user-attachments/assets/61b6bf28-8c59-4c74-a776-f343aa49f65c" />

The first dashboard page provides an interactive overview of UPI transaction activity.

### 🔎 Filters / Slicers

The dashboard includes interactive slicers for:

- Bank Name Sent
- Bank Name Received
- City
- Device Type
- Gender
- Age Group
- Merchant Name
- Payment Method
- Purpose
- Transaction Type

These filters allow users to dynamically explore transaction patterns based on different customer and transaction attributes.

---

### 📈 Transactions by Month

A monthly column chart is used to analyze transaction amounts across the year.

**Fields used:**
- Month
- Transaction Amount

**Purpose:**

Helps identify monthly transaction patterns and compare transaction activity throughout the year.

---

### 📊 Transaction Amount Analysis

The dashboard provides visual comparisons of transaction amounts across different dimensions.

This helps users understand:

- Which periods have higher transaction activity.
- How transaction amounts vary across different segments.
- How selected filters affect transaction performance.

---

## 2. City & Monthly Transaction Analysis
<img width="1305" height="725" alt="image" src="https://github.com/user-attachments/assets/612a8243-fb68-4a80-af5d-cdf103507457" />

The second dashboard page uses a **Matrix visual** to analyze transaction amounts and remaining balances across different cities and months.

### 🌍 Cities Analyzed

The matrix includes city-level analysis for locations such as:

- Bangalore
- Delhi
- Hyderabad
- Mumbai
- Total

### 📅 Monthly Analysis

The matrix provides month-wise values for:

- Transaction Amount
- Remaining Balance

This allows users to compare transaction activity across cities and identify differences between locations.

---

### 📋 Matrix Analysis

The matrix structure enables comparison such as:

```text
City
 ├── Month
 │    ├── Transaction Amount
 │    └── Remaining Balance
