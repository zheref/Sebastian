import { BaseStyles, Box, Button, Heading, NavList, SplitPageLayout, Text, ThemeProvider } from '@primer/react';
import { useParams } from 'react-router-dom';
import { CommandScreen } from '../model/CommandScreen';

export default function CommandView() {
  const params = useParams();

  console.log(params);
  const initialScreen = params.screen ?? CommandScreen.ClassifyGmail;

  return (
    <>
      <Heading
        as="h2"
        sx={{
          fontSize: 4,
          fontWeight: 'normal',
          color: 'danger.fg',
          mb: 2,
        }}
      >
        {initialScreen}
      </Heading>
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'danger.emphasis',
          borderRadius: 2,
          p: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gap: 1,
          }}
        >
          <Text
            sx={{
              fontSize: 1,
              fontWeight: 'bold',
              color: 'danger.fg',
            }}
          >
            Delete account
          </Text>
          <Text
            sx={{
              fontSize: 1,
              color: 'fg.muted',
            }}
          >
            Are you sure you don&apos;t want to just downgrade your account to a
            free account? We won&apos;t charge your credit card anymore.
          </Text>
        </Box>
        <Button variant="danger">Delete account</Button>
      </Box>
    </>
  )
}
