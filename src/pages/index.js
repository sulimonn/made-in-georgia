import React from 'react';
import Promotion from './promotion';
import Loyalty from './Loyalty';

// mui
import { Box } from '@mui/material';

import Panoram from 'assets/images/панорама.jpg';
import Menu from './menu';
import Delivery from './Delivery/index';
import Intro from './Intro';
import { useGetPostsQuery } from 'store/reducers/api';
import Loader from 'components/Loader';

const Pages = () => {
  const { data = {} } = useGetPostsQuery();
  if (!data.all_food) {
    return <Loader />;
  }

  return (
    <>
      <Intro />
      {data?.promo && <Promotion promo={data?.promo} />}
      <Loyalty loyalty={data?.loyalty} />
      <Box py={{ xs: 3, sm: 10 }}>
        <img
          src={Panoram}
          alt="panoram"
          style={{ width: '100%', objectFit: 'contain', opacity: 0.7 }}
          loading="lazy"
        />
      </Box>
      <Menu menu={data?.all_food} />
      <Delivery />
    </>
  );
};

export default Pages;
