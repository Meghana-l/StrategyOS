# StrategyOS — Technology Strategy Intelligence Platform

A full-stack AI-powered platform for enterprise technology strategy — built to mirror the workflows of an internal technology strategy and management consulting team at a global financial institution.

## What it does

**Technology Portfolio Overview**
Tracks a $20B+ enterprise technology investment portfolio across KPIs — total investment, active AI initiatives, governance risk score, and innovation index — alongside a live strategic intelligence feed and investment trajectory by domain.

**Technology Radar**
An interactive SVG radar mapping 17 technologies across four adoption rings (Adopt, Trial, Assess, Hold) and four categories (AI & ML, Cloud & Infrastructure, Security, Emerging & Payments). Hover over any technology to view its strategic context. Click to navigate directly to a pre-populated strategy brief for that technology.

**Market Intelligence**
Competitive benchmarking of technology investment intensity across global financial services peers, AI initiative growth trends, and a competitive focus matrix showing investment depth by technology domain.

**AI Strategy Brief Generator**
Select a technology area and strategic question — the platform synthesizes a structured, executive-grade strategy brief using live AI inference. Briefs follow a consulting-standard format: Executive Summary, Strategic Context, Recommendation, Risk & Governance, and Next Steps.

**Governance & Risk Matrix**
An enterprise risk assessment across eight technologies scored on regulatory risk, implementation complexity, ROI potential, and organizational readiness — with a recommended investment stance (Invest / Monitor / Pause) for each.

## Tech Stack
- Vanilla HTML, CSS, JavaScript
- Chart.js for data visualizations
- Groq (LLaMA 3.1 8B) via Vercel serverless proxy for AI brief generation
- Deployed on Vercel
