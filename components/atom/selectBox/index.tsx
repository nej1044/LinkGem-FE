import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(1),
  },
  '& .MuiInputBase-input': {
    'borderRadius': 8,
    'position': 'relative',
    'width': '114px',
    'height': '0px',
    'backgroundColor': theme.palette.background.paper,
    'border': '1px solid #ced4da',
    'fontSize': 12,
    'padding': '7px 15px 12px 10px',
    'transition': theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    'fontFamily': [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 8,
      borderColor: '#1px solid #1A1B1D',
    },
  },
}));

const ItemInput = styled(MenuItem)`
  :visited {
    color: #5200ff;
    background-color: #f3edff;
  }
  :focus {
    color: #5200ff;
    background-color: #f3edff;
  }
  :hover {
    background-color: #f3edff;
  }
`;

export type IDataType = {
  id: number;
  name: string;
  imageUrl: string;
  title: string;
};

const SelectBoxPage = (props: { selectList: any[] }) => {
  return (
    <div>
      <FormControl variant="standard">
        <Select
          // value={props.gembox}
          // onChange={props.handleChange}
          input={<BootstrapInput />}
          label="잼박스 선택"
        >
          <MenuItem disabled value="">
            <em>잼박스 선택</em>
          </MenuItem>
          {props.selectList.map((box: IDataType) => (
            <ItemInput key={box.id} value={box.id}>
              {box.name}
            </ItemInput>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectBoxPage;
