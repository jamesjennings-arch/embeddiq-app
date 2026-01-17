export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-6 text-center">
        EmbeddIQ ZIPSmart
      </h1>

      <p className="text-lg text-gray-300 max-w-2xl text-center mb-10">
        An ultra-modern AI geospatial and risk intelligence platform.  
        Real-time ZIP-level insights for underwriting, logistics, fraud prevention,
        and predictive modeling.
      </p>

      <a
        href="https://app.embeddiqapp.com"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold"
      >
        Launch App
      </a>
    </main>
  );
}
