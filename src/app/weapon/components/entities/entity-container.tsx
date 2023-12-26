import * as React from 'react';
import {EntityDescription} from "@/app/weapon/components/entities/entity-description";
import {EntityDamageCalculation} from "@/app/weapon/components/entities/entity-damage-calculation";

type Props = {};

export function EntityContainer(props: Props) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body flex flex-row">
        <EntityDescription/>
        <div className="divider divider-horizontal"></div>
        <EntityDamageCalculation/>
      </div>
    </div>
  );
};