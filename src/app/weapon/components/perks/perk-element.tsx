import * as React from 'react';

type Props = {
  name: string
};

export function PerkElement(props: Props) {
  return (
    <div>
      {/*icon*/}
      <p>{props.name}</p>
    </div>
  );
};