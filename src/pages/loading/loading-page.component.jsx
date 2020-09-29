import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { ReactComponent as WitcherLoad } from '../../assets/images/loader.svg';

import LoadingContainer from './loading-page.styles';

const LoadingPage = ({ userAuth }) => {
  const [loadingStage, updateLoadingStage] = useState(0);
  const history = useHistory();

  const loadingClassNames = classNames({
    'first-stage': loadingStage === 1,
    'second-stage': loadingStage === 2,
    'third-stage': loadingStage === 3,
  });

  useEffect(() => {
    if (loadingStage < 3) {
      setTimeout(() => {
        updateLoadingStage(loadingStage + 1);
      }, 800);
    } else {
      setTimeout(() => {
        userAuth ? history.push('/dashboard') : history.push('/login');
      }, 800);
    }
  }, [loadingStage]);

  return (
    <LoadingContainer>
      <WitcherLoad className={loadingClassNames} />
    </LoadingContainer>
  );
};

LoadingPage.defaultProps = {
  userAuth: false,
};

LoadingPage.propTypes = {
  userAuth: PropTypes.bool,
};

export default LoadingPage;
