import Nav from 'react-bootstrap/Nav'
import Table from 'react-bootstrap/Table'
import { API_URL } from '../../utils/config'
import { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import axios from 'axios'

function GroupList() {
  const shopID = localStorage.getItem('shopID')
  const [data, setData] = useState([])
  const [key, setKey] = useState(1)

  //一開始的渲染
  useEffect(() => {
    fetch(`${API_URL}/shopbackstage/grouplist?shopID=${shopID}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.result)
      })
      .catch((e) => {
        /*發生錯誤時要做的事情*/
        console.log(e)
      })
  }, [])

  function getEatTimeString(i) {
    if (data[i].eating_time === 1) {
      return '午餐12:00'
    } else if (data[i].eating_time === 2) {
      return '下午茶15:00'
    } else {
      return '晚餐18:00'
    }
  }

  useEffect(() => {
    console.log('useEffect on key', key)
    switch (key) {
      case '1':
        window.scrollTo(0, 0)
        allOpen()
        break
      case '2':
        window.scrollTo(0, 0)
        nowOpen()
        break
      case '3':
        window.scrollTo(0, 0)
        corOpen()
        break
      case '4':
        window.scrollTo(0, 0)
        noneOpen()
        break
      case '5':
        window.scrollTo(0, 0)
        finishOpen()
        break
      default:
    }
  }, [key])
  //全部開團
  async function allOpen() {
    const res = await axios.get(
      `${API_URL}/shopbackstage/grouplist?shopID=${shopID}`
    )
    setData(res.data.result)
  }

  //開團中
  async function nowOpen() {
    const res = await axios.get(
      `${API_URL}/shopbackstage/nowopen?shopID=${shopID}`
    )
    setData(res.data.result)
  }

  //已成團
  async function corOpen() {
    const res = await axios.get(
      `${API_URL}/shopbackstage/coropen?shopID=${shopID}`
    )
    setData(res.data.result)
  }

  //未成團
  async function noneOpen() {
    const res = await axios.get(
      `${API_URL}/shopbackstage/noneopen?shopID=${shopID}`
    )
    setData(res.data.result)
  }

  //歷史開團
  async function finishOpen() {
    const res = await axios.get(
      `${API_URL}/shopbackstage/finishopen?shopID=${shopID}`
    )
    setData(res.data.result)
  }

  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => {
          setKey(k)
        }}
        className="mb-3"
      >
        {/* 全部開團 */}
        <Tab
          eventKey="1"
          title="全部開團"
          onClick={() => {
            console.log('allOpen')
            allOpen()
          }}
        >
          {/* 內容 */}
          <Table>
            <thead>
              <tr>
                <th className="text-center py-3">團單編號</th>
                <th className="text-center py-3">開團開始</th>
                <th className="text-center py-3">截止時間</th>
                <th className="text-center py-3">用餐時間</th>
                <th className="text-center py-3">成團人數</th>
                <th className="text-center py-3">目前人數</th>
                <th className="text-center py-3">是否成團</th>
                <th className="text-center py-3">價格</th>
                <th className="text-center py-3">檢視</th>
              </tr>
            </thead>
            <tbody>
              {/* map */}
              {data.map((item, i) => (
                <tr className="tr-hover">
                  <td className="text-center py-3">{data[i].id}</td>
                  <td className="text-center py-3">{data[i].start_time}</td>
                  <td className="text-center py-3">{data[i].end_time}</td>
                  <td className="text-start py-3">
                    {data[i].eating_date} {getEatTimeString(i)}
                  </td>
                  <td className="text-center py-3">{data[i].goal_num}</td>
                  <td className="text-center py-3">{data[i].now_num}</td>
                  <td className="text-center py-3">{data[i].established}</td>
                  <td className="text-center py-3">{data[i].price}</td>
                  <td className="text-center py-3">
                    <a variant="outline-primary" className="group-look py-3">
                      檢視
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
        {/* 開團中 */}
        <Tab
          eventKey="2"
          title="開團中"
          onClick={() => {
            nowOpen()
          }}
        >
          <Table>
            <thead>
              <tr>
                <th className="text-center py-3">團單編號</th>
                <th className="text-center py-3">開團開始</th>
                <th className="text-center py-3">截止時間</th>
                <th className="text-center py-3">用餐時間</th>
                <th className="text-center py-3">成團人數</th>
                <th className="text-center py-3">目前人數</th>
                <th className="text-center py-3">是否成團</th>
                <th className="text-center py-3">價格</th>
                <th className="text-center py-3">檢視</th>
              </tr>
            </thead>
            <tbody>
              {/* map */}
              {data.map((item, i) => (
                <tr className="tr-hover">
                  <td className="text-center py-3">{data[i].id}</td>
                  <td className="text-center py-3">{data[i].start_time}</td>
                  <td className="text-center py-3">{data[i].end_time}</td>
                  <td className="text-start py-3">
                    {data[i].eating_date} {getEatTimeString(i)}
                  </td>
                  <td className="text-center py-3">{data[i].goal_num}</td>
                  <td className="text-center py-3">{data[i].now_num}</td>
                  <td className="text-center py-3">{data[i].established}</td>
                  <td className="text-center py-3">{data[i].price}</td>
                  <td className="text-center py-3">
                    <a variant="outline-primary" className="group-look py-3">
                      檢視
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
        {/* 已成團 */}
        <Tab eventKey="3" title="已成團">
          <Table>
            <thead>
              <tr>
                <th className="text-center py-3">團單編號</th>
                <th className="text-center py-3">開團開始</th>
                <th className="text-center py-3">截止時間</th>
                <th className="text-center py-3">用餐時間</th>
                <th className="text-center py-3">成團人數</th>
                <th className="text-center py-3">目前人數</th>
                <th className="text-center py-3">是否成團</th>
                <th className="text-center py-3">價格</th>
                <th className="text-center py-3">檢視</th>
              </tr>
            </thead>
            <tbody>
              {/* map */}
              {data.map((item, i) => (
                <tr className="tr-hover">
                  <td className="text-center py-3">{data[i].id}</td>
                  <td className="text-center py-3">{data[i].start_time}</td>
                  <td className="text-center py-3">{data[i].end_time}</td>
                  <td className="text-start py-3">
                    {data[i].eating_date} {getEatTimeString(i)}
                  </td>
                  <td className="text-center py-3">{data[i].goal_num}</td>
                  <td className="text-center py-3">{data[i].now_num}</td>
                  <td className="text-center py-3">{data[i].established}</td>
                  <td className="text-center py-3">{data[i].price}</td>
                  <td className="text-center py-3">
                    <a variant="outline-primary" className="group-look py-3">
                      檢視
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
        {/* 未成團 */}
        <Tab eventKey="4" title="未成團">
          <Table>
            <thead>
              <tr>
                <th className="text-center py-3">團單編號</th>
                <th className="text-center py-3">開團開始</th>
                <th className="text-center py-3">截止時間</th>
                <th className="text-center py-3">用餐時間</th>
                <th className="text-center py-3">成團人數</th>
                <th className="text-center py-3">目前人數</th>
                <th className="text-center py-3">是否成團</th>
                <th className="text-center py-3">價格</th>
                <th className="text-center py-3">檢視</th>
              </tr>
            </thead>
            <tbody>
              {/* map */}
              {data.map((item, i) => (
                <tr className="tr-hover">
                  <td className="text-center py-3">{data[i].id}</td>
                  <td className="text-center py-3">{data[i].start_time}</td>
                  <td className="text-center py-3">{data[i].end_time}</td>
                  <td className="text-start py-3">
                    {data[i].eating_date} {getEatTimeString(i)}
                  </td>
                  <td className="text-center py-3">{data[i].goal_num}</td>
                  <td className="text-center py-3">{data[i].now_num}</td>
                  <td className="text-center py-3">{data[i].established}</td>
                  <td className="text-center py-3">{data[i].price}</td>
                  <td className="text-center py-3">
                    <a variant="outline-primary" className="group-look py-3">
                      檢視
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
        {/* 歷史開團 */}
        <Tab eventKey="5" title="歷史開團">
          <Table>
            <thead>
              <tr>
                <th className="text-center py-3">團單編號</th>
                <th className="text-center py-3">開團開始</th>
                <th className="text-center py-3">截止時間</th>
                <th className="text-center py-3">用餐時間</th>
                <th className="text-center py-3">成團人數</th>
                <th className="text-center py-3">目前人數</th>
                <th className="text-center py-3">是否成團</th>
                <th className="text-center py-3">價格</th>
                <th className="text-center py-3">檢視</th>
              </tr>
            </thead>
            <tbody>
              {/* map */}
              {data.map((item, i) => (
                <tr className="tr-hover">
                  <td className="text-center py-3">{data[i].id}</td>
                  <td className="text-center py-3">{data[i].start_time}</td>
                  <td className="text-center py-3">{data[i].end_time}</td>
                  <td className="text-start py-3">
                    {data[i].eating_date} {getEatTimeString(i)}
                  </td>
                  <td className="text-center py-3">{data[i].goal_num}</td>
                  <td className="text-center py-3">{data[i].now_num}</td>
                  <td className="text-center py-3">{data[i].established}</td>
                  <td className="text-center py-3">{data[i].price}</td>
                  <td className="text-center py-3">
                    <a variant="outline-primary" className="group-look py-3">
                      檢視
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </>
  )
}

export default GroupList
