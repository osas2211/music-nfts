"use client"
import React from "react"
import { FcMusic } from "react-icons/fc"
import { BiSolidDownArrow } from "react-icons/bi"
import { Input } from "antd"
import { CgSearch } from "react-icons/cg"
import { ArtistCard } from "./ArtistCard"

export const Artists = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-3 flex-wrap">
        <p className="md:text-3xl text-xl font-arvo font-bold">Artists</p>
        <div className="md:inline-flex flex gap-5 items-center md:justify-start justify-between text-sm md:w-auto w-full">
          <div className="inline-flex gap-3 flex-wrap items-center cursor-pointer">
            <FcMusic />
            <p className="font-semibold">Music Genres</p>
            <BiSolidDownArrow size={14} />
          </div>

          <p className="px-6 py-2 rounded-lg bg-gradient-to-tr from-primary-default/25 to-primary-default/0 border-[1px] border-primary-default">
            Filter
          </p>

          <div className="hidden md:block">
            <Input
              placeholder="Search artist"
              className="h-[45px] bg-dark-800 border-0 hover:border-[1px] active:border-[1px] md:w-[250px] w-full"
              prefix={<CgSearch className="text-primary-default" />}
            />
          </div>
        </div>
        <div className="md:hidden w-full">
          <Input
            placeholder="Search artist"
            className="h-[45px] bg-dark-800 border-0 hover:border-[1px] active:border-[1px] md:w-[250px] w-full"
            prefix={<CgSearch className="text-primary-default" />}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 my-5 md:my-7 gap-5">
        <ArtistCard image="https://str.vercel.app/_next/image?url=%2Fnft.png&w=2048&q=100" />
        <ArtistCard image="https://cdn.pixabay.com/photo/2023/10/14/14/22/man-8314982_1280.jpg" />
        <ArtistCard image="https://cdn.pixabay.com/photo/2019/04/12/21/19/man-4123268_1280.jpg" />
        <ArtistCard image="https://cdn.pixabay.com/photo/2015/09/08/17/35/man-930397_1280.jpg" />
        <ArtistCard image="https://cdn.pixabay.com/photo/2022/11/22/13/47/exoplanet-7609754_1280.jpg" />
        <ArtistCard image="https://cdn.pixabay.com/photo/2017/03/11/11/44/man-2134881_1280.jpg" />
        <ArtistCard image="https://img.freepik.com/free-photo/3d-rendering-financial-neon-bull_23-2151691933.jpg?t=st=1724200031~exp=1724203631~hmac=192f83f2e083ddd14ac086efa098e233c3a4e46fa07630df5337a7572d1e7eb1&w=740" />
        <ArtistCard image="https://cdn.pixabay.com/photo/2023/12/12/15/05/ai-generated-8445386_1280.jpg" />
        <ArtistCard image="https://cdn.pixabay.com/photo/2021/02/09/01/05/woman-5997100_1280.png" />
        <ArtistCard image="https://cdn.pixabay.com/photo/2024/03/04/08/06/ai-generated-8612011_1280.png" />
      </div>
    </div>
  )
}
