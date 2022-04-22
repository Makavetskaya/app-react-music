import React from 'react';
import './createAccount.css';
import { useForm } from 'react-hook-form';
// import { Form } from '../Form/Form';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    ////// принимает данные из формы , будет перед. набор данных из формы
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

  return (
    // <Form title="sign in" handleClick={handleLogin}>
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <img
          className="img_form"
          src={require('../../img/Path 318.png')}
          alt=""
        />
        {/* <h2>Sing in</h2> */}
        <input
          type="text"
          placeholder="Enter your First Name "
          {...register('firstName', {
            required: 'Enter a valid First Name',
            minLength: {
              value: 5,
              message: 'Minimum 5 characters',
            },
          })}
        />
        <div>
          {errors?.firstName && <p>{errors?.firstName.message || 'Error!'}</p>}
        </div>
        <input
          type="text"
          placeholder="Enter your Last Name"
          {...register('lastName', {
            required: 'Enter a valid Last Name',
            // minLength: {
            //   value: 5,
            //   message: 'Minimum 5 characters',
            // },
          })}
        />
        <div>
          {errors?.lastName && <p>{errors?.lastName.message || 'Error!'}</p>}
        </div>
        <input
          type="email"
          placeholder="Enter your Email adress"
          {...register('email', {
            required: 'Enter a valid Email adress',
            minLength: {
              value: 5,
              message: 'Minimum 5 characters',
            },
          })}
        />
        <div>{errors?.email && <p>{errors?.email.message || 'Error!'}</p>}</div>
        <input
          type="password"
          placeholder="Enter your Password:"
          {...register('password', {
            pattern: /[a-fA-F0-9]/,
            required: 'Enter a valid Password:',
            minLength: {
              value: 5,
              message: 'Minimum 5 characters',
            },
          })}
        />
        <div>
          {errors?.password && <p>{errors?.password.message || 'Error!'}</p>}
        </div>
        <button className="submit" type="submit" disabled={!isValid}>
          Sing in
        </button>
        <p>
          When registering, you agree that we may use your provided data for the
          registration and to send you notifications on our products and
          services. You can unsubscribe from notifications at any time in your
          settings. For additional info please refer to our{' '}
        </p>
      </form>
    </div>
    // </Form>
  );
};

export default CreateAccount;
