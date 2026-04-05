# 🚛 FleetChain: Blockchain-Verified Logistics & IoT Platform

**FleetChain** is a comprehensive, enterprise-grade Fleet Management System that leverages **Blockchain Technology** and **Real-Time IoT Simulation** to provide 100% transparency, immutability, and security across the logistics supply chain.

This project was built as a high-end **Final Year Project (FYP)** to demonstrate mastery of modern full-stack development, distributed ledger technology, and real-time operations intelligence.

---

## 🌟 Key Features

### 1. Multi-Role Enterprise Ecosystem
A unified platform with **5 distinct industry roles**, each featuring a custom-built, real-time dashboard:
*   **Admin Console**: Full fleet oversight, GPS maps, and maintenance scheduling.
*   **Driver Interface**: Live on-road trip management with virtual IoT gauges.
*   **Vendor Portal**: Repair request management and blockchain-verified service logs.
*   **Sender Dashboard**: Initialize blockchain-secured shipments and track live progress.
*   **Receiver Portal**: Digital Proof-of-Delivery (Signature Pad) and Smart Escrow release.

### 2. High-Tech Core Features
*   **Blockchain Auditor (/explorer)**: A built-in search engine to verify any transaction hash and prove data integrity.
*   **IoT Simulation Engine**: Real-time 5-second polling for virtual sensors (Fuel, Temp, GPS).
*   **Smart Escrow Logic**: Simulated smart contracts that release payments only upon successful delivery verification.
*   **Live Analytics**: Dynamic charts (using Recharts) for operational efficiency tracking.

---

## 🛠️ Technology Stack
*   **Frontend**: Next.js 15+ (App Router), TailwindCSS, Framer Motion (Animations).
*   **Backend**: Next.js API Routes, Node.js.
*   **Database**: Prisma ORM with SQLite (Local Relational Database).
*   **Security**: JSON Web Tokens (JWT) for sessions, Bcryptjs for password hashing.
*   **Visualization**: Lucide Icons, Recharts (Analytical Charts).

---

## 🚀 Setup & Installation Guide

To set up **FleetChain** on a new system, follow these steps:

### 1. Clone the Repository
```bash
git clone <your-repo-link>
cd fleet-management-blockchain
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory and add the following:
```env
DATABASE_URL="file:./prisma/dev.db"
JWT_SECRET="FLEET_CHAIN_SUPER_SECRET_2026"
```

### 4. Database Initialization
Generate the Prisma client and sync the schema to your local SQLite database:
```bash
npx prisma generate
npx prisma db push
```

### 5. Seed the Enterprise Data
Run the seeding script to create all 5 industry roles and initial fleet data:
```bash
node fix-seed.cjs
```

### 6. Start the Development Server
```bash
npm run dev
```
Navigate to `http://localhost:3000` to see the landing page.

---

## 🔑 Demo Access (Credentials)

All accounts use the same password for easy demonstration: **`Admin@123`**

| Role | Email ID |
| :--- | :--- |
| **Admin** | `admin@fleetchain.com` |
| **Driver** | `driver@fleetchain.com` |
| **Vendor** | `vendor@fleetchain.com` |
| **Sender** | `sender@fleetchain.com` |
| **Receiver** | `receiver@fleetchain.com` |

---

## 🏁 Presentation Workflow
1.  **Start at the Home Page**: Mention the professional UX and tech highlight section.
2.  **Login as Admin**: Show the live Map and the **Ops Intelligence Charts**.
3.  **Login as Receiver**: Demonstrate the **Signature Pad** to release escrow funds.
4.  **Visit /explorer**: Copy a hash from the activity log and verify it in the Auditor.

---

> [!TIP]
> This project is designed for robust offline use. The SQLite database is local, so no external database hosting (like MongoDB/PostgreSQL) is required for the demo!

> [!NOTE]
> Designed & Rebuilt by **AI Pair Programming (FleetChain v2.0)** for Excellence. 🌊
