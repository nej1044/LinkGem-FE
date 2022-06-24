import React from 'react';
import JoinDropDown from 'components/atom/DropDown/JoinDropDown';
// import JoinButton from 'components/atom/Button/JoinButton';
import JoinProgressBar from 'components/atom/ProgressBar/JoinProgressBar';
import { JobInfoContainer, JobText } from './JobInfo.style';

type ofof = {
  titleText: string;
  width: string;
  stage: string;
  buttonText: string;
  buttonColor: string;
  defaultCategory: string[];
};

interface JobInfoProps {
  infoProps: ofof;
  dropDownDefaultText: string;
}

function JobInfo({ infoProps, dropDownDefaultText }: JobInfoProps) {
  console.log('infoProps');
  console.log(typeof infoProps.defaultCategory);
  console.log(infoProps.defaultCategory);
  console.log('123123');
  console.log('dropDownDefaultText');
  console.log(dropDownDefaultText);
  return (
    <JobInfoContainer>
      <JoinProgressBar width={infoProps.width} stage={infoProps.stage} />
      <JobText>{infoProps.titleText}</JobText>

      <JoinDropDown
        dropDownList={infoProps.defaultCategory}
        dropDownHeader={dropDownDefaultText}
      />
      {/* <JoinButton text="다음" color="#3C3C3F" /> */}
    </JobInfoContainer>
  );
}

export default JobInfo;
