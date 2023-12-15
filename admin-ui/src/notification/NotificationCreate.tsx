import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Message" source="message" />
        <TextInput label="Status" source="status" />
        <ReferenceInput source="userId.id" reference="Account" label="UserID">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
