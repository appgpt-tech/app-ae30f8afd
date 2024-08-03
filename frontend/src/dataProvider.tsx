//Source code generated by AppGPT (www.appgpt.tech)
import { GetListParams } from 'ra-core';
import postgrestRestProvider from '@promitheus/ra-data-postgrest';
import qs from 'qs';

const fieldConfig = {
  Transactions: [
    {
      field: 'TransactionID',
      datatype: 'Integer',
    },
    {
      field: 'DateAndTime',
      datatype: 'DateTime',
    },
    {
      field: 'Amount',
      datatype: 'Real',
    },
    {
      field: 'TransactionType',
      datatype: 'String',
    },
    {
      field: 'TransactionStatus',
      datatype: 'String',
    },
    {
      field: 'SenderAccount',
      datatype: 'String',
    },
    {
      field: 'RecipientAccount',
      datatype: 'String',
    },
    {
      field: 'Comment',
      datatype: 'String',
    },
    {
      field: 'Category',
      datatype: 'String',
    },
    {
      field: 'PaymentMethod',
      datatype: 'String',
    },
    {
      field: 'id',
      datatype: 'Integer',
    },
  ],
  Expenses: [
    {
      field: 'ExpenseID',
      datatype: 'Integer',
    },
    {
      field: 'DateAndTime',
      datatype: 'DateTime',
    },
    {
      field: 'Amount',
      datatype: 'Real',
    },
    {
      field: 'Category',
      datatype: 'String',
    },
    {
      field: 'Description',
      datatype: 'String',
    },
    {
      field: 'PaymentMethod',
      datatype: 'String',
    },
    {
      field: 'PurchaseLocation',
      datatype: 'String',
    },
    {
      field: 'Recipient',
      datatype: 'String',
    },
    {
      field: 'Status',
      datatype: 'String',
    },
    {
      field: 'ReceiptPhotoScan',
      datatype: 'String',
    },
    {
      field: 'Recurrence',
      datatype: 'String',
    },
    {
      field: 'Currency',
      datatype: 'String',
    },
    {
      field: 'User',
      datatype: 'Integer',
    },
    {
      field: 'ProjectGoal',
      datatype: 'String',
    },
    {
      field: 'id',
      datatype: 'Integer',
    },
  ],
  Incomes: [
    {
      field: 'IncomeID',
      datatype: 'Integer',
    },
    {
      field: 'DateAndTime',
      datatype: 'DateTime',
    },
    {
      field: 'Amount',
      datatype: 'Real',
    },
    {
      field: 'Source',
      datatype: 'String',
    },
    {
      field: 'Description',
      datatype: 'String',
    },
    {
      field: 'IncomeType',
      datatype: 'String',
    },
    {
      field: 'Status',
      datatype: 'String',
    },
    {
      field: 'PaymentMethod',
      datatype: 'String',
    },
    {
      field: 'Investment',
      datatype: 'String',
    },
    {
      field: 'Taxes',
      datatype: 'Real',
    },
    {
      field: 'User',
      datatype: 'Integer',
    },
    {
      field: 'Recurrence',
      datatype: 'String',
    },
    {
      field: 'Currency',
      datatype: 'String',
    },
    {
      field: 'ProjectOrGoal',
      datatype: 'String',
    },
    {
      field: 'id',
      datatype: 'Integer',
    },
  ],
  Reports: [
    {
      field: 'ReportID',
      datatype: 'Integer',
    },
    {
      field: 'CreationDate',
      datatype: 'DateTime',
    },
    {
      field: 'ReportType',
      datatype: 'String',
    },
    {
      field: 'Period',
      datatype: 'String',
    },
    {
      field: 'Author',
      datatype: 'String',
    },
    {
      field: 'ReportPurpose',
      datatype: 'String',
    },
    {
      field: 'Description',
      datatype: 'String',
    },
    {
      field: 'ReportData',
      datatype: 'String',
    },
    {
      field: 'ReportStatus',
      datatype: 'String',
    },
    {
      field: 'Recipient',
      datatype: 'String',
    },
    {
      field: 'FilesAndAttachments',
      datatype: 'String',
    },
    {
      field: 'CommentsAndRemarks',
      datatype: 'String',
    },
    {
      field: 'MethodsAndSourcesUsed',
      datatype: 'String',
    },
    {
      field: 'SummaryOrConclusions',
      datatype: 'String',
    },
    {
      field: 'SignatureAndApproval',
      datatype: 'String',
    },
    {
      field: 'id',
      datatype: 'Integer',
    },
  ],
  Reminders: [
    {
      field: 'ReminderID',
      datatype: 'Integer',
    },
    {
      field: 'Title',
      datatype: 'String',
    },
    {
      field: 'Description',
      datatype: 'String',
    },
    {
      field: 'DateAndTime',
      datatype: 'DateTime',
    },
    {
      field: 'Recurrence',
      datatype: 'String',
    },
    {
      field: 'Priority',
      datatype: 'String',
    },
    {
      field: 'Category',
      datatype: 'String',
    },
    {
      field: 'RelatedIndividuals',
      datatype: 'String',
    },
    {
      field: 'Location',
      datatype: 'String',
    },
    {
      field: 'Status',
      datatype: 'String',
    },
    {
      field: 'Notifications',
      datatype: 'String',
    },
    {
      field: 'ColorLabel',
      datatype: 'String',
    },
    {
      field: 'Attachments',
      datatype: 'String',
    },
    {
      field: 'Creator',
      datatype: 'String',
    },
    {
      field: 'AdditionalNotes',
      datatype: 'String',
    },
    {
      field: 'id',
      datatype: 'Integer',
    },
  ],
  Tasks: [
    {
      field: 'TaskID',
      datatype: 'Integer',
    },
    {
      field: 'Title',
      datatype: 'String',
    },
    {
      field: 'Description',
      datatype: 'String',
    },
    {
      field: 'StartDate',
      datatype: 'DateTime',
    },
    {
      field: 'DueDate',
      datatype: 'DateTime',
    },
    {
      field: 'Priority',
      datatype: 'String',
    },
    {
      field: 'Status',
      datatype: 'String',
    },
    {
      field: 'Assignee',
      datatype: 'String',
    },
    {
      field: 'Category',
      datatype: 'String',
    },
    {
      field: 'Tags',
      datatype: 'String',
    },
    {
      field: 'Progress',
      datatype: 'Real',
    },
    {
      field: 'Dependencies',
      datatype: 'String',
    },
    {
      field: 'Attachments',
      datatype: 'String',
    },
    {
      field: 'Comments',
      datatype: 'String',
    },
    {
      field: 'ChangeHistory',
      datatype: 'String',
    },
    {
      field: 'id',
      datatype: 'Integer',
    },
  ],
  Notes: [
    {
      field: 'noteId',
      datatype: 'Integer',
    },
    {
      field: 'title',
      datatype: 'String',
    },
    {
      field: 'content',
      datatype: 'String',
    },
    {
      field: 'creationDate',
      datatype: 'DateTime',
    },
    {
      field: 'categoryId',
      datatype: 'Integer',
    },
    {
      field: 'priority',
      datatype: 'String',
    },
    {
      field: 'reminder',
      datatype: 'DateTime',
    },
    {
      field: 'id',
      datatype: 'Integer',
    },
  ],
};

