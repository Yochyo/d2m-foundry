import * as React from 'react';
import {PerkElement} from "@/app/weapon/components/perks/perk-element";
import {PerkCombination} from "@/models";

type Props = {
  perks: PerkCombination
};

export function PerkCombinationElement(props: Props) {
  console.log(JSON.stringify(props.perks))
  return (
    <div className={'flex flex-row w-full'}>
      {
        [0, 1].map(i => <div key={i} className={'flex-1 text-center'}>
          {
            props.perks?.perks?.[i] && <PerkElement name={props.perks.perks[i].name}/>
          }
        </div>)
      }
    </div>
  );
}