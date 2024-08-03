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
const IncomesTitle = () => {
  const record = useRecordContext();
  return <span>Incomes {record ? `"${record.Amount}"` : ''}</span>;
};

export const IncomesList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <NumberField source="IncomeID" />
      <DateField source="DateAndTime" />
      <NumberField source="Amount" />
      <TextField source="Source" />
      <TextField source="Description" />
      <TextField source="IncomeType" />
      <TextField source="Status" />
      <TextField source="PaymentMethod" />
      <TextField source="Investment" />
      <NumberField source="Taxes" />
      <ReferenceField source="User" reference="Users" />
      <TextField source="Recurrence" />
      <TextField source="Currency" />
      <TextField source="ProjectOrGoal" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const IncomesEdit = () => (
  <Edit title={<IncomesTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <NumberInput source="IncomeID" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="DateAndTime" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="Amount" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Source" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Description" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="IncomeType" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Status" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="PaymentMethod" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Investment" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="Taxes" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="User" reference="Users" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Recurrence" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Currency" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="ProjectOrGoal" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const IncomesCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <NumberInput source="IncomeID" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="DateAndTime" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="Amount" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Source" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Description" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="IncomeType" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Status" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="PaymentMethod" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Investment" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="Taxes" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="User" reference="Users" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Recurrence" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Currency" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="ProjectOrGoal" />
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
  <ReferenceInput source="User" label="User" reference="Users" alwaysOn />,
  ,
  ,
  ,
];
