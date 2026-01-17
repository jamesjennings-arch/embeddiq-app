export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 text-white">
      <h1 className="text-5xl font-bold">EmbeddIQ</h1>
      <p className="text-xl mt-4 opacity-70">
        AI Geospatial Intelligence Platform
      </p>

      <div className="mt-10 flex gap-6">
        <a
          href="/pricing"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg"
        >
          Pricing
        </a>

        <a
          href="/contact"
          className="px-6 py-3 bg-gray-800 hover:bg-gray-900 rounded-lg"
        >
          Contact
        </a>
      </div>
    </main>
  );
}
