import Nav from 'react-bootstrap/Nav'
import Table from 'react-bootstrap/Table'

function GroupList() {
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
          <tr className="tr-hover">
            <td className="text-center py-3">12345</td>
            <td className="text-center py-3">2022/06/17</td>
            <td className="text-center py-3">2022/06/19</td>
            <td className="text-center py-3">2022/06/20 18:00</td>
            <td className="text-center py-3">5</td>
            <td className="text-center py-3">2</td>
            <td className="text-center py-3">是</td>
            <td className="text-center py-3">200</td>
            <td className="text-center py-3">
              <a variant="outline-primary" className="group-look py-3">
                檢視
              </a>
            </td>
          </tr>
          <tr className="tr-hover">
            <td className="text-center py-3">12345</td>
            <td className="text-center py-3">2022/06/17</td>
            <td className="text-center py-3">2022/06/19</td>
            <td className="text-center py-3">2022/06/20 18:00</td>
            <td className="text-center py-3">5</td>
            <td className="text-center py-3">2</td>
            <td className="text-center py-3">是</td>
            <td className="text-center py-3">200</td>
            <td className="text-center py-3">
              <a variant="outline-primary" className="group-look py-3">
                檢視
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default GroupList
