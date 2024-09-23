import { HeartFillIcon, InboxIcon, CalendarIcon, CloudIcon} from '@primer/octicons-react';
import { Octicon } from '@primer/react';

export enum CommandScreen {
  ClassifyGmail = 'classify-gmail',
  ClassifyOutlook = 'classify-outlook',
  ClassifyICloud = 'classify-icloud',
  ClassifyCorporate = 'classify-corporate',
}

export function getTitleFor(screen: CommandScreen) {
  switch (screen) {
    case CommandScreen.ClassifyGmail:
      return 'Classify Gmail';
    case CommandScreen.ClassifyOutlook:
      return 'Classify Outlook';
    case CommandScreen.ClassifyICloud:
      return 'Classify iCloud';
    case CommandScreen.ClassifyCorporate:
      return 'Classify Corporate';
    default:
      return 'Unknown';
  }
}

export function getAllScreens(): CommandScreen[] {
  return Object.values(CommandScreen).filter(
    (value) => typeof value === 'string'
  ) as CommandScreen[];
}

export function getOcticonFor(screen: CommandScreen): React.ComponentType<React.ComponentProps<typeof Octicon>> {
  switch (screen) {
    case CommandScreen.ClassifyGmail:
      return InboxIcon;
    case CommandScreen.ClassifyOutlook:
      return CalendarIcon;
    case CommandScreen.ClassifyICloud:
      return CloudIcon;
    default:
      return HeartFillIcon;
  }
}
