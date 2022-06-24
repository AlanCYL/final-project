import Header from '../../Header/Header'
import Side from '../Side'
import { API_URL, IMAGE_URL } from '../../../utils/config'
import { useEffect, useState } from 'react'

const ReserveList = (props) => {
  // console.log(props)
  // const { userID } = props

  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`${API_URL}/shoppingcart/reservelist?userID=${props.userID}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        /*接到response data後要做的事情*/
        //console.log(res.result[0])
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

  const [list, setList] = useState([])
  function checkValue(e) {
    let currentVal = e.target.value
    const copyList = JSON.parse(JSON.stringify(list))
    let index = copyList.indexOf(currentVal)
    if (index !== -1) {
      copyList.splice(index, 1)
    } else {
      copyList.push(currentVal)
    }
    setList(copyList)
    props.setGroupsFunc(copyList)
  }

  return (
    <>
      <div className=" container my-6">
        <Header />
        <div className="d-flex">
          <Side />
          <div>
            <div className="w-75 ms-8 ">
              <img
                className="w-75 pb-5 ms-6"
                src={require('../../../image/shoppingCart/icongroup01.png')}
                alt=""
              />
            </div>
            {/* List */}
            <div className="list w-100">
              <div class="show active" id="nav-home">
                <table class="table">
                  <thead class="">
                    <tr>
                      <th></th>
                      <th>開團店家</th>
                      <th>參團時間</th>
                      <th>現在人數</th>
                      <th>目標人數</th>
                      <th>價格</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* map */}
                    {data.map((item, i) => (
                      <tr className="tr-hover" key={i}>
                        <td className="py-5">
                          <input
                            type="checkbox"
                            value={data[i].group_id}
                            onClick={(e) => {
                              checkValue(e)
                            }}
                          />
                        </td>
                        <td style={{ paddingTop: '14px' }}>
                          <img
                            style={{ width: '100px', height: '100px' }}
                            className="logo py-4 img-fluid"
                            src={`${IMAGE_URL}${item.img}`}
                            alt=""
                          />
                        </td>
                        <td className="py-5">
                          {data[i].eating_date} {getEatTimeString(i)}
                        </td>
                        <td className="py-5">{data[i].now_num}</td>
                        <td className="py-5">{data[i].goal_num}</td>
                        <td className="py-5">${data[i].price}</td>
                        <td className="py-5">
                          <img
                            className="delete"
                            src={require('../../../image/shoppingCart/delete.png')}
                            alt=""
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* button */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReserveList
