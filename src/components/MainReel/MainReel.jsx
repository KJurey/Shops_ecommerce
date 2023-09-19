import React, { useContext, useMemo } from 'react';
import { ItemsContext } from '../../context/ItemsContext';
import ShuffleArray from '../../utils/ShuffleArray';
import ItemCard from '../Cards/ItemCard';
import { ReelContainer } from '../../styles/ReelContainer';
import { MainReelContainer } from '../../styles/MainReelContainer';
import FirstLetterUpperCase from '../../utils/FirstLetterUpperCase';


function MainReel({ numOfItems, category }) {

  const { items, loading, error, fetchData } = useContext(ItemsContext);

  const itemsByCategory = items.filter((item) => item.category === category)
  const shuffledItems = useMemo(() => ShuffleArray(itemsByCategory), [itemsByCategory]);
  const displayedItems = shuffledItems.slice(0, numOfItems)
  const formatedCategory = FirstLetterUpperCase(category)

  return (
    <div>
      {!loading && !error && (
        <MainReelContainer>
          <h2>{formatedCategory}</h2>
          <ReelContainer>
            {displayedItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </ReelContainer>
        </MainReelContainer>
      )}
    </div>
  );
}

export default MainReel;