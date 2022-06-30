import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Nowgroups from './Nowgroups'
import Historygroups from './Historygroups'
import { useState, useEffect } from 'react'
import { API_URL, IMAGE_URL } from '../../utils/config'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ShopListDetailPage(props) {
  console.log(props.data[0])

  const [data, setData] = useState([])
  const { shopId } = useParams()

  useEffect(() => {
    let getDetail = async () => {
      let response = await axios.get(`${API_URL}/shoplist/group/${shopId}`)
      setData(response.data)
    }
    getDetail()
  }, [])
  return (
    <>
      <div className="container">
        <div className="row">
          <Tabs
            id="controlled-tab-example"
            defaultActiveKey="now"
            className="mb-3 h5"
          >
            <Tab eventKey="now" title="現正開團">
              <Nowgroups />
            </Tab>
            <Tab eventKey="history" title="歷史開團">
              <Historygroups />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default ShopListDetailPage
