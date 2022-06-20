import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Opengroup from './Opengroup'
import GroupList from './GroupList'
import DishList from './DishList'
import ShopProfile from './ShopProfile'
import OpenDish from './OpenDish'
import { useState } from 'react'

const BackstageNav = (props) => {
  console.log(props)
  const [selectedKey, setSelectedKey] = useState('third')
  function handleGroupProps(key) {
    window.scrollTo(0, 0)
    setSelectedKey(key)
  }
  return (
    <>
      <div className="w-100 h-100">
        <Tab.Container id="left-tabs-example" activeKey={selectedKey}>
          <Row>
            <Col sm={3} className="bg-secondary py-3 pe-0">
              <Nav variant="pills" className="flex-column">
                <h4 className="text-center my-4">鼎泰豐後台管理</h4>
                <Nav.Item>
                  <Nav.Link
                    eventKey="first"
                    className="text-center py-4"
                    onClick={() => handleGroupProps('first')}
                  >
                    基本資料
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="second"
                    className="text-center py-4"
                    onClick={() => handleGroupProps('second')}
                  >
                    我要開團
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="third"
                    className="text-center py-4"
                    onClick={() => handleGroupProps('third')}
                  >
                    歷史開團
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="forth"
                    className="text-center py-4"
                    onClick={() => handleGroupProps('forth')}
                  >
                    上架菜色
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="fifth"
                    className="text-center py-4"
                    onClick={() => handleGroupProps('fifth')}
                  >
                    菜色清單
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={7} className="mx-auto my-5">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <ShopProfile />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Opengroup groupProps={handleGroupProps} />
                </Tab.Pane>
                <Tab.Pane
                  eventKey="third"
                  style={{ marginLeft: '-50px', marginRight: '-50px' }}
                >
                  <GroupList />
                </Tab.Pane>
                <Tab.Pane eventKey="forth">
                  <OpenDish />
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <DishList />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  )
}

export default BackstageNav
