import StyledLoading from "./style";
import Skeleton from "@mui/material/Skeleton";

const Loading = () => {
  return (
    <StyledLoading>
      <Skeleton variant="rectangular" width={310} height={118} />
      <Skeleton />
      <Skeleton width="60%" />
    </StyledLoading>
  );
};

export default Loading;
