"use client"
import {D2Perk, Weapon} from "@/models/weapon";
import {Entity} from "@/models/entity";
import {create} from "zustand";

interface ImmutableWeaponPageStore {
    weapon: Weapon
    selectedPerks: Record<D2Perk, any> //perk, state
    additionalBuffs: Record<string, any> //buff, state
    entities: Entity[]
}

interface WeaponPageStore extends ImmutableWeaponPageStore {
    // methods
}

export const useWeaponPageStore = create<WeaponPageStore>()