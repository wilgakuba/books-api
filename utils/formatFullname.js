module.exports = (fullName) => {
  if (!fullName) return 'Error';
  if (typeof fullName !== 'string') return 'Error';
  const [firstName, lastName] = fullName.split(' ');
  if (!firstName || !lastName || fullName.split(' ').length !== 2) return 'Error';
  const formattedFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  const formattedLastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
  return `${formattedFirstName} ${formattedLastName}`;
};
