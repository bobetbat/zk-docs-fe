import { Card, CardContent, Button, Typography, TextField, MenuItem, Snackbar, Alert, Stack, CardActions } from "@mui/material";
import { useState } from "react";
const contractTemplates = [
  { label: "Contract Template 1", value: "template1" },
  { label: "Contract Template 2", value: "template2" },
  // Add more contract templates as needed
];
export const CreateLegalDoc = () => {
  const [contractTemplate, setContractTemplate] = useState(""); // State for storing the selected contract template
  const [signerAddress, setSignerAddress] = useState(""); // State for storing the signer address
  const [openSnackbar, setOpenSnackbar] = useState(false); // State for controlling the visibility of the success popup
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Perform any necessary form validation or data handling here

    // Show the success popup
    setOpenSnackbar(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Card sx={{ marginTop: "16px" }}>
          <CardContent component={Stack} gap={1}>
            <TextField
              select
              label="Contract Template"
              value={contractTemplate}
              onChange={(event) => setContractTemplate(event.target.value)}
            >
              {contractTemplates.map((template) => (
                <MenuItem key={template.value} value={template.value}>
                  {template.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Signer Address"
              value={signerAddress}
              onChange={(event) => setSignerAddress(event.target.value)}
            />
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
