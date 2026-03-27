import {
  ArrowRight,
  CheckCircle2,
  Handshake,
  Instagram,
  LayoutTemplate,
  Leaf,
  MessageCircle,
  Menu,
  MessageCircleMore,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Wallet,
} from 'lucide-react';

import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { cn } from '../lib/utils';

type StepItem = {
  title: string;
  description: string;
  icon: typeof Sparkles;
};

type BenefitItem = {
  title: string;
  description: string;
  icon: typeof Wallet;
};

type TestimonialItem = {
  name: string;
  role: string;
  quote: string;
};

type TemplateItem = {
  name: string;
  category: string;
  description: string;
};

const navItems = ['Beranda', 'Template', 'Harga', 'Blog', 'Login'];
const socialLinks = [
  { name: 'Instagram VibeBiz', href: 'https://instagram.com/vibebiz.id', icon: Instagram },
  { name: 'WhatsApp VibeBiz', href: 'https://www.whatsapp.com', icon: MessageCircle },
];
const batikBackdropClassName =
  'pointer-events-none fixed inset-0 -z-10 opacity-30 [background:radial-gradient(circle_at_20%_20%,#D2B48C_0%,transparent_35%),radial-gradient(circle_at_80%_10%,#228B22_0%,transparent_30%),linear-gradient(135deg,rgba(139,69,19,0.07)_25%,transparent_25%,transparent_50%,rgba(139,69,19,0.07)_50%,rgba(139,69,19,0.07)_75%,transparent_75%,transparent)] [background-size:100%_100%,100%_100%,42px_42px]';

const steps: StepItem[] = [
  {
    title: 'Ceritakan Vibemu',
    description: 'Ketik kebutuhan bisnismu dengan bahasa sehari-hari, tanpa istilah teknis.',
    icon: MessageCircleMore,
  },
  {
    title: 'AI Memahami & Membuat',
    description: 'VibeBiz menyusun alur stok, penjualan, invoice, hingga notifikasi otomatis.',
    icon: Sparkles,
  },
  {
    title: 'Pakai Aplikasi Siap Pakai',
    description: 'Langsung gunakan aplikasi web + mobile untuk operasional harian usahamu.',
    icon: Smartphone,
  },
  {
    title: 'Ekspor Kode kalau Mau',
    description: 'Saat butuh kustomisasi lanjutan, ekspor kode tetap bisa dilakukan kapan saja.',
    icon: LayoutTemplate,
  },
];

const benefits: BenefitItem[] = [
  {
    title: 'Hemat waktu & biaya',
    description:
      'Tidak perlu rekrut tim teknis dari awal. Fokus ke jualan, produksi, dan pelanggan.',
    icon: Wallet,
  },
  {
    title: 'Khusus UMKM Indonesia',
    description: 'Siap integrasi WhatsApp, Midtrans, dan alur kerja lokal yang familier.',
    icon: Handshake,
  },
  {
    title: 'Template siap pakai',
    description: 'Tersedia pilihan untuk warung makan, fashion, handicraft, dan usaha jasa.',
    icon: Store,
  },
  {
    title: 'Mobile-first & PWA',
    description: 'Nyaman dipakai dari HP kapan pun, bahkan saat kamu lagi di lapangan.',
    icon: Smartphone,
  },
];

const testimonials: TestimonialItem[] = [
  {
    name: 'Ibu Sari Wulandari',
    role: 'Pemilik Warung Sari Rasa, Klaten',
    quote:
      'Biasanya saya catat stok pakai buku. Sekarang tinggal buka HP, semua rapi dan saya lebih tenang.',
  },
  {
    name: 'Mas Raka Prasetyo',
    role: 'Pengrajin Batik Raka, Pekalongan',
    quote:
      'Notifikasi stok kain otomatis bikin saya tidak telat produksi. Pesanan pelanggan jadi lebih terjaga.',
  },
  {
    name: 'Mbak Ninda Aulia',
    role: 'Catering Rumahan Ninda, Bandung',
    quote:
      'Invoice dan laporan harian langsung jadi. Saya jadi punya waktu lebih banyak untuk urus dapur.',
  },
  {
    name: 'Pak Dedi Santoso',
    role: 'Toko Kelontong Maju Jaya, Surabaya',
    quote:
      'VibeBiz rasanya seperti punya asisten digital. Ramah dipakai walau saya tidak paham coding.',
  },
];

