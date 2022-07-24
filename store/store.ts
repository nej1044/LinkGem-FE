import { atom } from 'recoil';

const loginState = atom({
  key: 'loginState',
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

export { loginState, joinState };
