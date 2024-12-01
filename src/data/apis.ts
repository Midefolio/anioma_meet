const baseUrl = "http://localhost:4000/api/v1";
const loginApi = `${baseUrl}/userAuth/login`;
const createLink = `${baseUrl}/crm/links/new_link`;
const getAllLinks = `${baseUrl}/crm/links`;
const getSingleLink = `${baseUrl}/crm/links/get_link`;
const updateLink = `${baseUrl}/crm/links/update_link`;
const deleteLink = `${baseUrl}/crm/links/delete_link`;

// custormer api
const addCustomers = `${baseUrl}/crm/customer/add`;
const getCustomer = `${baseUrl}/crm/customer/all`;
const updateCustomers = `${baseUrl}/crm/customer/update`;
const deleteCustomers = `${baseUrl}/crm/customer/delete`;

// custormer api
const addMeetings = `${baseUrl}/crm/meetings/add`;
const getMeeting = `${baseUrl}/crm/meetings/all`;
const updateMeeting = `${baseUrl}/crm/meetings/update`;
const deleteMeeting = `${baseUrl}/crm/meetings/delete`;

// custormer api
const addReceipts = `${baseUrl}/crm/receipt/add`;
const getReceipt = `${baseUrl}/crm/receipt/all`;
const deleteReceipt = `${baseUrl}/crm/receipt/delete`;

// invoices api
const addInvoices = `${baseUrl}/crm/invoice/add`;
const getInvoice = `${baseUrl}/crm/invoice/all`;
const updateInvoice = `${baseUrl}/crm/invoice/update`;
const deleteInvoices = `${baseUrl}/crm/invoice/delete`;

export {
  loginApi,
  getAllLinks,
  createLink,
  getSingleLink,
  updateLink,
  deleteLink,
  addCustomers,
  getCustomer,
  updateCustomers,
  deleteCustomers,
  addMeetings,
  getMeeting,
  updateMeeting,
  deleteMeeting,
  addReceipts,
  getReceipt,
  deleteReceipt,
  addInvoices,
  getInvoice,
  updateInvoice,
  deleteInvoices,
};
