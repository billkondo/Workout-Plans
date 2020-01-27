import React from 'react';
import { format } from 'date-fns';

import { AppDate } from 'types/dates';

type Props = {
  dates: AppDate[];
};

const LineDisplay: React.FC<Props> = ({ dates }) => {
  const sortedDates = dates.sort((a, b) => (a.value < b.value ? -1 : 1));

  const currentDate = new Date();
  const currentDateISOString = currentDate.toISOString();

  return (
    <div>
      {sortedDates.map(d => {
        const formatedString = format(Date.parse(d.value), 'dd/MM/yy');
        return (
          <div
            key={d.id}
            style={{
              display: 'inline-block',
              padding: 8,
              textDecoration:
                d.value < currentDateISOString ? 'line-through' : 'none'
            }}
          >
            {formatedString}
          </div>
        );
      })}
    </div>
  );
};

export default LineDisplay;
