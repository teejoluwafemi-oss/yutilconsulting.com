
export const metadata = {
  title: "Yutil Consulting LLC — Finance • IT/Risk • Assets • Commodities",
  description: "Yutil Consulting LLC provides finance & accounting, IT risk & compliance audit, asset management & infrastructural development, and commodity trading advisory.",
};
import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
