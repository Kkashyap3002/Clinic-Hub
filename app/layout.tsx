import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from '@/lib/utils'
import { ThemeProvider } from "@/components/ui/theme-provider";


const fontSans =   Plus_Jakarta_Sans({
  weight: ['300' ,'400' ,'500','600','700'],
  variable: "--font-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "ClinicHub",
  description: "A Healthcare Managemet System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-dark-300 font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
