# StrategyOS — Technology Strategy Intelligence Platform

**Live:** [strategy-os-tau.vercel.app](https://strategy-os-tau.vercel.app/)

A full-stack AI-powered platform for enterprise technology strategy — built to mirror the workflows of an internal technology strategy and management consulting team at a global financial institution.

## What it does

### Technology Portfolio Overview
Tracks a $20B+ enterprise technology investment portfolio across KPIs — total investment, active AI initiatives, governance risk score, and innovation index — alongside a live strategic intelligence feed and investment trajectory by domain.

<img width="1711" height="838" alt="Screenshot 2026-07-15 220659" src="https://github.com/user-attachments/assets/4e55c6cf-c336-45c3-862b-bbbea9344f32" />


### Technology Radar
An interactive radar mapping 17 technologies across four adoption rings (Adopt, Trial, Assess, Hold) and four categories (AI & ML, Cloud & Infrastructure, Security, Emerging & Payments). Hover over any technology to view its strategic context. Click to navigate directly to a pre-populated strategy brief for that technology.

<img width="1694" height="899" alt="Screenshot 2026-07-15 220719" src="https://github.com/user-attachments/assets/253f2992-f7a8-465b-a4c5-b134df7de44f" />


### Market Intelligence
Competitive benchmarking of technology investment intensity across global financial services peers, AI initiative growth trends, and a competitive focus matrix showing investment depth by technology domain.

<img width="1705" height="774" alt="Screenshot 2026-07-15 220758" src="https://github.com/user-attachments/assets/84531343-2f20-4df4-ae9c-a129736ec865" />


### AI Strategy Brief Generator
Select a technology area and strategic question — the platform synthesizes a structured, executive-grade strategy brief using live AI inference. Briefs follow a consulting-standard format: Executive Summary, Strategic Context, Recommendation, Risk & Governance, and Next Steps.

<img width="1690" height="868" alt="Screenshot 2026-07-15 220811" src="https://github.com/user-attachments/assets/696004bd-1988-4c8d-96da-695497812548" />


### Governance & Risk Matrix
An enterprise risk assessment across eight technologies scored on regulatory risk, implementation complexity, ROI potential, and organizational readiness — with a recommended investment stance (Invest / Monitor / Pause) for each.

<img width="1704" height="709" alt="Screenshot 2026-07-15 220835" src="https://github.com/user-attachments/assets/678db5a5-7a55-44ee-9b0d-7a3a0a76ed0a" />


## Tech Stack
- Vanilla HTML, CSS, JavaScript
- Chart.js for data visualizations
- Groq (LLaMA 3.1 8B) via Vercel serverless proxy for AI brief generation
- Deployed on Vercel
