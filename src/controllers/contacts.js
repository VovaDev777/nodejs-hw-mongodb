import * as contactsServices from '../services/contacts.js';


export const getAllContactsController = async (req, res) => {
    const data = await contactsServices.getAllContacts();
  
    res.json({
      status: 200,
      message: 'Successfully found contacts!',
      data,
    });
  };

  export const getContactByIdController = async (req, res) => {
    const { id } = req.params;
    const data = await contactsServices.getContactById(id);
  
    if (!data) {
      return res.status(404).json({
        message: 'Contact not found',
      });
    }
    res.json({
      status: 200,
      message: `Successfully found contact with id ${id}!`,
      data,
    });
  };