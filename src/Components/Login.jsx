;
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate(); // Utiliser useNavigate pour la redirection

  const handleSignupRedirect = () => {
    navigate('/login'); // Rediriger vers la page d'enregistrement
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login Page</h2>
      <button onClick={handleSignupRedirect} style={buttonStyle}>
        Go to Signup
      </button>
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
};

export default Login;
