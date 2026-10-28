import "./globals.css";

export const metadata = {
  title: "SK Fabricators | Gates, Petrol Bunks, Exteriors & Signage",
  description: "Custom gates, petrol bunk canopy work, architectural exteriors, louvers and 3D signage in Bengaluru.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
