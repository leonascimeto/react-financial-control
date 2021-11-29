import { format } from 'date-fns';

const formatDate = (date: string): string => {
  const dateData = new Date(date);
  return format(dateData, 'dd-MM-yyyy');
};

export default formatDate;