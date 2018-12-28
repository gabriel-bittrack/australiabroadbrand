import React from 'react';
import CircleLink from '../../../components/CircleLink';

import './style.scss';
import FavHome from '../../../assets/svgs/connect-home.svg';
import FavUser from '../../../assets/svgs/connect-user.svg';
import FavNbn from '../../../assets/svgs/connect-nbn.png';
import FavEnjoy from '../../../assets/svgs/connect-enjoy.svg';

const favIconList = [FavHome, FavUser, FavNbn, FavEnjoy];

const EasyConnection = () => (
  <div className="easy-connection">
    <CircleLink ImgPaths={favIconList} />
  </div>
);

export default EasyConnection;
