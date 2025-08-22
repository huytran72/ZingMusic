import AppFooter from "@/components/footer/app.footer"
import AppHeader from "@/components/header/app.header"
import ThemeRegistry from "@/components/theme-registry/theme.registry"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppHeader />
        <ThemeRegistry>{children}</ThemeRegistry>
        <AppFooter />
      </body>
    </html>
  )
}
