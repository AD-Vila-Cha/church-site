# church-site

The public website for **ADVC**, a Portuguese-speaking evangelical church. The site is our digital front door: it makes the church findable, communicates who we are and what we do, and gives members and visitors quick access to practical information (locations, service times, contacts, events, giving).

New to this repo? Start here, then read [`AGENTS.md`](./AGENTS.md) for the full plan, architecture, and git workflow.

## Planning references

- **Miro board** (purpose, story map, architecture, milestones): https://miro.com/app/board/uXjVH7XdFMc=/
- **Design prototype** (Lovable — Dark & Light MVP directions): https://lovable.dev/projects/dbfc75e7-0e44-4531-9cde-f6356bfa8d24
- Tasks are tracked as **GitHub issues** on this repo.

## Tech stack

- **Framework:** Next.js, deployed on **Vercel**
- **CMS:** **Sanity** (Content Lake + Studio, queried via GROQ)
- **Video:** Mux or Cloudflare Stream for hero video
- **UI:** Tailwind + shadcn/ui, Magic UI, Aceternity UI, Motion, Lenis
- **Analytics:** Vercel Analytics + Google Search Console
- **Local dev:** Dockerized for portability across machines/OS

Full architecture diagram and rationale live on the Miro board and in `AGENTS.md`.

## Milestones

1. **Infrastructure** — domain on Vercel, "coming soon" page, CI/CD pipeline, staging/preview
2. **One-page MVP (no CMS)** — hero, who we are, what we do, where we are, contact
3. **Add CMS** — Sanity project + Studio access for the digital team
4. **Expanded content** — ministries, blog, events, newsletter, giving, prayer requests, sermons library, PT/EN bilingual support

## Contributing

Every branch and commit ties back to a GitHub issue — see the **Git workflow** section in [`AGENTS.md`](./AGENTS.md) for the exact branch-naming and commit-message conventions before opening a PR.
