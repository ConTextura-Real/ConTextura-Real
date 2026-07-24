import "./globals.css";

export const metadata = {
  title: "Con-Textura Real",
  description:
    "Mujer, derecho y fe en un espacio de escritura, oración y reflexión sobre la vida real.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
