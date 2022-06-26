import { atom, selector, selectorFamily } from 'recoil';
import axios from 'axios';

const counterAtomState = atom({
  key: 'counterAtomState',
  default: 1,
});

const stringAtomState = atom({
  key: 'stringAtomState',
  default: 'default',
});

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
  },
});

const counterSelectorState = selector<number | boolean>({
  key: 'counterSelectorState',
  get: ({ get }) => {
    const legnth = get(counterAtomState);

    if (legnth > 10) {
      return true;
    }

    return false;
  },
  set: ({ set, reset }, newValue) => {
    if (typeof newValue === 'number') {
      set(counterAtomState, newValue);
    } else {
      reset(counterAtomState);
    }
  },
});

const testAsyncSelector = selectorFamily({
  key: 'counterSelectorState',
  get: (param: number) => async () => {
    try {
      const response = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${param}.json?print=pretty`
      );
      return response.data;
    } catch (e) {
      const error = e as Error;
      return { isSuccess: false, errMsg: error.message };
    }
  },
});

export {
  counterAtomState,
  stringAtomState,
  counterSelectorState,
  testAsyncSelector,
  loginState,
  joinState,
};
