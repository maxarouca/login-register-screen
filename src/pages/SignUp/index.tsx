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

  const SignUpSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('This field can not be empty'),
    email: Yup.string().required('This field can not be empty'),
    password: Yup.string().required('Required'),
  });

  return (
    <div className="wrapper">
      <Slider />
      <div className="form-container sign-up">
        <h1>Invision</h1>
        <h2>Getting Started</h2>
        <Formik
          initialValues={{ fullname: '', username: '', password: '' }}
          validationSchema={SignUpSchema}
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
              <div className="input-wrapper">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="fullname"
                  name="fullname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullname}
                  className={errors.fullname ? 'error' : ''}
                />
                <span>
                  {errors.fullname && touched.fullname && errors.fullname}
                </span>
              </div>

              <div className="input-wrapper">
                <label htmlFor="email">Username or email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  className={errors.username ? 'error' : ''}
                />
                <span>
                  {errors.username && touched.username && errors.username}
                </span>
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
                {errors.password && touched.password && errors.password}
              </div>
              <button type="submit" className="button" disabled={isSubmitting}>
                Sign Up
              </button>
            </form>
          )}
        </Formik>
        <p className="or">Or</p>
        <GoogleAuth
          clientID={CLIENT_ID}
          preLogin={preLoginTracking}
          failureHandler={errorHandler}
          label="Sign up with Google"
        />

        <div className="sign-up-wrapper">
          <p>
            By signing up, you agree to <b>Invision</b>?
          </p>
          <div>
            <Link className="sign-up-link" to="/sign-up">
              Terms of Conditions
            </Link>
            <span>and</span>
            <Link className="sign-up-link" to="/sign-up">
              Privacy Policy
            </Link>
            <div className="sign-in-link-wrapper">
              <span> Already on Invision?</span>{' '}
              <Link className="sign-up-link" to="/">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
