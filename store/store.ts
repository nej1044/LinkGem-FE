import { atom } from 'recoil';
import { v1 } from 'uuid';

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


export const createState = atom({
  key: `createState/${v1()}`,
  default: false,
});

export const editState = atom({
  key: `createState/${v1()}`,
  default: false,
});

export const deleteState = atom({
  key: `deleteState/${v1()}`,
  default: false,
});

export const modalTitleState = atom({
  key: `modalTitle/${v1()}`,
  default: 'MY GEMBOX',
});

export { loginState, joinState, modalState, userInfo };

