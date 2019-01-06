import React from 'react';
import CircleLink from 'components/CircleLink';

import './style.scss';
import FavHome from 'assets/svgs/connect-home.svg';
import FavUser from 'assets/svgs/connect-user.svg';
import FavNbn from 'assets/svgs/connect-nbn.png';
import FavEnjoy from 'assets/svgs/connect-enjoy.svg';

import Data from './DATA';

const favIconList = [FavHome, FavUser, FavNbn, FavEnjoy];

const EasyConnection = () => {
  return (
    <div className="easy-connection">
      <div className="easy-connection__left-section">
        <div className="easy-connection__left-section-top">
          <div className="description-curveline">
            <svg
              viewBox="0 0 160 110"
              style={{ maxHeight: 110, maxWidth: 160 }}
            >
              <path
                d={`
                  M 50,100
                  S 85,55,150,70
                `}
                fill="none"
                stroke="#fff"
                strokeDasharray="4,4"
                strokeWidth={1}
              />
              <circle cx="50" cy="100" r="4" />
              <circle cx="150" cy="70" r="4" />
            </svg>
          </div>
          <div className="section-description">
            <div className="section-description__title">
              {Data.desc[0].title}
            </div>
            <div className="section-description__content">
              {Data.desc[0].content}
            </div>
          </div>
        </div>
        <div className="easy-connection__left-section-down">
          <div className="description-curveline" />
          <div className="section-description">
            <div className="section-description__title">
              {Data.desc[1].title}
            </div>
            <div className="section-description__content">
              {Data.desc[1].content}
            </div>
          </div>
        </div>
      </div>
      <CircleLink ImgPaths={favIconList} />
      <div className="easy-connection__right-section">
        <div className="easy-connection__right-section-top">
          <div className="description-curveline" />
          <div className="section-description">
            <div className="section-description__title">
              {Data.desc[2].title}
            </div>
            <div className="section-description__content">
              {Data.desc[2].content}
            </div>
          </div>
        </div>
        <div className="easy-connection__right-section-down">
          <div className="description-curveline" />
          <div className="section-description">
            <div className="section-description__title">
              {Data.desc[3].title}
            </div>
            <div className="section-description__content">
              {Data.desc[3].content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyConnection;
