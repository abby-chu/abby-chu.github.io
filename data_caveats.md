# Data Caveats

## WRI Scale Note
- `bws_score`, `iav_score`, and `sev_score` are WRI score variables on a 0-5 scale.
- Future `*_ws_x_r` fields are raw projected water-stress values.
- These should be interpreted side by side, but baseline WRI scores should not be directly subtracted from future raw stress values.
- The final dashboard uses raw thresholds for hotspot logic and category labels for map readability.

## Hotspot Threshold Note
- The final report defines a hotspot using `bau30_ws_x_r >= 0.4` for 2030 and the analogous `bau50_ws_x_r >= 0.4` comparison for 2050 transitions.
- This threshold is a project choice used for consistent classification across counts, transition summaries, and rankings.

## Historical Data Note
- `data/cleaned/iwa_annual_named.csv` includes some missing values in `stress`, `availability`, `consumption`, and `streamflow`.
- The file also includes some negative `availability` values.
- These should be documented as source-data characteristics rather than silently treated as ordinary interpreted measurements.

## Geographic Scale Note
- The core hotspot analysis is at the `pfaf_id` basin level.
- Historical freshwater data is at the HUC12 level.
- Irrigation and some supporting climate context are shown at the state level.
- Because of those mismatched units, contextual figures should be interpreted as broad support for the story rather than one-to-one basin evidence.

## Modeling Note
- The basin-level master dataset is appropriate for hotspot analysis and basin-level regression.
- Historical HUC12 trends are used as supporting context, not as direct predictors in the basin regression tables.
- The stronger regression model includes projected depletion, which is closely related to projected future stress inside the WRI framework, so it should be described as predictive support rather than standalone causal proof.

## Scenario Note
- WRI future values are scenario-based projections under BAU and other scenario assumptions.
- They are not direct observations of future water stress.
