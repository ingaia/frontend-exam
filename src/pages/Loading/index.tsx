import React, { useEffect } from 'react';
import history from '../../services/history';
import { Container, Loader } from './styles';
import loader from '../../assets/loader.svg';

const Loading: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      history.push('/signin');
    }, 5000);
  }, []);
  return (
    <Container>
      <Loader src={loader} alt="loader" />
    </Container>
  );
};
export default Loading;
