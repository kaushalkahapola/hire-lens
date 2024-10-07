import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import "./globals.css";
import { HeaderMenu } from "./components/HeaderMenu/HeaderMenu";
import { FooterSimple } from "./components/Footer/FooterSimple";

export const metadata = {
  title: "HireLens",
  description: "HireLens | AI-powered CV screening tool",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <section>
            <HeaderMenu />
          </section>
          {children}

          {/* Footer Section */}
          <section>
            <FooterSimple />
          </section>
        </MantineProvider>
      </body>
    </html>
  );
}
