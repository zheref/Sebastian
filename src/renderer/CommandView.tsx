import { Avatar, BaseStyles, Box, Button, Heading, NavList, Octicon, SplitPageLayout, Text, ThemeProvider, Header, CircleOcticon } from '@primer/react';
import { HeartFillIcon, InboxIcon, CalendarIcon, CloudIcon} from '@primer/octicons-react';
import { useParams } from 'react-router-dom';
import { CommandScreen, getOcticonFor, getTitleFor } from '../model/CommandScreen';
import React from 'react';



const CommandHeader = ({ title, screen }: { title: string, screen: CommandScreen }) => {
  return (
    <Header>
    <Header.Item>
      <Header.Link
        href="#"
        sx={{
          fontSize: 2,
        }}
      >
        <Octicon
          icon={getOcticonFor(screen)}
          size={32}
          sx={{
            mr: 2,
          }}
        />
        <span>{title}</span>
      </Header.Link>
    </Header.Item>
    <Header.Item full>Menu</Header.Item>
    <Header.Item
      sx={{
        mr: 0,
      }}
    >
      <Avatar
        src="https://github.com/octocat.png"
        size={20}
        square
        alt="@octocat"
      />
    </Header.Item>
  </Header>
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
      </Box>

    </Box>
  )
}
