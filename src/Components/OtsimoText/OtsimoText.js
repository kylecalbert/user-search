import { sizes, fontWeight } from '../../constants/sizes';
export const OtsimoText = ({ variant, children }) => {
  let textStyle = {};
  if (variant === 'heading') {
    textStyle = { fontSize: sizes.medium, fontWeight: fontWeight.bold };
  } else if (variant === 'body') {
    textStyle = { fontSize: sizes.small };
  }

  return <span style={textStyle}>{children}</span>;
};

export default OtsimoText;
