import { useContext, useState, useMemo, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemsContext } from "../context/ItemsContext"
import {
  MainInProductContainer,
  MainInProductContainer300px,
  MainProductContainer,
  MainSimilarProductContainer,
  ProductDescriptionContainer
} from "../styles/ProductDetailsStyles";
import { Avatar, Rating, Typography, Box, InputLabel, MenuItem, FormControl, Select, useMediaQuery } from "@mui/material";

import MainReel from "../components/MainReel/MainReel";
import SkeletonCardDescription from "../components/Cards/SkeletonCardDescription";

export default function ProductDetails() {


  const { items, loading } = useContext(ItemsContext);
  const { productId } = useParams();
  const product = items.find((item) => item.id === parseInt(productId));
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const mobileScreen = useMediaQuery('(max-width: 750px)');


  useEffect(() => {
    if (product) {
      setCategory(product.category);
    }
  }, [product]);

  const handleChange = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
  };

  if (!product) {
    // Product is still loading, render a loading indicator or message
    return (
      <SkeletonCardDescription />
    );
  }

  return (
    <>
      {mobileScreen ? (
        <>
          <MainProductContainer>
            <MainInProductContainer300px>
              <div>
                <h2>{product.title}</h2>
              </div>
              <div style={{
                minWidth: 300,
                minHeight: 300,
                maxHeight: 400,
                maxWidth: 400,
                background: `no-repeat center /contain url(${product.image})`,
                margin: '20px 30px'
              }} />
              <ProductDescriptionContainer>
                <div style={{ marginBottom: 15, fontStyle: "italic" }}>
                  <Typography variant="subtitle">
                    {product.category}
                  </Typography>
                </div>
                <div>
                  <Typography sx={{ marginBottom: 3 }}>
                    {product.description}
                  </Typography>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: 'center', marginBottom: 20 }}>
                    <Avatar alt="Shops Logo" src="" sx={{ marginRight: 1 }} />
                    <Typography variant="h6" >
                      Shops Store
                    </Typography>
                  </div>
                </div>
                <div>
                  <Typography variant="h4">
                    ${product.price}
                  </Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ marginRight: 1 }}>{product.rating.rate}</Typography>
                  <Rating value={product.rating.rate} />
                </div>
                <div>
                  <Box sx={{ minWidth: 200, margin: '10px 0' }}>
                    <FormControl sx={{ minWidth: 100 }}>
                      <InputLabel id="quantity-select-label">Quantity</InputLabel>
                      <Select
                        labelId="quantity-select-label"
                        id="quantity-select"
                        value={quantity}
                        label="Quantity"
                        onChange={handleChange}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </ProductDescriptionContainer>
            </MainInProductContainer300px>
          </MainProductContainer>
          <MainSimilarProductContainer>
            <div style={{ width: '80%', margin: 'auto' }}>
              <Typography variant="h5">
                Similar products
              </Typography>
            </div>
            <div>
              <MainReel numOfItems={4} category={category} />
            </div>
          </MainSimilarProductContainer>
        </>
      ) : (
        <>
          <MainProductContainer>
            <MainInProductContainer>
              <div style={{
                minWidth: 500,
                minHeight: 500,
                maxHeight: 700,
                maxWidth: 700,
                background: `no-repeat center /contain url(${product.image})`,
                margin: '0 40px'
              }} />
              <ProductDescriptionContainer>
                <div>
                  <h2>{product.title}</h2>
                </div>
                <div style={{ marginBottom: 15, fontStyle: "italic" }}>
                  <Typography variant="subtitle">
                    {product.category}
                  </Typography>
                </div>
                <div>
                  <Typography sx={{ marginBottom: 3 }}>
                    {product.description}
                  </Typography>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: 'center', marginBottom: 20 }}>
                    <Avatar alt="Shops Logo" src="" sx={{ marginRight: 1 }} />
                    <Typography variant="h6" >
                      Shops Store
                    </Typography>
                  </div>
                </div>
                <div>
                  <Typography variant="h4">
                    ${product.price}
                  </Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ marginRight: 1 }}>{product.rating.rate}</Typography>
                  <Rating value={product.rating.rate} />
                </div>
                <div>
                  <Box sx={{ minWidth: 200, margin: '10px 0' }}>
                    <FormControl sx={{ minWidth: 100 }}>
                      <InputLabel id="quantity-select-label">Quantity</InputLabel>
                      <Select
                        labelId="quantity-select-label"
                        id="quantity-select"
                        value={quantity}
                        label="Quantity"
                        onChange={handleChange}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={3}>4</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </ProductDescriptionContainer>
            </MainInProductContainer>
          </MainProductContainer>
          <MainSimilarProductContainer>
            <div style={{ width: '80%', margin: 'auto' }}>
              <Typography variant="h5">
                Similar products
              </Typography>
            </div>
            <div>
              <MainReel numOfItems={4} category={category} />
            </div>
          </MainSimilarProductContainer>
        </>
      )}
    </>
  )
}