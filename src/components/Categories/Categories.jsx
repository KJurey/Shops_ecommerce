import { CategoriesContainer, CategoriesInContainer, CategoriesOutContainer, CategoryContainer, CategoryContainer300px, CategoriesContainer300px, CategoriesInContainer300px } from "../../styles/CategoriesStyles";
import { useMediaQuery } from "@mui/material";

export default function Categories() {

  const mobileScreen = useMediaQuery('(max-width: 750px)');

  return (
    <>
      {mobileScreen ? (
        <CategoriesOutContainer>
          <div><h2>Top Categories</h2></div>
          <CategoriesContainer300px>
            <CategoriesInContainer300px>
              <CategoryContainer300px style={{ backgroundImage: 'url(https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }} />
              <div>Clothing</div>
            </CategoriesInContainer300px>
            <CategoriesInContainer300px>
              <CategoryContainer300px style={{ backgroundImage: 'url(https://images.pexels.com/photos/1367000/pexels-photo-1367000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }} />
              <div>Videogames</div>
            </CategoriesInContainer300px>
            <CategoriesInContainer300px>
              <CategoryContainer300px style={{ backgroundImage: 'url(https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }} />
              <div>Sneakers</div>
            </CategoriesInContainer300px>
            <CategoriesInContainer300px>
              <CategoryContainer300px style={{ backgroundImage: 'url(https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }} />
              <div>Technology</div>
            </CategoriesInContainer300px>
            <CategoriesInContainer300px>
              <CategoryContainer300px style={{ backgroundImage: 'url(https://images.pexels.com/photos/768125/pexels-photo-768125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }} />
              <div>Books</div>
            </CategoriesInContainer300px>
          </CategoriesContainer300px>
        </CategoriesOutContainer>
      ) : (
        <CategoriesOutContainer>
          <div><h2>Top Categories</h2></div>
          <CategoriesContainer>
            <CategoriesInContainer>
              <CategoryContainer style={{ backgroundImage: 'url(https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }} />
              <div>Clothing</div>
            </CategoriesInContainer>
            <CategoriesInContainer>
              <CategoryContainer style={{ backgroundImage: 'url(https://images.pexels.com/photos/1367000/pexels-photo-1367000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }} />
              <div>Videogames</div>
            </CategoriesInContainer>
            <CategoriesInContainer>
              <CategoryContainer style={{ backgroundImage: 'url(https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }} />
              <div>Sneakers</div>
            </CategoriesInContainer>
            <CategoriesInContainer>
              <CategoryContainer style={{ backgroundImage: 'url(https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }} />
              <div>Technology</div>
            </CategoriesInContainer>
            <CategoriesInContainer>
              <CategoryContainer style={{ backgroundImage: 'url(https://images.pexels.com/photos/768125/pexels-photo-768125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }} />
              <div>Books</div>
            </CategoriesInContainer>
          </CategoriesContainer>
        </CategoriesOutContainer>)}
    </>
  )
};