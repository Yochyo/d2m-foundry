import * as React from 'react';
import {MinidenticonImg} from "@/app/weapon/components/icon";
import Image from "next/image";
import {Weapon} from "@/models";

type Props = {
  weapon: Weapon
};

export function WeaponHeader({weapon}: Props) {
    return (
        <div className='flex flex-row mx-20 my-8'>
            <div className="avatar mr-8">
                <div className="w-24 rounded border border-red-600">
                  <Image src={'https://d2mc-api.sherry.moe' + weapon.image?.url} alt={''} width={96} height={96} className={'p-2'} style={{objectFit: 'contain'}}/>
                </div>
            </div>
            <div className='flex flex-col'>
                <h4 className={'text-xl font-bold'}>Nameless Midnight</h4>
                <p>Scoutrifle</p>
            </div>
        </div>
    );
};