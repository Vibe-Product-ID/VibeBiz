# AGENTS.md - VibeBiz AI Agents

Repository ini menggunakan **GitHub Copilot Agent** + multi-agent workflow.

## Agent Roles

### 1. Product Agent (@vibe-product)
- Bertanggung jawab atas PRD, user flow, dan copywriting Indonesia yang ramah UMKM.
- Selalu jawab dalam bahasa Indonesia.

### 2. Vibe Interpreter Agent (@vibe-interpreter)
- Mengubah deskripsi vibe bahasa Indonesia menjadi JSON Schema yang structured.
- Contoh: “vibe tradisional Jawa sederhana” → warna #8B4513, font serif, icon wayang, dll.

### 3. App Generator Agent (@vibe-generator)
- Generate full page/component berdasarkan JSON dari Vibe Interpreter.
- Harus mengikuti aturan di `.github/copilot-instructions.md`

### 4. Reviewer Agent (@vibe-reviewer)
- Review kode yang dihasilkan Agent lain.
- Pastikan sesuai coding style dan batasan lokal.

## Cara Menggunakan Agent
Di GitHub Copilot Chat / Workspace, ketik:
`@vibe-generator Buat halaman dashboard stok dengan vibe batik Jawa`

Agent akan otomatis menjalankan workflow yang benar.

## Default Agent untuk file baru
Setiap kali membuat file baru, Copilot harus otomatis memanggil `@vibe-generator` kecuali ditentukan lain.
