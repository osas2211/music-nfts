"use client"
import Link from "next/link"
import React from "react"
import { CiMusicNote1 } from "react-icons/ci"
import { usePathname } from "next/navigation"
import { ConnectWallet } from "./ConnectWallet"

const routes = [
  { path: "/market", title: "market" },
  { path: "/portals", title: "portals" },
  { path: "/launchpad", title: "launchpad" },
]

export const Header = () => {
  const pathname = usePathname()
  return (
    <div className="w-full bg-dark-900/70 backdrop-blur-[20px] sticky top-0 left-0 z-[10000]">
      <div className="2xl:max-w-[1644px] xl:max-w-[1200px] lg:max-w-[950px] mx-auto px-4 py-4 md:py-4 md:px-6">
        <div className="flex items-center gap-4 justify-between">
          <div className="text-primary-default glow flex items-center gap-1">
            <CiMusicNote1 className="text-primary-default" size={30} />
            <p className="font-jersey text-xl">Music-verse.</p>
          </div>
          <nav>
            <ul className="flex gap-2 items-center">
              {routes.map((route, index) => {
                const active = route.path === pathname
                return (
                  <Link
                    href={route.path}
                    className={`${
                      active
                        ? "bg-gradient-to-t from-primary-default/10 border-b-primary-default border-b-[1px] to-primary-default/0"
                        : ""
                    } text-white capitalize p-3 px-4 border- md:block hidden`}
                    key={index}
                  >
                    {route.title}
                  </Link>
                )
              })}
              <li>
                <ConnectWallet />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