const templates: TemplateItem[] = [
  {
    name: 'Warung Harian Pintar',
    category: 'Warung Makan',
    description: 'Kelola stok bahan, penjualan, dan ringkasan kas harian secara otomatis.',
  },
  {
    name: 'Batik Inventory Pro',
    category: 'Fashion & Batik',
    description: 'Pantau stok motif, ukuran, dan notifikasi restok untuk toko batik.',
  },
  {
    name: 'Catering Order Flow',
    category: 'Kuliner',
    description: 'Atur pesanan event, jadwal kirim, dan invoice pelanggan dalam satu dashboard.',
  },
  {
    name: 'Handicraft Catalog',
    category: 'Kerajinan',
    description: 'Tampilkan katalog produk, stok bahan baku, dan rekap penjualan mingguan.',
  },
  {
    name: 'Toko Serba Ada',
    category: 'Retail',
    description: 'Pencatatan multi-produk dengan pengingat stok minimum dan laporan cepat.',
  },
  {
    name: 'Jasa Servis UMKM',
    category: 'Jasa',
    description: 'Kelola antrean servis, status pengerjaan, dan notifikasi ke pelanggan.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fffaf5] text-[#3b2a1f]">
      <div className={batikBackdropClassName} />

      {/* Vibe: modern-tradisional UMKM Indonesia */}
      <header className="sticky top-0 z-50 border-b border-[#8B4513]/15 bg-[#fffaf5]/95 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-[#8B4513]/10 p-2 text-[#8B4513]">
              <Leaf className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-bold leading-none">VibeBiz</p>
              <p className="text-xs text-[#5f4a3d]">App UMKM dari Vibe-mu</p>
            </div>
          </div>

          <ul className="hidden items-center gap-6 text-sm md:flex">
            {navItems.map((item) => (
              <li key={item} className="cursor-pointer font-medium text-[#5f4a3d] hover:text-[#8B4513]">
                {item}
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <Button variant="outline">Lihat Demo</Button>
            <Button>Coba Gratis Sekarang</Button>
          </div>

          <details className="relative md:hidden">
            <summary className="list-none">
              <Button
                variant="ghost"
                size="sm"
                aria-label="Buka menu navigasi"
                aria-expanded="false"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </summary>
            <div className="absolute right-0 mt-2 w-44 rounded-md border border-[#8B4513]/20 bg-white p-2 shadow-lg">
              <ul className="space-y-1 text-sm text-[#5f4a3d]">
                {navItems.map((item) => (
                  <li key={item} className="rounded px-2 py-1 hover:bg-[#8B4513]/10">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </nav>
      </header>

      {/* Vibe: modern-tradisional UMKM Indonesia */}
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#8B4513]/20 bg-white px-3 py-1 text-xs font-medium text-[#8B4513]">
            <ShieldCheck className="h-4 w-4" />
            Sudah dipercaya 500+ UMKM di Indonesia
          </span>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Ubah Vibe Bisnismu Menjadi Aplikasi dalam Hitungan Menit
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-[#5f4a3d] sm:text-lg">
            Tidak perlu coding. Cukup ceritakan kebutuhan bisnismu dalam bahasa Indonesia.
            VibeBiz akan buatkan aplikasi stok, penjualan, invoice, dan notifikasi WhatsApp
            otomatis untuk warung, toko batik, catering, atau usaha kecilmu.
          </p>

          <Card className="border-[#8B4513]/20 bg-white/95">
            <CardContent className="space-y-4 p-4 sm:p-6">
              <label htmlFor="vibe-input" className="text-sm font-medium text-[#5f4a3d]">
                Ceritakan kebutuhan bisnismu di sini
              </label>
              <textarea
                id="vibe-input"
                aria-describedby="vibe-input-helper"
                rows={5}
                className="w-full rounded-md border border-[#8B4513]/20 bg-[#fffdf9] px-3 py-2 text-sm text-[#3b2a1f] outline-none ring-[#8B4513]/20 placeholder:text-[#8f7a6b] focus:ring-2"
                placeholder="Buatkan aplikasi catat stok kain batik, kirim notif WA kalau stok tinggal 5, vibe tradisional Jawa sederhana"
              />
              <p id="vibe-input-helper" className="text-xs text-[#7a6658]">
                Contoh di atas bisa kamu ubah sesuai jenis usaha dan gaya brand-mu.
              </p>
              <Button size="lg" className="w-full sm:w-auto">
                Generate App Saya Sekarang
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="relative overflow-hidden border-[#8B4513]/15 bg-white/90">
          <div className="absolute right-4 top-4 rounded-full bg-[#228B22]/10 px-3 py-1 text-xs font-medium text-[#1e6b1f]">
            Dashboard UMKM
          </div>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Store className="h-5 w-5 text-[#8B4513]" />
              Ringkasan Usaha Hari Ini
            </CardTitle>
            <CardDescription>
              Preview sederhana tampilan aplikasi yang bisa langsung dipakai di HP maupun laptop.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-[#8B4513]/15 bg-[#fffaf5] p-3">
                <p className="text-xs text-[#7a6658]">Penjualan</p>
                <p className="text-lg font-semibold">Rp 2.450.000</p>
              </div>
              <div className="rounded-lg border border-[#228B22]/20 bg-[#f5fbf5] p-3">
                <p className="text-xs text-[#5d7b5e]">Order Selesai</p>
                <p className="text-lg font-semibold">37 Pesanan</p>
              </div>
            </div>
            <div className="rounded-lg border border-[#8B4513]/15 p-3">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span>Stok Kain Batik Motif Parang</span>
                <span className="font-semibold text-[#8B4513]">5 meter</span>
              </div>
              <div className="h-2 rounded-full bg-[#eadbcf]">
                <div className="h-2 w-1/4 animate-pulse rounded-full bg-[#8B4513]" />
              </div>
              <p className="mt-2 text-xs text-[#7a6658]">Notifikasi WhatsApp siap dikirim saat stok minimum.</p>
            </div>
            <div className="rounded-lg border border-[#8B4513]/15 bg-[#fffdf9] p-3 text-sm">
              <p className="mb-1 font-medium">Aksi Cepat</p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[#8B4513]/10 px-3 py-1 text-xs">Tambah Produk</span>
                <span className="rounded-full bg-[#8B4513]/10 px-3 py-1 text-xs">Buat Invoice</span>
                <span className="rounded-full bg-[#8B4513]/10 px-3 py-1 text-xs">Kirim WA</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Vibe: modern-tradisional UMKM Indonesia */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Cara Kerja VibeBiz</h2>
          <p className="mt-2 text-[#5f4a3d]">Dirancang sederhana agar UMKM bisa langsung jalan tanpa ribet.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <Card key={step.title} className="bg-white/95">
                <CardHeader className="space-y-3 pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8B4513]/10 text-[#8B4513]">
                    <StepIcon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">
                    {index + 1}. {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Vibe: modern-tradisional UMKM Indonesia */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Kenapa UMKM Memilih VibeBiz</h2>
          <p className="mt-2 text-[#5f4a3d]">Solusi praktis untuk naik kelas dengan langkah yang lebih ringan.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {benefits.map((benefit) => {
            const BenefitIcon = benefit.icon;
            return (
              <Card key={benefit.title} className="bg-white/95">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BenefitIcon className="h-5 w-5 text-[#228B22]" />
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Vibe: modern-tradisional UMKM Indonesia */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Cerita Nyata dari Pelaku Usaha</h2>
          <p className="mt-2 text-[#5f4a3d]">Testimoni awal dari pengguna VibeBiz di berbagai kota Indonesia.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-white/95">
              <CardHeader className="pb-3">
                <div className="mb-2 h-10 w-10 rounded-full bg-[#D2B48C]/60" />
                <CardTitle className="text-base">{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-[#5f4a3d]">“{testimonial.quote}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Vibe: modern-tradisional UMKM Indonesia */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-3xl font-bold">Template Populer</h2>
            <p className="mt-2 text-[#5f4a3d]">Pilih template yang paling dekat dengan model usahamu.</p>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {templates.map((template) => (
            <Card
              key={template.name}
              className={cn(
                'min-w-[260px] flex-1 bg-white/95',
                'sm:min-w-[300px] lg:min-w-0 lg:flex-none lg:w-[32%]'
              )}
            >
              <CardHeader>
                <div className="mb-3 h-28 rounded-lg border border-dashed border-[#8B4513]/25 bg-[#fffaf5]" />
                <CardDescription>{template.category}</CardDescription>
                <CardTitle>{template.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-[#5f4a3d]">{template.description}</p>
                <Button variant="outline" className="w-full">
                  Gunakan Template Ini
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Vibe: modern-tradisional UMKM Indonesia */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <Card className="border-[#8B4513]/20 bg-[#8B4513] text-white">
          <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-sm text-white/80">Pricing sederhana untuk mulai cepat</p>
              <h3 className="mt-1 text-2xl font-bold">Mulai Gratis → Pro Rp99.000/bulan</h3>
              <p className="mt-2 text-sm text-white/80">
                Upgrade kapan saja saat bisnismu butuh fitur lebih lengkap.
              </p>
            </div>
            <Button className="bg-white text-[#8B4513] hover:bg-[#f7eee6]">
              Pilih Paket yang Cocok
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Vibe: modern-tradisional UMKM Indonesia */}
      <footer className="border-t border-[#8B4513]/15 bg-[#fff6ee]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="space-y-2">
            <p className="text-lg font-bold">VibeBiz</p>
            <p className="text-sm text-[#5f4a3d]">Teman dekat UMKM untuk tumbuh lebih rapi, cepat, dan percaya diri.</p>
          </div>
          <div>
            <p className="mb-3 font-semibold">Navigasi</p>
            <ul className="space-y-2 text-sm text-[#5f4a3d]">
              <li>Beranda</li>
              <li>Template</li>
              <li>Harga</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold">Bantuan</p>
            <ul className="space-y-2 text-sm text-[#5f4a3d]">
              <li>Pusat Bantuan</li>
              <li>Kebijakan Privasi</li>
              <li>Syarat Layanan</li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold">Ikuti Kami</p>
            <div className="flex items-center gap-3 text-[#8B4513]">
              {socialLinks.map((socialLink) => {
                const SocialIcon = socialLink.icon;

                return (
                  <a
                    key={socialLink.name}
                    href={socialLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#8B4513]/25 p-2"
                    aria-label={socialLink.name}
                  >
                    <SocialIcon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            <p className="mt-4 text-xs text-[#6d584a]">© {new Date().getFullYear()} VibeBiz. Semua hak dilindungi.</p>
          </div>
        </div>

        <div className="border-t border-[#8B4513]/10 py-3 text-center text-xs text-[#6d584a]">
          Dibuat dengan niat baik untuk bantu UMKM Indonesia naik kelas.
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 hidden rounded-full border border-[#228B22]/20 bg-[#228B22] p-3 text-white shadow-lg md:flex">
        <CheckCircle2 className="h-5 w-5" />
      </div>
    </div>
  );
}
