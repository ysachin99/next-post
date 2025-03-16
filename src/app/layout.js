import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "POST App",
  description: "A blog post app ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
