import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { BaseStyles, Box, Button, Heading, NavList, SplitPageLayout, Text, ThemeProvider } from '@primer/react';

function CommandView() {
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
        Danger zone
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

function Spacer() {
  return <Box flexGrow={1} />;
}

function ContentView() {
  return (
    <SplitPageLayout sx={{ flexGrow: 1, flex: 1, display: 'flex' }}>
    <SplitPageLayout.Pane position="start">
      <>
      <NavList aria-label="Main navigation">
        <NavList.Item href="#">Profile</NavList.Item>
        <NavList.Item href="#" aria-current="page">
          Account
        </NavList.Item>
        <NavList.Item href="#">Emails</NavList.Item>
        <NavList.Item href="#">Notifications</NavList.Item>
      </NavList>
      <Spacer />
      </>
    </SplitPageLayout.Pane>
    <SplitPageLayout.Content>
      <Router>
          <Routes>
            <Route path="/" element={<CommandView />} />
          </Routes>
        </Router>
    </SplitPageLayout.Content>
  </SplitPageLayout>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BaseStyles className="flex-1" display="flex" flex={1} flexDirection={'column'} sx={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
        <ContentView />
      </BaseStyles>
    </ThemeProvider>
  )
}
