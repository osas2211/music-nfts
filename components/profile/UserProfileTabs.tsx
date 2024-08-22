"use client"
import React, { useState } from "react"
import { FaBitcoin } from "react-icons/fa6"
import { PiMusicNotesPlusFill } from "react-icons/pi"
import { RiHeart2Fill } from "react-icons/ri"
import { SongsList } from "../market/SongsList"
import { ArtistsList } from "../market/ArtistsList"

export const UserProfileTabs = () => {
  const [current, setCurrent] = useState(0)
  const items = [
    {
      title: "Songs Created",
      content: <SongsList title="" />,
      icon: <PiMusicNotesPlusFill size={19} />,
    },
    {
      title: "Subscriptions",
      content: <ArtistsList title="" />,
      icon: <FaBitcoin size={19} />,
    },
    {
      title: "Favourites",
      content: <SongsList title="" />,
      icon: <RiHeart2Fill size={19} />,
    },
  ]
  return (
    <div className="my-10">
      <div className="flex gap-4">
        {items.map(({ title, icon }, index) => {
          const active = index === current
          return (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`${
                active
                  ? "text-primary-default border-b-[1px] border-b-primary-default"
                  : ""
              } p-2 flex items-center gap-2 cursor-pointer`}
            >
              <div>{icon}</div>
              <p className="md:text-[16px] text-sm">{title}</p>
            </div>
          )
        })}
      </div>
      <div className="md:-my-11">{items[current].content}</div>
    </div>
  )
}
