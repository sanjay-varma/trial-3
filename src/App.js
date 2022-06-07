import logo from './logo.svg';
import './App.css';
import { Stack, Grid, Paper, styled, Typography, Button, Card, Icon, IconButton } from '@mui/material';
import { ArrowForward, CoPresent } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div>
      <header>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <Stack>
                <Typography variant="h6">Always know what you will pay</Typography>
                <Typography variant="subtitle">
                  Once you are setup instantly withdraw payments or deposit
                  into your bank account within 2-3 business days
                </Typography>
                <Button endIcon={<ArrowForward />}>
                  Learn more
                </Button>
              </Stack>
            </Item>
          </Grid>
        </Grid>
      </header>

      <Grid container>
        <Grid item xs={12} md={6}>
          <Item>
            <Grid container >
              <Grid item xs={12}>
                <Stack>
                  <Typography variant='h3'>15%</Typography>
                  <Typography variant="subtitle">Per successful transaction</Typography>
                  <Stack direction='row' >
                    <IconButton aria-label='account creation'>
                      <Stack>
                        <CoPresent fontSize='large' />
                        <Typography>Account Creation</Typography>
                      </Stack>
                    </IconButton>
                    <IconButton aria-label='account creation'>
                      <Stack>
                        <CoPresent fontSize='large' />
                        <Typography>Professional Account</Typography>
                      </Stack>
                    </IconButton>
                  </Stack >
                  <Typography variant="subtitle">
                    Included for 3 months
                    then $2.5/monthly included VAT
                  </Typography>
                  <Button endIcon={<ArrowForward />}>
                    Get Started
                  </Button>
                </Stack>
              </Grid>
              <Grid item xs={6}>

              </Grid>
            </Grid>

          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>
            <Card>
              <CoPresent fontSize='large' />
              <Typography variant='h4'>Customized</Typography>
              <Typography>Design a custom package for your business.</Typography>
              <Typography>Avaliable for businesses with large payment volume or unique business models.</Typography>
              <Button contained >
                Contact Sales
              </Button>
            </Card>
          </Item>
        </Grid>
      </Grid>


    </div>
  );
}

export default App;
