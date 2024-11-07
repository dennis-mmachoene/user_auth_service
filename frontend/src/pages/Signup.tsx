import React from 'react';
import AuthForm from '../components/AuthForm';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../css/AuthPage.css';

const Signup: React.FC = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (values: { email: string; password: string; username?: string }) => {
    try {
      await signup(values.username || '', values.email, values.password);
      navigate('/dashboard');  // Redirect to dashboard on successful signup
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2>Sign Up</h2>
        <AuthForm onSubmit={handleSubmit} isSignup />
      </div>
    </div>
  );
};

export default Signup;
