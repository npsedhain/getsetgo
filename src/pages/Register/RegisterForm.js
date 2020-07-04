import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import GoogleIcon from './GoogleIcon';

export default function RegisterForm() {
  const [state, setState] = useState({ showPassword: false, password: '', email: '' });

  const onShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  const handleChange = (key) => (event) => {
    setState({ ...state, [key]: event.target.value });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className='form-container'>
      <div className='join-us'>𝐻𝑒𝓎❣ 𝐸𝓍𝒸𝒾𝓉𝑒𝒹 𝓎𝑒𝓉¿</div>
      <div className='margin-2x'>
        <TextField
          fullWidth
          label='Email'
          type='email'
          autovalidate
          variant='outlined'
          value={state.email}
          onChange={handleChange('email')}
        />
      </div>
      <div className='margin-2x'>
        <TextField
          fullWidth
          label='Password'
          variant='outlined'
          type={state.showPassword ? 'text' : 'password'}
          value={state.password}
          onChange={handleChange('password')}
          InputProps={{
            endAdornment: (
              <IconButton
                aria-label='toggle password visibility'
                onClick={onShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {state.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            )
          }}
        />
      </div>
      <div className='margin-2x'>
        <Button className='fullWidth google-button'>Log in</Button>
      </div>
      <div className='margin-2x text-center'>OR</div>
      <div className='margin'>
        <Button className='fullWidth google-button' startIcon={<GoogleIcon />}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
