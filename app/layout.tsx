import "./globals.css";

export const metadata = {
  title: "EmbeddIQ",
  description: "AI geospatial intelligence platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
