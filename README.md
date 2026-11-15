# CampNexus — Pop-Up Summer Camp Operating System
> **Ricoz Innovation Technical Assessment**  
> **Topic 86:** Pop-Up Summer Camp Operator — *Rents underutilized school campuses during summer months to run multi-sport, theater, and robotics day camps.*  
> **Author:** Gundeti Siddarth (CSE, Indian Institute of Information Technology, Sri City)  
> **Role:** Head of Technology / Founding Tech Lead  
> **GitHub Repository:** [https://github.com/Siddarth021/ricoz-innovation.git](https://github.com/Siddarth021/ricoz-innovation.git)

---

## 1. Executive Summary & Strategic Rationale

K-12 schools represent one of the largest concentrations of underutilized physical capital in modern society. A typical suburban school campus—spanning 8 to 25 acres with air-conditioned gymnasiums, 350+ seat auditoriums, regulation athletic fields, and high-speed computer labs—represents **$15M to $45M in capital investment**, yet sits **dark and idle for 10 consecutive weeks each summer**.

**CampNexus** unlocks this municipal asset arbitrage by operating turnkey, pop-up summer day camps on partner school grounds across three high-demand tracks:
1. **Multi-Sport Athletic Academy** (Soccer, Basketball, Agility Ladders, Track & Field, Olympic Games)
2. **Creative Arts & Musical Theater Workshop** (Stage Acting, Improv, Vocal Coaching, Broadway Gala)
3. **Robotics, AI & Applied STEM Labs** (LEGO Spike Prime, BBC Micro:bit Sensors, Autonomous Rovers, Python Logic)

### Key Value Propositions:
- **For Schools:** Generates **$35,000 to $75,000** in net auxiliary revenue during summer downtime with **zero administrative overhead**, full indemnification (**$5,000,000 liability COI**), dedicated custodial crews, and donated equity scholarships for district students.
- **For Parents:** Solves the multi-child summer logistics dilemma with an accessible price point (**$425–$495/week**), automatic **15% sibling discount**, early/late care (7:30 AM–6:00 PM), and digital peace of mind.
- **For Site Directors:** Replaces chaotic paper clipboards with a high-velocity command center: **4-digit guardian release PIN verification**, live **counselor ratio compliance monitors**, and real-time medical alert tracking.

---

## 2. Competitive Market Teardown

Before building, we explored and benchmarked the primary commercial competitors operating seasonal camp models:

| Provider | Operational Model | Weekly Tuition | Curricular Focus | Key Vulnerability / Market Gap |
| :--- | :--- | :--- | :--- | :--- |
| **Camp Galileo** | Leased school pop-up | $540–$620 | STEAM design thinking projects | Rigid single-subject format; high certified-teacher payroll; zero athletics. |
| **Steve & Kate’s** | Free-choice school tenant | $525 (or $115/day) | Self-directed maker, cooking, sports | Unstructured format causes parent churn as kids mature and seek coaching. |
| **KidzToPros** | Contracted district operator | $395–$475 | STEM, Sports, and Digital Arts | Rapid multi-state scaling led to severe kit shortages and staff turnover. |
| **iD Tech** | University computer lab lease | $999–$1,499 | Pure coding, game dev, AI robotics | Luxury pricing locks out middle class; heavy university rental overhead. |
| **CampNexus (Ours)** | Turnkey K-12 pop-up OS | $425–$495 | Multi-Sport, Theater, Robotics | Standardized Camp-in-a-Box logistics & automated ratio guardrails. |

---

## 3. Financial Unit Economics & Mathematical Formulation

The operational feasibility of each campus is governed by a contribution margin model where break-even is achieved at modest facility capacity utilization:

### Break-Even Enrollment ($N^*$) Formula:
$$N^* = \frac{C_{\text{lease}} + C_{\text{dir}}}{P - \left( \frac{w \times H}{1/r} + c_{\text{mat}} + \alpha P \right)}$$

Where:
- $P = \$450$ (Average weekly tuition per camper)
- $C_{\text{lease}} = \$4,500$ (Weekly school campus lease)
- $C_{\text{dir}} = \$1,400$ (Weekly site director salary)
- $w = \$22$/hr (Counselor hourly wage, $H = 40$ hrs/week)
- $r = 1/9$ (Counselor-to-camper ratio)
- $c_{\text{mat}} = \$32$ (Consumable supplies and kit amortization)
- $\alpha = 0.045$ (Merchant processing 3% + commercial liability 1.5%)

$$N^* = \frac{4500 + 1400}{450 - (97.78 + 32.00 + 20.25)} = \frac{5900}{300.00} \approx \mathbf{40.7\text{ campers/week}}$$

- **Break-even is reached at just 41 campers/week** (~28% of campus capacity).
- At **target baseline (120 campers/week)**, each campus delivers **$30,100 weekly net contribution (55.7% margin)**, totaling **$240,800 per campus over an 8-week summer**.

---

## 4. Software Architecture & Core Subsystems

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**:

1. **Parent Discovery & Booking Portal:**
   - Interactive campus search with real facility attributes (Gymnasiums, Turf Fields, Theaters, STEM Labs).
   - Track customizer with 5-day daily schedules and age filters.
   - Multi-week enrollment builder with early care (7:30 AM) and extended care (6:00 PM).
   - Automated 15% sibling discount calculator.
   - Comprehensive medical/allergy intake with instant EpiPen/asthma alerts.
   - 4-digit pickup PIN release assignment.
   - Printable / downloadable **Digital Camper Boarding Pass** with QR code.

2. **School Campus Partner Hub:**
   - Interactive facility leasing revenue calculator (calculates $35k–$75k guaranteed school earnings).
   - Facility zone allocation manager (Gymnasium, Turf Field, Auditorium, Computer Labs).
   - Institutional safety assurance ($5M COI, background checks, dedicated custodial funding).
   - 1-click **Master Campus Lease Agreement Generator** with downloadable contract.

3. **Daily Operations Command Center:**
   - Real-time morning check-in & afternoon dismissal roster with search and filter.
   - **4-Digit Guardian PIN Verification Handshake** modal for secure child release.
   - **Counselor Ratio Safety Guard:** Real-time ratio tracking per track (alerts if approaching 1:10 threshold).
   - Medical & allergy alert bar (highlighting urgent dietary and medication notes).
   - Incident & triage logger with automatic parent SMS notification flag.

4. **Curricula & Logistics Hub:**
   - Full day-by-day lesson roadmaps for Multi-Sport, Theater, and Robotics.
   - Serialized **Camp-in-a-Box** dispatch registry (Kit IDs, quantities, SKUs, and delivery verification).

5. **Unit Economics Modeler:**
   - Real-time parametric sliders for tuition, school lease, wages, and ratios.
   - Live campus P&L statement, break-even sensitivity analysis, and multi-campus portfolio scaling.

6. **Executive PRD & Technical Report Viewer:**
   - Full Product Requirements Document with downloadable LaTeX-compiled PDF report (`CampNexus_PRD_Technical_Report.pdf`).
   - Overleaf LaTeX source viewer and 1-click copy for compilation on Overleaf.

---

## 5. LaTeX Report & Academic Formatting

To match the typography and rigorous structure of formal engineering reports (`overleaf_upload (1).pdf`):
- Typeset in **Computer Modern / Latin Modern serif** using `pdflatex`.
- Features formal title page, table of contents, booktabs data tables, LaTeX mathematical equations, and academic citations.
- Pre-compiled PDF available at `public/CampNexus_PRD_Technical_Report.pdf`.
- Complete Overleaf bundle available at `public/CampNexus_Overleaf_LaTeX_Project.zip` and `report/main.tex`.

---

## 6. Local Development & Deployment

### Quick Start:
```bash
# Clone the repository
git clone https://github.com/Siddarth021/ricoz-innovation.git
cd ricoz-innovation

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Vercel Deployment:
This repository is pre-configured for zero-configuration deployment to [Vercel](https://vercel.com):
1. Import repository `https://github.com/Siddarth021/ricoz-innovation.git` into Vercel.
2. Select Framework Preset: **Next.js**.
3. Click **Deploy**.
All static routes, assets, and compiled PDF downloads are served directly via Vercel Edge Network.

---

## 7. Author Information

- **Name:** Gundeti Siddarth
- **Degree / Branch:** Computer Science & Engineering (CSE)
- **Institution:** Indian Institute of Information Technology, Sri City
- **Role:** Head of Technology / Founding Tech Lead (Ricoz Innovation Internship Assessment)
- **Date:** November 15, 2026
