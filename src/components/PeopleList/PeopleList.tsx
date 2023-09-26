import React from 'react';
import { useParams } from 'react-router-dom';
import { Person } from '../../types';
import { PersonItem } from '../PersonItem/PersonItem';

type Props = {
  people: Person[];
};

export const PeopleList: React.FC<Props> = ({ people }) => {
  const params = useParams();

  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>
        {people.map(person => (
          <PersonItem
            key={person.slug}
            person={person}
            selectedSlug={params.personId || ''}
          />
        ))}
      </tbody>
    </table>
  );
};
