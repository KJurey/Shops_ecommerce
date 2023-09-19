import { SkeletonCard } from "../Cards/SkeletonCard"

export const Loading = ({ numOfSkeletonItems, numOfSkeletonBatches }) => {

    const SkeletonBatch = Array.from({ length: numOfSkeletonItems }, (_, index) => (
        <div key={index}>
            <SkeletonCard numOfInstances={numOfSkeletonBatches} />
        </div>
    ));

    return (
        <>{SkeletonBatch}</>
    )
}
