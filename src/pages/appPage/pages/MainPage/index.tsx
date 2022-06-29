import React from 'react';
import { MainLabelContainer } from 'containers/mainLabelContainer';
import { ColorContainer } from 'containers/colorContainer';
import { PS_MAIN_WHITE, PS_PRIMARY_BACKGROUND } from 'mainStyles/GlobalTheme';
import { TableMainContainer } from 'containers/tableMainContainer';
import { NewsContainer } from 'containers/newsContainer';
import { DocumentContainer } from 'containers/documentContainer';
import { QuestionsContainer } from 'containers/questionsContainer';
import { maxWidthContainer } from 'pages/appPage';

export const MainPage = () => {
  return (
    <>
      <ColorContainer width={maxWidthContainer} color={PS_PRIMARY_BACKGROUND}>
        <MainLabelContainer />
      </ColorContainer>
      <ColorContainer width={maxWidthContainer} color={PS_MAIN_WHITE}>
        <TableMainContainer />
      </ColorContainer>
      <ColorContainer width={maxWidthContainer} color={PS_PRIMARY_BACKGROUND}>
        <NewsContainer />
      </ColorContainer>
      <ColorContainer width={maxWidthContainer} color={PS_MAIN_WHITE}>
        <DocumentContainer />
      </ColorContainer>
      <ColorContainer width={maxWidthContainer} color={PS_PRIMARY_BACKGROUND}>
        <QuestionsContainer />
      </ColorContainer>
    </>
  );
};
