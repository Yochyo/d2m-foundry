import * as React from 'react';
import {Weapon} from "@/models";
import Image from "next/image";

type Props = {
  weapon: Weapon
};

export function WeaponStats({weapon}: Props) {
  const rpm = parseRpm(weapon.rpm)
  return (
    <div className="card bg-base-100 shadow-sm ">
      <div className="card-body">
        <h2 className="card-title font-medium">Stats</h2>
        <div className="divider divider-vertical my-0.5"></div>
        <div>Damage</div>
        <div className={'flex flex-row items-center'}>
          <progress className="progress w-56" value={weapon.damage} max="100"></progress>
          <span className={'pl-2'}>{weapon.damage}/100</span>
        </div>
        <div>Rpm</div>
        <div className={'flex flex-row items-center'}>
          <progress className="progress w-56" value={rpm.value} max="5"></progress>
          <span className={'pl-2'}>{rpm.str}</span>
        </div>
        <div>Range</div>
        <div className={'flex flex-row items-center'}>
          <progress className="progress w-56" value={0} max="5"></progress>
          <span className={'pl-2'}>???</span>
        </div>
        <p></p>
        <div className={'flex flex-row'}>Element: {getElements(weapon.element)}
          <span className={'capitalize'}>{weapon.element.map(element => element.name.toLowerCase()).join('/')}</span>
        </div>
        <div className={'flex flex-row'}>Rarity: {getRarity(weapon.rarity)}
          <span className={'capitalize'}>{weapon.rarity}</span>
        </div>
        <p className={'capitalize'}>Source: {weapon.source?.map(it => it.value.source).join('\n')}</p>
        {/*   todo hovering over a source explains it in detail. common can be dropped from world chests and common engrams for example*/}
      </div>
    </div>
  );
};

const getElements = (element: Weapon['element']) => {

  return element.map(it => <Image key={it.id} className={'p-[4px]'} src={`/elements/${it.name.toLowerCase()}.png`} alt={''} height={24} width={24}/>)
}

const getRarity = (rarity: Weapon['rarity']) => {
  return <Image className={'p-[4px]'} src={`/rarity/${rarity?.toLowerCase()}.png`} alt={''} height={24} width={24}/>
}

const getIcon = (path: string) => {
  return <Image className={'p-[4px]'} src={path} alt={''} height={24} width={24}/>
}

const parseRpm = (rpm: Weapon['rpm']) => {
  switch (rpm) {
    case "insanelySlow":
      return {str: 'Insanely Slow', value: 0}
    case 'verySlow':
      return {str: 'Very Slow', value: 1}
    case 'slow':
      return {str: 'Slow', value: 2}
    case 'average':
      return {str: 'Average', value: 3}
    case 'fast':
      return {str: 'Fast', value: 4}
    case 'veryFast':
      return {str: 'Very Fast', value: 5}
    default:
      return {str: 'Insanely Slow', value: 0}
  }
}