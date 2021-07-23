import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.scss';

import BlobMaker from '../../assets/blobmaker.svg';
import Person from '../../assets/person.png';

export default function Modal(props) {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={() => props.onClose()}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">Terimakasih</h4>
          </div>
          <div className="modal-body">
            <div className="image-wrapper">
              <img src={BlobMaker} alt="Blob" className="img-contain" />
              <img src={Person} alt="person" className="img-contain" />
              <span>Order will be ready in 5-15minutes.</span>
            </div>
          </div>
          <div className="modal-footer">
            <button className="button" onClick={() => props.onClose()}>
              OK
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
