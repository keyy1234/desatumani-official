import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


import hukumTua      from "../assets/hukum-tua.jpg";
import sekertaris    from "../assets/sekertaris_desa.jpg";
import keuangan      from "../assets/kaur-keuangan.jpg";
import Perencanaan   from "../assets/kaur-perencanaan.jpg";
import umum          from "../assets/kaur-umum.jpg";
import pemerintahan  from "../assets/kasie-pemerintahan.jpg";
import kesejahteraan from "../assets/kasie-kesejahteraan.jpg";
import pelayanan     from "../assets/kasie-pelayanan.jpg";

import foto1  from "../assets/image1.png";  import foto2  from "../assets/image2.png";
import foto3  from "../assets/image3.png";  import foto4  from "../assets/image4.png";
import foto5  from "../assets/image5.png";  import foto6  from "../assets/image6.png";
import foto7  from "../assets/image7.png";  import foto8  from "../assets/image8.png";
import foto9  from "../assets/image9.png";  import foto10 from "../assets/image10.png";
import foto11 from "../assets/image11.png"; import foto12 from "../assets/image12.png";
import foto13 from "../assets/image13.png"; import foto14 from "../assets/image14.png";

import jagung from "../assets/jagung.png";
import padi   from "../assets/padi.png";
import kelapa from "../assets/kelapa.png";

// ✅ GANTI JADI INI
const GALERI = [
  { id:1,  src:foto1,  ket:"Penyerahan Bapok untuk seluruh masyarakat Desa Tumani lewat Dana Desa Ketahanan Pangan" },
  { id:2,  src:foto2,  ket:"Penyaluran BLT Dana Desa untuk Masyarakat Miskin, Cacat, dan Sakit Kronis" },
  { id:3,  src:foto3,  ket:"Evaluasi Perkembangan Tingkat Desa dan Kelurahan" },
  { id:4,  src:foto4,  ket:"Pembangunan Drainase di Jaga 3 dan 4" },
  { id:5,  src:foto5,  ket:"Pelatihan BUMDes" },
  { id:6,  src:foto6,  ket:"Menerima Trofi Penghargaan Juara 1 Lomba Desa Tingkat Kecamatan dan Pertama Lunas PBB Tahun 2025" },
  { id:7,  src:foto7,  ket:"Pembuatan Paving Jalan Lingkar SD GMIM ke Lapangan Tahun Anggaran 2025" },
  { id:8,  src:foto8,  ket:"Penerimaan Mahasiswa KKT 146 Unsrat Posko Tumani di Kantor Camat Maesaan" },
  { id:9,  src:foto9,  ket:"Penerimaan Mahasiswa KKT 146 Unsrat Posko Tumani di Kantor Desa Tumani" },
  { id:10, src:foto10, ket:"Kegiatan Kerja Bakti Jumat Bersih Desa Tumani" },
  { id:11, src:foto11, ket:"Kegiatan POLANIS Desa Tumani" },
  { id:12, src:foto12, ket:"Kegiatan Posyandu Balita Desa Tumani" },
  { id:13, src:foto13, ket:"Kegiatan Posyandu Remaja Desa Tumani" },
  { id:14, src:foto14, ket:"Pembagian Sumbangan Telur" },
];

const PERANGKAT = [
  { jabatan:"Hukum Tua",              nama:"FESNA F. Y. ASSA",        foto:hukumTua,     utama:true },
  { jabatan:"Sekretaris Desa",        nama:"NELDY LAPIAN",            foto:sekertaris    },
  { jabatan:"Kaur Keuangan",          nama:"PINGKAN V. NAYOAN",       foto:keuangan      },
  { jabatan:"Kaur Perencanaan",       nama:"JACKLIEN KOMALING",       foto:Perencanaan   },
  { jabatan:"Kaur Umum & Tata Usaha", nama:"TESALONIKA A. WALALANGI", foto:umum          },
  { jabatan:"Kasie Pemerintahan",     nama:"DONNY MAMESAH, SE",       foto:pemerintahan  },
  { jabatan:"Kasie Kesejahteraan",    nama:"ELSAFIA TIMBONGOL",       foto:kesejahteraan },
  { jabatan:"Kasie Pelayanan",        nama:"AFNNY M. D. KIMBAL",      foto:pelayanan     },
];

