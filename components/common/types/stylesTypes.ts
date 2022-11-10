export interface StyleTypes {
  // font 관련
  color?: string;
  fontSize?: string;
  fontWeight?: string | number;
  fontFamily?: string;
  fontShadow?: string;
  textAlign?: string;
  lineHeight?: string;
  textDecoration?: string;
  letterSpacing?: string;
  textOverflow?: string;
  whiteSpace?: string;
  wordBreak?: string;

  // margin 관련
  margin?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;

  // padding 관련
  padding?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;

  // border 관련
  border?: string;
  borderColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  borderLeft?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderStyle?: string;
  borderWidth?: string;

  // background 관련
  background?: string;
  backgroundColor?: string;
  backgroundImage?: string;

  // display && position 관련
  flexDirection?: string;
  display?: string;
  position?: string;
  alignItems?: string;
  justifyContent?: string;
  flexWrap?: string;

  // width && height
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;

  // 기타
  opacity?: string;
  filter?: string;
  cursor?: string;
  transition?: string;
  transform?: string;
  overflow?: string;
  verticalAlign?: string;
  WebkitBoxOrient?: string;
  WebkitLineClamp?: string;
  zIndex?: number | string;
  visibility?: string;
  outlineColor?: string;
  zoom?: string;

  // 위치 관련
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}
