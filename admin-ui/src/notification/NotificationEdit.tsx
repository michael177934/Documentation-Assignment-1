import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Message" source="message" />
        <TextInput label="Status" source="status" />
        <ReferenceInput source="userId.id" reference="Account" label="UserID">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
