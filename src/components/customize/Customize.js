import React from 'react';
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

export default function Customize({ toppings, setToppings }) {
  const history = useHistory();
  const onChange = (event, name) => {
    let newToppings = JSON.parse(JSON.stringify(toppings));
    newToppings[name] = event;
    setToppings(newToppings);
    localStorage.setItem('toppings', JSON.stringify(newToppings));
  };

  return (
    <section className="customize">
      <div className="customize__container">
        <div className="bubur__image-wrapper">
          <img src={ImageBase} alt="Mangkok dan bubur" className="ingredient" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: toppings.seledri ? 0 : -200,
              opacity: toppings.seledri ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredient"
          >
            <img
              src={ImageSeledri}
              alt="Mangkok dan bubur"
              className="img-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: toppings.kacang ? 0 : -200,
              opacity: toppings.kacang ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredient"
          >
            <img
              src={ImageKacang}
              alt="Mangkok dan bubur"
              className="img-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: toppings.odading ? 0 : -200,
              opacity: toppings.odading ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredient"
          >
            <img
              src={ImageOdading}
              alt="Mangkok dan bubur"
              className="img-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: toppings.suirayam ? 0 : -200,
              opacity: toppings.suirayam ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredient"
          >
            <img
              src={ImageSuirAyam}
              alt="Mangkok dan bubur"
              className="img-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: toppings.atiampela ? 0 : -200,
              opacity: toppings.atiampela ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredient"
          >
            <img
              src={ImageAtiAmpela}
              alt="Mangkok dan bubur"
              className="img-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: toppings.kerupuk ? 0 : -200,
              opacity: toppings.kerupuk ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredient"
          >
            <img
              src={ImageKerupuk}
              alt="Mangkok dan bubur"
              className="img-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: toppings['telor'] ? 0 : -200,
              opacity: toppings['telor'] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredient"
          >
            <img
              src={ImageTelor}
              alt="Mangkok dan bubur"
              className="img-contain"
            />
          </motion.div>
        </div>
        <div className="bubur__topping-wrapper">
          <h2>Pilih Topping</h2>
          <div className="form__container">
            <div className="container-checkbox">
              <input
                type="checkbox"
                name="suirayam"
                id="suirayam"
                className="switch"
                checked={toppings.suirayam}
                onChange={(event) => onChange(event.target.checked, 'suirayam')}
              />
              <label htmlFor="suirayam">Suir Ayam</label>
            </div>
            <div className="container-checkbox">
              <input
                type="checkbox"
                name="seledri"
                id="seledri"
                className="switch"
                checked={toppings.seledri}
                onChange={(event) => onChange(event.target.checked, 'seledri')}
              />
              <label htmlFor="seledri">Seledri</label>
            </div>
            <div className="container-checkbox">
              <input
                type="checkbox"
                name="kacang"
                id="kacang"
                className="switch"
                checked={toppings.kacang}
                onChange={(event) => onChange(event.target.checked, 'kacang')}
              />
              <label htmlFor="kacang">Kacang</label>
            </div>
            <div className="container-checkbox">
              <input
                type="checkbox"
                name="odading"
                id="odading"
                className="switch"
                checked={toppings.odading}
                onChange={(event) => onChange(event.target.checked, 'odading')}
              />
              <label htmlFor="odading">Odading</label>
            </div>
            <div className="container-checkbox">
              <input
                type="checkbox"
                name="telor"
                id="telor"
                className="switch"
                checked={toppings.telor}
                onChange={(event) => onChange(event.target.checked, 'telor')}
              />
              <label htmlFor="telor">telor</label>
            </div>
            <div className="container-checkbox">
              <input
                type="checkbox"
                name="atiampela"
                id="atiampela"
                className="switch"
                checked={toppings.atiampela}
                onChange={(event) =>
                  onChange(event.target.checked, 'atiampela')
                }
              />
              <label htmlFor="atiampela">Ati Ampela</label>
            </div>
            <div className="container-checkbox">
              <input
                type="checkbox"
                name="kerupuk"
                id="kerupuk"
                className="switch"
                checked={toppings.kerupuk}
                onChange={(event) => onChange(event.target.checked, 'kerupuk')}
              />
              <label htmlFor="kerupuk">Kerupuk</label>
            </div>
          </div>
          <button
            className="btn-order"
            onClick={() => history.push('/checkout')}
          >
            Buat Pesanan
          </button>
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
