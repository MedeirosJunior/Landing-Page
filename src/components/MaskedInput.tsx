import React from "react";
import InputMask from "react-input-mask";

const MaskedInput = React.forwardRef<HTMLInputElement, any>((props, ref) => (
  <InputMask {...props} inputRef={ref} />
));

export default MaskedInput;