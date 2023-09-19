import { useEffect, useState, useMemo } from 'react';
import ShuffleArray from '../utils/ShuffleArray';

function RandomCategories(array, numOfCategories) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [...new Set(array.map((item) => item.category))];

    if (uniqueCategories.length >= numOfCategories) {
      const shuffledCategories = ShuffleArray(uniqueCategories);
      setSelectedCategories(shuffledCategories.slice(0, numOfCategories));
    } else {
      setSelectedCategories(uniqueCategories);
    }
  }, [array, numOfCategories]);

  // Memoize the result
  const memoizedCategories = useMemo(() => selectedCategories, [selectedCategories]);

  return memoizedCategories;
}

export default RandomCategories;