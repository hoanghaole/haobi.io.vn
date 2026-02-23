---
name: AZDIGI GitHub Deployment
description: Automated deployment workflow for hosting applications on AZDIGI servers using GitHub Actions and CI/CD best practices.
---

# AZDIGI Deployment Skill

This skill ensures that the application is correctly built and deployed to AZDIGI hosting through GitHub Actions.

## 1. Pipeline Overview
The deployment process is managed by `.github/workflows/deploy.yml` and follows these steps:
- **Trigger**: Automatic deployment occurs on every push to the `main` branch.
- **Environment**: Uses Node.js 20 on an Ubuntu-latest runner.
- **Build**: Executes `npm run build` with optimized memory (`--max-old-space-size=4096`).
- **Transfer**: Uses `FTP-Deploy-Action` to sync the `./dist/` folder to the server's `public_html/` directory.

## 2. Configuration Management
To maintain deployment integrity, I will:
- **Secrets Management**: Ensure all required secrets (`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `AIRTABLE_TOKEN`, etc.) are monitored and requested if missing.
- **Dependency Handling**: Use `--legacy-peer-deps` to avoid installation conflicts common in complex projects.
- **Build Verification**: Locally verify builds before pushing to GitHub to minimize CI/CD failures.

## 3. Best Practices
- **Atomic Commits**: Group related changes into single commits to trigger clean deployment cycles.
- **Pre-deployment Checks**: Verify that `npm run build` succeeds locally before recommending a push.
- **Environment Parity**: Keep local development as close to the AZDIGI production environment as possible.
- **Monitoring**: Check GitHub Action logs after push to confirm deployment success.
