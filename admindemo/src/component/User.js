import React from "react";
import {
  List,
  Datagrid,
  TextField,
  // Edit,
  // SimpleForm,
  EditButton,
  DeleteButton,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  // TextInput,
  // NumberInput,
  // Create,
} from "react-admin";






export const ListUser = (props) => (
    <List {...props}>
      <Datagrid style={{ overflowX: "auto" }}>
        <TextField source="id" />
        <TextField source="fullname" />
        <TextField source="password" />
        <TextField source="email" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
  export const editUser = (props) => {
    return (
      <Edit {...props}>
        <SimpleForm>
          <TextInput source="fullname" />
          <TextInput source="password" />
          <TextInput source="email" />
        </SimpleForm>
      </Edit>
    );
  };
  export const createUser = (props) => (
    <Create {...props}>
      <SimpleForm>
      <TextInput source="fullname" />
      <TextInput source="password" />
          <TextInput source="email" />
      </SimpleForm>
    </Create>
  );
  