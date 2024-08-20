import { Header } from "@/components/utilities/Header"
import React, { ReactNode } from "react"

const InAppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="px-3 py-3 md:py-4 md:px-6 2xl:max-w-[1644px] xl:max-w-[1200px] lg:max-w-[950px] mx-auto">
        {children}
      </div>
    </div>
  )
}

export default InAppLayout
