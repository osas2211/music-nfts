"use client"
import React, { useState } from "react"
import { FcMusic } from "react-icons/fc"
import { BiSolidDownArrow } from "react-icons/bi"
import { Input } from "antd"
import { CgSearch } from "react-icons/cg"
import { MusicCard } from "./MusicCard"
import { LuLayoutGrid } from "react-icons/lu"
import { LiaListUlSolid } from "react-icons/lia"
import { MusicListCard } from "./MusicListCard"

export const TopMusic = () => {
  const [isGrid, setIsGrid] = useState(true)
  return (
    <div>
      <div className="flex justify-between items-center gap-3 flex-wrap">
        <p className="md:text-3xl text-xl font-arvo font-bold">Top Music</p>
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
              placeholder="Search title, musician.."
              className="h-[45px] bg-dark-800 border-0 hover:border-[1px] active:border-[1px] md:w-[250px] w-full"
              prefix={<CgSearch className="text-primary-default" />}
            />
          </div>
          <div className="flex bg-dark-700/70 rounded-md">
            <div
              className={`p-3 rounded-md cursor-pointer ${
                isGrid ? "bg-primary-default" : ""
              }`}
              onClick={() => setIsGrid(true)}
            >
              <LuLayoutGrid size={20} />
            </div>
            <div
              className={`p-3 rounded-md cursor-pointer ${
                !isGrid ? "bg-primary-default" : ""
              }`}
              onClick={() => setIsGrid(false)}
            >
              <LiaListUlSolid size={21} />
            </div>
          </div>
        </div>
        <div className="md:hidden w-full">
          <Input
            placeholder="Search title, musician.."
            className="h-[45px] bg-dark-800 border-0 hover:border-[1px] active:border-[1px] md:w-[250px] w-full"
            prefix={<CgSearch className="text-primary-default" />}
          />
        </div>
      </div>
      <div className="my-5 md:my-7">{isGrid ? <GridView /> : <ListView />}</div>
    </div>
  )
}

const GridView = () => {
  return (
    <>
      <div className="grid md:grid-cols-5 grid-cols-1 gap-5">
        <MusicCard image="https://str.vercel.app/_next/image?url=%2Fnft.png&w=2048&q=100" />
        <MusicCard image="https://cdn.pixabay.com/photo/2018/07/28/01/08/vintage-3567130_1280.jpg" />
        <MusicCard image="https://str.vercel.app/_next/image?url=%2Fnft4.png&w=2048&q=100" />
        <MusicCard image="https://cdn.pixabay.com/photo/2013/10/02/22/47/tango-190026_1280.jpg" />
        <MusicCard image="https://cdn.pixabay.com/photo/2016/10/04/02/38/rap-1713404_1280.jpg" />
        <MusicCard image="https://cdn.pixabay.com/photo/2018/01/16/10/18/headphones-3085681_1280.jpg" />
        <MusicCard image="https://cdn.pixabay.com/photo/2016/11/21/14/04/beautiful-1845578_640.jpg" />
        <MusicCard image="https://cdn.pixabay.com/photo/2017/05/26/18/27/band-2346728_640.jpg" />
        <MusicCard image="https://cdn.pixabay.com/photo/2022/07/18/14/09/marching-band-7330002_640.jpg" />
        <MusicCard image="https://cdn.pixabay.com/photo/2016/09/27/23/03/guitar-1699501_640.jpg" />
        <MusicCard image="https://cdn.pixabay.com/photo/2015/08/25/20/53/guitar-907654_640.jpg" />
        <MusicCard image="https://cdn.pixabay.com/photo/2013/10/02/22/47/tango-190026_1280.jpg" />
      </div>
    </>
  )
}

const ListView = () => {
  const images = [
    "https://str.vercel.app/_next/image?url=%2Fnft.png&w=2048&q=100",
    "https://cdn.pixabay.com/photo/2018/07/28/01/08/vintage-3567130_1280.jpg",
    "https://str.vercel.app/_next/image?url=%2Fnft4.png&w=2048&q=100",
    "https://cdn.pixabay.com/photo/2013/10/02/22/47/tango-190026_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/10/04/02/38/rap-1713404_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/01/16/10/18/headphones-3085681_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/21/14/04/beautiful-1845578_640.jpg",
    "https://cdn.pixabay.com/photo/2017/05/26/18/27/band-2346728_640.jpg",
    "https://cdn.pixabay.com/photo/2022/07/18/14/09/marching-band-7330002_640.jpg",
    "https://cdn.pixabay.com/photo/2016/09/27/23/03/guitar-1699501_640.jpg",
    "https://cdn.pixabay.com/photo/2015/08/25/20/53/guitar-907654_640.jpg",
    "https://cdn.pixabay.com/photo/2013/10/02/22/47/tango-190026_1280.jpg",
  ]
  return (
    <>
      <div className="grid grid-cols-1 gap-5">
        {images.map((image, index) => {
          return <MusicListCard image={image} key={index} index={index + 1} />
        })}
      </div>
    </>
  )
}
