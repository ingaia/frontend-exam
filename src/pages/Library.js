import React, {Fragment, useState} from "react";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {withRouter} from "react-router-dom";

const videoList = [
  {
    id: 'cCXgQ7-Y9ps',
    text: "asdf"
  },
  {
    id: '2T_DG1xnVPg',
    text: "asdf"
  },
  {
    id: 'aIbPBnvGSnc',
    text: "asdf"
  },
  {
    id: '7T91vrI8hGA',
    text: "asdf"
  },
  {
    id: '1ke3zayKKm8',
    text: "asdf"
  },
  {
    id: 'jd8YQ8pu908',
    text: "asdf"
  },
  {
    id: 'mS7O2V0xLqA',
    text: "asdf"
  },
  {
    id: '_RDeZGEOSV8',
    text: "asdf"
  },
]

const Library = ({history}) => {
  const [show, setShow] = useState(false)
  const [videoId, setVideoId] = useState('aIbPBnvGSnc')
  const [limit, setLimit] = useState(5)
  return (
    <Fragment>
      <VideoModal show={show} id={videoId} onHide={() => setShow(false)}/>
      <Container fluid={true} className='library'>
        <Row>
          <Col sm='12' md='4'>
            <div className='library-menu'>
              <img className='library-logo' src='./assets/logo_dark.png' alt='witcher logo'/>
              <Button>Trailer</Button>
              <Button onClick={() => history.push('/')}>Logout</Button>
            </div>
          </Col>
          <Col className='video-library' md='8'>
            <VideoLibrary setShow={setShow} setVideo={setVideoId} limit={limit} setLimit={setLimit}/>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

const VideoLibrary = ({setShow, setVideo, limit, setLimit}) => {
  const onClick = (id) => () => {
    setShow(true)
    setVideo(id)
  }
  return (
    <div className='flex-container'>
    {videoList.slice(0, limit).map(i => {
      return(
        <div className='flex-item' key={i.id}>
          <img src={`http://i3.ytimg.com/vi/${i.id}/0.jpg`} alt='a'
           onClick={onClick(i.id)}/>
           <span className='img-text'>{i.text}</span>
        </div>
      )
    })}
    {(limit <= videoList.length) &&
    <div className='flex-item'>
      <Button className='load-btn' onClick={() => setLimit(limit + 5)}>Load More</Button>
    </div>
    }
  </div>)
}

const VideoModal = ({id, show, onHide}) => {
  return (
    <Modal show={show} onHide={onHide} size='lg'>
      <Modal.Body>
        <iframe height='500px' width='100%' src={`https://www.youtube.com/embed/${id}`} frameBorder="0" title='youtube video'
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
      </Modal.Body>
    </Modal>)
}

export default withRouter(Library);
