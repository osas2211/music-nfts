"use client"
import React, { ReactNode } from "react"
import { ConfigProvider, theme } from "antd"

export const AntProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#1AC057",
          fontFamily:
            "'__Space_Grotesk_587f35', '__Space_Grotesk_Fallback_587f35'",
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}
