import { atom } from 'recoil';
import { v1 } from 'uuid';

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

export { loginState, joinState, modalState };
