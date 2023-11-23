export const passwordValidate = {
  required: "⚠ Required field",
  pattern: {
    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,20}$/,
    message:
      "⚠ Password must contain an uppercase letter, a lowercase letter, a digit, a special character, and be 8-20 characters long.",
  },
};
export const emailValidate = {
  required: "⚠ Required field",
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "⚠ Invalid email address",
  },
};
export const nameValidate = {
  required: "⚠ Required field",
  minLength: {
    value: 2,
    message: "⚠ Must be at least two characters",
  },
  pattern: {
    value: /^[A-Za-z]+$/,
    message: "⚠ Please enter correct values",
  },
};

export const middleName = {
  minLength: {
    value: 2,
    message: "⚠ Must be at least two characters",
  },
  pattern: {
    value: /^[A-Za-z]+$/,
    message: "⚠ Please enter correct values",
  },
};

export const phoneValidate = {
  required: "⚠ Required field",
  pattern: {
    value: /^\d{7}$/,
    message: "⚠ Invalid Phone Number",
  },
};
export const requiredValidate = {
  required: "⚠ Required field",
};
export const houseValidate = {
  required: "⚠ Required field",
  pattern: {
    value: /^[0-9]+$/,
    message: "⚠ Invalid House Number",
  },
};

export const idValidate = {
  required: "⚠ Required field",
  pattern: {
    value: /^\w{5,10}$/,
    message: "⚠ Invalid Personal ID",
  },
};
