import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => (
  <LoaderWrapper>
    <RotatingLines
      strokeColor=" #b19cd9"
      strokeWidth="5"
      animationDuration="0.75"
      width="46"
      visible={true}
    />
  </LoaderWrapper>
);

export default Loader;
