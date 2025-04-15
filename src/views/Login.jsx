import {useState} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const [formToggle, setFormToggle] = useState(true);

  const handleFormToggle = () => {
    setFormToggle(!formToggle);
  };

  return (
    <>
      {formToggle ? <LoginForm /> : <RegisterForm />}
      <button onClick={handleFormToggle}>
        {' '}
        {formToggle ? 'or Register' : 'or Login'}
      </button>
    </>
  );
};

export default Login;
