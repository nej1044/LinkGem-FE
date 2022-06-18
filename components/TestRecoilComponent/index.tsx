import React from 'react';
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import {
  counterAtomState,
  counterSelectorState,
  // testAsyncSelector,
} from 'store/recoilTestState';

function Index() {
  // qwdwddc(3314443);
  const [questions, setQuestions] = useRecoilState(counterAtomState);
  const setIsTen = useSetRecoilState(counterSelectorState);

  const isTen = useRecoilValue(counterSelectorState);
  const resetTem = useResetRecoilState(counterSelectorState);
  const resetCounter = useResetRecoilState(counterAtomState);
  // const wewewe = useRecoilValue(testAsyncSelector(160705));

  return (
    <div>
      {/* <Suspense>{JSON.stringify(wewewe)}</Suspense> */}
      {isTen ? '텐이다' : '아니다'}
      awdawdawd<div>{questions}</div>
      <button
        // className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"'
        type="button"
        onClick={() => setQuestions((prev) => prev + 1)}
      >
        더하기!
      </button>
      <button type="button" onClick={() => setIsTen(23)}>
        selector test
      </button>
      <button type="button" onClick={resetCounter}>
        리셋테스트2
      </button>
      <button type="button" onClick={resetTem}>
        리셋테스트
      </button>
      <button
        type="button"
        // className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => setQuestions((prev) => prev - 1)}
      >
        빼기
      </button>
    </div>
  );
}

export default Index;
