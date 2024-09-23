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
