const disabledToTrue = (isValid: boolean, isDirty: boolean) =>
  isDirty && isValid ? { disabled: false } : { disabled: true };

export default disabledToTrue;