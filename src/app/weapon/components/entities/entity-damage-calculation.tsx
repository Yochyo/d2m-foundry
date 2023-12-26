import * as React from 'react';
import {EntityContainer} from "@/app/weapon/components/entities/entity-container";

type Props = {};

export function EntityDamageCalculation(props: Props) {
  return (
    <div>
      <div className={'grid grid-cols-2 gap-x-8'}>
        <p className={'font-bold'}>0% Focused Fury: </p>
        <p>10 Hits (~22s)</p>
        <p className={'font-bold'}>50% Focused Fury: </p>
        <p>9 Hits (~20s)</p>
        <p className={'font-bold'}>100% Focused Fury: </p>
        <p>9 Hits (~20s)</p>
      </div>
    </div>
  );
};