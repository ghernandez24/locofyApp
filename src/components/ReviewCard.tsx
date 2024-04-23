import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ReviewCard.module.css";

export type ReviewCardType = {
  avatars?: string;
  johnnyCash?: string;
  june2023?: string;
  stars?: string;
  michellesPlaceWasSoGreatA?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const ReviewCard: FunctionComponent<ReviewCardType> = ({
  avatars,
  johnnyCash,
  june2023,
  stars,
  michellesPlaceWasSoGreatA,
  propMinWidth,
  propMinWidth1,
}) => {
  const johnnyCashStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const june2023Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={styles.reviewcard}>
      <div className={styles.reviewerDetails}>
        <div className={styles.reviewerInfo}>
          <img
            className={styles.avatarsIcon}
            loading="lazy"
            alt=""
            src={avatars}
          />
          <div className={styles.reviewerNames}>
            <div className={styles.johnnyCash} style={johnnyCashStyle}>
              {johnnyCash}
            </div>
            <div className={styles.june2023} style={june2023Style}>
              {june2023}
            </div>
          </div>
        </div>
        <div className={styles.ratings}>
          <div className={styles.stars}>{stars}</div>
          <img className={styles.quoteIcons} alt="" src="/vector-1.svg" />
        </div>
      </div>
      <div className={styles.michellesPlaceWas}>
        {michellesPlaceWasSoGreatA}
      </div>
    </div>
  );
};

export default ReviewCard;
