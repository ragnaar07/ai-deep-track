# AI Deep Track

A static, installable PWA for a day-by-day, math-first AI learning roadmap.

## Run locally

From this folder:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Current behavior
- 336-day curriculum (48 weeks)
- One mission mapped to each calendar day from the chosen start date
- Completing the current mission unlocks the next mission immediately
- 6 study days + 1 review day cadence
- Progress stored in browser localStorage
- Curated video + reading links
- Search/filter full roadmap
- Mobile-friendly / PWA installable

## Next upgrade ideas
- Supabase auth + cloud progress sync
- Daily browser/email/WhatsApp reminders via backend cron
- Built-in quizzes and spaced repetition
- Notes per lesson
- GitHub assignment submissions
