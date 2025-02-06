import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

// const integralcf = localFont({
//   src: [
//     { path: "../../public/fonts/IntegralCF-Regular.woff2", weight: "400", style: "normal" },
//     { path: "../../public/fonts/IntegralCF-Bold.woff2", weight: "700", style: "normal" }
//   ]
// })

// const satoshi = localFont({
//   src: [
//     { path: "../../public/fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
//     { path: "../../public/fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" }
//   ]
// })

export const integralCFRegular = localFont({
  src: "../../public/fonts/IntegralCF-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-integral-regular"
})

export const integralCFBold = localFont({
  src: "../../public/fonts/IntegralCF-Bold.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-integral-bold"
})

export const satoshiRegular = localFont({
  src: "../../public/fonts/Satoshi-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-satoshi-regular"
})
// TODO: Add satoshi 500 and change font in topbanner.
export const satoshiRegular = localFont({
  src: "../../public/fonts/Satoshi-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-satoshi-regular"
})

export const satoshiBold = localFont({
  src: "../../public/fonts/Satoshi-Bold.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-satoshi-bold"
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${integralCFRegular.variable} ${integralCFBold.variable} ${satoshiRegular.variable} ${satoshiBold.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
