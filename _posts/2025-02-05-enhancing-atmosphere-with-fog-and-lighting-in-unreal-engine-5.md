---
title: Enhancing Atmosphere with Fog and Lighting in Unreal Engine 5
tags: [EndlessJourney, Devlog, Unreal Engine]
style: fill
color: secondary
description: In this blog, I will explain how I worked on the visual atmosphere of our project using fog and lighting (Directional Light) in Unreal Engine 5
---

*author: [Tenshi](https://github.com/TTENSHII)*

## 1. Adding and Adjusting Fog

### Exponential Height Fog + Volumetric Fog

I used [Exponential Height Fog](https://dev.epicgames.com/documentation/en-us/unreal-engine/exponential-height-fog-in-unreal-engine) with the ***Volumetric Fog*** option enabled to achieve a realistic fog effect that interacts with light.

#### Exponential Height Fog Settings

- <u>Fog Density</u>: Increased to create ***thick fog***, covering the entire map.

- <u>Fog Height Falloff</u>: Adjusted to keep the fog dense ***even near the ground***, preventing quick dissipation.

- <u>Start Distance</u>: Little increased to see around the player but still ***maintain a mysterious atmosphere***.

- <u>Directional Inscattering Exponent</u>: Reduced so that the moonlight ***disperses through the fog***, creating a slightly misty ambiance.

- <u>Albedo & Emissive</u>: Adjusted to give the fog a ***cold and mysterious*** look.

---

## 2. Transforming the Sun into a Full Moon

I uses a ***Directional Light*** to simulate the sun. Using `Ctrl + L`, I ***rotated the light*** to give the illusion of a high moon in the sky.

#### Directional Light Settings

- <u>Light Color</u>: Changed to a ***slightly bluish-white*** to simulate the cold moonlight.

- <u>Intensity</u>: Reduced for a ***soft lighting effect***, avoiding excessive brightness that would break the night effect.

- <u>Source Angle</u>: Slightly increased to soften shadows and avoid harsh contrasts.

- <u>Volumetric Scattering Intensity</u>: Adjusted so that moonlight ***penetrates the fog*** and creates ***realistic light rays*** through the trees.

---

## 3. Creating Moon Rays Through Trees

***Visible moon rays*** are an important effect to enhance the immersive ambiance. Here's how I achieved this effect:

- <u>Enabled Volumetric Fog</u>: Allows moonlight to interact with the fog.

- <u>Directional Light with Volumetric Scattering</u>: Tweaked intensity so that light passes through objects and creates visible beams.

- <u>Strategic tree placement</u>: I tested different angles to maximize the ***impact of rays passing between branches***.

---

## Final Result

Thanks to these adjustments, I successfully created an immersive nighttime horror environment:
- ✅ A ***thick fog*** covers the entire map, even near the player.
- ✅ The ***full moon*** softly illuminates the scene with a cold and realistic tint.
- ✅ ***Moon rays pass through the trees***, creating a natural effect while maintaining some visibility.
- ✅ The ***thick fog*** enhances the visual impact of ***point lights*** and ***spotlights***, creating dramatic and realistic light beams that pierce through the mist.

---

I will include some before/after screenshots to show how these settings evolved!

## Before

| ### | ### |
| --- | --- |
| {::nomarkdown}<img src="https://raw.githubusercontent.com/X-R-G-B/EndlessJourney-public/refs/heads/main/__assets/_posts/2025-02-05-enhancing-atmosphere-with-fog-and-lighting-in-unreal-engine-5/before_1.webp">{:/} | {::nomarkdown}<img src="https://raw.githubusercontent.com/X-R-G-B/EndlessJourney-public/refs/heads/main/__assets/_posts/2025-02-05-enhancing-atmosphere-with-fog-and-lighting-in-unreal-engine-5/before_2.webp">{:/} |
| {::nomarkdown}<img src="https://raw.githubusercontent.com/X-R-G-B/EndlessJourney-public/refs/heads/main/__assets/_posts/2025-02-05-enhancing-atmosphere-with-fog-and-lighting-in-unreal-engine-5/before_3.webp">{:/} | {::nomarkdown}<img src="https://raw.githubusercontent.com/X-R-G-B/EndlessJourney-public/refs/heads/main/__assets/_posts/2025-02-05-enhancing-atmosphere-with-fog-and-lighting-in-unreal-engine-5/before_4.webp">{:/} |

## After

| ### | ### |
| --- | --- |
| {::nomarkdown}<img src="https://raw.githubusercontent.com/X-R-G-B/EndlessJourney-public/refs/heads/main/__assets/_posts/2025-02-05-enhancing-atmosphere-with-fog-and-lighting-in-unreal-engine-5/after_1.webp">{:/} | {::nomarkdown}<img src="https://raw.githubusercontent.com/X-R-G-B/EndlessJourney-public/refs/heads/main/__assets/_posts/2025-02-05-enhancing-atmosphere-with-fog-and-lighting-in-unreal-engine-5/after_2.webp">{:/} |
| {::nomarkdown}<img src="https://raw.githubusercontent.com/X-R-G-B/EndlessJourney-public/refs/heads/main/__assets/_posts/2025-02-05-enhancing-atmosphere-with-fog-and-lighting-in-unreal-engine-5/after_3.webp">{:/} | {::nomarkdown}<img src="https://raw.githubusercontent.com/X-R-G-B/EndlessJourney-public/refs/heads/main/__assets/_posts/2025-02-05-enhancing-atmosphere-with-fog-and-lighting-in-unreal-engine-5/after_4.webp">{:/} |
