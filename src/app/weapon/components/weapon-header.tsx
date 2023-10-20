import * as React from 'react';
import {Weapon} from "@/models/weapon";

type Props = {
};

export function WeaponHeader(props: Props) {
    return (
        <div className='flex flex-row mx-2 my-16'>
            <div className="avatar mr-8">
                <div className="w-24 rounded">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className='flex flex-col'>
                <h4>Name</h4>
                <p>fusion rifle</p>
            </div>
        </div>
    );
};