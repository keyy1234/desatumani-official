import { useState } from "react";
import { Helmet } from "react-helmet-async";
import foto1  from "../assets/image1.png";  import foto2  from "../assets/image2.png";
import foto3  from "../assets/image3.png";  import foto4  from "../assets/image4.png";
import foto5  from "../assets/image5.png";  import foto6  from "../assets/image6.png";
import foto7  from "../assets/image7.png";  import foto8  from "../assets/image8.png";
import foto9  from "../assets/image9.png";  import foto10 from "../assets/image10.png";
import foto11 from "../assets/image11.png"; import foto12 from "../assets/image12.png";
import foto13 from "../assets/image13.png"; import foto14 from "../assets/image14.png";

const FOTO = [
  { src: foto1,  ket: "Penyerahan Bapok (Bahan Pokok) untuk seluruh masyarakat Desa Tumani lewat Dana Desa Ketahanan Pangan" },
  { src: foto2,  ket: "Penyaluran BLT Dana Desa untuk Masyarakat Miskin, Cacat, dan Sakit Kronis" },
  { src: foto3,  ket: "Evaluasi Perkembangan Tingkat Desa dan Kelurahan" },
  { src: foto4,  ket: "Pembangunan Drainase di Jaga 3 dan 4" },
  { src: foto5,  ket: "Pelatihan BUMDes" },
  { src: foto6,  ket: "Menerima Trofi Penghargaan Juara 1 Lomba Desa Tingkat Kecamatan dan Pertama Lunas PBB (Pajak Bumi dan Bangunan) Tahun 2025" },
  { src: foto7,  ket: "Pembuatan Paving Jalan Lingkar SD GMIM ke Lapangan Tahun Anggaran 2025" },
  { src: foto8,  ket: "Penerimaan Mahasiswa KKT 146 Unsrat Posko Tumani di Kantor Camat Maesaan" },
  { src: foto9,  ket: "Penerimaan Mahasiswa KKT 146 Unsrat Posko Tumani di Kantor Desa Tumani" },
  { src: foto10, ket: "Kegiatan Kerja Bakti Jumat Bersih Desa Tumani" },
  { src: foto11, ket: "Kegiatan POLANIS Desa Tumani" },
  { src: foto12, ket: "Kegiatan Posyandu Balita Desa Tumani" },
  { src: foto13, ket: "Kegiatan Posyandu Remaja Desa Tumani" },
  { src: foto14, ket: "Pembagian Sumbangan Telur" },
];

