import * as React from 'react';

type Props = {

};

export function WeaponStats(props: Props) {
    return (
        <div className="card bg-base-100 shadow-sm ">
            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <p>Damage</p>
                <progress className="progress w-56" value={40} max="100"></progress>
                <p>rpm</p>
                <progress className="progress w-56" value={40} max="100"></progress>
                <p>Element: void</p>
                <p>Rarity: Legendary</p>
                <p>Source: Skeleton key</p>
            {/*    hovering over a source explains it in detail. common can be dropped from world chests and common engrams for example*/}
            </div>
        </div>
    );
};