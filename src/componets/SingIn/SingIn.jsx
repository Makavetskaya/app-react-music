import React from 'react';
import './singIn.css';
import { useForm } from 'react-hook-form';
import { Form } from '../Form/Form';
// import { useNavigate } from 'react-router-dom';
// import { setUser } from '../../store/slices/userSlice';
// import { useAppDispatch } from '../../hooks/redux-hooks';

const SingIn = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  // const dispatch = useAppDispatch();
  // const { push } = useNavigate();

  // const handleLogin = (email, password) => {
  //   const auth = getAuth();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then(({ user }) => {
  //       console.log(user);
  //       dispatch(
  //         setUser({
  //           email: user.email,
  //           id: user.uid,
  //           token: user.refreshToken,
  //         })
  //       );
  //       push('/');
  //     })
  //     .catch(() => alert('Invalid user!'));
  // };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <img
          className="img_form"
          src={require('../../img/Path 318.png')}
          alt=""
        />
        <input
          type="text"
          placeholder="Username "
          {...register('userName', {
            required: 'Username is required',
          })}
        />
        <div>
          {errors?.userName && <p>{errors?.userName.message || 'Error!'}</p>}
        </div>
        <input
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'Password is required',
          })}
        />
        <div>
          {errors?.password && <p>{errors?.password.message || 'Error!'}</p>}
        </div>

        <button className="submit" type="submit" disabled={!isValid}>
          Sing in
        </button>
      </form>
    </div>
  );
};

export default SingIn;