const POTENSI = [
  { 
    label: "Padi", 
    src: padi, 
    emoji: "🌾", 
    desc: "Padi saat ini menjadi komoditas yang paling menguntungkan di Desa Tumani dibandingkan tanaman lainnya.",
    details: [
      "Saat ini petani beralih ke jenis Padi Serayu karena hasilnya paling memuaskan. Sebelumnya warga sempat menanam jenis Superwin, namun karena hasil produksinya sempat menurun, Serayu kini menjadi komoditas utama di wilayah Maesaan hingga Tompaso Baru.",
      "Siklus Panen Sangat produktif, dalam setahun petani bisa melakukan panen sampai 4 kali dengan masa tanam sekitar 3-4 bulan.",
      "Sistem Pengairan Bergantung pada irigasi, air sangat mencukupi, air tidak pernah sampai habis total.",
      "Estimasi Hasil Dalam 1 hektar lahan, petani bisa menghasilkan sekitar 900kg beras. Warga biasanya menghitung hasil gilingan dalam satuan karung (rata-rata 60kg per karung).",
      "Sistem Kerja Untuk penanaman dan panen biasanya menggunakan tenaga sewa (harian), sementara perawatan rutin seperti pemupukan dan penyemprotan dilakukan sendiri oleh pemilik lahan."
    ]
  },
  { 
    label: "Jagung (Milu)", 
    src: jagung, 
    emoji: "🌽", 
    desc: "Jagung atau Milu menjadi pilar ekonomi kedua yang sangat penting bagi warga Tumani.",
    details: [
      "Jenis Bibit Menggunakan Milu Paket (Hibrida) hasil persilangan. Meskipun harga bibitnya cukup mahal (mencapai Rp400rb/kg), namun hasilnya sangat stabil dan jarang meleset.",
      "Produksi & Tantangan Rata-rata hasil panen mencapai 5 ton per hektar. Tantangan utama petani adalah harga pupuk yang mahal, sehingga pemupukan yang idealnya 3 kali, biasanya hanya dilakukan maksimal 2 kali.",
      "Masa Panen & Pasar, Panen dilakukan setiap 3 bulan. Perputaran penjualannya masih dominan di sekitar wilayah Tumani dan wilayah Minahasa (Tengah & Utara)."
    ]
  },
  { 
    label: "Kelapa", 
    src: kelapa, 
    emoji: "🥥", 
    desc: "Kelapa di Desa Tumani berfungsi sebagai tanaman antara yang memberikan penghasilan tambahan secara rutin.",
    details: [
      "Perubahan Cara Jual, Dulu warga rajin mengolah kelapa menjadi Kopra melalui proses pemanggangan atau penjemuran yang memakan waktu 3 hari hingga seminggu. Namun sekarang, warga lebih suka langsung menjual kelapa bulat (belum dikupas) karena prosesnya lebih cepat dan penjualannya mudah, meskipun harganya sering fluktuatif.",
      "Masa Panen, Sama seperti jagung, kelapa dipanen setiap 3 bulan sekali (sekitar 3-4 kali dalam setahun)."
    ]
  }
];
const STATS = [
  { icon:"📐", label:"Luas Wilayah",     value:"1,4 km²"  },
  { icon:"🗺️", label:"Luas Tumani Raya", value:"2.144 ha" },
  { icon:"📅", label:"Tahun Berdiri",    value:"1895"      },
  { icon:"🏘️", label:"Jaga",             value:"6"         },
];

/* ── Scroll Reveal ── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("revealed"); obs.disconnect(); }
    }, { threshold:0.12, rootMargin:"0px 0px -40px 0px" });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}
function Reveal({ children, variant="up", delay=0, className="" }) {
  const ref = useReveal();
  const v = { up:"op0 ty10", left:"op0 txn10", right:"op0 tx10", fade:"op0", scale:"op0 sc95" };
  return (
    <div ref={ref} className={`rb ${v[variant]} ${className}`} style={{ transitionDelay:`${delay}ms` }}>
      {children}
    </div>
  );
}

/* ── Foto helper ── */
function Foto({ src, label, className="", imgClass="", style={} }) {
  if (src) return <img src={src} alt={label} className={`object-cover ${className} ${imgClass}`} style={style} />;
  return (
    <div className={`flex flex-col items-center justify-center bg-slate-100 border-2 border-dashed border-slate-300 text-slate-400 ${className}`} style={style}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <path d="M21 15l-5-5L5 21"/>
      </svg>
      <p className="text-xs mt-1.5 px-2 font-medium text-center">{label}</p>
    </div>
  );
}

