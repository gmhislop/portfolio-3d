import { OrbitControls } from '@react-three/drei';
import { Avatar } from '../common/avatar';

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Avatar />
      <ambientLight intensity={1} />
    </>
  );
};
