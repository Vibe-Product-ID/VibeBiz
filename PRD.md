# Product Requirements Document (PRD) - VibeBiz

## 1. Vision
Menjadi Canva + Glide + Bubble untuk UMKM Indonesia dengan kekuatan “vibe coding” dalam bahasa Indonesia.

## 2. User Persona
- **Pemilik Warung/Catering** (35-55 th, tidak paham coding, pakai HP + WA)
- **Pengrajin Batik/Handicraft** (butuh stok & penjualan online)
- **Jasa Home Industry** (butuh invoice + laporan sederhana)

## 3. Core Features (MVP)

### Phase 1 (MVP - 4 minggu)
- Auth (Supabase)
- Vibe Input Page (textarea besar + contoh prompt)
- AI Engine → generate app configuration (JSON schema)
- Dynamic App Renderer (berdasarkan JSON yang dihasilkan AI)
- Dashboard UMKM (stok, penjualan, laporan)
- WhatsApp notification (template)
- Template Gallery (10 template UMKM)

### Phase 2
- Export full Next.js code
- Multi-app per user
- Payment integration (Midtrans)
- Marketplace template (jual & beli template antar UMKM)

## 4. Non-Functional Requirements
- Bahasa UI: 100% Bahasa Indonesia
- Mobile-first & PWA
- Loading < 2 detik
- Biaya operasional rendah (Supabase + Vercel free tier dulu)
- Keamanan: row-level security Supabase

## 5. Success Metrics
- 100 user aktif dalam 2 bulan pertama
- Rata-rata 3 app di-generate per user
- Churn < 15% bulan ke-2
