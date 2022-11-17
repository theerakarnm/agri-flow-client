/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import InputLogin from '../../components/Login/InputLogin';
import BoxLogin from '../../components/Layouts/BoxLogin';

const ResetPassword = () => {
  const setup = { email: '', username: '', password: '', cmpw: '' };
  const [user, setUser] = useState(setup);
  const [color, setColor] = useState(setup);

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  //console.log(formState, errors);

  const handleOnChange = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmitClick = (data) => {
    console.log(data);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/register`, data)
      .then(function (response) {
        console.log(response.data.msg);
        window.location.href = '../login';
      })
      .catch(function (error) {
        console.log(error);
      });
    setColor(setup);
  };

  useEffect(() => {
    console.log('change');
    errors.email
      ? setColor({ email: 'warn' })
      : errors.username
      ? setColor({ username: 'warn' })
      : errors.password
      ? setColor({ password: 'warn' })
      : errors.cmpw
      ? setColor({ cmpw: 'warn' })
      : console.log('verified');
  }, [formState]);

  return (
    <BoxLogin>
      <div className="flex-1 flex-col flex justify-center items-center">
        <h1 className="font-semibold sm:text-[1.7rem] text-[#1C658C] my-3">
          สมัครบัญชีผู้ใช้
        </h1>
        <form onSubmit={handleSubmit(onSubmitClick)}>
          <InputLogin
            type={'email'}
            name={'email'}
            register={register('email', {
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/g,
                message: 'Pattern error naka',
              },
              required: 'email required!',
            })}
            value={user.email}
            onChange={handleOnChange}
            color={color.email}
            placeholder={'อีเมล'}
          />
          <InputLogin
            type={'text'}
            name={'username'}
            register={register('username', { required: 'username required!' })}
            value={user.username}
            onChange={handleOnChange}
            color={color.username}
            placeholder={'ชื่อผู้ใช้'}
          />
          <InputLogin
            type={'password'}
            name={'password'}
            register={register('password', { required: 'password required!' })}
            value={user.password}
            onChange={handleOnChange}
            color={color.password}
            placeholder={'รหัสผ่าน'}
          />
          <InputLogin
            type={'password'}
            name={'cmpw'}
            register={register('cmpw', {
              required: 'confirm required!',
              validate: (value) => value === user.password,
            })}
            value={user.cmpw}
            onChange={handleOnChange}
            color={color.cmpw}
            placeholder={'ยืนยันรหัสผ่าน'}
          />
          <InputLogin
            type={'submit'}
            value={'ยืนยันการสมัคร'}
            css={'justify-center text-center'}
            color={'submit'}
          />
        </form>
      </div>
    </BoxLogin>
  );
};

export default ResetPassword;