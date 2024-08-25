function formatPhoneNumber(phoneNumber) {
  const cleaned = phoneNumber.replace(/-/g, '');
  return cleaned;
}
  
export default formatPhoneNumber;