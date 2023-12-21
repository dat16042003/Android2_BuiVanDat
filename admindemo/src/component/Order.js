import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  EditButton,
  TextInput,
  //Create,
  DeleteButton,
} from "react-admin";

export const listOrder = (props) => (
  <List {...props} resource="orders"> {/* Set the resource to "orders" */}
    <Datagrid>
      <TextField source="id" />
      <TextField source="fullname" label="Customer Name" /> {/* Update the source to match Order fields */}
      <TextField source="email" />
      <TextField source="productId" label="Product ID" />
      <TextField source="price" />
      <TextField source="qty" />
      <TextField source="amount" />
      <TextField source="status" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const editOrder = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="fullname" label="Customer Name" />
      <TextInput source="email" />
      <TextInput source="productId" label="Product ID" />
      <TextInput source="price" />
      <TextInput source="qty" />
      <TextInput source="amount" />
      <TextInput source="status" />
    </SimpleForm>
  </Edit>
);


