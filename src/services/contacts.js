import Contacts from '../db/models/Contacts.js';
import calculatePaginationData from '../utils/calculatePaginationData.js';
import { contactSortList } from '../constants/sorting.js';

export const getContacts = async ({
  perPage,
  page,
  sortBy = '_id',
  sortOrder = contactSortList[0],
  userId,
}) => {
  
  const skip = (page - 1) * perPage;

  const filter = {};
  if (userId) {
    filter.userId = userId; 
  }
  const data = await Contacts.find(filter)
    .skip(skip)
    .limit(perPage)
    .sort({ [sortBy]: sortOrder });

    console.log(Contacts);

  const count = await Contacts.find(filter).countDocuments();
  const paginationData = calculatePaginationData({ count, perPage, page });

  return {
    data,
    page,
    perPage,
    totalItems: count,
    ...paginationData,
  };
};

export const getContact = filter => Contacts.findOne(filter);

export const createContact = (payload) => Contacts.create(payload);

export const updateContact = async (filter, data, options = {}) => {
  const rawResult = await Contacts.findOneAndUpdate(filter, data, {
    new: true,
    includeResultMetadata: true,
    ...options,
  });
  if (!rawResult || !rawResult.value) return null;

  return {
    data: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};

export const deleteContact = (filter) => Contacts.findOneAndDelete(filter);
