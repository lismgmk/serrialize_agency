import { UserRoundSvg } from '../../../svgIcons/UserRoundSvg';
import { BellSvg } from '../../../svgIcons/BellSvg';
import { NoteBookmarkSvg } from '../../../svgIcons/NoteBookmarkSvg';
import { PaperSvg } from '../../../svgIcons/PaperSvg';
import { LockClosedSvg } from '../../../svgIcons/LockClosedSvg';
import { DownloadSvg } from '../../../svgIcons/DownloadSvg';

export const useGetIconButtonEffect = () => {
  const getIconButton = (name: string) => {
    switch (name) {
      case 'data':
        return <UserRoundSvg sx={{ width: 25, height: 25 }} color={'inherit'} />;
      case 'notifications':
        return <BellSvg sx={{ width: 25, height: 25 }} color={'inherit'} />;
      case 'registry':
        return <NoteBookmarkSvg sx={{ width: 25, height: 25 }} color={'inherit'} />;
      case 'metaData':
        return <PaperSvg sx={{ width: 25, height: 19, m: 0, p: 0 }} color={'inherit'} />;
      case 'security':
        return <LockClosedSvg sx={{ width: 25, height: 20 }} color={'inherit'} />;
      case 'downloads':
        return <DownloadSvg sx={{ width: 25, height: 20 }} color={'inherit'} />;
      default:
        return 'Unknown';
    }
  };

  return { getIconButton };
};
