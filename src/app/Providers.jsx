'use client'

import { ThemeProvider } from "next-themes"

export default function Providers({children}) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white select-none transition-colors duration-200">
        {children}
      </div>
    </ThemeProvider>
  )
}
  