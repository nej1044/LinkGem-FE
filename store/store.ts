import { atom } from 'recoil';

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

const userInfo = atom({
  key: 'userInfo',
  default: {
    accessToken: '',
    id: 0,
    nickname: '',
    refreshToken: '',
    loginEmail: '',
    mailEmail: '',
    name: '',
    userPhase: '',
  },
});

export { loginState, joinState, modalState, userInfo };