export default function Galeri() {
  const [preview, setPreview] = useState(null); // { src, ket, index }

  const buka = (item, i) => setPreview({ ...item, index: i });
  const tutup = () => setPreview(null);

  const prev = () => {
    const i = (preview.index - 1 + FOTO.length) % FOTO.length;
    setPreview({ ...FOTO[i], index: i });
  };
  const next = () => {
    const i = (preview.index + 1) % FOTO.length;
    setPreview({ ...FOTO[i], index: i });
  };

  // navigasi keyboard
  const handleKey = (e) => {
    if (!preview) return;
    if (e.key === "ArrowLeft")  prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape")     tutup();
  };

  return (
    <div
      style={{ fontFamily:"'Plus Jakarta Sans',sans-serif" }}
      className="bg-white min-h-screen"
      onKeyDown={handleKey}
      tabIndex={-1}
    >
      {/* ── SEO ── */}
      <Helmet>
        <title>Galeri Kegiatan — Desa Tumani, Kec. Maesaan, Minahasa Selatan</title>
        <meta
          name="description"
          content="Galeri dokumentasi kegiatan masyarakat Desa Tumani — penyaluran BLT, pembangunan infrastruktur, posyandu, kerja bakti, KKT Unsrat, dan berbagai kegiatan desa lainnya."
        />
        <link rel="canonical" href="https://desatumani-official.vercel.app/sejarah" />
        <meta property="og:title"       content="Galeri Kegiatan Desa Tumani" />
        <meta property="og:description" content="Dokumentasi foto kegiatan masyarakat dan pemerintah Desa Tumani, Kecamatan Maesaan, Minahasa Selatan." />
        <meta property="og:url"         content="https://desatumani.id/galeri" />
        <meta property="og:type"        content="website" />
      </Helmet>

      {/* ── Hero ── */}
      <div
        className="relative py-16 text-center text-white overflow-hidden"
        style={{ background:"linear-gradient(160deg,#0a1628 0%,#122244 60%,#1a2e5a 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage:"radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize:"28px 28px" }} />
        <div className="absolute inset-0 opacity-20"
          style={{ background:"radial-gradient(ellipse 80% 60% at 50% 0%,#3b5bdb 0%,transparent 70%)" }} />
        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">🖼️ Dokumentasi</p>
          <h1
            style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2rem,5vw,3rem)" }}
            className="font-bold mb-2"
          >
            Galeri Kegiatan
          </h1>
          <p className="text-white/50 text-sm">Dokumentasi kegiatan masyarakat Desa Tumani</p>
          {/* counter */}
          <p className="text-white/30 text-xs mt-2 font-medium">{FOTO.length} Foto</p>
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {FOTO.map((item, i) => (
            <div
              key={i}
              onClick={() => buka(item, i)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg hover:scale-[1.03] transition-all duration-200"
              style={{ aspectRatio:"1/1" }}
            >
              <img
                src={item.src}
                alt={item.ket}
                className="w-full h-full object-cover"
              />
              {/* overlay keterangan saat hover */}
              <div
                className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background:"linear-gradient(to top,rgba(10,22,40,0.85) 0%,transparent 55%)" }}
              >
                <p className="text-white text-xs font-semibold px-3 pb-3 leading-snug line-clamp-3">
                  {item.ket}
                </p>
              </div>
              {/* nomor foto */}
              <div
                className="absolute top-2 left-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background:"rgba(26,46,90,0.7)", fontSize:10 }}
              >
                {i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {preview && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4"
          style={{ background:"rgba(10,22,40,0.95)" }}
        >
          {/* tombol tutup */}
          <button
            onClick={tutup}
            className="absolute top-5 right-5 w-10 h-10 rounded-full text-white text-xl flex items-center justify-center transition-colors z-10"
            style={{ background:"rgba(255,255,255,0.12)" }}
            onMouseEnter={e => e.currentTarget.style.background="rgba(255,255,255,0.25)"}
            onMouseLeave={e => e.currentTarget.style.background="rgba(255,255,255,0.12)"}
          >
            ✕
          </button>

          {/* counter */}
          <p className="absolute top-6 left-1/2 -translate-x-1/2 text-white/40 text-xs font-semibold">
            {preview.index + 1} / {FOTO.length}
          </p>

          {/* tombol prev */}
          <button
            onClick={prev}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full text-white text-lg flex items-center justify-center transition-colors z-10"
            style={{ background:"rgba(255,255,255,0.12)" }}
            onMouseEnter={e => e.currentTarget.style.background="rgba(255,255,255,0.25)"}
            onMouseLeave={e => e.currentTarget.style.background="rgba(255,255,255,0.12)"}
          >
            ‹
          </button>

          {/* gambar */}
          <div className="flex flex-col items-center gap-4 max-w-4xl w-full">
            <img
              src={preview.src}
              alt={preview.ket}
              className="max-h-[72vh] max-w-full rounded-2xl shadow-2xl object-contain"
              style={{ border:"1.5px solid rgba(255,255,255,0.08)" }}
            />
            {/* keterangan */}
            <div
              className="w-full max-w-xl text-center rounded-2xl px-6 py-3"
              style={{ background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.10)" }}
            >
              <p className="text-white/85 text-sm font-semibold leading-relaxed">
                {preview.ket}
              </p>
            </div>
          </div>

          {/* tombol next */}
          <button
            onClick={next}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full text-white text-lg flex items-center justify-center transition-colors z-10"
            style={{ background:"rgba(255,255,255,0.12)" }}
            onMouseEnter={e => e.currentTarget.style.background="rgba(255,255,255,0.25)"}
            onMouseLeave={e => e.currentTarget.style.background="rgba(255,255,255,0.12)"}
          >
            ›
          </button>

          {/* klik area luar untuk tutup */}
          <div
            className="absolute inset-0 -z-10"
            onClick={tutup}
          />
        </div>
      )}
    </div>
  );
}