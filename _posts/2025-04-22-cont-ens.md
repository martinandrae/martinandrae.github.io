---
layout: post
title: Continuous Ensemble Weather Forecasting with Diffusion models
date: 2025-04-22
categories: papers

---

Link to [Paper](https://arxiv.org/abs/2410.05431) and [Code](https://github.com/martinandrae/Continuous-Ensemble-Forecasting).


Example 10-day forecasts with 1h resolution and 50 ensemble members.
Forecasts are done with the ARCI-24/1h model, iterating on 24h and interpolating on 1h.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/cont_ens/z500_animation.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true loop=true muted=true%}
    </div>
</div>
<div class="caption">
    Geopotential height at 500hPa (z500)
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/cont_ens/t850_animation.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true loop=true muted=true%}
    </div>
</div>
<div class="caption">
    Temperature at 850hPa (t850)
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/cont_ens/t2m_animation.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true loop=true muted=true%}
    </div>
</div>
<div class="caption">
    Temperature at 2m (t2m)
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/cont_ens/u10_animation.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true loop=true muted=true%}
    </div>
</div>
<div class="caption">
    U-wind component at 10m (u10)
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/cont_ens/v10_animation.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true loop=true muted=true%}
    </div>
</div>
<div class="caption">
    V-wind component at 10m (u10)
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/cont_ens/ws10_animation.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true loop=true muted=true%}
    </div>
</div>
<div class="caption">
    Windspeed at 10m (ws10)
</div>


