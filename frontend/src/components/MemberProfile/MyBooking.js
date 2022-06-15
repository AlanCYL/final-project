import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import '../../styles/_myBooking.scss';


const MyBooking = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <Tabs
            id="controlled-tab-example"
            defaultActiveKey="all"
            className="mb-3 h5 tabMenu"
          >
            <Tab eventKey="all" title="全部開團">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              itaque officiis earum fugiat. Pariatur dolorem perferendis ducimus
              ipsum porro, eum, quae sed laborum libero voluptas animi quibusdam
              dolore consequatur. Quisquam. Expedita eius repellendus quia
              voluptatem itaque eveniet ea? Sit impedit cum rerum animi
              temporibus porro doloribus voluptas molestias at laboriosam
              soluta, perspiciatis aut illo similique sed quos facere obcaecati
              dolore? Beatae accusantium dolor consequatur voluptate, quam iure
              blanditiis asperiores sint perferendis pariatur sed, magnam
              voluptatibus facere porro animi aspernatur eligendi odit illo
              reiciendis. Tempora, error nobis velit officiis perferendis
              adipisci.
            </Tab>
            <Tab eventKey="established" title="已成團">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              itaque officiis earum fugiat. Pariatur dolorem perferendis ducimus
              ipsum porro, eum, quae sed laborum libero voluptas animi quibusdam
              dolore consequatur. Quisquam. Expedita eius repellendus quia
              voluptatem itaque eveniet ea? Sit impedit cum rerum animi
              temporibus porro doloribus voluptas molestias at laboriosam
              soluta, perspiciatis aut illo similique sed quos facere obcaecati
              dolore? Beatae accusantium dolor consequatur voluptate, quam iure
              blanditiis asperiores sint perferendis pariatur sed, magnam
              voluptatibus facere porro animi aspernatur eligendi odit illo
              reiciendis. Tempora, error nobis velit officiis perferendis
              adipisci.
            </Tab>
            <Tab eventKey="notEstablished" title="未成團">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              itaque officiis earum fugiat. Pariatur dolorem perferendis ducimus
              ipsum porro, eum, quae sed laborum libero voluptas animi quibusdam
              dolore consequatur. Quisquam. Expedita eius repellendus quia
              voluptatem itaque eveniet ea? Sit impedit cum rerum animi
              temporibus porro doloribus voluptas molestias at laboriosam
              soluta, perspiciatis aut illo similique sed quos facere obcaecati
              dolore? Beatae accusantium dolor consequatur voluptate, quam iure
              blanditiis asperiores sint perferendis pariatur sed, magnam
              voluptatibus facere porro animi aspernatur eligendi odit illo
              reiciendis. Tempora, error nobis velit officiis perferendis
              adipisci.
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default MyBooking
