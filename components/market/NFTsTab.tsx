"use client"
import React, { useState } from "react"
import { MusicNFTs } from "./MusicNFTs"

export const NFTsTab = () => {
  const [current, setCurrent] = useState(0)
  const items = [
    {
      title: "Music NFTs",
      content: <MusicNFTs />,
    },
    {
      title: "Topping the Charts",
      content: <div>Trending Music NFTs</div>,
    },
  ]
  return (
    <div>
      <div className="md:flex md:justify-end md:-mt-10 mt-7 md:mb-10 mb-7">
        <div className="bg-dark-800 rounded-lg p-2 md:inline-flex grid grid-cols-2 gap-1 items-items">
          {items.map((item, index) => {
            const active = index === current
            return (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`px-4 py-2 rounded-lg cursor-pointer ${
                  active ? "bg-primary-default" : ""
                }`}
              >
                <p className="text-sm text-center font-semibold">
                  {item.title}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {items[current].content}
    </div>
  )
}
