import * as React from 'react';
import { minidenticon } from 'minidenticons'
import {MinidenticonImg} from "@/app/weapon/components/icon";
import {FaHeart} from "react-icons/fa";
type Props = {
    
};

export function EntityDescription(props: Props) {
    return (
        <div className={'flex flex-row'}>
            <div className="avatar mr-4">
                <div className="aspect-square h-24 rounded border">
                  <MinidenticonImg username={'brig'}/>
                {/*    on hover and stay show full pic*/}
                </div>
            </div>
            <div>
                <h2 className={'text-xl font-bold'}>Brig</h2>
                <p>🌍 Location: Earth</p>
                <br/>
                <p>❤️ HP: 200</p>
                <p>🛡️ Armor: ???</p>
            </div>
        </div>
    );
};