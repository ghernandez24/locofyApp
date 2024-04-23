import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ListingItem.module.css";

export type ListingItemType = {
  listingImage?: string;
  listingTitle?: string;
  listingSubtitle?: string;
  rating?: string;
  price?: string;
  showBestTime?: boolean;
  superhostIcon?: string;
  heartIcon?: string;
  starIcon?: string;
  trendIcon?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay1?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
  propPadding?: CSSProperties["padding"];
  propFlex?: CSSProperties["flex"];
  propDisplay2?: CSSProperties["display"];
  propMinWidth2?: CSSProperties["minWidth"];
  listingItemFlex?: CSSProperties["flex"];

  /** Action props */
  onListingItemContainerClick?: () => void;
};

const ListingItem: FunctionComponent<ListingItemType> = ({
  listingImage,
  listingTitle,
  listingSubtitle,
  rating,
  price,
  showBestTime,
  propDisplay,
  propMinWidth,
  propDisplay1,
  propMinWidth1,
  propPadding,
  propFlex,
  propDisplay2,
  propMinWidth2,
  onListingItemContainerClick,
  superhostIcon,
  heartIcon,
  starIcon,
  trendIcon,
  listingItemFlex,
}) => {
  const listingTitleStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const listingSubtitleStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  const bottomContainerStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const pricePerNightStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const priceChartStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay2,
      minWidth: propMinWidth2,
    };
  }, [propDisplay2, propMinWidth2]);

  const listingItemStyle: CSSProperties = useMemo(() => {
    return {
      flex: listingItemFlex,
    };
  }, [listingItemFlex]);

  return (
    <div
      className={styles.listingItem}
      onClick={onListingItemContainerClick}
      style={listingItemStyle}
    >
      <img className={styles.listingImageIcon} alt="" src={listingImage} />
      <div className={styles.superhostTag}>
        <img className={styles.superhostIcon} alt="" src={superhostIcon} />
        <div className={styles.superhost}>Superhost</div>
      </div>
      <div className={styles.wrapperHeartIcon}>
        <img
          className={styles.heartIcon}
          loading="lazy"
          alt=""
          src={heartIcon}
        />
      </div>
      <div className={styles.itemDetails}>
        <div className={styles.listingInfo}>
          <div className={styles.listingCont}>
            <div className={styles.listingTitle} style={listingTitleStyle}>
              {listingTitle}
            </div>
            <div
              className={styles.listingSubtitle}
              style={listingSubtitleStyle}
            >
              {listingSubtitle}
            </div>
          </div>
          <div className={styles.ratingCont}>
            <div className={styles.rating}>{rating}</div>
            <img
              className={styles.starIcon}
              loading="lazy"
              alt=""
              src={starIcon}
            />
          </div>
        </div>
        <div className={styles.bottomContainer} style={bottomContainerStyle}>
          <div className={styles.pricePerNight} style={pricePerNightStyle}>
            <div className={styles.price}>{price}</div>
            <div className={styles.night}>/night</div>
          </div>
          {showBestTime && (
            <div className={styles.bestTime}>
              <img
                className={styles.trendIcon}
                loading="lazy"
                alt=""
                src={trendIcon}
              />
              <div className={styles.priceChart} style={priceChartStyle}>
                Price chart
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
