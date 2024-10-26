import type { Metadata, Viewport } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Maven_Pro } from 'next/font/google';
import "./globals.css";

const mavenPro = Maven_Pro({
    weight: ['400', '500', '600', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Shopping App",
    description: "Always serving the industry",
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function RootLayout({
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
        return (
            <html lang="en">
                <body
                className={`${mavenPro.className} antialiased`}>
                    <Navbar />
                    {children}
                    <Footer />
                </body>
            </html>
    );
};
