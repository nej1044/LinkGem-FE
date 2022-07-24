import BasicInfo from 'components/setting/basicInfo';
import CustomInfomation from 'components/setting/customInfomation';
import SettingTitle from 'components/setting/settingTitle';
import React from 'react';

const index = () => {
  return (
    <section>
      <SettingTitle />
      <BasicInfo />
      <CustomInfomation />
    </section>
  );
};

export default index;
