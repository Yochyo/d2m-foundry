export type Weapon = {
    name: string
    type: WeaponType
    image: string
    stats: WeaponStats
}

export type WeaponType = 'autorifle' | 'todo'
export type WeaponStats = {
    damage: number
    rpm: number
    element: D2Element
    perk: D2Perk
//     todo
}
export type D2Perk = {
    name: string
    type: D2PerkType[]
}

export type D2PerkType = D2Element | 'origin'
export type D2Element = 'kinetic' | 'void' | 'arc' | 'solar'


export type DamageBuff = {
    chance: number
    dmg: number
    duration: number
}