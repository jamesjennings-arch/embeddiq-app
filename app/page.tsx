export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold mb-4">EmbeddIQ</h1>

      <p className="text-xl opacity-80 mb-10">
        AI Geospatial Intelligence Platform
      </p>

      <div className="flex gap-4">
        <a href="/pricing" className="px-5 py-3 bg-blue-600 rounded-lg hover:bg-blue-700">
          Pricing
        </a>

        <a href="/contact" className="px-5 py-3 bg-gray-800 rounded-lg hover:bg-gray-900">
          Contact
        </a>
      </div>
    </main>
  );
}
