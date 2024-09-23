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
        <Text
            fontFamily="Andale Mono"
            flex={1}
            sx={{
              fontSize: "12px",
              color: 'fg.muted',
              flex: 1,
              width: '100%'
            }}
          >
            Ready.
        </Text>
      </Box>
    </Box>
  )
}
