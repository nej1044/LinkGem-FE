import { atom } from 'recoil';
import { v1 } from 'uuid';

const loginState = atom({
  key: `loginState//${v1()}`,
  default: false,
});

const modalState = atom({
  key: `modalState/${v1()}`,
  default: false,
});

const joinState = atom({
  key: `joinState/${v1()}`,
  default: {
    accessToken: '',
    job: '',
    year: '',
    nickname: '',
    userPhase: '',
  },
});

const userInfo = atom({
  key: `userInfo/${v1()}`,
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

export const gemboxModalState = atom({
  key: `gemboxModalState/${v1()}`,
  default: {
    open: false,
    boxState: '',
    modalTitle: 'MY GEMBOX',
  },
});
// });

export const linkIdsState = atom({
  key: `linkIds/${v1()}`,
  default: [0],
});

export { loginState, joinState, modalState, userInfo };
