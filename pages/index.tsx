import Header from "@/components/Header/Header";
import styles from "../styles/Home.module.css";
import ShowLocation from "@/components/ShowLocation/ShowLocation";
import Rating from "@/components/Rating/Rating";
import Profile from "@/components/Profile/Profile";
import { profile } from "../mocks/profile";
import { reviews } from "../mocks/reviews";
import Reviews from "@/components/Reviews/Reviews";
import Capabilities from "@/components/Capabilities/Capabilities";
import Languages from "@/components/Languages/Languages";
import Qualities from "@/components/Qualities/Qualities";
import Promo from "@/components/Promo/Promo";
import Footer from "@/components/Footer/Footer";
import { headerLinks } from "../links/headerLinks";
import { nannow, socials, information, contact } from "../links/footerLinks";

const NannyPage = () => {

  return (
    <>
      <div className={styles.wrapper}>
        <Header links={headerLinks} />
        <Profile
          imgUrl={profile.imgUrl}
          name={profile.name}
          intro={profile.intro}
          pageUrl={profile.pageUrl}
        />
        <div className={styles.additionalDataWrapper}>
          <Rating rating={4.9} reviewCount={200} title="Geriausia Aukle" />
          <ShowLocation location="Zirmunu raj., Vilniaus m., Lietuva" />
        </div>
        <Reviews reviews={reviews} />
        <Capabilities
          capabilities={[
            "IN_DEMAND",
            "VERIFY",
            "FIRST_AID",
            "TEACHER",
            "PROFESIONAL",
            "ART",
            "BRAIN",
            "LANGUAGES",
            "SPORT",
          ]}
        />
        <Languages languages={["LT_FLAG", "ENG_FLAG", "DE_FLAG", "PL_FLAG"]} />
        <Qualities
          qualities={["NO-SMOKING", "COOKING", "ANIMAL", "SWIM", "MUSIC"]}
        />
        <Promo />
      </div>
      <div className={styles.line}>
        <hr />
      </div>
      <Footer
        nannow={nannow}
        socials={socials}
        information={information}
        contact={contact}
      />
    </>
  );
};

export default NannyPage;
