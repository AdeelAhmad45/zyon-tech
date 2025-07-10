import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function GoogleButton() {
  const { user, isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = () => {
    loginWithRedirect({ appState: { returnTo: '/admin' } }); // set return target
  };

  useEffect(() => {
    if (
      isAuthenticated &&
      !isLoading 
     
      // && user?.email_verified === true
    ) {
      navigate('/admin');
    }
  }, [isAuthenticated, isLoading, user, navigate]);

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <div>
     
        <div onClick={handleLogin}>Login</div>
      
    </div>
  );
}

export default GoogleButton;
