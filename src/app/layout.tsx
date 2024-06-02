import Footer from "@/app/_components/footer";
import { ThemeProviders } from "@/app/_components/theme-providers";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
// import { SwitchTheme } from "@/app/_components/SwitchTheme";
 import ThemeSwitch from "@/app/_components/ThemeSwitch";

// import { ThemeProvider } from 'next-themes'


// Font files can be colocated inside of `pages`
const oggRegular = localFont({ src: './Ogg-Regular.woff' })

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Next.js Blog Example with ${CMS_NAME}`,
  description: `A statically generated blog example using Next.js and ${CMS_NAME}.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={inter.className} >
        <ThemeProviders>
    
  
  
    <div className=" logo xheader font-display text-4xl px-4 py-16">Rechtsanwalt Wiazewicz</div>
        <div className="min-h-screen">{children}</div>
        
    
         </ThemeProviders>  
      </body>
    </html>

  );
}
