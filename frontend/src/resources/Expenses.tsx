//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const ExpensesTitle = () => {
  const record = useRecordContext();
  return <span>Expenses {record ? `"${record.id}"` : ''}</span>;
};

export const ExpensesList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <NumberField source="ExpenseID" />
      <DateField source="DateAndTime" />
      <NumberField source="Amount" />
      <TextField source="Category" />
      <TextField source="Description" />
      <TextField source="PaymentMethod" />
      <TextField source="PurchaseLocation" />
      <TextField source="Recipient" />
      <TextField source="Status" />
      <ImageField source="ReceiptPhotoScan" />
      <TextField source="Recurrence" />
      <TextField source="Currency" />
      <ReferenceField source="User" reference="Users" />
      <TextField source="ProjectGoal" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const ExpensesEdit = () => (
  <Edit title={<ExpensesTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <NumberInput source="ExpenseID" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="DateAndTime" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="Amount" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Category" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Description" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="PaymentMethod" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="PurchaseLocation" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Recipient" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Status" />
        </Grid>
        <Grid item xs={4}>
          <ImageInput source="ReceiptPhotoScan" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Recurrence" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Currency" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="User" reference="Users" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="ProjectGoal" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const ExpensesCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <NumberInput source="ExpenseID" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="DateAndTime" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="Amount" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Category" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Description" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="PaymentMethod" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="PurchaseLocation" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Recipient" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Status" />
        </Grid>
        <Grid item xs={4}>
          <ImageInput source="ReceiptPhotoScan" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Recurrence" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Currency" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="User" reference="Users" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="ProjectGoal" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  <ReferenceInput source="User" label="User" reference="Users" alwaysOn />,
  ,
];
