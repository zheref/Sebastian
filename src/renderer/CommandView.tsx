import { Avatar, BaseStyles, Box, Button, Heading, NavList, Octicon, SplitPageLayout, Text, ThemeProvider, Header, CircleOcticon, ActionMenu, ActionList } from '@primer/react';
import { HeartFillIcon, InboxIcon, CalendarIcon, CloudIcon, PlayIcon} from '@primer/octicons-react';
import { useParams } from 'react-router-dom';
import { CommandScreen, getOcticonFor, getTitleFor } from '../model/CommandScreen';
import React from 'react';
import { getPerformanceClasses } from '../commands/CommandFlow';



const CommandHeader = ({ title, screen }: { title: string, screen: CommandScreen }) => {
  return (
    <Header>
      <Header.Item full>
        <Heading sx={{ fontSize: 3, fontWeight: 'normal' }}>{title}</Heading>
      </Header.Item>
      <Header.Item>
        <SelectionMenu />
      </Header.Item>
      <Header.Item>
        <Button variant="primary">
          <Octicon icon={PlayIcon} />
        </Button>
      </Header.Item>
    </Header>
  )
}

const SelectionMenu = () => {
  const options = getPerformanceClasses()
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const selectedType = options[selectedIndex]

  return (
    <ActionMenu>
      <ActionMenu.Button>{selectedType}</ActionMenu.Button>
      <ActionMenu.Overlay width="medium">
        <ActionList>
          {options.map((c, index) =>
            <ActionList.Item onSelect={() => setSelectedIndex(index)}>
              {c}
            </ActionList.Item>
          )}
        </ActionList>
      </ActionMenu.Overlay>
    </ActionMenu>
  )
}

export default function CommandView() {
  const params = useParams();

  console.log(params);
  const initialScreen = params.screen ?? CommandScreen.ClassifyGmail;

  return (
    <Box sx={{ padding: 0 }}>
      <CommandHeader title={getTitleFor(initialScreen as CommandScreen)} screen={initialScreen as CommandScreen} />
      <Box sx={{ padding: 16 }}>
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
      </Box>

    </Box>
  )
}
