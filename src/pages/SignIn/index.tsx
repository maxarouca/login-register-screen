import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import Slider from '../../components/Slider';
import './styles.sass';
import GoogleAuth from '../../components/GoogleAuth';
import { CLIENT_ID } from '../../constants';

const SignIn: React.FC = () => {
  function preLoginTracking(): void {
    console.log('Attemp to login with google');
  }

  function errorHandler(error: string): void {
    // handle error if login got failed...
    console.error(error);
  }

  const SignInSchema = Yup.object().shape({
    email: Yup.string().required('This field can not be empty'),
    password: Yup.string().required('Required'),
  });

  return (
    <div className="wrapper">
      <Slider />
      <div className="form-container">
        <h1>Invision</h1>
        <h2>Welcome to Invision</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={SignInSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              {console.log(errors.email)}
              <div className="input-wrapper">
                <label htmlFor="email">Username or email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={errors.email ? 'error' : ''}
                />
                <span>{errors.email && touched.email && errors.email}</span>
              </div>

              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <span>
                  {errors.password && touched.password && errors.password}
                </span>
              </div>
              <div className="helper-link">
                <a href="/forgot-password">Forgot password?</a>
              </div>
              <button
                type="submit"
                className={`button ${
                  errors.email || errors.password || isSubmitting
                    ? 'disabled'
                    : ''
                }`}
                disabled={isSubmitting}
              >
                Sign In
              </button>
            </form>
          )}
        </Formik>
        <p className="or">Or</p>
        <GoogleAuth
          clientID={CLIENT_ID}
          preLogin={preLoginTracking}
          failureHandler={errorHandler}
          label="Sign in with Google"
        />

        <div className="sign-in-wrapper">
          <span>
            New <b>Invision</b>?
          </span>
          <Link className="sign-in-link" to="/sign-up">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
