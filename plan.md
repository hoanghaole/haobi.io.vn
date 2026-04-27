# Strategic Plan Report

## Asset Optimization
- Poster 2:3, Hero 16:9, Content 3:2
- Hero image currently uses unsplash placeholder, optimized to 16:9 visually with background fill to prevent distortion.

## Content Standards
- N/A yet

## Supabase Status
- N/A yet

## Next Steps
- Push code to GitHub repository to trigger deployment.
- Configure GitHub Secrets: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.
- Integrate Supabase properly.
- Extract hero section dynamic data into Supabase.

## LHH Strategic Report
### Deployment Status
- **Target:** haobi.io.vn (AZDIGI)
- **Workflow:** .github/workflows/deploy.yml
- **Build Status:** ✅ Verified local build success.
### DISC Lens
- Designed for clarity (D/C) with glassmorphism for engagement (I).
### UI Improvements
- Setup Stitch UI for Home Page (Hero + Features)
### Data Binding
- Not yet bound. Needs Supabase for dynamic content like feature lists.
### n8n Opp
- Webhook trigger on "Get Consultation" button.
### Power BI
- Future embedded inside "Read Case Studies" or "View Solutions".
### DoD
1. UI matches Stitch output visually
2. Uses Tailwind classes + Lucide React
3. Responsive on mobile
4. Vite dev server runs
5. Uses font Inter
6. Implemented dark mode
7. No build errors
8. App renders WebsiteView component
