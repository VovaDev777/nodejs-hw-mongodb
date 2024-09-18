import { contactSortList } from '../constants/sorting.js';

const parseSortParams = ({ sortBy, sortOrder }) => {
  const parsedSortOrder = contactSortList.includes(sortOrder)
    ? sortOrder
    : contactSortList[0];
};

export default parseSortParams;
