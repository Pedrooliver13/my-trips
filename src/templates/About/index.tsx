import { CloseOutline } from '@styled-icons/evaicons-outline';
import LinkWrapper from 'components/LinkWrapper';

import * as S from './styles';

const AboutTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} arial-label="Close" />
      </LinkWrapper>

      <S.Heading>My Trips</S.Heading>

      <S.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eveniet
        odit quas consectetur totam excepturi quod libero ratione dignissimos
        necessitatibus explicabo ex quam. Similique perferendis aspernatur
        accusamus! Maiores, tempore obcaecati!
      </S.Body>
    </S.Content>
  );
};

export default AboutTemplate;
