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
const NotesTitle = () => {
  const record = useRecordContext();
  return <span>Notes {record ? `"${record.title}"` : ''}</span>;
};

export const NotesList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <NumberField source="noteId" />
      <TextField source="title" />
      <TextField source="content" />
      <DateField source="creationDate" />
      <ReferenceField source="categoryId" reference="Categories" />
      <TextField source="priority" />
      <DateField source="reminder" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const NotesEdit = () => (
  <Edit title={<NotesTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <NumberInput source="noteId" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="title" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="content" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="creationDate" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="categoryId" reference="Categories" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="priority" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="reminder" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const NotesCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <NumberInput source="noteId" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="title" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="content" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="creationDate" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="categoryId" reference="Categories" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="priority" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="reminder" />
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
  <ReferenceInput
    source="categoryId"
    label="categoryId"
    reference="Categories"
    alwaysOn
  />,
  ,
  ,
];
