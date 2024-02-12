import { Link } from "react-router-dom";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import CountdownTimer from "./CountDownTimer";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> Now!! Hurry, only few mins left.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Click the button below to get started !!
      </p>

      <Link to={'/register'} >
        <Button text = {"Sign up"} styles={`mt-10`} />
      </Link>
    </div>

    <div className={layout.sectionImg}>
  <div class="w-[450px] h-[450px] rounded-full border-4 border-dimWhite opacity-70 absolute "></div>
      <CountdownTimer/>
    </div>
  </section>
);

export default CardDeal;
