import Table from 'react-bootstrap/Table'
import { API_URL } from '../../utils/config'
import { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import axios from 'axios'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function GroupList() {
  const shopID = localStorage.getItem('shopID')
  const { cart, setCart } = useShoppingCartContext()
  const [data, setData] = useState([])
  const [key, setKey] = useState(1)
  const [editId, setEditId] = useState(0)

  //一開始的渲染
  useEffect(() => {
    fetch(`${API_URL}/shopbackstage/grouplist?shopID=${shopID}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.result)
        setData(res.result)
      })
      .catch((e) => {
        /*發生錯誤時要做的事情*/
        console.log(e)
      })
  }, [cart])

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
    // console.log('useEffect on key', key)
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
      {/* 編輯 */}
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>店家名稱</Form.Label>
          <div
            class="border border-dark"
            style={{ height: '40px', paddingLeft: '10px', paddingTop: '5px' }}
          >
            {/* {data ? data[0].name : ''} */}
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="start">
          <Form.Label>開團開始時間</Form.Label>
          <Form.Control
            type="date"
            // value={group.startTime}
            // onChange={(e) => setGroup({ ...group, startTime: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="end">
          <Form.Label>截止時間</Form.Label>
          <Form.Control
            type="date"
            // value={group.endTime}
            // onChange={(e) => setGroup({ ...group, endTime: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="time">
          <Form.Label>用餐時間</Form.Label>
          <div className="d-flex">
            <Form.Control
              type="date"
              // value={group.eatingDate}
              // onChange={(e) =>
              //   setGroup({ ...group, eatingDate: e.target.value })
              // }
            />

            <Form.Select
              aria-label="Default select example"
              // value={group.eatingTime}
              // onChange={(e) =>
              //   setGroup({ ...group, eatingTime: e.target.value })
              // }
            >
              <option>請選擇用餐時段</option>
              <option value="1">午餐 12:00</option>
              <option value="2">下午茶 15:00</option>
              <option value="3">晚餐 18:00</option>
            </Form.Select>
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="amount">
          <Form.Label>成團人數</Form.Label>
          <Form.Control
            type="number"
            // value={group.goalNum}
            // onChange={(e) => setGroup({ ...group, goalNum: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>價格</Form.Label>
          <Form.Control
            type="text"
            placeholder="請輸入價格"
            // value={group.price}
            // onChange={(e) => setGroup({ ...group, price: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="dish">
          <Form.Label>選擇菜色：</Form.Label>
          {/* map動態產生 */}
          {/* {checkList.map((item, i) => (
            <InputGroup className="mb-3 bg-secondary" key={i}>
              <InputGroup.Checkbox
                aria-label="Checkbox for following text input"
                onChange={(e) => {
                  checkValue(e)
                }}
                value={i}
              />
              <h6 className="mt-2 ms-3">{item.name}</h6>
            </InputGroup>
          ))} */}
        </Form.Group>
        <div className="d-flex justify-content-end ">
          <Button
            type="submit"
            variant="primary"
            className="w-25 mt-4"
            style={{ height: '40px' }}
            // onClick={
            //   handleSubmit
            //   // props.groupProps('third')
            // }
          >
            <h5>送出</h5>
          </Button>
        </div>
      </Form>
      {/* 編輯 */}

      {/* 我是歷史開團 */}
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
            // console.log('allOpen')
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
                    <button
                      variant="outline-primary"
                      className="group-look py-3"
                      value={data[i].id}
                      onClick={(e) => {
                        console.log('我', e.target.value)
                        debugger
                        setEditId(e.target.value)
                      }}
                    >
                      檢視
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
      {/* 我是歷史開團 */}
    </>
  )
}

export default GroupList
