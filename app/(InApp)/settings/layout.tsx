"use client"
import { SettingsNav } from "@/components/settings/SettingsNav"
import React, { ReactNode } from "react"

const SettingsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="md:pt-20 py-5">
      <h2 className="text-3xl md:text-5xl font-semibold font-arvo">Settings</h2>
      <div className="grid md:grid-cols-[220px,auto] md:gap-12 gap-6  md:mt-7 mt-4">
        <SettingsNav />
        <div>{children}</div>
      </div>
    </div>
  )
}

export default SettingsLayout
