import { atom } from 'recoil';

const copyState = atom({
  key: 'copyState',
  default: true,
});

export default copyState;
