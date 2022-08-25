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

const copyState = atom({
  key: 'copyState',
  default: true,
});

export default copyState;

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
    jobName: '',
    profileImageUrl: '',
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

export const memoState = atom({
  key: `memoState/${v1()}`,
  default: false,
});

export const modalTitleState = atom({
  key: `modalTitle/${v1()}`,
  default: 'MY GEMBOX',
});

export const linkIdsState = atom({
  key: `linkIds/${v1()}`,
  default: [0],
});

export const deleteMemoState = atom({
  key: `memoDeleteState/${v1()}`,
  default: false,
});

export { loginState, joinState, modalState, userInfo };
