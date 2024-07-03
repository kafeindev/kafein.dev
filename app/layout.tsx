import "./globals.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { MainSideBarContent } from "@/components/main-side-bar-content";
import { MobileDrawer } from "@/components/mobile-drawer";
import SideBar from "@/components/side-bar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <link
        rel="icon"
        type="image/svg+xml"
        sizes="any"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%221em%22 font-size=%2280%22>☕</text></svg>"
      />
      <body className={GeistSans.className}>
        <main
          vaul-drawer-wrapper=""
          className="lg:dot flex bg-white antialiased"
        >
          <div className="flex min-h-screen justify-items-center gap-2 lg:m-auto lg:py-2">
            <SideBar className="hidden border border-gray-200 bg-gray-100 bg-opacity-60 lg:flex">
              <MainSideBarContent />
            </SideBar>
            <div className="flex flex-col rounded-md border border-gray-200 bg-gray-50 lg:w-[70rem]">
              <MobileDrawer>
                <MainSideBarContent />
              </MobileDrawer>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "kafein.dev",
  description: "Kafein's Personal WebSite",
};
