import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";

import Beranda       from "./pages/beranda";
import Sejarah       from "./pages/sejarah";
import Wilayah       from "./pages/wilayah";
import RiwayatJabatan from "./pages/riwayat-jabatan";
import Galeri        from "./pages/galeri";

export default function App() {
  return (
    <BrowserRouter>
      {/* ── Default SEO fallback (ditimpa tiap halaman) ── */}
      <Helmet>
        <html lang="id" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f2044" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Pemerintah Desa Tumani" />

        {/* Fallback title & description jika halaman belum punya Helmet sendiri */}
        <title>Desa Tumani — Website Resmi</title>
        <meta
          name="description"
          content="Website resmi Desa Tumani, Kecamatan Maesaan, Kabupaten Minahasa Selatan, Sulawesi Utara."
        />

        {/* Favicon */}
        <link rel="icon"             href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-stone-50 font-sans">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/"        element={<Beranda />} />
            <Route path="/sejarah" element={<Sejarah />} />
            <Route path="/wilayah" element={<Wilayah />} />
            <Route path="/riwayat" element={<RiwayatJabatan />} />
            <Route path="/galeri"  element={<Galeri />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}