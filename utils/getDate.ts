export const getDate = (myDate: string) => {
  const date = new Date(myDate);
  const year = String(date.getFullYear()).slice(2, 4);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
};
