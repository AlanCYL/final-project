import fliterpic from '../../image/groups/fliterpic.png'
import Card from './Card'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL, IMAGE_URL } from '../../utils/config'
import Pagination from 'react-bootstrap/Pagination'
import { Link } from 'react-router-dom'
import dateCountdown from 'date-countdown'

function GroupPages() {
  const cate = [
    '中式',
    '台式',
    '港澳',
    '日式',
    '韓式',
    '泰式',
    '美式',
    '法式',
    '燒烤',
    '火鍋',
    '甜點',
    '吃到飽',
    '咖啡廳',
  ]
  const [groups, setGroups] = useState([])
  //目前第幾頁
  const [page, setPage] = useState(1)
  //總筆數
  const [lastPage, setLastPage] = useState(1)
  //資料
  useEffect(() => {
    let getGroup = async () => {
      let response = await axios.get(`${API_URL}/group`, {
        params: { page: page },
      })
      setGroups(response.data.data)
      setLastPage(response.data.pagination.lastPage)
    }
    getGroup()
  }, [page])

  const getPages = () => {
    let pages = []
    for (let i = 1; i <= lastPage; i++) {
      pages.push(
        <Pagination.Item
          key={i}
          active={i === page}
          onClick={(e) => {
            setPage(i)
          }}
        >
          {i}
        </Pagination.Item>
      )
    }
    return pages
  }

  return (
    <>
      {/* 圖片 */}
      <div className="container-fluid bg-secondary group-fliter">
        <div className="row filter-all">
          <div className="col-6 d-none d-md-block ">
            <div className=" pic ps-3 ms-3 ">
              <img className="img-fluid mt-5 ms-5" src={fliterpic} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* 商品頁 */}
      <div className="mt-5 ">
        <div className="container d-flex mt-6 justify-content-center flex-wrap">
          {groups.map((v, i) => {
            console.log('目標人數', v.goal_num)
            console.log('現在人數', Math.round((v.now_num / v.goal_num) * 100))
            let percent = Math.round((v.now_num / v.goal_num) * 100)
            console.log(percent)

            return (
              <div key={v.id} className="ms-5 mt-6">
                <Link to={`/groupDetail/${v.id}`}>
                  <div className="little-card shadow-sm bg-white rounded main-hover">
                    <img
                      className="w-100 h-50 rounded-top"
                      src={`${IMAGE_URL}${v.img}`}
                      alt=""
                    />
                    <div className="p-3">
                      <div className="d-flex justify-content-between">
                        <h4>{v.name}</h4>
                        {v.type_name.split(',').map((v, i) => {
                          return (
                            <span className="badge rounded-pill bg-primary">
                              {v}
                            </span>
                          )
                        })}
                      </div>
                      <h6 className="fw-normal">目前人數:{v.now_num}</h6>
                      <h6 className="fw-normal mb-4">
                        用餐時間:{v.eating_date}
                      </h6>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped"
                          role="progressbar"
                          style={{ width: `${percent}%` }}
                          aria-valuenow="10"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="progress-text mt-1">
                          截止:{v.eating_date}
                        </p>
                        <p className="progress-text mt-1">
                          目標人數:{v.goal_num}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      {/* 頁數 */}
      <div className="mt-6 d-flex justify-content-center">
        <Pagination className="mx-auto mt-4 ps-6 mb-4">{getPages()}</Pagination>
      </div>
    </>
  )
}
export default GroupPages
