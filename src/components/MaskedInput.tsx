import React, { forwardRef } from "react";

const MaskedInput = forwardRef<HTMLInputElement, any>((props, ref) => {
  const { mask, ...rest } = props;

  // Apply the mask logic here if needed

  return <input {...rest} ref={ref} />;
});

export default MaskedInput;