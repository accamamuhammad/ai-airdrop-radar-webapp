import "./globals.css";

export const metadata = {
  title: "AI Airdrop Radar",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-white`}>{children}</body>
    </html>
  );
}
