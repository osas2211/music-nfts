"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { HTMLAttributes } from "react"

const routes = [
  { path: "/settings", title: "Edit Profile" },
  { path: "/settings/edit-photo", title: "Edit Photo" },
  { path: "/settings/market", title: "Market" },
]
export const SettingsNav = () => {
  const pathname = usePathname()
  return (
    <div>
      <div className="md:h-[60vh] bg-dark-900 md:py-7 md:space-y-3 border-[1px] border-white/5 rounded-lg md:px-0 p-2 md:rounded-sm md:block grid grid-cols-3 md:grid-cols-1">
        {routes.map((route, index) => {
          const active = pathname.includes(route.path)
          const activeCls =
            "bg-gradient-to-r md:from-primary-default/25 md:to-primary-default/5 from-primary-default to-primary-default md:border-primary-default md:text-green-300 text-white rounded-lg md:rounded-none"
          return (
            <Link href={route.path} key={index} className="block">
              <div
                className={`${
                  active ? activeCls : "border-transparent"
                } md:border-l-[4px] p-3 px-5 md:text-[16px] text-sm`}
              >
                {route.title}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
