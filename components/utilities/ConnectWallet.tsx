"use client"
import React, { useState } from "react"
import { Avatar, Button, Popover } from "antd"
import { TbPlugConnected } from "react-icons/tb"
import { BiBitcoin, BiCaretDown, BiUser } from "react-icons/bi"
import Link from "next/link"
import { CgLogOut, CgProfile } from "react-icons/cg"
import { LuSettings } from "react-icons/lu"

export const ConnectWallet = () => {
  const [isConnected, setIsConnected] = useState(false)
  const toggleConnect = () => setIsConnected(!isConnected)
  return (
    <div>
      {isConnected ? (
        <div className="flex items-center gap-3">
          <div className="p-2 px-4 flex items-center gap-2 bg-gradient-to-t from-primary-default/15 to-primary-default/0 border-[1px] border-primary-default rounded-full">
            <BiBitcoin className="text-yellow-600" />
            <p className="text-sm text-primary-default">ashdkur...hdteu</p>
          </div>
          <Popover
            trigger={"click"}
            placement="bottomRight"
            content={
              <div className="w-[150px] relative z-[1000] space-y-4">
                <Link
                  className="flex items-center gap-2 hover:text-white"
                  href={"/profile"}
                >
                  <CgProfile size={24} />
                  <p className="text-sm">Profile</p>
                </Link>
                <Link
                  className="flex items-center gap-2 hover:text-white"
                  href={"/settings"}
                >
                  <LuSettings size={24} />
                  <p className="text-sm">Settings</p>
                </Link>
                <div
                  onClick={toggleConnect}
                  className="flex items-center gap-2 hover:text-white cursor-pointer"
                >
                  <CgLogOut size={24} />
                  <p className="text-sm">Discounnect</p>
                </div>
              </div>
            }
          >
            <div className="flex items-center gap-1 cursor-pointer">
              <Avatar src="" size={"large"} className="bg-green-200/15">
                <BiUser className="text-primary-default" />
              </Avatar>
              <BiCaretDown size={22} />
            </div>
          </Popover>
        </div>
      ) : (
        <Button
          className="h-[42px]"
          size="large"
          type="primary"
          icon={<TbPlugConnected />}
          iconPosition="start"
          onClick={toggleConnect}
        >
          Connect wallet
        </Button>
      )}
    </div>
  )
}
