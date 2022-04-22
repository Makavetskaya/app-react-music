import React, { useContext } from 'react';
import CenterMenu from '../CenterMenu/CenterMenu';
import { useState } from 'react';
import SingIn from '../SingIn/SingIn';
import CreateAccount from '../CreateAccount/CreateAccount';
import { ModalContext } from '../../contexts/ModalContext/ModalContext';
import './header.css';
function Header() {
  const { openModal } = useContext(ModalContext);
  const handleClickSignIn = () => {
    openModal({
      children: <SingIn />,
    });
  };
  const handleCreateAccount = () => {
    openModal({
      children: <CreateAccount />,
    });
  };
  return (
    <div className="header">
      <img className="logo" src={require('../../img/MuzicLogo.png')} alt="#" />
      {/* side menu*/}
      <CenterMenu />
      {/* buttons*/}
      <div className="buttons">
        <button className="buttonStyleone" onClick={handleClickSignIn}>
          Sign in
        </button>
      </div>
      <div className="buttons">
        <button className="buttonStyleone" onClick={handleCreateAccount}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Header;
{
  /* <div className={styles.buttons}>
<button
  className={styles.buttonStyle}
  onClick={() => setmodalActive(true)}
>
  Create account
</button>
<Modal active={modalActive} setActive={setmodalActive}>
  <CreateAccount />
</Modal>
</div> */
}
