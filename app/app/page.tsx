export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-50 text-gray-900">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">
          <span className="text-blue-700">EmbeddIQ ZIPSmart</span>
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          An ultra-modern AI geospatial and risk intelligence platform delivering
          real-time ZIP-level insights for underwriting, logistics, fraud
          prevention, and predictive modeling.
        </p>

        <a
          href="https://app.embeddiqapp.com"
          className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-lg font-semibold shadow-md transition-all"
        >
          Launch Platform
        </a>
      </div>

      <footer className="mt-20 text-sm text-gray-400">
        © {new Date().getFullYear()} EmbeddIQ. All rights reserved.
      </footer>
    </main>
  );
}
