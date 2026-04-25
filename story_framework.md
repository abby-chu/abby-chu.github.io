# Story Framework

## Main Takeaway
Future freshwater risk in the United States is concentrated in a smaller set of basins rather than being evenly distributed nationwide. Most 2050 hotspots are persistent hotspots that are already high-risk in 2030, while only a smaller subset newly emerges by 2050.

## Final Hotspot Definition
For the final report, a hotspot is anchored to the raw WRI stress threshold:

- `bau30_ws_x_r >= 0.4` for 2030 hotspot identification
- `bau50_ws_x_r >= 0.4` for 2050 comparison and transition summaries

This definition supports both the dashboard headline counts and the transition story:

- `292` hotspots in 2030
- `297` hotspots in 2050
- `271` persistent hotspots in both years
- `26` new hotspots by 2050

## Final Time Story
The strongest time-based conclusion is persistence, not uniform national escalation.

- `22.6%` of basins are hotspots in both years
- `2.2%` become new hotspots by 2050
- `1.8%` are hotspots only in 2030
- `73.5%` remain below hotspot status in both years

Presentation language:
- The national pattern is uneven worsening rather than a uniform jump everywhere.
- Most 2050 hotspots can already be identified as vulnerable in 2030.
- The most important time story is structural persistence with selective intensification.

## Geographic Storytelling
The strongest hotspot patterns cluster in western and high-demand regions, especially the Southwest. The final dashboard uses the 2050 choropleth and BAU increase ranking to show that future scarcity is spatially concentrated, not evenly spread across the country.

Presentation language:
- Future hotspot basins are concentrated in arid and high-demand regions, especially in the western U.S.
- The Southwest is the clearest regional concentration in the project.
- The increase ranking matters because it highlights which basins intensify most strongly even within an already uneven national pattern.

## Historical And Regional Context
Historical freshwater stress, warming context, and irrigation-heavy state patterns are used to help interpret why hotspot-heavy regions stand out. These contextual layers support the basin story, but they do not redefine the basin-based findings.

How to explain the connection:
- Historical freshwater stress provides the strongest supporting context.
- Irrigation-heavy state patterns add a broader structural interpretation layer.
- Temperature context is descriptive and helps situate regional vulnerability.

## Modeling Interpretation
The predictive modeling is a supporting section, not the main result.

### Interpretation model
- Uses baseline WRI indicators and projected withdrawals
- `R2 = 0.448`
- `RMSE = 0.516`
- Meaning: broader baseline stress and variability explain part of future risk

### Performance model
- Adds projected depletion
- `R2 = 0.819`
- `RMSE = 0.295`
- Meaning: projected depletion greatly improves predictive performance within the WRI framework

### How to explain this
- The interpretation model is better for discussing broad patterns.
- The performance model is better for showing predictive lift once depletion is included.
- These models are descriptive and predictive, not causal proof.

## Limits To Keep Consistent
- The core analysis is basin-based, but several context layers are state-based.
- IWA is at the HUC12 level, not the `pfaf_id` basin level.
- WRI future values are scenario-based BAU projections, not observations.
- Context figures should be described as interpretive support, not causal evidence.

## Why This Matters
Freshwater scarcity matters for agriculture, urban growth, ecosystem stability, and long-run water planning. Because most 2050 hotspots are persistent rather than entirely new, the project suggests that many future water-risk regions can already be identified today.
