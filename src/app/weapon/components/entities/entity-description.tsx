import * as React from 'react';

type Props = {
    
};

export function EntityDescription(props: Props) {
    return (
        <div className={'flex flex-col'}>
            <div className="avatar">
                <div className="w-24 rounded">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                {/*    on hover and stay show full pic*/}
                </div>
            </div>
            <div>
                <p>name</p>
                <p>location</p>
                <br/>
                <p>:heart: HP: 50</p>
                <p>:armor: Armor: 6</p>
            </div>
        </div>
    );
};