# AGENTS.md — church-site (ADVC)

Reference for coding agents working in this repo. This repo builds the public website for ADVC, a Portuguese-speaking evangelical church. Full plan lives on Miro (https://miro.com/app/board/uXjVH7XdFMc=/) and in Emanuel's Notion Second Brain; this file is the short version.

## Purpose
The site is the church's digital front door: increase reach (findability, ministry visibility), build credibility (with authorities, partner churches/institutions), and serve proximity (always-accessible practical info for members/visitors). Bilingual PT/EN is a hard requirement.

## Target architecture
- **Framework:** Next.js, deployed on **Vercel** (Edge CDN/SSL), existing domain pointed via DNS
- **CMS:** **Sanity** — Content Lake (pages, ministries, locations, site settings) queried via GROQ; Sanity Studio for non-technical editors; webhook → on-demand revalidation
- **Video:** Mux or Cloudflare Stream for the hero video
- **Analytics:** Vercel Analytics + Google Search Console
- **UI:** Tailwind-based, copy-paste components — shadcn/ui, Magic UI, Aceternity UI, Motion (animation), Lenis (smooth scroll)
- **Dev environment:** Dockerized for portability across machines/OS

## Build order (milestones)
1. **Infrastructure** — DNS → Vercel, "coming soon" page live, prod deploy; locally: Next.js scaffold, Docker, GitHub repo, env vars/secrets, Vercel+GitHub CI/CD, staging/preview verified
2. **One-page MVP (no CMS)** — hero video, "Who we are", "What we do", "Where we are" (location & service times), contact, social links
3. **Add CMS** — Sanity project + Studio access for the digital team, env vars, migrate MVP content into Sanity schemas
4. **Expanded content** — "New here?"/what-to-expect, ministry preview cards + full pages, pastor page, blog, events (list + detail), newsletter, giving/donations, prayer request form, sermons/media library, PT/EN toggle + bilingual schema

A design prototype (Dark + Light MVP directions) exists in Lovable: https://lovable.dev/projects/dbfc75e7-0e44-4531-9cde-f6356bfa8d24 — check it before building new UI so components match the agreed direction.

## Git workflow

Tasks are tracked as **GitHub issues** on this repo. Every branch and commit ties back to a task.

- **Branch naming:** `church-site#<issue-number>` (e.g. `church-site#1`). One branch per task.
- **Commit messages:** `church-site#<issue-number>: <clear, concise summary of what changed and its impact/reason>`
  - Start with the task code, then a colon and space.
  - Summary states what changed and why it matters — skip filler, keep it tight.
  - Example: `church-site#1: Added README.md to document the project's purpose, high-level technical details, and milestones`

## Conventions / notes
- Design benchmarks used during planning: North Point Community Church, Hillsong Portugal, VOUS Church, Elevation Church.
- Keep content structured so it maps cleanly onto future Sanity schemas (don't hardcode copy that should become CMS-editable in Milestone 3).
- Church management software (e.g. ChMeetings) is a **separate** initiative — not part of this site's scope unless a milestone explicitly says so.
- Tasks live in **GitHub issues** (not Notion/GitLab) — see the Git workflow section above for branch/commit conventions tied to them.
