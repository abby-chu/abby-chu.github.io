# Master Project Outline

## Project Title
Emerging Freshwater Risk in the United States

## Final Deliverable
The final deliverable is a static storytelling dashboard in `report/index.html`. It presents the completed project as a narrative report rather than as a user-driven app.

## One-Sentence Summary
This project identifies future freshwater scarcity hotspots in the United States by combining basin-level WRI projections with historical freshwater stress and supporting irrigation and climate context.

## Main Research Question
Which U.S. basins are projected to face the highest future water stress in 2030 and 2050, how does that risk change over time, and what historical or regional context helps interpret those hotspot patterns?

## Final Analytical Structure

### 1. Where are the future hotspots?
- Use basin-level WRI projections to identify the highest-risk basins.
- Show that hotspot geography is concentrated rather than evenly distributed.
- Emphasize western and southwestern clustering in the final choropleths and rankings.

### 2. How does future risk change over time?
- Compare hotspot counts and transition status between 2030 and 2050.
- Show that the dominant national pattern is persistence rather than widespread new emergence.
- Highlight the smaller subset of basins with the sharpest projected BAU stress increase.

### 3. What helps interpret hotspot patterns?
- Use historical freshwater stress, warming context, and irrigation-heavy state context as supporting evidence.
- Treat those contextual layers as descriptive rather than causal.
- Add basin-level predictive modeling as a final interpretation layer within the WRI framework.

## Verified Final Dashboard Metrics
- Basins analyzed: `1,199`
- High-risk basins in 2030: `292`
- High-risk basins in 2050: `297`
- Persistent hotspots in both years: `271`
- New 2050 hotspots: `26`
- 2030-only hotspots: `21`
- Non-hotspots in both years: `881`

## Final Transition Shares
- `22.6%` are hotspots in both 2030 and 2050
- `2.2%` become new hotspots by 2050
- `1.8%` are hotspots only in 2030
- `73.5%` are not hotspots in either year

## Core Takeaway
Future freshwater risk is concentrated in a smaller set of structurally vulnerable basins. Most 2050 hotspot basins are persistent rather than entirely new, so the dominant story is concentrated long-run pressure rather than sudden nationwide emergence.

## Official Datasets

### Basin-level modeling and hotspot dataset
- File: `data/cleaned/WRI_master_dataset.csv`
- Geography: `pfaf_id`
- Purpose: Core basin-level file for hotspot counts, transition summaries, rankings, and modeling

### Historical freshwater trend dataset
- File: `data/cleaned/iwa_annual_named.csv`
- Geography: `huc12`
- Purpose: Historical freshwater stress context from 2009 to 2020

### State streamflow context dataset
- File: `data/cleaned/usgs_streamflow_state_annual.csv`
- Geography: state-year
- Purpose: Supporting hydrologic context

### Supporting state context outputs
- Interactive irrigation map: `data/cleaned/irrigated_acres_state_map_interactive.html`
- Historical/future context figures in `data/cleaned/historical_future_context/`

## Core Variables

### Basin-level predictors
- `bws_score`: baseline WRI water stress score on a 0-5 score scale
- `iav_score`: interannual variability score on a 0-5 score scale
- `sev_score`: seasonal variability score on a 0-5 score scale
- `area_km2`: basin area in square kilometers
- `bau30_ww_x_r`: projected 2030 BAU raw water withdrawals
- `bau30_wd_x_r`: projected 2030 BAU raw water depletion

### Basin-level outcomes
- `bau30_ws_x_r`: projected 2030 BAU raw water stress
- `bau50_ws_x_r`: projected 2050 BAU raw water stress
- `future_high_risk_2030`: indicator for `bau30_ws_x_r >= 0.4`
- `future_high_risk_2050`: indicator for `bau50_ws_x_r >= 0.4`
- `future_stress_increase_bau`: projected `bau50_ws_x_r - bau30_ws_x_r`

## Final Modeling Result
- Interpretation model: `R2 = 0.448`, `RMSE = 0.516`
- Performance model: `R2 = 0.819`, `RMSE = 0.295`
- Dashboard framing: baseline WRI indicators explain part of future stress, but projected depletion materially improves predictive performance within the WRI system

## Final Dashboard Sections

### Hero
- Project thesis
- Verified basin counts
- Main takeaway about concentrated and persistent hotspots

### Definitions and methods
- HydroBASINS explanation
- Hotspot definition
- Basin-level versus state-level distinction

### Analysis Question 1: Future hotspots
- 2050 choropleth
- BAU increase hotspot ranking
- Southwest regional interpretation

### Analysis Question 2: Change over time
- 2030 versus 2050 hotspot counts
- Typology/transition framing
- Transition shares showing persistence as the dominant pattern

### Analysis Question 3: Interpretation context
- Historical freshwater stress versus future hotspot share
- Temperature context
- Interactive irrigation map
- Model performance summary

### Why it matters and limits
- Planning relevance
- Scale mismatch and scenario limitations
- Reminder that contextual layers are descriptive, not causal