/* ── Section header ── */
function SH({ title, sub }) {
  return (
    <Reveal variant="up" className="text-center mb-10">
      <h2 style={{ fontFamily:"'Playfair Display',serif", color:"#0f2044", fontSize:"clamp(1.6rem,3vw,2.2rem)", fontWeight:700 }}>
        {title}
      </h2>
      {sub && <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">{sub}</p>}
      <div className="mx-auto mt-4 w-14 h-0.5 rounded" style={{ background:"linear-gradient(90deg,#0f2044,#c9973a)" }} />
    </Reveal>
  );
}

const scrollTop = () => window.scrollTo({ top:0, behavior:"smooth" });

export default function Beranda() {
  const navigate = useNavigate();

  return (
    <>
      {/* ── SEO META ── */}
<Helmet>

  {/* Primary SEO */}
  <title>Desa Tumani — Website Resmi Desa Tumani, Kec. Maesaan, Minahasa Selatan</title>

  <meta
    name="description"
    content="Website resmi Desa Tumani, Kecamatan Maesaan, Kabupaten Minahasa Selatan, Sulawesi Utara. Informasi profil desa, sejarah, wilayah, struktur pemerintahan, galeri kegiatan, dan kontak perangkat desa."
  />

  <meta
    name="keywords"
    content="desa tumani, tumani maesaan, minahasa selatan, sulawesi utara, website desa tumani, profil desa tumani"
  />

  <link rel="canonical" href="https://desatumani-official.vercel.app/" />

  {/* Structured Data — Government Organization */}
  <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "GovernmentOrganization",
      "name": "Pemerintah Desa Tumani",
      "url": "https://desatumani-official.vercel.app/",
      "logo": "https://desatumani-official.vercel.app/logo_minahasa_selatan.png",
      "description": "Website resmi Pemerintah Desa Tumani, Kecamatan Maesaan, Kabupaten Minahasa Selatan, Sulawesi Utara.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Amurang – Kotamobagu, Jaga IV",
        "addressLocality": "Tumani",
        "addressRegion": "Minahasa Selatan, Sulawesi Utara",
        "addressCountry": "ID"
      },
      "openingHours": [
        "Mo-Th 08:00-15:00",
        "Fr 08:00-11:30"
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "0.901337",
        "longitude": "124.471504"
      }
    }
  `}</script>

</Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        * { font-family:'Plus Jakarta Sans',sans-serif; }
        section { scroll-margin-top:64px; }

        .rb { transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); will-change:opacity,transform; }
        .rb.revealed { opacity:1 !important; transform:none !important; }
        .op0{opacity:0} .ty10{transform:translateY(40px)}
        .txn10{transform:translateX(-40px)} .tx10{transform:translateX(40px)}
        .sc95{transform:scale(.95)}

        .cl{transition:transform .2s ease,box-shadow .2s ease}
        .cl:hover{transform:translateY(-4px);box-shadow:0 14px 32px rgba(15,32,68,.10)}
        .iz{overflow:hidden}
        .iz img{transition:transform .4s ease}
        .iz:hover img{transform:scale(1.06)}

        @keyframes hsu{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}

        .btn-outline{border:2px solid #0f2044;color:#0f2044;transition:background .2s,color .2s}
        .btn-outline:hover{background:#0f2044;color:#fff}

        .hero-stat-badge{
          background:rgba(255,255,255,0.10);
          border:1px solid rgba(255,255,255,0.18);
          border-radius:12px;
          padding:10px 12px;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:5px;
        }
      `}</style>

      <div className="bg-white text-slate-800">

   {/* ── 1. HERO ── */}
<section
  className="relative flex items-center justify-center min-h-[85vh] overflow-hidden"
  style={{ background:"linear-gradient(160deg,#0f2044 0%,#1a3a6e 45%,#2d5fa8 100%)" }}
