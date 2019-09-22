import React, {Fragment, useState} from "react";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {withRouter} from "react-router-dom";

const videoList = [
  'cCXgQ7-Y9ps',
  '2T_DG1xnVPg',
  'aIbPBnvGSnc',
  '7T91vrI8hGA',
  '1ke3zayKKm8',
  'jd8YQ8pu908',
  'mS7O2V0xLqA',
  '_RDeZGEOSV8',
]
const Library = ({history}) => {


  const [show, setShow] = useState(false)
  const [videoId, setVideoId] = useState('aIbPBnvGSnc')
  const [limit, setLimit] = useState(5)
  return (
    <Container className='library'>
      <VideoModal show={show} id={videoId} onHide={() => setShow(false)}/>
      <Row>
        <Col sm='12' lg='4' className='library-menu'>
          <img className='library-logo' src='./assets/logo_dark.png' alt='witcher logo'/>
          <Button>Trailer</Button>
          <Button onClick={() => history.push('/')}>Logout</Button>
        </Col>
        <Col className='video-library' sm='12' lg='8'>
          <VideoLibrary setShow={setShow} setVideo={setVideoId} limit={limit} setLimit={setLimit}/>
        </Col>
      </Row>
    </Container>
  )
}

const VideoLibrary = ({setShow, setVideo, limit, setLimit}) => {
  const onClick = (id) => () => {
    setShow(true)
    setVideo(id)
  }
  return (<Fragment>
    {videoList.slice(0, limit).map(i => <img src={`http://i3.ytimg.com/vi/${i}/hqdefault.jpg`} alt='a'
                                             onClick={onClick(i)}/>)}
    {(limit <= videoList.length) && <Button onClick={() => setLimit(limit + 5)}>Load More</Button>}
  </Fragment>)
}

const VideoModal = ({id, show, onHide}) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Body>
        <iframe width='100%' src={`https://www.youtube.com/embed/${id}`} frameBorder="0" title='youtube video'
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
      </Modal.Body>
    </Modal>)
}

export default withRouter(Library);
