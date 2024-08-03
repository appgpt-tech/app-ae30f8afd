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
const TasksTitle = () => {
  const record = useRecordContext();
  return <span>Tasks {record ? `"${record.Title}"` : ''}</span>;
};

export const TasksList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <NumberField source="TaskID" />
      <TextField source="Title" />
      <TextField source="Description" />
      <DateField source="StartDate" />
      <DateField source="DueDate" />
      <TextField source="Priority" />
      <TextField source="Status" />
      <TextField source="Assignee" />
      <TextField source="Category" />
      <TextField source="Tags" />
      <NumberField source="Progress" />
      <TextField source="Dependencies" />
      <UrlField source="Attachments" />
      <TextField source="Comments" />
      <TextField source="ChangeHistory" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const TasksEdit = () => (
  <Edit title={<TasksTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <NumberInput source="TaskID" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Title" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Description" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="StartDate" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="DueDate" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Priority" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Status" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Assignee" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Category" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Tags" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="Progress" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Dependencies" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Attachments" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Comments" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="ChangeHistory" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const TasksCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <NumberInput source="TaskID" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Title" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Description" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="StartDate" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="DueDate" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Priority" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Status" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Assignee" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Category" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Tags" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="Progress" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Dependencies" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Attachments" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Comments" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="ChangeHistory" />
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
  ,
  ,
  ,
];
