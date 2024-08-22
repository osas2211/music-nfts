"use client"
import { Avatar, Button } from "antd"
import React from "react"
import { BiHeart, BiUser } from "react-icons/bi"
import { BsStarFill } from "react-icons/bs"
import { FcRating } from "react-icons/fc"
import { GoVerified } from "react-icons/go"
import { motion } from "framer-motion"
import { FaPlay } from "react-icons/fa6"

export const CreatorDetails = () => {
  return (
    <div>
      <div>
        <h3 className="font-arvo font-semibold text-sm text-green-200">
          #Top Rated Creator
        </h3>
        <h2 className="font-arvo font-semibold md:text-6xl text-4xl md:mb-4 md:mt-3 mt-2 mb-4">
          The Chase Dorm.
        </h2>
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
          <p>Stars</p>
          <div className="flex items-center justify-center gap-2">
            <BsStarFill className="text-green-400" />
            <p className="font-semibold text-[15px]">48</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 my-7">
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

      <div className="md:mt-10">
        <p className="font-arvo text-sm font-semibold mb-4">Suggested songs</p>
        <div className="overflow-x-auto md:w-[600px] flex items-center gap-4 no-scrollbar relative">
          <div className="relative">
            <div className="bg-yellow-500 h-[2rem] w-[3rem] rounded-full z-[-1] absolute top-0 left-[1rem]" />
            <div className="bg-primary-default h-[2rem] w-[3rem] rounded-full z-[-1] absolute bottom-0 right-[1rem]" />

            <div className="bg-dark-700/15 p-3 pr-6 rounded-lg inline-flex items-center justify-between min-w-[350px] relative backdrop-blur-[45px] border-[1px] border-white/5">
              <div className="flex items-center gap-3">
                <Avatar
                  size={70}
                  className="bg-green-500/15 rounded-lg"
                  src="https://str.vercel.app/_next/image?url=%2Fnft2.png&w=2048&q=100"
                >
                  <BiUser />
                </Avatar>
                <div>
                  <p className="font-semibold">On the Hill</p>
                  <p className="text-sm text-white/70">The Chase</p>
                </div>
              </div>

              <Avatar
                className="bg-primary-default cursor-pointer shadow-lg"
                size={35}
              >
                <FaPlay size={15} />
              </Avatar>
            </div>
          </div>
          <div className="relative">
            <div className="bg-yellow-500 h-[2rem] w-[3rem] rounded-full z-[-1] absolute top-0 left-[1rem]" />
            <div className="bg-primary-default h-[2rem] w-[3rem] rounded-full z-[-1] absolute bottom-0 right-[1rem]" />

            <div className="bg-dark-700/15 p-3 pr-6 rounded-lg inline-flex items-center justify-between min-w-[350px] relative backdrop-blur-[45px] border-[1px] border-white/5">
              <div className="flex items-center gap-3">
                <Avatar
                  size={70}
                  className="bg-green-500/15 rounded-lg"
                  src="https://cdn.pixabay.com/photo/2023/10/14/14/22/man-8314982_1280.jpg"
                >
                  <BiUser />
                </Avatar>
                <div>
                  <p className="font-semibold">On the Hill</p>
                  <p className="text-sm text-white/70">The Chase</p>
                </div>
              </div>

              <Avatar
                className="bg-primary-default cursor-pointer shadow-lg"
                size={35}
              >
                <FaPlay size={15} />
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
