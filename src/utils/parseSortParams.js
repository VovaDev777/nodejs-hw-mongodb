import { contactSortList } from '../constants/sorting.js';

const parseSortParams = ({ sortBy, sortFields, sortOrder }) => {
  const parsedSortBy = sortFields.includes(sortBy) ? sortBy : '_id';
  const parsedSortOrder = contactSortList.includes(sortOrder)
    ? sortOrder
    : contactSortList[0];

  return {
    sortBy: parsedSortBy,
    sortOrder: parsedSortOrder,
  };
};

export default parseSortParams;
