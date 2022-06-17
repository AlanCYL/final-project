import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Opengroup from './Opengroup'
import ShopProfile from './ShopProfile'

const BackstageNav = () => {
  return (
    <>
      <div className="w-100">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3} className="bg-secondary py-3 pe-0">
              <Nav variant="pills" className="flex-column">
                <h4 className="text-center my-4">鼎泰豐後台管理</h4>
                <Nav.Item>
                  <Nav.Link eventKey="first" className="text-center py-4">
                    基本資料
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" className="text-center py-4">
                    我要開團
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" className="text-center py-4">
                    歷史開團
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="forth" className="text-center py-4">
                    上架菜色
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth" className="text-center py-4">
                    店家評價
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={6} className="mx-auto my-5">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <ShopProfile />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Opengroup />
                </Tab.Pane>
                <Tab.Pane eventKey="third">{/* <Sonnet /> */}</Tab.Pane>
                <Tab.Pane eventKey="forth">{/* <Sonnet /> */}</Tab.Pane>
                <Tab.Pane eventKey="fifth">{/* <Sonnet /> */}</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  )
}

export default BackstageNav
