import Card from 'react-bootstrap/Card'
import { BsFillTrashFill } from 'react-icons/bs'

const DishList = () => {
  return (
    <>
      <div className="d-flex flex-wrap">
        <Card style={{ width: '14rem' }} className="mx-2 my-4 ">
          <Card.Img
            variant="top"
            src={require('../../image/shopBackstage/dish/bow.png')}
          />

          <Card.Body>
            <Card.Title>小籠包</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <BsFillTrashFill className="icon-hover icon-ms" />
          </Card.Body>
        </Card>
        <Card style={{ width: '14rem' }} className="mx-2 my-4">
          <Card.Img
            variant="top"
            src={require('../../image/shopBackstage/dish/rice.png')}
          />
          <Card.Body>
            <Card.Title>炒飯</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <BsFillTrashFill className="icon-hover icon-ms" />
          </Card.Body>
        </Card>
        <Card style={{ width: '14rem' }} className="mx-2 my-4">
          <Card.Img
            variant="top"
            src={require('../../image/shopBackstage/dish/soup.png')}
          />
          <Card.Body>
            <Card.Title>酸辣湯</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <BsFillTrashFill className="icon-hover icon-ms" />
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default DishList
