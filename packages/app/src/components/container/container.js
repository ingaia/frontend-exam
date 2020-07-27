/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { memo, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import { useTheme, Nav, NavItem, Button } from '@witcher-page/ui';
import modalConfig from '../../utils/modal-config';

Modal.setAppElement('#root');

const Container = memo(({location, children, decorate}) => {
  const theme = useTheme();
  const history = useHistory();
  const modalCustomStyles = modalConfig(theme);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const logoutFn = (e) => {
    e.preventDefault();
    localStorage.removeItem('loggedIn');
    history.push('/');
  };

  const container = css`
    display: grid;
    width: 100vw;
    min-height: 100vh;
    background-color: ${theme.container.bgColor};
    background-image: url('${theme.assetsPath}/background_414.webp');
    background-position: center top;
    background-size: 100% auto;
    background-repeat: no-repeat;
    grid-template-rows: 210px auto;
    grid-template-columns: 100%;
    @media screen and (min-width: 448px) {
      background-image: url('${theme.assetsPath}/background_780.webp');
      grid-template-rows: 115px auto;
    }
    @media screen and (min-width: 780px) {
      background-image: url('${theme.assetsPath}/background_1280.webp');
    }
    @media screen and (min-width: 870px) {
      height: 100vh;
      grid-template-columns: 400px auto;
      grid-template-rows: auto;
    }
    @media screen and (min-width: 1280px) {
      background-image: url('${theme.assetsPath}/background_1920.webp');
    }
    @media screen and (min-width: 1365px) {
      grid-template-columns: 495px auto;
    }
  `;

  const masthead = css`
    border-bottom: 1px solid ${theme.masthead.borderColor};
    text-align: center;
    @media screen and (min-width: 448px) {
      display: grid;
      grid-template-areas: '. .';
      align-items: center;
      text-align: left;
    }
    @media screen and (min-width: 870px) {
      display: block;
      border-bottom: 0;
      border-right: 1px solid ${theme.masthead.borderColor};
      text-align: center;
    }
  `;

  const main = css`
    background: linear-gradient(180deg, ${theme.gradient.start} 0%, ${theme.gradient.end} 8%);
    padding: 20px;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      background-color: #1D1A1A;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #A99E7E;
      border-radius: 5px;
    }
    @media screen and (min-width: 870px) {
      background: linear-gradient(90deg, ${theme.gradient.start} 0%, ${theme.gradient.end} 98.3%);
      overflow: auto;
    }
  `;

  const logo = css`
    margin: 40px 0 20px;
    width: 161px;
    height: 80px;
    @media screen and (min-width: 448px) {
      margin: 20px;
    }
    @media screen and (min-width: 870px) {
      margin: 100px 0;
      width: 276px;
      height: 137px;
    }
  `;

  const buttonSizeStyle = css`
    width: 98px;
  `;

  const modalBodyStyle = css`
    text-align: center;
    p {
      font-size: 24px;
      margin: 0 0 1.5rem;
    }
  `;

  return (
    <Fragment>
      <div css={container}>
        <header css={masthead}>
          <strong>
            <img
              src={`${theme.assetsPath}/logo.png`}
              srcSet={`${theme.assetsPath}/logo_2x.png 2x, ${theme.assetsPath}/logo_sm.png 870w`}
              alt="The Witcher - Wild Hunt"
              width="276"
              height="137"
              css={logo}
            />
          </strong>

          <Nav decorate={decorate}>
            <NavItem as={Link} href="/" to="/" active={location.pathname === '/'}>
              Trailers
            </NavItem>
            <NavItem as={Link} href="/options" to="/options" active={location.pathname === '/options'}>
              Options
            </NavItem>
            <NavItem onClick={openModal} href="/">
              Logout
            </NavItem>
          </Nav>
        </header>
        <main css={main}>
          {children}
        </main>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Logout"
        style={modalCustomStyles}
        shouldCloseOnOverlayClick={false}
      >
        <div css={modalBodyStyle}>
          <p>Do you really wish to log out?</p>

          <Button kind="active" css={buttonSizeStyle} onClick={logoutFn} decorate={decorate}>Yes</Button>
          {' '}
          <Button css={buttonSizeStyle} onClick={closeModal} decorate={decorate}>No</Button>
        </div>
      </Modal>
    </Fragment>
  );
});

const mapState = state => ({ decorate: state.decorate });
const ConnectedContainer = withRouter(connect(mapState)(Container));

export default ConnectedContainer;
