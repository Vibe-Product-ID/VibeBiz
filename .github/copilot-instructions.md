# GitHub Copilot Global Instructions - VibeBiz

## Tech Stack Wajib (JANGAN UBAH)
- Next.js App Router (folder `app/`)
- TypeScript (strict mode, no `any`)
- Tailwind CSS + shadcn/ui (semua component harus pakai shadcn)
- Supabase (auth, database, storage) — jangan pakai Prisma atau Drizzle untuk MVP
- Lucide React untuk icon
- Date-fns untuk tanggal (zona Indonesia)
- Zod untuk validation

## Coding Style (WAJIB DIKUTI)
- File nama: kebab-case untuk folder, PascalCase untuk component
- Semua string UI harus dalam **Bahasa Indonesia** (kecuali variable/code)
- Gunakan Server Component sebanyak mungkin
- Client Component hanya jika butuh interactivity (tandai 'use client')
- Gunakan `cn()` utility dari shadcn untuk class merging
- Error handling: gunakan toast (sonner) dengan pesan ramah UMKM
- Currency: selalu format ke Rupiah (`Rp 1.250.000`)

## Batasan & Rules
- JANGAN pernah gunakan Firebase, MongoDB, atau backend selain Supabase
- JANGAN pakai inline style (kecuali dynamic Tailwind)
- JANGAN gunakan `console.log` di production code (gunakan logger sederhana)
- Semua page harus responsive mobile-first
- Setiap component baru harus punya komentar vibe di atas: `// Vibe: tradisional Jawa`
- Integrasi WhatsApp harus pakai Evolution API atau official WA Business API (jangan hardcode nomor)
- AI prompt yang di-generate harus dalam bahasa Indonesia + English mixed jika perlu

## Vibe Coding Rules
- Ketika user bilang "vibe ...", selalu interpretasi dulu menjadi JSON (warna, font, icon, layout)
- Warna default UMKM Indonesia: earthy tones (#8B4513, #D2B48C, #228B22, dll)
- Font default: Inter + local font (misal "Lora" untuk vibe tradisional)

## Command Keywords yang Harus Dipahami Copilot
- @vibe-interpreter → ubah vibe jadi JSON
- @vibe-generator → buat full page/component
- @vibe-reviewer → review kode

Copilot harus selalu mengikuti file ini sebagai single source of truth.
Jika ada kontradiksi dengan PRD, utamakan file ini.

Terakhir di-update: 27 Maret 2026
