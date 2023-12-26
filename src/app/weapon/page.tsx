import * as React from 'react';
import {Header} from "@/app/weapon/components/header";
import {WeaponHeader} from "@/app/weapon/components/weapon-header";
import {WeaponStats} from "@/app/weapon/components/weapon-stats";
import {BuffContainer} from "@/app/weapon/components/buff-container";
import {PerkContainer} from "@/app/weapon/components/perks/perk-container";
import {Footer} from "@/app/weapon/components/footer";
import {EntityContainer} from "@/app/weapon/components/entities/entity-container";
import {Weapon} from "@/models";

type Props = {};

export default async function Page(props: Props) {
  const weapon: Weapon = await (await fetch(`https://d2mc-api.sherry.moe/api/weapons/653d4a3f0b0202a12ec9a335?locale=undefined&draft=false&depth=1`)).json()

  return (
    <div>
      <Header/>
      <WeaponHeader weapon={weapon}/>
      <div className='grid grid-cols-[3fr_6fr_4fr] gap-16 m-16'>
        <WeaponStats weapon={weapon}/>
        <div className={'grid gap-4'}>
          <PerkContainer originPerks={weapon.originPerks} perks={weapon.perkCombinations}/>
          {/*<EntityContainer/>*/}
        </div>
        <BuffContainer/>
      </div>
      <Footer/>
    </div>
  );
};