import * as React from 'react';
import {Perk} from "@/app/weapon/components/perks/perk";
import {D2Perk} from "@/models/weapon";

type Props = {
    perks: D2Perk[]
};

export function PerkContainer(props: Props) {
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
                <div className={'flex gap-4'}>
                    <div className={'flex-1 gap-4'}>
                        <div className={'grid grid-cols-2'}>
                            <Perk/>
                            <Perk/>
                        </div>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className={'flex flex-col flex-1 gap-4'}>
                        {
                            (() => {
                                const originPerks = props.perks.filter(it => it.type.some(type => type == 'origin'))
                                return originPerks.length == 0 ? <p>no origin perks</p> : originPerks.map(perk => <Perk key={perk.name}/>)
                            })()
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};