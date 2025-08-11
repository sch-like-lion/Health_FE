import "./globals.css";
import Providers from "../components/Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="tc-new-price">
      <body className="min-h-screen flex items-center justify-center bg-gray-50">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
