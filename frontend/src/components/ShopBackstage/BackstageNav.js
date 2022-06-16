import React from 'react'
import { BiStore } from 'react-icons/bi'
import { AiOutlineProfile } from 'react-icons/ai'

const BackstageNav = () => {
  return (
    <>
      <div className="w-25 bg-secondary">
        <div className="pt-3">
          <h4 className="p-2 w-100 text-center">鼎泰豐後台管理</h4>

          {/* <BiStore /> */}
          <h5 className="px-2 py-4 sb-mb sb-hover w-100 text-center">
            基本資料
          </h5>

          <h5 className="px-2 py-4 sb-mb sb-hover w-100 text-center">
            我要開團
          </h5>

          <h5 className="px-2 py-4 sb-mb sb-hover w-100 text-center">
            歷史開團
          </h5>

          <h5 className="px-2 py-4 sb-mb sb-hover w-100 text-center">
            上架菜色
          </h5>

          <h5 className="px-2 py-4 sb-mb sb-hover w-100 text-center">
            店家評價
          </h5>
        </div>
      </div>
    </>
  )
}

export default BackstageNav
