// Tools
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Assets
import WitcherLogo from '../../assets/images/logo_dark.png';

// Styled Components
import {
  MainContainer,
  MenuContainer,
  Menu,
  ButtonsContainer,
  PlaylistContainer,
}
  from './dashboard.styles';

// Actions
import { logOut } from '../../redux/user/user.actions';
// Components
import PlaylistOverview from '../../components/playlist-overview/playlist-overview.component';
import CustomButton from '../../components/custom-button/custom-button.component';

const Dashboard = ({ logOut }) => {

  const handleClick = () => {
    logOut();
  };

  return (
    <MainContainer>
      <MenuContainer>
        <Menu>
          <img src={WitcherLogo} alt="Witcher Light Logo" />
          <ButtonsContainer>
            <CustomButton type="button">TRAILERS</CustomButton>
            <CustomButton clickAction={handleClick} isLogOut type="button">LOGOUT</CustomButton>
          </ButtonsContainer>
        </Menu>
      </MenuContainer>
      <PlaylistContainer>
        <PlaylistOverview />
      </PlaylistContainer>
    </MainContainer>
  );
};

Dashboard.defaultProps = {
  logOut: null,
};

Dashboard.propTypes = {
  logOut: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut()),
});

export default connect(null, mapDispatchToProps)(Dashboard);
