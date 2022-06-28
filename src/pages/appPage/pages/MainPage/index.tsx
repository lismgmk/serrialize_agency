import React from 'react';
import { HeaderContainer } from 'containers/headerContainer';
import { MainLabelContainer } from 'containers/mainLabelContainer';
import { ColorContainer } from 'containers/colorContainer';
import { PS_MAIN_WHITE, PS_PRIMARY_BACKGROUND } from 'mainStyles/GlobalTheme';
import { TableMainContainer } from 'containers/tableMainContainer';
import { NewsContainer } from 'containers/newsContainer';
import { DocumentContainer } from 'containers/documentContainer';
import { QuestionsContainer } from 'containers/questionsContainer';
import { FooterContainer } from 'containers/footerContainer';

export const MainPage = () => {
  const maxWidthContainer = 1200;
  return (
    <>
      <ColorContainer width={maxWidthContainer} color={PS_MAIN_WHITE}>
        <HeaderContainer />
      </ColorContainer>
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
      <ColorContainer width={maxWidthContainer} color={PS_MAIN_WHITE}>
        <FooterContainer />
      </ColorContainer>
    </>
  );
};
