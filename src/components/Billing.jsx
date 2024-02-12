import { apple, google } from "../assets";
import styles, { layout } from "../style";
import founder from '../assets/founder.png'

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={founder} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
         About the <br className="sm:block hidden" /> Founder
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus vero ea unde repudiandae natus ullam soluta illum expedita esse mollitia voluptate fugiat quis ratione necessitatibus minima saepe, officia sapiente. Facere quas velit dolore dolorum, similique laboriosam ad harum. 
      </p>
    </div>
  </section>
);

export default Billing;
