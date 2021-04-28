import React from 'react';
import { Container } from 'semantic-ui-react';
import EntryLine from './EntryLine';

function EntryLines({ entries, setIsOpen, editEntry }) {
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLine
          key={entry.id}
          {...entry}
          setIsOpen={setIsOpen}
          editEntry={editEntry}
        />
      ))}
    </Container>
  );
}

export default EntryLines;