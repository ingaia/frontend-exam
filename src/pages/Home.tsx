import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import playlistActions  from '../store/ducks/playlist/actions';
import authActions      from '../store/ducks/auth/actions';
import CircularProgress from '../components/CircularProgress';
import { DataProps }    from '../store/ducks/playlist/types'

import { typedUseSelector } from '../store';

import Grid from '@material-ui/core/Grid';

import Layout from '../components/Layout';
import Button from '../components/Button';
import VideoCard from '../components/VideoCard';
import * as S from '../styles/Home';

const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const state = typedUseSelector((state) => state.playlist);
  const authState = typedUseSelector((state) => state.auth);

  useEffect(() => {
    dispatch(playlistActions.playlistRequest());
  }, []);

  useEffect(() => {
    if (!authState.isLogged) {
      history.push('/login');
    }
  }, [authState.isLogged]);

  const handleLoadMore = () => {
    dispatch(playlistActions.playlistRequest(state.nextPageToken));
  };

  const handleLogout = () => {
    dispatch(authActions.logoutRequest());
  };

  return (
    <Layout>
      <S.ContainerWrapper disableGutters maxWidth={false}>
        <Grid container justify='center' alignItems='center' className='bg-opacity'>
          <Grid item xs={12} md={4}>
            <Grid container spacing={1} justify='center'>
              <Grid item xs={12} md={10}>
                <S.Logo
                  src='/assets/logo_dark.png'
                  alt='logo'
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <S.Title>
                  Trailers
                </S.Title>
              </Grid>
              <Grid item xs={12} md={8}>
                <Button fullWidth noborders onClick={handleLogout}>
                  Logout
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            <S.VideosContainer container justify='center'>
              <Grid item xs={12} md={10}>
                <S.VideosContainer2 container spacing={4} justify='center'>
                  {state.data.map(({ id, snippet }: DataProps, index: number) => {
                    const { title, thumbnails: { medium }, resourceId } = snippet;
                    return (
                      <VideoCard
                        index={index}
                        id={id}
                        title={title}
                        videoId={resourceId.videoId}
                        cover={medium.url}
                      />
                    )
                  })}
                  <Grid item xs={12} md={6} style={{ alignSelf: 'center' }}>
                    <Grid container justify='center'>
                      <Grid item xs={10} md={8} style={{ textAlign: 'center' }}>
                        {state.loading
                          ? <CircularProgress />
                          : <Button fullWidth onClick={handleLoadMore}>
                              Load More
                            </Button>
                        }
                      </Grid>
                    </Grid>
                  </Grid>
                </S.VideosContainer2>
              </Grid>
            </S.VideosContainer>
          </Grid>
        </Grid>
      </S.ContainerWrapper>
    </Layout>
  );
};

export default Login;


