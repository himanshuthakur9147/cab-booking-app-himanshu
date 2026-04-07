
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/context/BookingContext";
import { PaymentProvider } from "@/context/PaymentContext";
import { ReviewProvider } from "@/context/ReviewContext";
import { AdminProvider } from "@/context/AdminContext";

import RouteLoader from "@/components/Loader/RouteLoader";
import OfflineNotice from "@/components/offline/OfflineNotice";
import { AuthProvider } from "@/context/AuthContext";
import { ToastProvider } from "@/context/ToastContext";
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
              
    
        <AuthProvider>
          <BookingProvider>
            <PaymentProvider>
              <ReviewProvider>
                <AdminProvider>
                    <RouteLoader />
                    <OfflineNotice />
                    <ToastProvider>
                      <Script 
          src="https://upload-widget.cloudinary.com/global/all.js" 
          strategy="beforeInteractive" 
        />
                    {children}
                    </ToastProvider>
                
                </AdminProvider>
              </ReviewProvider>
            </PaymentProvider>
          </BookingProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
