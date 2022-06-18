import React from 'react';
import TestRecoilComponent from 'components/TestRecoilComponent';

function Home() {
  const res = (awdawd: string) => {
    console.log(233);
  };

  awdawd();
  awdawd();
  awdawd();
  awdawd();

  return (
    <>
      <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        awdawd
      </div>
      <TestRecoilComponent />
    </>
  );
}

export default Home;
