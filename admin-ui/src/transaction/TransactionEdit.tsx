import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
