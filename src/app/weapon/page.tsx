import * as React from 'react';
import {Header} from "@/app/weapon/components/header";
import {WeaponHeader} from "@/app/weapon/components/weapon-header";
import {WeaponStats} from "@/app/weapon/components/weapon-stats";
import {EnemyDmgCalculatorContainer} from "@/app/weapon/components/enemy-dmg-calculator-container";
import {BuffContainer} from "@/app/weapon/components/buff-container";
import {PerkContainer} from "@/app/weapon/components/perks/perk-container";

type Props = {};

export default function Page(props: Props) {
    return (
        <div>
            <Header/>
            <WeaponHeader/>
            <div className='grid grid-cols-[3fr_6fr_4fr] gap-16 mx-16'>
                <WeaponStats/>
                <div>
                    <PerkContainer/>
                    <EnemyDmgCalculatorContainer/>
                </div>
                <BuffContainer/>
            </div>
        </div>
    );
};