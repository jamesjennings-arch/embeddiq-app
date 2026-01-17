import './globals.css';

export const metadata = {
  title: 'EmbeddIQ | ZIPSmart Intelligence Platform',
  description: 'AI-driven geospatial analytics, risk scoring, and embedded data intelligence.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
