import "./hero.styles.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              DISCOVER <br />
              MOST SUITABLE <br /> PROPERTY
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span>Find a variety of properties that suits you very easily</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>
          <div className=" flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={6} />
                <span>+</span>
              </span>
              <span>Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={2100} end={4003} duration={4} />
                <span>+</span>
              </span>
              <span>Happy Coustomers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={27} duration={3} />
                <span>+</span>
              </span>
              <span>Award Winning</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="hero-image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
