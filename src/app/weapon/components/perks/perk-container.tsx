import * as React from 'react';
import {PerkCombinationElement} from "@/app/weapon/components/perks/perk-combination-element";
import {PerkElement} from "@/app/weapon/components/perks/perk-element";
import {OriginPerk, Perk, PerkCombination} from "@/models";

type Props = {
  perks: PerkCombination[],
  originPerks: OriginPerk[]
};

export function PerkContainer({perks, originPerks}: Props) {
  return (
    <div className="card bg-base-200 p-4 shadow-sm grid grid-cols-[2fr_0fr_1fr] gap-y-2">
      {/*PerkCombinations*/}
      <div className={'flex flex-col'}>
        {
          perks?.map(it => <div key={it.id} className={'btn no-animation'}>
            <PerkCombinationElement perks={it}/>
          </div>)
        }
      </div>
      <div className="divider divider-horizontal mx-2 -my-1"></div>

      {/*OriginPerks*/}
      <div className={'flex flex-col'}>
        {
          originPerks?.map(it => <div key={it.id} className={'btn no-animation'}>
            <PerkElement name={it.name}/>
          </div>)
        }
      </div>

    </div>
  )
}