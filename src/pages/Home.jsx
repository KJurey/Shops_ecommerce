import React, { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
import { Loading } from "../components/Loading/Loading";
import MainReel from "../components/MainReel/MainReel";
import { MainReelContainer } from "../styles/MainReelContainer";
import { ReelContainer } from "../styles/ReelContainer";
import RandomCategories from "../hooks/RandomCategories";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import Categories from "../components/Categories/Categories";

const Home = () => {

  const numOfCategories = 3
  const numOfSkeletonItems = 4
  const numOfSkeletonBatches = numOfCategories
  const { items, loading, error } = useContext(ItemsContext);
  const uniqueCategories = RandomCategories(items, numOfCategories);

  return (
    <>
      <div>
        <Carousel />
        
        <Categories />
        <MainReelContainer>
          <ReelContainer>
            {loading && <Loading
              numOfSkeletonItems={numOfSkeletonItems}
              numOfSkeletonBatches={numOfSkeletonBatches} />}
            {error && <div>Error: {error}</div>}
          </ReelContainer>
        </MainReelContainer>
        {uniqueCategories.map((category, index) => (
          <MainReel key={index} numOfItems={4} category={category} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home