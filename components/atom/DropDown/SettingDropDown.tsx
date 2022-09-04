import React, {
  useState,
  MouseEvent,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
  ImageButton,
  DropDownHeaderText,
  InputText,
} from './SettingDropDown.style';

type settingDropdownProps = {
  dropDownList: any;
  isModal: boolean;
  handleModal: () => void;
  setForm: Dispatch<
    SetStateAction<{
      nickName: string;
      jobName: string;
      careerYear: string;
      email: string;
      name: string;
    }>
  >;
  info: string | number;
  type: string;
  form: {
    nickName: string;
    jobName: string;
    careerYear: string;
    email: string;
    name: string;
  };
};

function SettingDropdown({
  dropDownList,
  isModal,
  handleModal,
  setForm,
  info,
  type,
  form,
}: settingDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | number>('');
  const [inputText, setInputText] = useState('');

  const toggling = (e: MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    handleModal();
    setInputText('');
  };

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    handleModal();
    setIsOpen(false);
    const _form = { ...form };
    if (type === 'careerYear') {
      setForm({ ..._form, careerYear: value });
    } else if (type === 'jobName') {
      setForm({ ..._form, jobName: value });
    }
  };

  const changeJobInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    setIsOpen(false);
  };
  useEffect(() => {
    setSelectedOption(typeof info === 'number' ? info + '년' : info);
  }, [info]);
  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        <DropDownHeaderText>
          {(typeof selectedOption === 'string' &&
            selectedOption.includes('하시는') && (
              <InputText
                value={inputText}
                onChange={changeJobInputText}
                placeholder="하시는 일을 입력해 주세요"
              />
            )) ||
            selectedOption}
        </DropDownHeaderText>

        {!isOpen ? (
          <ImageButton src="/images/icons/Arrow-Bottom.svg" alt="close" />
        ) : (
          <ImageButton src="/images/icons/Arrow-Top.svg" alt="close" />
        )}
      </DropDownHeader>
      {isOpen && isModal && (
        <DropDownListContainer>
          <DropDownList>
            {dropDownList.map((job: string) => (
              <ListItem onClick={onOptionClicked(job)} key={Math.random()}>
                {job}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}

export default SettingDropdown;
