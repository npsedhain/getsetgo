/**
 * The main product page.
 */
import React from 'react';
import { Link } from 'react-router-dom';

class PageHeader extends React.Component {
  render() {
    return (
      <div className='page-header header-filter flex'>
        <div className='welcome-message'>Ⓦⓔⓛⓒⓞⓜⓔ ⓣⓞ ⓣⓗⓔ ⓕⓤⓣⓤⓡⓔ!⃝</div>
        <Link to='/register'>
          <div className='arrow-animate'>
            <img src='/assets/img/hand.png' />
            Start here!
          </div>
        </Link>
        <div className='squares square1' />
        <div className='squares square2' />
        <div className='squares square3' />
        <div className='squares square4' />
        <div className='squares square5' />
        <div className='squares square6' />
        <div className='squares square7' />
      </div>
    );
  }
}

export default PageHeader;
