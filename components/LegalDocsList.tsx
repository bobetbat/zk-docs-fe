import { Card, CardContent, Typography, Button, CardActions } from "@mui/material";

export const LegalDocsList: React.FC<{ signRequests: any[] }> = ({ signRequests }) => {
  return (
    <>
      {signRequests.map((card, index) => (
        <Card key={index} sx={{ marginTop: "16px", backgroundColor: "#f0f0f0" }}>
          <CardContent >
            <Typography variant="h6">FROM WALLET</Typography>
            <Typography variant="body1">{card.address}</Typography>
          </CardContent>
          <CardActions sx={{ padding: '16px', justifyContent: 'flex-end' }}>
            <Button variant="contained">Sign</Button>
            <Button variant="contained">View</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};