export const customDataProvider = (apiUrl, options = {}) => {
  const baseDataProvider = postgrestRestProvider(apiUrl);
  return {
    ...baseDataProvider,
    getList: async (resource, params) => {
      if (params.filter && params.filter.q) {
        return await GetListQ(resource, params, apiUrl, baseDataProvider);
      } else {
        return baseDataProvider.getList(resource, params);
      }
    },
  };
};

async function GetListQ(
  resource,
  params: Partial<GetListParams> = {},
  apiUrl,
  baseDataProvider,
) {
  const { page, perPage } = params.pagination;
  const { field, order } = params.sort || {};
  const searchText = params.filter.q.toLowerCase();

  let filter = { or: '(id.eq.-1)' }; //return no data if resource has not been configured
  if (fieldConfig[resource]) {
    let searchConditions = fieldConfig[resource].reduce(
      (conditions, { field, datatype }) =>
        conditions +
        (datatype == 'String'
          ? field + '.ilike.%' + searchText + '%,'
          : //Todo: add support for searching other types
            ''),
      '',
    );
    filter = { or: '(' + searchConditions.slice(0, -1) + ')' };
  }
  let query = {
    offset: String((page - 1) * perPage),
    limit: String(perPage),
    // append filters
    ...filter,
  };

  if (field && order) {
    query.order = field + '.' + order.toLowerCase();
  }

  // add header that Content-Range is in returned header
  const options = {
    headers: new Headers({
      Accept: 'application/json',
      Prefer: 'count=exact',
      ...(params.meta?.headers || {}),
      //...useCustomSchema(config.schema, metaSchema, 'GET'),
    }),
  };

  const url = apiUrl + '/' + resource + '?' + qs.stringify(query);
  const response = await fetch(url, options);
  if (!response.ok) {
    const message = 'An error has occured: ' + response.status;
    throw new Error(message);
  }
  if (!response.headers.has('content-range')) {
    throw new Error(
      `The Content-Range header is missing in the HTTP Response. The postgREST data provider expects 
            responses for lists of resources to contain this header with the total number of results to build 
            the pagination. If you are using CORS, did you declare Content-Range in the Access-Control-Expose-Headers header?`,
    );
  }
  const json = await response.json();
  return {
    data: json,
    total: parseInt(response.headers.get('content-range').split('/').pop(), 10),
  };
}
