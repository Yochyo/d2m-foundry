"use client"

import * as React from 'react';
import {useState} from "react";
import classNames from "classnames";

type Props = {

};

export function Perk(props: Props) {
    const [selected, setSelected] = useState(false)
    return (
        <button className={classNames("btn", {'btn-outline': selected,'btn-active': selected})} onClick={() => setSelected(!selected)}>Small</button>
    );
};