# StrategyOS — Technology Strategy Intelligence Platform

**Live:** [strategy-os-tau.vercel.app](https://strategy-os-tau.vercel.app/)

A full-stack AI-powered platform for enterprise technology strategy — built to mirror the workflows of an internal technology strategy and management consulting team at a global financial institution.

## What it does

### Technology Portfolio Overview
Tracks a $20B+ enterprise technology investment portfolio across KPIs — total investment, active AI initiatives, governance risk score, and innovation index — alongside a live strategic intelligence feed and investment trajectory by domain.

![Technology Portfolio Overview](screenshots/overview.png)

### Technology Radar
An interactive radar mapping 17 technologies across four adoption rings (Adopt, Trial, Assess, Hold) and four categories (AI & ML, Cloud & Infrastructure, Security, Emerging & Payments). Hover over any technology to view its strategic context. Click to navigate directly to a pre-populated strategy brief for that technology.

![Technology Radar](screenshots/radar.png)

### Market Intelligence
Competitive benchmarking of technology investment intensity across global financial services peers, AI initiative growth trends, and a competitive focus matrix showing investment depth by technology domain.

![Market Intelligence](screenshots/market-intel.png)

### AI Strategy Brief Generator
Select a technology area and strategic question — the platform synthesizes a structured, executive-grade strategy brief using live AI inference. Briefs follow a consulting-standard format: Executive Summary, Strategic Context, Recommendation, Risk & Governance, and Next Steps.

![AI Strategy Brief Generator](screenshots/brief-generator.png)

### Governance & Risk Matrix
An enterprise risk assessment across eight technologies scored on regulatory risk, implementation complexity, ROI potential, and organizational readiness — with a recommended investment stance (Invest / Monitor / Pause) for each.

![Governance & Risk Matrix](screenshots/governance.png)

## Tech Stack
- Vanilla HTML, CSS, JavaScript
- Chart.js for data visualizations
- Groq (LLaMA 3.1 8B) via Vercel serverless proxy for AI brief generation
- Deployed on Vercel
