import { Skeleton } from "@mui/material"

export const SkeletonCard = ({ numOfInstances }) => {

    const SkeletonCards = Array.from({ length: numOfInstances }, (_, index) => (
        <div key={index}>
            <Skeleton sx={{ height: 300, width: 280 }} animation="wave" variant="rectangular" style={{ marginBottom: 20 }} />
            <Skeleton variant="h5" height={18} width='100%' animation='wave' style={{ marginBottom: 15 }} />
            <Skeleton variant="h5" height={18} width='90%' animation='wave' style={{ marginBottom: 20 }} />
            <Skeleton variant="h6" height={15} width={'30%'} animation='wave' style={{ marginBottom: 50 }} />
        </div>
    ))

    return (
        <>{SkeletonCards}</>
    )
};
