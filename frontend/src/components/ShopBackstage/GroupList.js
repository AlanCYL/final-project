import Nav from 'react-bootstrap/Nav'
import Table from 'react-bootstrap/Table'
import { API_URL } from '../../utils/config'
import { useEffect, useState } from 'react'

function GroupList() {
  const shopID = localStorage.getItem('shopID')
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`${API_URL}/shopbackstage/grouplist?shopID=${shopID}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        /*接到response data後要做的事情*/
        // console.log(res.result[0])
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
  return (
    <>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="link-1">全部開團</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">開團中</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">未成團</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">已成團</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-5">歷史清單</Nav.Link>
        </Nav.Item>
      </Nav>
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
    </>
  )
}

export default GroupList
