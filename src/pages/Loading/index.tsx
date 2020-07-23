import React, { useEffect, useState } from 'react';
import history from '../../services/history';
import { Container, Loader } from './styles';
import loader from '../../assets/loader.svg';
import loader_1 from '../../assets/loader-1.svg';
import loader_2 from '../../assets/loader-2.svg';
import loader_3 from '../../assets/loader-3.svg';

const Loading: React.FC = () => {
  const [logo, setLogo] = useState(loader);

  useEffect(() => {
    setTimeout(() => {
      setLogo(loader_1);
      setTimeout(() => {
        setLogo(loader_2)
        setTimeout(() => {
          setLogo(loader_3)
          setTimeout(() => {
            history.push('/signin');
          }, 1500);
        }, 1500);
      }, 1500);
    }, 1500);


  }, []);

  return (
    <Container>
      <Loader src={logo} alt="loader" />
    </Container>
  );
};
export default Loading;
