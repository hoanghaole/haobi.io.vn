---
description: Standard development workflow for LHH project
---
# LHH Development Workflow
## 1. Context Retrieval (Start)
- [ ] Check MemOS for recent updates and context.
- [ ] Check NotebookLM knowledge base for relevant precedents.
## 2. Development Execution
- [ ] Perform coding tasks as requested.
- [ ] Verify changes locally (`npm run dev`).
## 3. Context Preservation & Reporting (End)
- [ ] Update `plan.md` with technical insights, optimization stats, and next actions.
- [ ] **Sync Knowledge Base**: Export data for NotebookLM (`npx tsx scripts/export_knowledge.ts`).
- [ ] Summarize the session's achievements.
- [ ] Save the summary to MemOS.
