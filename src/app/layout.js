import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Scroll_To_Top from "@/components/Scroll_To_Top";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Movie WebApp in Next.js",
  description: "Created Movie web app in next.js using ",
  icons: {
    icon: ["/logo.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <main className="max-w-[1300px] m-auto">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <Scroll_To_Top />
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
