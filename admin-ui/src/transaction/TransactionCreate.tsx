import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <DateTimeInput label="Date" source="date" />
        <ReferenceInput
          source="receiverAccountId.id"
          reference="Account"
          label="ReceiverAccountID"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="senderAccountId.id"
          reference="Account"
          label="SenderAccountID"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <TextInput label="Status" source="status" />
        <TextInput label="Transaction Type" source="transactionType" />
      </SimpleForm>
    </Create>
  );
};
