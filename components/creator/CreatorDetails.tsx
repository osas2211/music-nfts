"use client"
import { Avatar, Button } from "antd"
import React from "react"
import { BiHeart, BiUser } from "react-icons/bi"
import { BsStarFill } from "react-icons/bs"
import { FcRating } from "react-icons/fc"
import { GoVerified } from "react-icons/go"

export const CreatorDetails = () => {
  return (
    <div>
      <div>
        <h3 className="font-arvo font-semibold text-sm text-green-200">
          #Top Rated Creator
        </h3>
        <h2 className="font-arvo font-semibold text-[4rem]">The Chase Dorm.</h2>
        <p className="text-sm text-white/80 tracking-wide leading-relaxed md:w-[70%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          natus ducimus officiis aperiam odit aliquam nam id esse. Voluptas
          quidem corporis amet explicabo minus. Ratione quod saepe.
        </p>
      </div>
      <div className="my-7 flex items-center gap-2">
        <Avatar
          size={60}
          className="bg-green-500/15"
          src="https://str.vercel.app/_next/image?url=%2Fnft2.png&w=2048&q=100"
        >
          <BiUser />
        </Avatar>
        <div className="text-sm">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-[15px]">The Chase</p>
            <GoVerified className="text-green-400" />
          </div>
          <p className="font-thin text-white/70">Creator</p>
        </div>
      </div>
      <div className="my-7 grid grid-cols-2 md:grid-cols-4 gap-4 text-center bg-gradient-to-l from-dark-900/60 to-green-400/10 rounded-lg p-6 md:w-[80%] text-[15px]">
        <div>
          <p>Songs</p>
          <p>50</p>
        </div>
        <div>
          <p>Subscribers</p>
          <p>10</p>
        </div>
        <div>
          <p>Joined Since</p>
          <p>Aug, 2024</p>
        </div>
        <div>
          <p>Rating</p>
          <div className="flex items-center justify-center gap-2">
            <BsStarFill className="text-green-400" />
            <p className="font-semibold text-[15px]">4.8</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button className="md:w-[200px] h-[45px]" size="large" type="primary">
          Subcribe
        </Button>
        <Button
          icon={<BiHeart className="text-red-500" />}
          className="h-[45px] hover:bg-transparent active:bg-transparent"
          size="large"
          type="text"
        >
          Like
        </Button>
      </div>
    </div>
  )
}
