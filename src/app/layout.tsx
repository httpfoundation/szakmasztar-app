import { getCurrentCompetition } from "@/actions/competitions/competitions";
import BaseLayout from "@/components/layouts/BaseLayout";
import { marketCondensed, montserrat } from "@/lib/fonts";
import { getArticleMetadata } from "@/lib/metadata";
import ShortCodeContext from "@/providers/ShortcodeContext";
import "@/styles/globals.css";
import { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import ThemeRegistry from "@/themes/ThemeRegistry";

export async function generateMetadata() {
  const currentCompetition = await getCurrentCompetition();
  const metadata = await getArticleMetadata(currentCompetition.article.slug, "");

  return {
    ...metadata,
    title: {
      default: currentCompetition.name,
      template: `%s | ${currentCompetition.name}`,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const currentCompetition = await getCurrentCompetition();

  return (
    <html
      lang="hu"
      className={`${montserrat.className} ${montserrat.variable} ${marketCondensed.variable}`}
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
    </html>
  );
}

