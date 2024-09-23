import { MemoryRouter as Router, Routes, Route, Link, useParams, useNavigate, MemoryRouter } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { BaseStyles, Box, Button, Heading, NavList, Octicon, SplitPageLayout, Text, theme, ThemeProvider } from '@primer/react';
import CommandView from './CommandView';
import { CommandScreen, getAllScreens, getOcticonFor, getTitleFor } from '../model/CommandScreen';
import { useCallback, useState } from 'react';
import deepmerge from 'deepmerge'

const customTheme = deepmerge(theme, {
  fonts: {
    normal: 'Montserrat, Open Sans, SF Compact, Skia, Helvetica Neue, Helvetica, Arial, sans-serif',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
})

function Spacer() {
  return <Box flexGrow={1} />;
}

interface ContentViewProps {

}

function ContentView() {
  const params = useParams();
  const navigate = useNavigate();

  console.log(params);
  // const initialScreen = params.screen ?? CommandScreen.ClassifyGmail;
  const initialScreen = CommandScreen.ClassifyGmail;
  console.log(initialScreen);
  const [selectedScreen, setSelectedScreen] = useState<CommandScreen>(initialScreen as CommandScreen);

  const userDidTapScreen = useCallback((screen: CommandScreen) => {
    setSelectedScreen(screen);
    navigate(`/${screen}`);
  }, [navigate]);

  return (
    <SplitPageLayout sx={{ flexGrow: 1, flex: 1, display: 'flex', padding: 0 }}>
    <SplitPageLayout.Pane position="start">
      <>
      <Heading>Sebastian</Heading>
      <NavList aria-label="Main navigation">
        {getAllScreens().map((screen) => (
          <NavList.Item sx={{ padding: 0 }} key={screen} aria-current={selectedScreen === screen ? 'page' : undefined} onClick={() => userDidTapScreen(screen)}>
            <Octicon icon={getOcticonFor(screen)} sx={{ mr: 2 }} />
            <Text>{getTitleFor(screen)}</Text>
          </NavList.Item>
        ))}
      </NavList>
      <Spacer />
      </>
    </SplitPageLayout.Pane>
    <SplitPageLayout.Content padding='none'>
      <>
        <Routes>
          <Route path="/" element={<CommandView />} />
          <Route path="/:screen" element={<CommandView />} />
        </Routes>
      </>
    </SplitPageLayout.Content>
  </SplitPageLayout>
  )
}

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BaseStyles className="flex-1" display="flex" flex={1} flexDirection={'column'} sx={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
        <MemoryRouter>
          <ContentView />
        </MemoryRouter>
      </BaseStyles>
    </ThemeProvider>
  )
}
