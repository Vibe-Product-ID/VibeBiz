# VibeBiz

**No-Code App Builder khusus UMKM Indonesia** — cukup ceritakan "vibemu" dalam bahasa Indonesia, AI akan buatkan aplikasi web + PWA lengkap dalam hitungan menit.

## Apa itu VibeBiz?
Platform SaaS yang memungkinkan pemilik UMKM (warung, toko batik, catering, home industry, dll) membuat aplikasi bisnis sendiri tanpa coding.  
Cukup ketik vibe seperti:  
> “Buatkan aplikasi catat stok kain batik, kirim notif WhatsApp kalau stok tinggal 5, laporan penjualan harian, vibe tradisional Jawa sederhana.”

AI akan generate:
- Full Next.js app (web + PWA)
- Integrasi WhatsApp Business, Midtrans, GoPay
- Dashboard stok, penjualan, prediksi
- Laporan pajak sederhana

## Fitur Utama
- Vibe Coding Engine (AI prompt → full app)
- 20+ template UMKM siap pakai
- Auto WhatsApp notification & invoice
- Sync marketplace (Tokopedia, Shopee)
- Multi-tenant SaaS (satu akun = banyak app UMKM)
- Export kode (untuk yang mau customize lebih lanjut)

## Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS + shadcn/ui
- **Database & Auth**: Supabase (PostgreSQL + Auth + Storage)
- **AI**: Gemini + OpenAI + Claude
- **Deployment**: Vercel
- **Payments**: Midtrans
- **Notifications**: WhatsApp Business API + Evolution API (fallback)

## Quick Start
```bash
git clone https://github.com/Vibe-Product-ID/VibeBiz.git
cd VibeBiz
pnpm install
pnpm dev
```
Buka http://localhost:3000

Cara Berkontribusi (Vibe Coding)
Lihat file:
```bash
PRD.md → spesifikasi produk
AGENTS.md → daftar AI Agent
.github/copilot-instructions.md → aturan wajib Copilot
```

### 1. **VibeBiz – No-Code App Builder Khusus UMKM Indonesia**
- **Konsep**: Platform SaaS di mana pemilik warung, toko batik, jasa catering kecil, atau home industry cukup ketik “vibe”-nya dalam bahasa Indonesia. Contoh: “Buatkan aplikasi catat stok kain batik, kirim notif WhatsApp otomatis kalau stok tinggal 5, plus laporan penjualan harian ke email, vibe sederhana dan tradisional Jawa.”
- **Cara pakai AI + Vibe Coding**:
  - User deskripsikan vibe + kebutuhan → AI (Gemini/Claude) langsung generate full app (web + mobile PWA).
  - Integrasi otomatis: WhatsApp Business API, Midtrans/GoPay, Shopee/Tokopedia sync, Google Sheets.
- **Fitur unggulan**:
  - Template siap pakai UMKM (warung makan, fashion, handicraft).
  - Auto-generate laporan pajak sederhana + stok prediksi pakai AI.
- **Monetisasi**: Freemium (gratis 1 app dasar), Pro Rp99.000–299.000/bulan. Tambahan: marketplace template app UMKM (kamu ambil komisi 20%).
- **Potensi pasar**: 60+ juta UMKM di Indonesia, banyak yang masih manual Excel/WA. Bisa kolab dengan program pemerintah (Kemenkop UKM).

