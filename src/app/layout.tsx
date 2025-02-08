import ShortCodeContext from "@/providers/ShortcodeContext";
import "@/styles/globals.css";
import { ReactNode } from "react";
import { Roboto } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import ThemeRegistry from "@/themes/ThemeRegistry";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export async function generateMetadata() {
  // const metadata = await getArticleMetadata("valami");
  return {
    // ...metadata,
    title: {
      default: "Szakma Sztár 2025",
      template: "%s | Szakma Sztár 2025",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="hu" className={`${roboto.className} ${roboto.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <ShortCodeContext>{children}</ShortCodeContext>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
