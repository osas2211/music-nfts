"use client"
import { Avatar, Button } from "antd"
import Link from "next/link"
import React from "react"
import { BsTwitterX } from "react-icons/bs"
import { FaDiscord, FaFacebook, FaInstagram } from "react-icons/fa6"
import { GrBitcoin } from "react-icons/gr"
import { MdOutlineArrowForward } from "react-icons/md"

export const UserProfile = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute bottom-0 left-0 bg-primary-default md:w-[7rem] md:h-[7rem] h-[4rem] w-[4rem] rounded-full"></div>
      <div className="w-full md:p-6 md:px-10 p-4 rounded-xl md:flex items-center justify-between gap-3 flex-wrap bg-dark-800/55 border-[1px] border-white/5 relative backdrop-blur-[50px]">
        <div className="flex items-center gap-4">
          <Avatar
            src="https://str.vercel.app/_next/image?url=%2Fnft.png&w=1920&q=75"
            className="md:w-[160px] md:h-[160px] w-[90px] h-[90px]"
          />
          <div className="md:space-y-5 space-y-3">
            <p className="md:text-3xl text-lg font-arvo font-semibold">
              @johnmark
            </p>
            <div className="bg-white/5 border-[1px] border-white/10 rounded-full backdrop-blur-[25px] p-2 px-3 inline-block">
              <div className="flex items-center gap-2">
                <GrBitcoin className="text-orange-400" size={20} />
                <p className="text-sm">0xa9564....2i45</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href={""} target="_blank">
                <FaInstagram size={21} />
              </Link>
              <Link href={""} target="_blank">
                <BsTwitterX size={21} />
              </Link>
              <Link href={""} target="_blank">
                <FaFacebook size={21} />
              </Link>
              <Link href={""} target="_blank">
                <FaDiscord size={21} />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid md:gap-x-[4rem] md:gap-y-5 gap-4 grid-cols-2 md:my-0 my-10">
          <div>
            <p className="text-sm text-white/80">Subscribers</p>
            <p className="text-[17px] font-semibold">214</p>
          </div>
          <div>
            <p className="text-sm text-white/80">Songs</p>
            <p className="text-[17px] font-semibold">37</p>
          </div>
          <div>
            <p className="text-sm text-white/80">Royalties</p>
            <p className="text-[17px] font-semibold">$245,000.78</p>
          </div>
          <div>
            <p className="text-sm text-white/80">Song Hits</p>
            <p className="text-[17px] font-semibold">1,046</p>
          </div>
        </div>

        <div>
          <div className="flex flex-row md:w-auto w-full md:flex-col gap-4 md:gap-7">
            <Link
              href={"/settings/edit-profile"}
              className="block md:w-auto w-full"
            >
              <Button
                type="primary"
                icon={<MdOutlineArrowForward />}
                iconPosition="end"
                className="w-full"
                size="large"
              >
                Edit Profile
              </Button>
            </Link>
            <Link href={"/market"} className="block md:w-auto w-full">
              <Button
                icon={<MdOutlineArrowForward />}
                iconPosition="end"
                className="w-full bg-gradient-to-t from-primary-default/20 to-primary-default/0 border-primary-default"
                size="large"
              >
                Market
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
