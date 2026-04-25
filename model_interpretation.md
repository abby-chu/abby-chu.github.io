# Model Interpretation Notes

## BAU 2030 Regression Comparison
Two linear regression models were used to explain projected 2030 BAU raw water stress (`bau30_ws_x_r`) in the final dashboard.

### Interpretation model
- Features:
  - `bws_score`
  - `iav_score`
  - `sev_score`
  - `area_km2`
  - `bau30_ww_x_r`
- Performance:
  - `R2 = 0.447665`
  - `RMSE = 0.515568`

### Performance model
- Features:
  - `bws_score`
  - `iav_score`
  - `sev_score`
  - `area_km2`
  - `bau30_ww_x_r`
  - `bau30_wd_x_r`
- Performance:
  - `R2 = 0.819019`
  - `RMSE = 0.295122`

## Final Dashboard Interpretation
- The interpretation model shows that baseline stress and variability indicators explain part of future basin-level water stress, but only with moderate fit.
- The performance model shows a large improvement once projected depletion is added.
- In the final project, this modeling section is treated as supporting evidence within the WRI framework rather than as independent external validation.

## Coefficient Reading
Key coefficients from the saved comparison table:

### Interpretation model
- `bws_score`: `0.299520`
- `iav_score`: `-0.037619`
- `sev_score`: `0.132868`
- `area_km2`: `0.000001`
- `bau30_ww_x_r`: `0.004882`

### Performance model
- `bws_score`: `0.015844`
- `iav_score`: `-0.013340`
- `sev_score`: `0.040614`
- `area_km2`: `0.000002`
- `bau30_ww_x_r`: `0.009510`
- `bau30_wd_x_r`: `1.493928`

## What To Say About The Models
- The interpretation model is the better choice when discussing broad explanatory context.
- The performance model is the better choice when showing how much predictive accuracy improves once depletion is included.
- The strong depletion coefficient should be interpreted carefully because depletion and projected future stress are closely related within the same WRI modeling framework.

## Important Caution
- `bau30_wd_x_r` and `bau30_ws_x_r` are conceptually close variables.
- That means the stronger model is useful for prediction, but it should not be over-described as proof of an external causal driver.
- In the final report, the modeling section supports the hotspot story; it does not replace the hotspot geography and persistence results.
