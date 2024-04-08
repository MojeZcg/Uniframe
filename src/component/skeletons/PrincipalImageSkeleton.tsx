import ContentLoader from "react-content-loader";

const PrincipalImageSkeleton = () => (
  <ContentLoader
    speed={2}
    width={579}
    height={435}
    viewBox="0 0 579 435"
    backgroundColor="#333"
    foregroundColor="#666"
  >
    <rect x="-129" y="-33" rx="0" ry="0" width="803" height="552" />
  </ContentLoader>
);

export default PrincipalImageSkeleton;
