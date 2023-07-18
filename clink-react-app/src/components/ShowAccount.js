import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ShowAccount.scss';
import { Link } from 'react-router-dom';

const ShowAccount = () => {
  return (
    <div className="addAccount">
      <div className="addAccountConsumptionBox">
        <div className="addAccountLeftBox">
          <div className="addAccountTitle">소비 계좌</div>
          <button className="addAccountEditBtn">수정</button>
        </div>
        <div className="addAccountRightBox">
          <button className="addAccountAddBtn">
            {' '}
            <Link to="/add-account-form" style={{ textDecoration: 'none' }}>
              + 새 계좌 등록
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowAccount;
