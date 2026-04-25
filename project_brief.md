# Emerging Freshwater Risk In The United States

## Research Question
Which U.S. basins are projected to face the highest future water stress in 2030 and 2050, how does that risk change over time, and what supporting historical or regional context helps interpret those hotspot patterns?

## Final Deliverable
The final project deliverable is a static storytelling dashboard in `report/index.html`. It presents the finished analysis through a narrative layout with embedded figures, summary metrics, and one interactive irrigation map.

## Core Takeaway
Future freshwater risk is concentrated in a smaller set of structurally vulnerable basins rather than being evenly distributed nationwide. Most 2050 hotspots are persistent hotspots that are already high-risk in 2030, while a smaller subset becomes newly high-risk by 2050.

## Final Headline Metrics
- `1,199` basins analyzed
- `292` high-risk basins in 2030
- `297` high-risk basins in 2050
- `271` persistent hotspots in both years

## Final Transition Summary
- `26` new hotspots by 2050
- `21` hotspots only in 2030
- `881` basins that are not hotspots in either year

## Official Project Datasets

### Basin-level hotspot and modeling dataset
- `data/cleaned/WRI_master_dataset.csv`
- Geographic unit: `pfaf_id`
- Purpose: primary basin-level file for hotspot classification, transition counts, rankings, and model inputs

### Historical freshwater trend dataset
- `data/cleaned/iwa_annual_named.csv`
- Geographic unit: `huc12`
- Purpose: historical freshwater stress context from 2009 to 2020

### State-level streamflow context
- `data/cleaned/usgs_streamflow_state_annual.csv`
- Geographic unit: state-year
- Purpose: supporting hydrologic context

### Additional supporting context
- `data/cleaned/historical_future_context/`
- `data/cleaned/irrigated_acres_state_map_interactive.html`

## Variable Reference

### Basin-level predictors
- `bws_score`: baseline water stress score on WRI's 0-5 scale
- `iav_score`: interannual variability score on WRI's 0-5 scale
- `sev_score`: seasonal variability score on WRI's 0-5 scale
- `area_km2`: basin area in square kilometers
- `bau30_ww_x_r`: projected 2030 BAU raw water withdrawals
- `bau30_wd_x_r`: projected 2030 BAU raw water depletion

### Basin-level outcomes
- `bau30_ws_x_r`: projected 2030 BAU raw water stress
- `bau50_ws_x_r`: projected 2050 BAU raw water stress
- `future_high_risk_2030`: indicator for `bau30_ws_x_r >= 0.4`
- `future_high_risk_2050`: indicator for `bau50_ws_x_r >= 0.4`
- `future_stress_increase_bau`: projected 2050 minus 2030 BAU water stress

## Final Scope Decision
- The final report is centered on basin-level WRI hotspot identification.
- Historical stress, temperature context, and irrigation context are supporting interpretation layers.
- The project does not attempt to recreate WRI's full internal projection process.

## Final Analytical Sections
- `Question`: frames the three-part research question
- `Hotspots`: shows the 2050 choropleth and BAU increase ranking
- `Change`: shows 2030 versus 2050 hotspot persistence and transition shares
- `Context`: adds historical freshwater, warming, irrigation, and model interpretation
- `Limits`: closes with why the project matters and what limitations should stay attached to the findings

## Final Modeling Summary

### Interpretation model
- Features: `bws_score`, `iav_score`, `sev_score`, `area_km2`, `bau30_ww_x_r`
- `R2 = 0.448`
- `RMSE = 0.516`

### Performance model
- Features: `bws_score`, `iav_score`, `sev_score`, `area_km2`, `bau30_ww_x_r`, `bau30_wd_x_r`
- `R2 = 0.819`
- `RMSE = 0.295`

## Final Framing To Keep Consistent
- Hotspots are concentrated, not evenly distributed.
- Persistence is the dominant 2030-to-2050 pattern.
- Historical and state-level context helps interpret hotspot-heavy regions.
- Modeling results are supportive and should not be presented as causal proof.
