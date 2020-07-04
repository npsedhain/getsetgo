/**
 * The register page.
 */
import React, { useState, useEffect } from 'react';

import RegisterForm from './RegisterForm';

const initialState = {
  squares1to6: '',
  squares7and8: ''
};

export default function Register() {
  const [state, setState] = useState({ initialState });

  useEffect(() => {
    document.body.classList.toggle('register-page');
    document.documentElement.addEventListener('mousemove', followCursor);

    return function cleanUp() {
      document.body.classList.toggle('register-page');
      document.documentElement.removeEventListener('mousemove', followCursor);
    };
  });

  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setState({
      ...state,
      squares1to6: 'perspective(500px) rotateY(' + posX * 0.05 + 'deg) rotateX(' + posY * -0.05 + 'deg)',
      squares7and8: 'perspective(500px) rotateY(' + posX * 0.02 + 'deg) rotateX(' + posY * -0.02 + 'deg)'
    });
  };

  return (
    <>
      <div className='page-header header-filter'>
        <div className='square square-7' id='square7' style={{ transform: state.squares7and8 }} />
        <div className='square square-8' id='square8' style={{ transform: state.squares7and8 }} />
        <div className='register-container flex'>
          <div className='margin-auto'>
            <RegisterForm />
          </div>
        </div>
        <div className='square square-1' id='square1' style={{ transform: state.squares1to6 }} />
        <div className='square square-2' id='square2' style={{ transform: state.squares1to6 }} />
        <div className='square square-3' id='square3' style={{ transform: state.squares1to6 }} />
        <div className='square square-4' id='square4' style={{ transform: state.squares1to6 }} />
        <div className='square square-5' id='square5' style={{ transform: state.squares1to6 }} />
        <div className='square square-6' id='square6' style={{ transform: state.squares1to6 }} />
      </div>
    </>
  );
}
