import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export default styled(ToastContainer).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: ''
})`
  .Toastify__toast {
    background: rgba(0,0,0,0.6);
    border: 1px solid #A99E7E;
    box-shadow: 0px 0px 37px 4px rgba(0,0,0,0.75);
    
  }
  .Toastify__toast-body {
    text-align: center;
    font-size: 18px;
  }
  .Toastify__progress-bar {
    background: #A99E7E;
  }
`;