>
  <div className="absolute inset-0" style={{ background:"rgba(5,15,40,0.52)" }} />
  <div className="absolute inset-0 opacity-[0.06]"
    style={{ backgroundImage:"radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize:"32px 32px" }} />
  {/* glow atas */}
  <div className="absolute inset-0 opacity-20"
    style={{ background:"radial-gradient(ellipse 70% 50% at 50% 0%,#3b5bdb,transparent)" }} />

  <div className="relative z-10 text-center w-full max-w-lg mx-auto px-5">

    {/* badge resmi */}
    <div
      className="inline-flex items-center gap-2 mb-6 rounded-full px-4 py-1.5"
      style={{
        background:"rgba(255,255,255,0.07)",
        border:"1px solid rgba(255,255,255,0.18)",
        animation:"hsu .8s .05s ease both",
      }}
    >
      <span style={{ fontSize:13 }}>🏛️</span>
      <span style={{ color:"rgba(255,255,255,0.65)", fontSize:"0.68rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase" }}>
        Website Resmi · Pemerintah Desa Tumani
      </span>
    </div>

    {/* judul */}
    <h1
      className="text-white leading-tight mb-3"
      style={{
        fontFamily:"'Playfair Display',serif",
        fontSize:"clamp(2rem,8vw,4rem)",
        textShadow:"0 2px 16px rgba(0,0,0,.5)",
        animation:"hsu .8s .15s ease both",
      }}
    >
      Selamat Datang di
      <br />
      <span style={{ color:"#c9973a" }}>Desa Tumani</span>
    </h1>

    {/* garis dekoratif emas */}
    <div
      className="mx-auto mb-5"
      style={{
        width:60,
        height:2,
        background:"linear-gradient(90deg,transparent,#c9973a,transparent)",
        animation:"hsu .8s .2s ease both",
      }}
    />

    {/* subjudul */}
    <p
      className="text-white/65 leading-relaxed mb-2 mx-auto"
      style={{ fontSize:"clamp(0.78rem,3.5vw,0.88rem)", animation:"hsu .8s .25s ease both" }}
    >
      Kecamatan Maesaan · Kabupaten Minahasa Selatan
    </p>
    <p
      className="text-white/45 leading-relaxed mb-7 mx-auto"
      style={{ fontSize:"clamp(0.7rem,3vw,0.8rem)", animation:"hsu .8s .28s ease both" }}
    >
      Provinsi Sulawesi Utara · Indonesia
    </p>

    {/* stats grid 2×2 */}
    <div
      style={{
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
        gap:"8px",
        marginBottom:"20px",
        animation:"hsu .8s .35s ease both",
      }}
    >
      {STATS.map(s => (
        <div key={s.label} className="hero-stat-badge">
          <span style={{ fontSize:14 }}>{s.icon}</span>
          <span style={{ color:"#c9973a", fontWeight:700, fontSize:"clamp(0.75rem,3vw,0.85rem)" }}>
            {s.value}
          </span>
          <span style={{ color:"rgba(255,255,255,0.70)", fontSize:"clamp(0.68rem,2.8vw,0.78rem)", whiteSpace:"nowrap" }}>
            {s.label}
          </span>
        </div>
      ))}
    </div>

    {/* CTA button — 1 kolom full width */}
    <div
      style={{
        display:"grid",
        gridTemplateColumns:"1fr",
        gap:"10px",
        animation:"hsu .8s .45s ease both",
      }}
    >
      <Link
        to="/sejarah"
        onClick={scrollTop}
        style={{
          background:"rgba(255,255,255,0.08)",
          color:"#fff",
          border:"1.5px solid rgba(255,255,255,0.30)",
          borderRadius:"12px",
          padding:"12px 10px",
          fontWeight:700,
          fontSize:"clamp(0.75rem,3vw,0.875rem)",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          gap:"5px",
          textDecoration:"none",
        }}
      >
        📖 Pelajari Desa
      </Link>
    </div>

    {/* disclaimer resmi */}
    <p
      className="mt-6 mx-auto"
      style={{
        color:"rgba(255,255,255,0.30)",
        fontSize:"0.65rem",
        letterSpacing:"0.05em",
        animation:"hsu .8s .55s ease both",
      }}
    >
      © {new Date().getFullYear()} Pemerintah Desa Tumani · Kec. Maesaan · Kab. Minahasa Selatan
    </p>
  </div>

  {/* wave */}
  <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
    <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{ display:"block", height:48 }}>
      <path d="M0,32 C480,0 960,48 1440,16 L1440,48 L0,48 Z" fill="#ffffff"/>
    </svg>
  </div>
</section>

        {/* ── 2. WILAYAH & DEMOGRAFI ── */}
        <section className="py-16" style={{ background:"#f4f6fb" }}>
          <div className="max-w-5xl mx-auto px-6">
            <SH title="Wilayah & Demografi" sub="Data wilayah dan kependudukan Desa Tumani" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon:"🗺️", label:"Luas Wilayah",  value:"140 Ha", warna:"#ffffff", bg:"#0f2044", shadow:"0 8px 24px rgba(15,32,68,.25)" },
                { icon:"👥", label:"Total Penduduk", value:"1.029",  warna:"#ffffff", bg:"#1a3a6e", shadow:"0 8px 24px rgba(26,58,110,.25)" },
                { icon:"🏘️", label:"Area Pemukiman", value:"7,2 Ha", warna:"#92400e", bg:"#fef3c7", shadow:"0 8px 24px rgba(201,151,58,.15)" },
                { icon:"🌾", label:"Area Pertanian", value:"25 Ha",  warna:"#065f46", bg:"#d1fae5", shadow:"0 8px 24px rgba(5,150,105,.15)" },
              ].map((s,i) => (
                <Reveal key={s.label} variant="up" delay={i*80}>
                  <div className="cl rounded-2xl p-6 text-center" style={{ background:s.bg, boxShadow:s.shadow }}>
                    <div className="text-3xl mb-3">{s.icon}</div>
                    <div className="font-black text-2xl md:text-3xl leading-none mb-1"
                      style={{ fontFamily:"'Playfair Display',serif", color:s.warna }}>{s.value}</div>
                    <div className="text-xs font-semibold uppercase tracking-wide mt-1"
                      style={{ color:s.bg==="#0f2044"||s.bg==="#1a3a6e"?"rgba(255,255,255,0.7)":"#64748b" }}>
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal variant="up" delay={100} className="mt-8">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color:"#0f2044" }}>🧭 Batas Wilayah</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[["⬆️ Utara","Tumani Utara"],["➡️ Timur","Kelurahan Tosuraya"],["⬇️ Selatan","Tumani Selatan"],["⬅️ Barat","Lowian"]].map(([a,k]) => (
                    <div key={a} className="rounded-xl p-3 border text-center text-sm"
                      style={{ background:"#f4f6fb", borderColor:"#dce4f0" }}>
                      <p className="text-xs font-semibold" style={{ color:"#64748b" }}>{a}</p>
                      <p className="font-bold mt-0.5" style={{ color:"#0f2044" }}>{k}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 3. SEJARAH ── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <SH title="Sejarah Desa Tumani" />
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <Reveal variant="left">
                <div className="text-slate-600 text-sm leading-relaxed space-y-4">
                  <p>Desa Tumani dibentuk sekitar tahun <strong className="text-slate-800">1895</strong>. Nama <em>"Tumani"</em> berasal dari kata <strong className="text-slate-800">"ditanamkan"</strong> atau <strong className="text-slate-800">"patok"</strong>, mencerminkan sejarah penanaman batas wilayah.</p>
                  <p>Tujuh kepala keluarga dari berbagai suku, termasuk dari Poopo Minahasa dan Poopo Bolaang Mongondow, menjadi cikal bakal desa ini. Mereka merombak hutan menjadi lahan pertanian yang berkembang menjadi kampung seperti <em>Kinamang</em>, <em>Siladang</em>, dan <em>Pinaesaan</em>.</p>
                  <p>Pemekaran desa terjadi pada masa <strong className="text-slate-800">M.M. Tewal</strong>, membagi wilayah menjadi Tumani, Tumani Selatan, dan Tumani Utara. Infrastruktur desa mulai berkembang dengan pengaspalan jalan pada tahun <strong className="text-slate-800">1984</strong>.</p>
                  <Link
                    to="/sejarah"
                    onClick={scrollTop}
                    className="btn-outline inline-flex items-center gap-2 mt-2 font-semibold text-sm px-5 py-2.5 rounded-lg"
                  >
                    Baca Selengkapnya →
                  </Link>
                </div>
              </Reveal>
              <Reveal variant="right">
                <div className="space-y-3">
                  {[
                    { t:"1895",           k:"Desa Tumani dibentuk oleh 7 kepala keluarga pionir" },
                    { t:"Awal 1900",      k:"Pejabat Hukum Tua pertama mulai menjabat" },
                    { t:"1984",           k:"Pengaspalan jalan pertama di desa" },
                    { t:"Era M.M. Tewal", k:"Pemekaran menjadi Tumani, Tumani Selatan & Tumani Utara" },
                    { t:"Kini",           k:"Dipimpin Pjb. Hukum Tua Fesna F. Y. Assa" },
                  ].map(({t,k},i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-28 text-right">
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                          style={{ background:"#e8eef8", color:"#0f2044" }}>{t}</span>
                      </div>
                      <div className="flex-shrink-0 flex flex-col items-center pt-1">
                        <div className="w-2.5 h-2.5 rounded-full border-2" style={{ borderColor:"#0f2044", background:"#fff" }} />
                        {i<4 && <div className="w-0.5 flex-1 mt-1" style={{ background:"#c5d3e8", minHeight:24 }} />}
                      </div>
                      <p className="text-sm text-slate-500 leading-snug pt-0.5">{k}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 4. STRUKTUR ── */}
        <section className="py-20" style={{ background:"#f4f6fb" }}>
          <div className="max-w-5xl mx-auto px-6">
            <SH title="Struktur Pemerintahan" sub="Susunan Perangkat Desa Tumani Periode 2021–2027" />

            <Reveal variant="up">
              <div className="flex justify-center mb-6">
                <div className="cl bg-white rounded-2xl shadow-sm border overflow-hidden w-52 text-center" style={{ borderColor:"#c9973a" }}>
                  <div className="h-1.5" style={{ background:"linear-gradient(90deg,#0f2044,#c9973a)" }} />
                  <div className="p-5">
                    <Foto src={PERANGKAT[0].foto} label="Foto Hukum Tua"
                      className="w-20 h-20 rounded-full mx-auto mb-3 border-4" style={{ borderColor:"#e8eef8" }}
                      imgClass="w-20 h-20 rounded-full" />
                    <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-2"
                      style={{ background:"#e8eef8", color:"#0f2044" }}>{PERANGKAT[0].jabatan}</span>
                    <p className="font-bold text-slate-800 text-sm">{PERANGKAT[0].nama}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="flex justify-center mb-6">
              <div className="w-0.5 h-8" style={{ background:"#c5d3e8" }} />
            </div>

            <Reveal variant="up" delay={80}>
              <div className="flex justify-center mb-8">
                <div className="cl bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden w-48 text-center">
                  <div className="p-5">
                    <Foto src={PERANGKAT[1].foto} label="Foto Sekdes"
                      className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-slate-100"
                      imgClass="w-16 h-16 rounded-full" />
                    <p className="text-xs font-semibold" style={{ color:"#0f2044" }}>{PERANGKAT[1].jabatan}</p>
                    <p className="font-bold text-slate-800 text-xs mt-0.5">{PERANGKAT[1].nama}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              <Reveal variant="left" delay={100}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-4 text-center" style={{ color:"#0f2044" }}>Kepala Urusan (Kaur)</p>
                  <div className="space-y-3">
                    {PERANGKAT.slice(2,5).map((p,i) => (
                      <div key={i} className="cl bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex items-center gap-4">
                        <Foto src={p.foto} label={`Foto ${p.jabatan}`}
                          className="w-12 h-12 rounded-full flex-shrink-0 border-2" style={{ borderColor:"#e8eef8" }}
                          imgClass="w-12 h-12 rounded-full" />
                        <div>
                          <p className="text-xs font-semibold" style={{ color:"#0f2044" }}>{p.jabatan}</p>
                          <p className="font-bold text-slate-800 text-sm">{p.nama}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal variant="right" delay={100}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-4 text-center" style={{ color:"#1a3a6e" }}>Kepala Seksi (Kasie)</p>
                  <div className="space-y-3">
                    {PERANGKAT.slice(5).map((p,i) => (
                      <div key={i} className="cl bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex items-center gap-4">
                        <Foto src={p.foto} label={`Foto ${p.jabatan}`}
                          className="w-12 h-12 rounded-full flex-shrink-0 border-2" style={{ borderColor:"#dbeafe" }}
                          imgClass="w-12 h-12 rounded-full" />
                        <div>
                          <p className="text-xs font-semibold" style={{ color:"#1a3a6e" }}>{p.jabatan}</p>
                          <p className="font-bold text-slate-800 text-sm">{p.nama}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

      {/* ── 5. GALERI ── */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <SH title="Galeri Kegiatan" sub="Dokumentasi kegiatan dan kehidupan masyarakat Desa Tumani" />
    <Reveal variant="up">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {GALERI.slice(0, 10).map((g) => (
          <div
            key={g.id}
            className="group flex flex-col rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200"
          >
            {/* gambar */}
            <div className="relative iz overflow-hidden" style={{ aspectRatio:"1/1" }}>
              <Foto
                src={g.src}
                label={g.ket}
                className="w-full h-full"
                imgClass="w-full h-full object-cover"
              />
              {/* nomor badge */}
              <div
                className="absolute top-2 left-2 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold"
                style={{ background:"rgba(15,32,68,0.75)", fontSize:10 }}
              >
                {g.id}
              </div>
            </div>
            {/* keterangan di bawah */}
            <div className="px-3 py-2.5 bg-white flex-1">
              <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                {g.ket}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 max-w-2xl mx-auto">
        {GALERI.slice(10).map((g) => (
          <div
            key={g.id}
            className="group flex flex-col rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200"
          >
            {/* gambar */}
            <div className="relative iz overflow-hidden" style={{ aspectRatio:"1/1" }}>
              <Foto
                src={g.src}
                label={g.ket}
                className="w-full h-full"
                imgClass="w-full h-full object-cover"
              />
              {/* nomor badge */}
              <div
                className="absolute top-2 left-2 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold"
                style={{ background:"rgba(15,32,68,0.75)", fontSize:10 }}
              >
                {g.id}
              </div>
            </div>
            {/* keterangan di bawah */}
            <div className="px-3 py-2.5 bg-white flex-1">
              <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                {g.ket}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Reveal>

    <Reveal variant="up" delay={100} className="text-center mt-8">
      <Link
        to="/galeri"
        onClick={scrollTop}
        className="btn-outline inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm"
      >
        Lihat Semua Galeri →
      </Link>
    </Reveal>
  </div>
</section>

<section className="py-16 px-4 md:py-20" style={{ background: "#f4f6fb" }}>
  <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-[#0f2044] font-extrabold text-3xl md:text-4xl mb-3">Potensi Ekonomi Desa</h2>
      <p className="text-slate-500 max-w-2xl mx-auto">
        Sektor pertanian sebagai pilar utama kesejahteraan masyarakat Desa Tumani
      </p>
    </div>

    {/* Grid Kartu Potensi */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
      {POTENSI.map((p, i) => (
        <div key={p.label} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 h-full flex flex-col">
          {/* Bagian Foto */}
          <div className="relative h-48 md:h-52 shrink-0">
            <img src={p.src} alt={p.label} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{p.emoji}</span>
                <h3 className="font-bold text-white text-lg">{p.label}</h3>
              </div>
            </div>
          </div>
          
          {/* Bagian Konten */}
          <div className="p-6 flex-1 flex flex-col">
            {/* Area Deskripsi - Diberi min-height agar list di bawahnya sejajar horizontal */}
            <div className="min-h-[80px] md:min-h-[100px] flex items-start">
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic border-l-4 border-[#c9973a] pl-3">
                "{p.desc}"
              </p>
            </div>
            
            {/* List Details - mt-auto dihilangkan agar jarak antar poin konsisten dari atas */}
            <ul className="space-y-4 mt-2">
              {p.details.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                  <span className="text-[#c9973a] font-bold mt-1 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>

    {/* Info Tambahan: Dinamika Pertanian */}
    <div className="mt-10 bg-white/60 border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h4 className="text-[#0f2044] font-bold text-xl mb-4 flex items-center gap-2">
            <span>🔄</span> Dinamika & Pergeseran Tanaman
          </h4>
          <div className="space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              <span className="font-bold text-[#0f2044]">Pergeseran Tanaman:</span> Petani Desa Tumani sangat dinamis. Mereka sempat beralih ke tanaman Nilam karena biaya operasionalnya kecil, namun kini sebagian besar sudah kembali ke tanaman pangan (Padi dan Jagung).
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              <span className="font-bold text-[#0f2044]">Komoditas Utama:</span> Secara keseluruhan, terdapat empat pilar kekuatan ekonomi di Desa Tumani. Di antara semuanya, <span className="text-[#c9973a] font-bold">Padi tetap dianggap paling memberikan keuntungan finansial</span> bagi petani saat ini.
            </p>
          </div>
        </div>

        {/* Kotak Ringkasan 4 Pilar */}
        <div className="bg-[#0f2044] rounded-2xl p-6 text-white shadow-lg">
          <h4 className="text-[#c9973a] font-bold text-xs uppercase tracking-[0.2em] mb-5 border-b border-white/10 pb-2">
            4 PILAR EKONOMI DESA TUMANI
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 text-sm font-medium hover:text-[#c9973a] transition-colors">
              <span className="bg-white/10 p-2 rounded-lg text-lg">🌾</span> Padi
            </div>
            <div className="flex items-center gap-3 text-sm font-medium hover:text-[#c9973a] transition-colors">
              <span className="bg-white/10 p-2 rounded-lg text-lg">🌽</span> Jagung
            </div>
            <div className="flex items-center gap-3 text-sm font-medium hover:text-[#c9973a] transition-colors">
              <span className="bg-white/10 p-2 rounded-lg text-lg">🥥</span> Kelapa
            </div>
            <div className="flex items-center gap-3 text-sm font-medium hover:text-[#c9973a] transition-colors">
              <span className="bg-white/10 p-2 rounded-lg text-lg">🌿</span> Nilam
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-white/20 text-xs text-white/70 flex items-center gap-2">
            <span className="text-[#c9973a] text-lg">✓</span> 
            Padi adalah komoditas utama yang paling menguntungkan.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  {/* ── 7. KONTAK & LOKASI ── */}
<section className="py-16 md:py-20 bg-white">
  <div className="max-w-5xl mx-auto px-6">
    <SH title="Kontak & Lokasi" />

    <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
      
      {/* Kolom Kiri: Informasi Teks */}
      <Reveal variant="left">
        <div className="space-y-4">
          
          {/* Alamat */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
            <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#e8eef8] text-base">📍</span>
              Alamat Kantor Desa
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Jl. Amurang – Kotamobagu, Jaga IV,<br/>
              Desa Tumani, Kecamatan Maesaan,<br/>
              Kabupaten Minahasa Selatan, Sulawesi Utara
            </p>
          </div>

          {/* WhatsApp Hukum Tua */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
            <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#e8eef8] text-base">📞</span>
              Layanan Hubungi Kami
            </h3>
            <div className="flex flex-col gap-3">
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Klik tombol di bawah untuk terhubung langsung dengan Pjb. Hukum Tua melalui WhatsApp:
              </p>
              
              <a 
                href={`https://wa.me/6282349243566?text=${encodeURIComponent(
                  "Halo Ibu Hukum Tua Fesna Assa, saya sedang melihat Website Resmi Desa Tumani dan ingin bertanya/melaporkan"
                )}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white border border-green-200 rounded-2xl px-4 py-4 shadow-sm hover:shadow-md transition-all active:scale-95 group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0 shadow-sm group-hover:bg-green-600 transition-colors">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Pjb. Hukum Tua</span>
                  <span className="text-slate-800 font-bold text-sm">Fesna F. Y. Assa</span>
                  <span className="text-green-600 text-[11px] font-semibold mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Terhubung ke WhatsApp
                  </span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </Reveal>

      {/* Kolom Kanan: Maps */}
      <Reveal variant="right">
        <div className="flex flex-col gap-4 h-full">
          <div
            className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex-1 bg-slate-50"
            style={{ minHeight: 340 }}
          >
            <iframe
              title="Lokasi Desa Tumani"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.46272551468!2d124.4615!3d0.9013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x327e256f00000000%3A0x0!2sTumani!5e0!3m2!1sid!2sid!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 340 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a
            href="https://maps.app.goo.gl/..." 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#0f2044] text-white flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm shadow-lg shadow-slate-200 active:scale-95 transition-transform"
          >
            🗺️ Petunjuk Arah (Google Maps)
          </a>
        </div>
      </Reveal>

    </div>
  </div>
</section>

      </div>
    </>
  );
}
