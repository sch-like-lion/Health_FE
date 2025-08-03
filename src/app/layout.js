import "./globals.css";
import Providers from "../components/Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="tc-new-price">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
