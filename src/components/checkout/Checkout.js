import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import './style.scss';

import ImageBase from '../../assets/images/base.png';
import ImageAtiAmpela from '../../assets/images/ati-ampela.png';
import ImageKacang from '../../assets/images/kacang.png';
import ImageKerupuk from '../../assets/images/kerupuk.png';
import ImageOdading from '../../assets/images/odading.png';
import ImageSeledri from '../../assets/images/seledri.png';
import ImageSuirAyam from '../../assets/images/suir-ayam.png';
import ImageTelor from '../../assets/images/telor.png';
import Modal from '../../element/Modal/Modal';

export default function Checkout({ toppings }) {
  const history = useHistory();

  const [show, setShow] = useState(false);

  return (
    <section className="checkout">
      <div className="checkout__container">
        <div className="toppings__container">
          <h2 className="title">Topping Pilihanmu</h2>
          {Object.keys(toppings).reduce((acc, curr) => {
            return acc + toppings[curr] ? 1 : 0;
          }, 0) === 0 && <p>Tidak ada topping terpilih</p>}

          {Object.keys(toppings).map((topping, i) => {
            return (
              toppings[topping] && (
                <p key={i}>
                  {topping[0].toUpperCase()}
                  {topping.substr(1)}
                </p>
              )
            );
          })}
          <div className="button-wrapper">
            <button className="btn-order" onClick={() => history.push('/')}>
              Kembali
            </button>
            <button className="btn-order" onClick={() => setShow(true)}>
              Konfirmasi
            </button>
            <Modal show={show} onClose={() => setShow(false)} />
          </div>
        </div>

        <div className="image-wrapper">
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 1 }}
            className="img-topping"
          >
            <img
              src={ImageBase}
              alt="Mangkok dan bubur"
              className="img-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 1.2 }}
            className="img-topping"
          >
            <img
              src={ImageSeledri}
              alt="seledri"
              className="img-contain"
              style={{ display: toppings.seledri ? '' : 'none' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 1.4 }}
            className="img-topping"
          >
            <img
              src={ImageKacang}
              alt="Kacang"
              className="img-contain"
              style={{ display: toppings.kacang ? '' : 'none' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 1.6 }}
            className="img-topping"
          >
            <img
              src={ImageOdading}
              alt="Odading"
              className="img-contain"
              style={{ display: toppings.odading ? '' : 'none' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 1.8 }}
            className="img-topping"
          >
            <img
              src={ImageSuirAyam}
              alt="suir ayam"
              className="img-contain"
              style={{ display: toppings.suirayam ? '' : 'none' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 1.9 }}
            className="img-topping"
          >
            <img
              src={ImageKerupuk}
              alt="Kerupuk"
              className="img-contain"
              style={{ display: toppings.kerupuk ? '' : 'none' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 1.6 }}
            className="img-topping"
          >
            <img
              src={ImageAtiAmpela}
              alt="Kerupuk"
              className="img-contain"
              style={{ display: toppings.atiampela ? '' : 'none' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 2 }}
            className="img-topping"
          >
            <img
              src={ImageTelor}
              alt="Kerupuk"
              className="img-contain"
              style={{ display: toppings.telor ? '' : 'none' }}
            />
          </motion.div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#873235"
          fillOpacity="1"
          d="M0,32L34.3,37.3C68.6,43,137,53,206,64C274.3,75,343,85,411,122.7C480,160,549,224,617,213.3C685.7,203,754,117,823,96C891.4,75,960,117,1029,165.3C1097.1,213,1166,267,1234,266.7C1302.9,267,1371,213,1406,186.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
