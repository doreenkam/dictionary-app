import { gql } from '@apollo/client';

export const getWordOfDayQuery = gql`
  {
    words {
      text
      date
      id
    }
  }
`;
