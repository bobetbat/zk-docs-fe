import { Card, CardContent, Button, Typography, TextField, MenuItem, Snackbar, Alert, Stack, CardActions } from "@mui/material";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from 'react-hook-form';

const contractTemplates = [
  { label: "Lending contract", value: "borrow" },
  { label: "Contract Template", value: "template" },
  // Add more contract templates as needed
];

interface Fields {
  label: string;
  name: string;
  required: boolean;
  type: string;
}

interface Forms {
  [key: string]: Fields[]
}

const formSchema: Forms = {
  borrow: [
    {
      label: "Date",
      name: "Date",
      required: true,
      type: "TextBox"
    },
    {
      label: "Borrower Name",
      name: "Borrower_Name",
      required: true,
      type: "TextBox"
    },
    {
      label: "Lender Name",
      name: "Lender_Name",
      required: true,
      type: "TextBox"
    },
    {
      label: "Amount",
      name: "Amount",
      required: true,
      type: "TextBox"
    },
    {
      label: "Interest Rate",
      name: "Interest_Rate",
      required: true,
      type: "TextBox"
    },
    {
      label: "Due Date",
      name: "Due_Date",
      required: true,
      type: "TextBox"
    },
    {
      label: "Day of Month",
      name: "Day_of_Month",
      required: true,
      type: "TextBox"
    },
    {
      label: "Late Fee",
      name: "Late_Fee",
      required: true,
      type: "TextBox"
    },
    {
      label: "State",
      name: "State",
      required: true,
      type: "TextBox"
    }
  ],
  template: [
    {
      label: 'Borrower Name',
      name: 'borrowerName',
      required: true,
      type: 'text',
    }
  ]
  // Add more fields as needed

};

export const CreateLegalDoc = () => {
  const [contractTemplate, setContractTemplate] = useState("borrow"); // State for storing the selected contract template
  const [openSnackbar, setOpenSnackbar] = useState(false); // State for controlling the visibility of the success popup

  const { reset, getValues, register, handleSubmit } = useForm();
  useEffect(() => {
    reset()
  }, [contractTemplate])

  const onSubmit = (data: any) => {
    // Handle form submission
    const values = getValues();
    console.log(values)
    setOpenSnackbar(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card sx={{ marginTop: "16px" }}>
          <CardContent component={Stack} gap={1}>
            <TextField
              select
              label="Select contract"
              value={contractTemplate}
              onChange={(event) => setContractTemplate(event.target.value)}
            >
              {contractTemplates.map((template) => (
                <MenuItem key={template.value} value={template.value}>
                  {template.label}
                </MenuItem>
              ))}
            </TextField>
            {formSchema[contractTemplate].map((field, index) => (
              <TextField
                key={index}
                label={field.label}
                type={field.type}
                {...register(field.name)}
              />
            ))}
          </CardContent>
          <CardActions sx={{ padding: '16px', paddingTop: 0 }}>
            <Button fullWidth variant="contained" type="submit">Submit</Button>
          </CardActions>
        </Card>
      </form>

      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity="success">
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}
