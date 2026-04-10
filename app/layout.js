export const metadata = {
  title: "OSCS",
  description: "Oni Supply Chain Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
