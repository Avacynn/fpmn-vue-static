# Frontier Properties (Vue.js Redesign)

A modern, responsive static website for Frontier Properties, showcasing apartments in Mora and Pine City, MN. Built with Vue 3 and Vite.

## Features

*   **Modern UI/UX**: Full-width hero banners, responsive layouts, and polished typography.
*   **Multi-Location Support**: Dedicated pages for Mora and Pine City properties.
*   **Interactive Gallery**: Custom-built photo lightbox with keyboard navigation.
*   **Amenities Showcase**: Clean, grid-based layout for apartment features and utilities.
*   **Responsive Design**: Optimized for mobile, tablet, and desktop views.

## Tech Stack

*   **Framework**: Vue 3 (Composition API)
*   **Build Tool**: Vite
*   **Styling**: CSS Variables, Scoped CSS, Flexbox/Grid
*   **Routing**: Vue Router

## Project Setup

### Install Dependencies

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Project Structure

*   `src/views/`: Page components (Home, Apartment)
*   `src/components/`: Reusable UI components (Amenities, Photos)
*   `src/data.js`: Static data source for property details

## Optimizations & SEO

To achieve high performance and SEO scores, the following strategies were implemented:

*   **Resource Preloading**: Critical assets like the Pine City background image and Google Fonts are preloaded in `index.html` to minimize Largest Contentful Paint (LCP).
*   **Non-blocking Fonts**: Google Fonts are loaded using a `preload` strategy with a fallback to `stylesheet` on load, preventing render-blocking behavior.
*   **Script Deferral**: The Service Worker registration is set to `script-defer` in `vite.config.js` to ensure it doesn't compete with critical initial rendering resources.
*   **Compression**: Gzip and Brotli compression are enabled via `vite-plugin-compression` to minimize asset transfer sizes.
*   **PWA Support**: Integrated `vite-plugin-pwa` for offline capabilities and app-like installation.
*   **SEO Meta Tags**: Comprehensive meta tags including `description`, `keywords`, and Open Graph (`og:`) tags are included for better search engine visibility and social sharing.

## Performance Stats

**Mobile Analysis** (Dec 28, 2025)

*   **Performance**: 84
*   **Accessibility**: 86
*   **Best Practices**: 100
*   **SEO**: 92

**Metrics**

*   **First Contentful Paint (FCP)**: 2.6 s
*   **Largest Contentful Paint (LCP)**: 3.6 s
*   **Total Blocking Time (TBT)**: 10 ms
*   **Cumulative Layout Shift (CLS)**: 0.054
*   **Speed Index**: 3.9 s

[View Full Report](https://pagespeed.web.dev/analysis/https-frontierpropertiesmn-com-pinecity/uwtgrm89ro?form_factor=mobile)

**Desktop Analysis** (Dec 28, 2025)

*   **Performance**: 98
*   **Accessibility**: 86
*   **Best Practices**: 100
*   **SEO**: 100

**Metrics**

*   **First Contentful Paint (FCP)**: 0.7 s
*   **Largest Contentful Paint (LCP)**: 0.9 s
*   **Total Blocking Time (TBT)**: 0 ms
*   **Cumulative Layout Shift (CLS)**: 0.003
*   **Speed Index**: 1.3 s

[View Full Report](https://pagespeed.web.dev/analysis/https-frontierpropertiesmn-com-pinecity/uwtgrm89ro?form_factor=desktop)
*   `src/style.css`: Global styles and CSS variables

# Frontier Properties Vue Redesign

This is a static Vue.js redesign of the Frontier Properties website.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Notes

- The admin panel and live listing features have been removed.
- Data is now static and located in `src/data.js`.
- Assets are in `public/assets`.
- Amenities text and lists in `src/data.js` are placeholders and should be updated with the correct information.
# fpmn
