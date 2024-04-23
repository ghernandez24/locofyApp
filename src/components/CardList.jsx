import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ListingItem from "./ListingItem";
import styles from "./CardList.module.css";

const CardList = () => {
  const navigate = useNavigate();
  const [cardState, setCardState] = useState([
    {
      listingImage: "/listing-image@2x.png",
      listingTitle: "Brightwoods Cabin",
      listingSubtitle: "Bridlepath, Ontario, Canada",
      rating: "4.9",
      price: "$658",
      showBestTime: true,
      superhostIcon: "/superhost-icon.svg",
      heartIcon: "/heart-icon@2x.png",
      starIcon: "/star-icon.svg",
      trendIcon: "/trend-icon@2x.png",
    },
    {
      listingImage: "/image@2x.png",
      listingTitle: "Urban Loft",
      listingSubtitle: "Georgina Bay, Ontario, Canada",
      rating: "4.5",
      price: "$410",
      showBestTime: false,
      propDisplay: "inline-block",
      propMinWidth: "81px",
      propDisplay1: "unset",
      propMinWidth1: "unset",
      propPadding: "var(--padding-5xs-5) 0px",
      propFlex: "1",
      propDisplay2: "unset",
      propMinWidth2: "unset",
      superhostIcon: "/superhost-icon.svg",
      heartIcon: "/heart-icon@2x.png",
      starIcon: "/star-icon.svg",
      trendIcon: "/trend-icon@2x.png",
      listingItemFlex: "1",
    },
    {
      listingImage: "/image-1@2x.png",
      listingTitle: "Forestville Cottages",
      listingSubtitle: "Simcoe, Ontario Canada",
      rating: "5.0",
      price: "$325",
      showBestTime: false,
      propDisplay: "unset",
      propMinWidth: "unset",
      propDisplay1: "unset",
      propMinWidth1: "unset",
      propPadding: "var(--padding-5xs-5) 0px",
      propFlex: "1",
      propDisplay2: "unset",
      propMinWidth2: "unset",
      superhostIcon: "/superhost-icon.svg",
      heartIcon: "/heart-icon@2x.png",
      starIcon: "/star-icon.svg",
      trendIcon: "/trend-icon@2x.png",
      listingItemFlex: "1",
    },
    {
      listingImage: "/image-2@2x.png",
      listingTitle: "Unionville Lodge",
      listingSubtitle: "Markham, Ontario Canada",
      rating: "4.6",
      price: "$485",
      showBestTime: true,
      propDisplay: "inline-block",
      propMinWidth: "129px",
      propDisplay1: "unset",
      propMinWidth1: "unset",
      propPadding: "var(--padding-8xs) 0px",
      propFlex: "unset",
      propDisplay2: "inline-block",
      propMinWidth2: "70px",
      superhostIcon: "/superhost-icon.svg",
      heartIcon: "/heart-icon@2x.png",
      starIcon: "/star-icon.svg",
      trendIcon: "/trend-icon@2x.png",
      listingItemFlex: "1",
    },
    {
      listingImage: "/image-3@2x.png",
      listingTitle: "Mississauga Airstream",
      listingSubtitle: "Mississauga, Ontario, Canada",
      rating: "4.8",
      price: "$502",
      showBestTime: true,
      propDisplay: "unset",
      propMinWidth: "unset",
      propDisplay1: "unset",
      propMinWidth1: "unset",
      propPadding: "var(--padding-8xs) 0px",
      propFlex: "unset",
      propDisplay2: "inline-block",
      propMinWidth2: "70px",
      superhostIcon: "/superhost-icon.svg",
      heartIcon: "/heart-icon@2x.png",
      starIcon: "/star-icon.svg",
      trendIcon: "/trend-icon@2x.png",
      listingItemFlex: "1",
    },
  ]);

  const onListingItemContainerClick = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  return (
    <section className={styles.homes}>
      {cardState.map((item, index) => (
        <ListingItem
          key={index}
          listingImage="/listing-image@2x.png"
          listingTitle="Brightwoods Cabin"
          listingSubtitle="Bridlepath, Ontario, Canada"
          rating="4.9"
          price="$658"
          showBestTime
          onListingItemContainerClick={onListingItemContainerClick}
          superhostIcon="/superhost-icon.svg"
          heartIcon="/heart-icon@2x.png"
          starIcon="/star-icon.svg"
          trendIcon="/trend-icon@2x.png"
        />
      ))}
      <ListingItem
        listingImage="/image@2x.png"
        listingTitle="Urban Loft"
        listingSubtitle="Georgina Bay, Ontario, Canada"
        rating="4.5"
        price="$410"
        showBestTime={false}
        propDisplay="inline-block"
        propMinWidth="81px"
        propDisplay1="unset"
        propMinWidth1="unset"
        propPadding="var(--padding-5xs-5) 0px"
        propFlex="1"
        propDisplay2="unset"
        propMinWidth2="unset"
        superhostIcon="/superhost-icon.svg"
        heartIcon="/heart-icon@2x.png"
        starIcon="/star-icon.svg"
        trendIcon="/trend-icon@2x.png"
        listingItemFlex="1"
      />
      <ListingItem
        listingImage="/image-1@2x.png"
        listingTitle="Forestville Cottages"
        listingSubtitle="Simcoe, Ontario Canada"
        rating="5.0"
        price="$325"
        showBestTime={false}
        propDisplay="unset"
        propMinWidth="unset"
        propDisplay1="unset"
        propMinWidth1="unset"
        propPadding="var(--padding-5xs-5) 0px"
        propFlex="1"
        propDisplay2="unset"
        propMinWidth2="unset"
        superhostIcon="/superhost-icon.svg"
        heartIcon="/heart-icon@2x.png"
        starIcon="/star-icon.svg"
        trendIcon="/trend-icon@2x.png"
        listingItemFlex="1"
      />
      <ListingItem
        listingImage="/image-2@2x.png"
        listingTitle="Unionville Logde"
        listingSubtitle="Markham, Ontario Canada"
        rating="4.6"
        price="$485"
        showBestTime
        propDisplay="inline-block"
        propMinWidth="129px"
        propDisplay1="unset"
        propMinWidth1="unset"
        propPadding="var(--padding-8xs) 0px"
        propFlex="unset"
        propDisplay2="inline-block"
        propMinWidth2="70px"
        superhostIcon="/superhost-icon.svg"
        heartIcon="/heart-icon@2x.png"
        starIcon="/star-icon.svg"
        trendIcon="/trend-icon@2x.png"
        listingItemFlex="1"
      />
      <ListingItem
        listingImage="/image-3@2x.png"
        listingTitle="Missisuaga Aistream"
        listingSubtitle="Missisauga, Ontario, Canada"
        rating="4.8"
        price="$502"
        showBestTime
        propDisplay="unset"
        propMinWidth="unset"
        propDisplay1="unset"
        propMinWidth1="unset"
        propPadding="var(--padding-8xs) 0px"
        propFlex="unset"
        propDisplay2="inline-block"
        propMinWidth2="70px"
        superhostIcon="/superhost-icon.svg"
        heartIcon="/heart-icon@2x.png"
        starIcon="/star-icon.svg"
        trendIcon="/trend-icon@2x.png"
        listingItemFlex="1"
      />
      <ListingItem
        listingImage="/image-4@2x.png"
        listingTitle="Niagara Homes"
        listingSubtitle="Niagara, Ontario, Canada"
        rating="4.9"
        price="$655"
        showBestTime={false}
        propDisplay="inline-block"
        propMinWidth="118px"
        propDisplay1="unset"
        propMinWidth1="unset"
        propPadding="var(--padding-5xs-5) 0px"
        propFlex="1"
        propDisplay2="unset"
        propMinWidth2="unset"
        superhostIcon="/superhost-icon.svg"
        heartIcon="/heart-icon@2x.png"
        starIcon="/star-icon.svg"
        trendIcon="/trend-icon@2x.png"
        listingItemFlex="1"
      />
      <ListingItem
        listingImage="/image-5@2x.png"
        listingTitle="Sunny Estate"
        listingSubtitle="Barcort, Ontario Canada"
        rating="5.0"
        price="$320"
        showBestTime
        propDisplay="inline-block"
        propMinWidth="102px"
        propDisplay1="unset"
        propMinWidth1="unset"
        propPadding="var(--padding-8xs) 0px"
        propFlex="unset"
        propDisplay2="inline-block"
        propMinWidth2="70px"
        superhostIcon="/superhost-icon.svg"
        heartIcon="/heart-icon@2x.png"
        starIcon="/star-icon.svg"
        trendIcon="/trend-icon@2x.png"
        listingItemFlex="1"
      />
      <ListingItem
        listingImage="/image-6@2x.png"
        listingTitle="Lawrence Hills"
        listingSubtitle="Lawrence, Ontario Canada"
        rating="5.0"
        price="$350"
        showBestTime={false}
        propDisplay="inline-block"
        propMinWidth="112px"
        propDisplay1="unset"
        propMinWidth1="unset"
        propPadding="var(--padding-5xs-5) 0px"
        propFlex="1"
        propDisplay2="unset"
        propMinWidth2="unset"
        superhostIcon="/superhost-icon.svg"
        heartIcon="/heart-icon@2x.png"
        starIcon="/star-icon.svg"
        trendIcon="/trend-icon@2x.png"
        listingItemFlex="1"
      />
      <ListingItem
        listingImage="/image-7@2x.png"
        listingTitle="Simcoe Lake Lodge"
        listingSubtitle="Simcoe, Ontario, Canada"
        rating="5.0"
        price="$395"
        showBestTime={false}
        propDisplay="unset"
        propMinWidth="unset"
        propDisplay1="unset"
        propMinWidth1="unset"
        propPadding="var(--padding-5xs-5) 0px"
        propFlex="1"
        propDisplay2="unset"
        propMinWidth2="unset"
        superhostIcon="/superhost-icon.svg"
        heartIcon="/heart-icon@2x.png"
        starIcon="/star-icon.svg"
        trendIcon="/trend-icon@2x.png"
        listingItemFlex="1"
      />
      <ListingItem
        listingImage="/image-8@2x.png"
        listingTitle="Wasaga Beach Home"
        listingSubtitle="Georgina Bay, Ontario, Canada"
        rating="5.0"
        price="$385"
        showBestTime
        propDisplay="unset"
        propMinWidth="unset"
        propDisplay1="unset"
        propMinWidth1="unset"
        propPadding="var(--padding-8xs) 0px"
        propFlex="unset"
        propDisplay2="inline-block"
        propMinWidth2="70px"
        superhostIcon="/superhost-icon.svg"
        heartIcon="/heart-icon@2x.png"
        starIcon="/star-icon.svg"
        trendIcon="/trend-icon@2x.png"
        listingItemFlex="1"
      />
      <ListingItem
        listingImage="/image-9@2x.png"
        listingTitle="Banff Hills"
        listingSubtitle="Banff, Alberta, Canada"
        rating="5.0"
        price="$385"
        showBestTime
        propDisplay="inline-block"
        propMinWidth="79px"
        propDisplay1="unset"
        propMinWidth1="unset"
        propPadding="var(--padding-8xs) 0px"
        propFlex="unset"
        propDisplay2="inline-block"
        propMinWidth2="70px"
        superhostIcon="/superhost-icon.svg"
        heartIcon="/heart-icon@2x.png"
        starIcon="/star-icon.svg"
        trendIcon="/trend-icon@2x.png"
        listingItemFlex="1"
      />
      <ListingItem
        listingImage="/image-10@2x.png"
        listingTitle="Creemore Canada"
        listingSubtitle="Creemore, Alberta, Canada"
        rating="5.0"
        price="$385"
        showBestTime={false}
        propDisplay="unset"
        propMinWidth="unset"
        propDisplay1="unset"
        propMinWidth1="unset"
        propPadding="var(--padding-5xs-5) 0px"
        propFlex="1"
        propDisplay2="unset"
        propMinWidth2="unset"
        superhostIcon="/superhost-icon.svg"
        heartIcon="/heart-icon@2x.png"
        starIcon="/star-icon.svg"
        trendIcon="/trend-icon@2x.png"
        listingItemFlex="1"
      />
      <ListingItem
        listingImage="/image-11@2x.png"
        listingTitle="Kawartha Lakes"
        listingSubtitle="Kawartha, Alberta,  Canada"
        rating="5.0"
        price="$385"
        showBestTime={false}
        propDisplay="inline-block"
        propMinWidth="121px"
        propDisplay1="unset"
        propMinWidth1="unset"
        propPadding="var(--padding-5xs-5) 0px"
        propFlex="1"
        propDisplay2="unset"
        propMinWidth2="unset"
        superhostIcon="/superhost-icon.svg"
        heartIcon="/heart-icon@2x.png"
        starIcon="/star-icon.svg"
        trendIcon="/trend-icon@2x.png"
        listingItemFlex="1"
      />
      <ListingItem
        listingImage="/image-12@2x.png"
        listingTitle="Revelstoke Cabin"
        listingSubtitle="Revelstoke, Alberta, Canada"
        rating="5.0"
        price="$385"
        showBestTime
        propDisplay="unset"
        propMinWidth="unset"
        propDisplay1="unset"
        propMinWidth1="unset"
        propPadding="var(--padding-8xs) 0px"
        propFlex="unset"
        propDisplay2="inline-block"
        propMinWidth2="70px"
        superhostIcon="/superhost-icon.svg"
        heartIcon="/heart-icon@2x.png"
        starIcon="/star-icon.svg"
        trendIcon="/trend-icon@2x.png"
        listingItemFlex="1"
      />
      <ListingItem
        listingImage="/image-13@2x.png"
        listingTitle="Brightwoods Estate"
        listingSubtitle="Brightwoods Estate"
        rating="5.0"
        price="$385"
        showBestTime={false}
        propDisplay="unset"
        propMinWidth="unset"
        propDisplay1="inline-block"
        propMinWidth1="127px"
        propPadding="var(--padding-5xs-5) 0px"
        propFlex="1"
        propDisplay2="unset"
        propMinWidth2="unset"
        superhostIcon="/superhost-icon.svg"
        heartIcon="/heart-icon@2x.png"
        starIcon="/star-icon.svg"
        trendIcon="/trend-icon@2x.png"
        listingItemFlex="1"
      />
      <ListingItem
        listingImage="/image-14@2x.png"
        listingTitle="Brightwoods Estate"
        listingSubtitle="Brightwoods Estate"
        rating="5.0"
        price="$385"
        showBestTime={false}
        propDisplay="unset"
        propMinWidth="unset"
        propDisplay1="inline-block"
        propMinWidth1="127px"
        propPadding="var(--padding-5xs-5) 0px"
        propFlex="1"
        propDisplay2="unset"
        propMinWidth2="unset"
        superhostIcon="/superhost-icon.svg"
        heartIcon="/heart-icon@2x.png"
        starIcon="/star-icon.svg"
        trendIcon="/trend-icon@2x.png"
        listingItemFlex="1"
      />
    </section>
  );
};

export default CardList;
