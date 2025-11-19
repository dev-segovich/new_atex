import type { Metadata } from "next";
import "./globals.css";
import FooterWrapper from "../components/footerwrapper";
import NavbarWrapper from "../components/navbarwrapper";  // <- Importa el wrapper
import ClientLayout from "./ClientLayout"; // <- Importa el ClientLayout

export const metadata: Metadata = {
  title: 'ATEX',
  description: 'A modern real estate experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavbarWrapper /> {/* Ahora el Navbar es client-only */}
        <ClientLayout>{children}</ClientLayout>
        <FooterWrapper />
      </body>
    </html>
  );
}
