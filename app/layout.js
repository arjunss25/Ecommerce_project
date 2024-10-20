
import "./globals.css"
import StoreProvider from "./store/Storeprovider"

export const metadata = {
  title: "Armaticpick",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body>{children}</body>
      </StoreProvider>
    </html>
  )
}