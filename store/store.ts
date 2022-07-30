import { atom } from 'recoil';

const copyState = atom({
  key: 'copyState',
  default: true,
});

export default copyState;
const loginState = atom({
  key: 'loginState',
  default: false,
});

const modalState = atom({
  key: 'modalState',
  default: false,
});

const joinState = atom({
  key: 'joinState',
  default: {
    accessToken: '',
    job: '',
    year: '',
    nickname: '',
    userPhase: '',
  },
});

export { loginState, joinState, modalState };
