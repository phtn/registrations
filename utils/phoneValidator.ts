export const phoneValidator = (phone: string): boolean => {
  if (phone.length < 11) {
    return false;
  }
  return true;
};
