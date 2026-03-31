# GitHub Copilot Global Instructions - VibeBiz (Updated 27 Maret 2026)

## Tech Stack Wajib (JANGAN PERNAH UBAH)
- Next.js 15 App Router (folder app/)
- TypeScript strict mode (no `any`)
- Tailwind CSS + shadcn/ui (semua UI component harus dari shadcn)
- Supabase (Auth, Database, Storage) — JANGAN gunakan Prisma/Drizzle untuk MVP
- Lucide React untuk icon
- date-fns untuk tanggal (zona WIB)
- Zod untuk form validation
- Sonner untuk toast notification

## Coding Style Wajib
- Semua teks UI dalam **Bahasa Indonesia** yang ramah dan natural untuk UMKM
- Server Component sebanyak mungkin
- Client Component hanya jika diperlukan interactivity (`'use client'`)
- Gunakan `cn()` dari shadcn/utils
- Format Rupiah selalu: `Rp 1.250.000`
- Setiap component baru tambahkan komentar di atas: `// Vibe: modern-tradisional UMKM Indonesia`

## Vibe Coding Rules (WAJIB)
- Selalu interpret "vibe ..." menjadi JSON dulu (warna, font, layout, icon)
- Warna default: earthy tones (#8B4513, #D2B48C, #228B22, #F5F5DC)
- Subtle motif batik/songket hanya di background atau decorative elements
- Rasanya hangat, empowering, tidak sombong

## Agent & Skills Rules
- Gunakan custom skills dari folder `.agents/skills` jika tersedia
- Prioritaskan role: @vibe-generator, @vibe-interpreter, @vibe-reviewer
- Selalu ikuti AGENTS.md dan PRD.md
- Model terbaik: **GPT-5.3-Codex** untuk task vibe coding kompleks

## Batasan Keras
- JANGAN gunakan Firebase, MongoDB, NextAuth (pakai Supabase Auth)
- JANGAN pakai inline style
- JANGAN console.log di production
- Mobile-first & PWA ready

Copilot harus menganggap file ini sebagai **single source of truth**.
