import { Skeleton, useMediaQuery } from "@mui/material"
import { MainSkeletonContainer, MainInSkeletonContainer, ProductDescriptionSkeletonContainer, MainInSkeletonContainer300px } from "../../styles/ProductDetailsStyles"

export default function SkeletonCardDescription() {

  const mobileScreen = useMediaQuery('(max-width: 750px)');

  return (
    <>
      {mobileScreen ? (
        <MainSkeletonContainer>
          <MainInSkeletonContainer300px>
            <div>
              <Skeleton sx={{ height: 20, width: 330, margin: '15px 0' }} animation="wave" variant="rectangular" />
              <Skeleton sx={{ height: 20, width: 250, marginBottom: 2 }} animation="wave" variant="rectangular" />
            </div>
            <div>
              <Skeleton sx={{ height: 300, width: 300 }} animation="wave" variant="rectangular" style={{ marginBottom: 20 }} />
            </div>
            <ProductDescriptionSkeletonContainer>
              <div style={{ margin: '20px 0' }}>
                <Skeleton sx={{ height: 10, width: 200 }} animation="wave" variant="rectangular" />
              </div>
              <div>
                <Skeleton sx={{ height: 15, width: 330, marginBottom: 1.5 }} animation="wave" variant="rectangular" />
                <Skeleton sx={{ height: 15, width: 300, marginBottom: 1.5 }} animation="wave" variant="rectangular" />
                <Skeleton sx={{ height: 15, width: 250, marginBottom: 1.5 }} animation="wave" variant="rectangular" />
                <Skeleton sx={{ height: 15, width: 200 }} animation="wave" variant="rectangular" />

              </div>
              <div style={{ display: "flex", alignItems: 'center', marginBottom: 20, margin: '15px 0' }}>
                <Skeleton sx={{ height: 50, width: 50, marginRight: 1 }} animation="wave" variant="circular" />
                <Skeleton sx={{ height: 20, width: 200 }} animation="wave" variant="rectangular" />
              </div>
              <div>
                <Skeleton sx={{ height: 40, width: 70, marginBottom: 2 }} animation="wave" variant="rectangular" />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Skeleton sx={{ height: 30, width: 40, marginRight: 1 }} animation="wave" variant="rectangular" />
                <Skeleton sx={{ height: 30, width: 120 }} animation="wave" variant="rectangular" />
              </div>
            </ProductDescriptionSkeletonContainer>
          </MainInSkeletonContainer300px>
        </MainSkeletonContainer>
      ) : (
        <MainSkeletonContainer>
          <MainInSkeletonContainer>
            <div>
              <Skeleton sx={{ height: 500, width: 500 }} animation="wave" variant="rectangular" style={{ marginBottom: 20 }} />
            </div>
            <ProductDescriptionSkeletonContainer>
              <div>
                <Skeleton sx={{ height: 20, width: 700, marginBottom: 2 }} animation="wave" variant="rectangular" />
                <Skeleton sx={{ height: 20, width: 500 }} animation="wave" variant="rectangular" />
              </div>
              <div style={{ margin: '25px 0' }}>
                <Skeleton sx={{ height: 10, width: 200 }} animation="wave" variant="rectangular" />
              </div>
              <div>
                <Skeleton sx={{ height: 15, width: 700, marginBottom: 1.5 }} animation="wave" variant="rectangular" />
                <Skeleton sx={{ height: 15, width: 600, marginBottom: 1.5 }} animation="wave" variant="rectangular" />
                <Skeleton sx={{ height: 15, width: 500, marginBottom: 1.5 }} animation="wave" variant="rectangular" />
                <Skeleton sx={{ height: 15, width: 400, marginBottom: 1.5 }} animation="wave" variant="rectangular" />
                <Skeleton sx={{ height: 15, width: 300 }} animation="wave" variant="rectangular" />
              </div>
              <div style={{ display: "flex", alignItems: 'center', marginBottom: 20, margin: '15px 0' }}>
                <Skeleton sx={{ height: 50, width: 50, marginRight: 1 }} animation="wave" variant="circular" />
                <Skeleton sx={{ height: 20, width: 200 }} animation="wave" variant="rectangular" />
              </div>
              <div>
                <Skeleton sx={{ height: 40, width: 70, marginBottom: 2 }} animation="wave" variant="rectangular" />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Skeleton sx={{ height: 30, width: 40, marginRight: 1 }} animation="wave" variant="rectangular" />
                <Skeleton sx={{ height: 30, width: 120 }} animation="wave" variant="rectangular" />
              </div>
            </ProductDescriptionSkeletonContainer>
          </MainInSkeletonContainer>
        </MainSkeletonContainer>)}
    </>
  )
}