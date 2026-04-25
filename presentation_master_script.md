# Freshwater Risk Dashboard Presentation Master Script

This is a presentation-ready walkthrough for the final storytelling dashboard in `report/index.html`.

## 1. Opening

### What to say
“My project studies future freshwater risk in the United States using basin-level WRI Aqueduct data, then adds historical freshwater stress and selected state-level context to help interpret the hotspot pattern. The core finding is that future freshwater risk is concentrated in a smaller set of basins, and most 2050 hotspots are persistent rather than entirely new.”

### One-sentence thesis
“Future freshwater scarcity in the United States looks more like concentrated structural risk than a sudden nationwide emergence.”

## 2. What the final dashboard is

### What to say
“The final deliverable is a static storytelling dashboard in `report/index.html`. The analysis scripts generate cleaned datasets, figures, and an interactive irrigation map, and the report embeds those finished outputs into one narrative site.”

### Files to mention
- `report/index.html`
- `report/site.css`
- `report/site.js`

## 3. Hero metrics

### What to say
“The hero section summarizes the core basin counts from the final WRI master dataset.”

### Verified numbers
- `1,199` basins analyzed
- `292` high-risk basins in 2030
- `297` high-risk basins in 2050
- `271` persistent hotspots in both years

### Strong short answer if asked why that matters
“Those numbers show that the key time story is persistence: the 2050 hotspot count is only slightly larger, and most 2050 hotspots are already high-risk in 2030.”

## 4. Definitions and methods

### What to say
“The project is basin-based because freshwater scarcity is a hydrologic problem. HydroBASINS are the natural unit for the main analysis, while state-level views are only supporting context.”

### Key definition
- Hotspot threshold: `bau30_ws_x_r >= 0.4`

### If asked why raw values were used
“Raw values give a precise classification threshold, while WRI categories are better for readable maps.”

## 5. Section 1: Where are the future hotspots?

### What to say
“The first analytical section shows that future hotspot basins are geographically concentrated rather than evenly distributed nationwide. The clearest concentration is in western and high-demand regions, especially the Southwest.”

### Figures to emphasize
- 2050 BAU choropleth
- Top BAU stress-increase hotspot ranking
- Southwest regional callout

### Short interpretation
“The map gives the broad geography, and the ranking figure shows which basins intensify the most within that already uneven pattern.”

## 6. Section 2: How does risk change over time?

### What to say
“The strongest national time pattern is persistence rather than widespread new emergence.”

### Transition summary to cite
- `22.6%` hotspots in both years
- `2.2%` new hotspots by 2050
- `1.8%` hotspots only in 2030
- `73.5%` non-hotspots in both years

### Short interpretation
“That means future water risk is not rising everywhere in the same way. It stays concentrated in many of the same vulnerable places while a smaller subset worsens more sharply.”

## 7. Section 3: What helps interpret hotspot patterns?

### What to say
“The final context section adds historical freshwater stress, warming context, irrigation-heavy state patterns, and predictive modeling. These layers help interpret hotspot concentration, but they do not replace the basin-level findings.”

### Important phrasing
- Historical stress is supporting context
- Irrigation map is contextual, not hotspot-defining
- Modeling is supportive, not causal proof

## 8. Modeling section

### What to say
“I tested whether basin-level WRI indicators could explain projected 2030 BAU stress. The broader indicator model has moderate fit, and performance improves sharply when projected depletion is added.”

### Numbers to cite
- Interpretation model: `R2 = 0.448`, `RMSE = 0.516`
- Performance model: `R2 = 0.819`, `RMSE = 0.295`

### How to explain carefully
“The stronger model is useful for prediction inside the WRI framework, but depletion is closely related to the future stress outcome, so I present it as predictive support rather than as standalone causal proof.”

## 9. Why it matters

### What to say
“This matters for agriculture, regional planning, urban growth, and long-run water management. Because most 2050 hotspots are persistent rather than entirely new, the project suggests that many future water-risk regions can already be identified today.”

## 10. Limitations

### What to say
- The core hotspot analysis is basin-level, but some context datasets are state-level.
- IWA is HUC12-based rather than `pfaf_id` basin-based.
- WRI future values are scenario-based projections, not observations.
- Context sections are interpretive support, not causal proof.

## 11. Final closing line

### What to say
“Overall, the project suggests that future freshwater scarcity in the United States is best understood as concentrated structural risk in specific basins, not as an evenly distributed national shock.”
