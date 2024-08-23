"use client"
import { Button, Form, Input } from "antd"
import { useForm } from "antd/es/form/Form"
import React from "react"
import { BsDiscord, BsTwitterX } from "react-icons/bs"
import { CgInstagram } from "react-icons/cg"
import { FaFacebook } from "react-icons/fa6"

export const EditProfile = () => {
  const [form] = useForm()
  return (
    <div>
      <div className="md:mb-7 mb-5">
        <h3 className="text-xl md:text-3xl font-semibold font-arvo mb-1">
          Edit Profile
        </h3>
        <p>Kindly fill in your correct information</p>
      </div>
      <div className="md:w-[380px] w-full">
        <Form form={form} layout="vertical" requiredMark={false}>
          <Form.Item
            name={"username"}
            label="Username"
            rules={[{ required: true }]}
          >
            <Input
              className="w-full h-[45px] bg-dark-700"
              placeholder="Enter your username"
            />
          </Form.Item>
          <Form.Item
            name={"email"}
            label="Email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input
              className="w-full h-[45px] bg-dark-700"
              placeholder="Enter your email"
            />
          </Form.Item>
          <div>
            <p>Social Media Links</p>
            <div className="mt-4">
              <Form.Item name={"facebook"} className="mb-2">
                <Input
                  prefix={<FaFacebook size={20} />}
                  className="w-full h-[45px] bg-dark-700"
                  placeholder="Your facebook handle"
                />
              </Form.Item>
              <Form.Item name={"twitter"} className="mb-2">
                <Input
                  prefix={<BsTwitterX size={20} />}
                  className="w-full h-[45px] bg-dark-700"
                  placeholder="Your twitter handle"
                />
              </Form.Item>
              <Form.Item name={"instagram"} className="mb-2">
                <Input
                  prefix={<CgInstagram size={20} />}
                  className="w-full h-[45px] bg-dark-700"
                  placeholder="Your instagram handle"
                />
              </Form.Item>
              <Form.Item name={"discord"} className="mb-2">
                <Input
                  prefix={<BsDiscord size={20} />}
                  className="w-full h-[45px] bg-dark-700"
                  placeholder="Your discord handle"
                />
              </Form.Item>
            </div>
          </div>
          <div className="mt-5">
            <Button
              className="md:w-[200px] w-full h-[45px]"
              type="primary"
              htmlType="submit"
            >
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
