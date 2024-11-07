// src/components/AuthForm.tsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../css/AuthForm.css';

interface AuthFormProps {
  onSubmit: (values: { email: string; password: string; username?: string }) => void;
  isSignup?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, isSignup = false }) => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    ...(isSignup && { username: Yup.string().required('Required') }),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '', username: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="auth-form">
        {isSignup && (
          <div className="input-container">
            <Field
              name="username"
              type="text"
              placeholder="Username"
              className="input-field"
            />
            <ErrorMessage name="username" component="div" className="error-message" />
          </div>
        )}
        <div className="input-container">
          <Field
            name="email"
            type="email"
            placeholder="Email"
            className="input-field"
          />
          <ErrorMessage name="email" component="div" className="error-message" />
        </div>
        <div className="input-container">
          <Field
            name="password"
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <ErrorMessage name="password" component="div" className="error-message" />
        </div>
        <button type="submit" className="submit-btn">
          {isSignup ? 'Sign Up' : 'Log In'}
        </button>
      </Form>
    </Formik>
  );
};

export default AuthForm;
