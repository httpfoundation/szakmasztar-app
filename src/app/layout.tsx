import { getCurrentCompetition } from "@/actions/competitions/competitions";
import BaseLayout from "@/components/layouts/BaseLayout";
import { marketCondensed, montserrat, montserratBold, montserratMedium } from "@/lib/fonts";
import { getArticleMetadata } from "@/lib/metadata";
import ShortCodeContext from "@/providers/ShortcodeContext";
import "@/styles/globals.css";
import { ReactNode } from "react";
import { Viewport } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import ThemeRegistry from "@/themes/ThemeRegistry";

export async function generateMetadata() {
  const currentCompetition = await getCurrentCompetition();
  const metadata = await getArticleMetadata(currentCompetition.article.slug);

  return {
    ...metadata,
    title: {
      default: currentCompetition.name,
      template: `%s | ${currentCompetition.name}`,
    },
  };
}

export const viewport: Viewport = {
  maximumScale: 1,
  userScalable: false,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const currentCompetition = await getCurrentCompetition();

  return (
    <html
      lang="hu"
      className={`${montserrat.className} ${montserrat.variable} ${marketCondensed.variable} ${montserratBold.variable} ${montserratMedium.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <ShortCodeContext>
              <BaseLayout title={currentCompetition.name}>{children}</BaseLayout>
            </ShortCodeContext>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
      <GoogleAnalytics gaId="G-NKDB4NNMYZ" />
      <Analytics />
    </html>
  );
}
