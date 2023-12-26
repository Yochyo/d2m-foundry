export type PerkCombination = ArrayElement<Weapon['perkCombinations']>
type ArrayElement<A> = A extends readonly (infer T)[] ? T : never

export interface Config {
  collections: {
    users: User;
    weapons: Weapon;
    perks: Perk;
    'origin-perks': OriginPerk;
    'loot-sources': LootSource;
    'loot-source-types': LootSourceType;
    elements: Element;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
}
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password: string;
}
export interface Weapon {
  id: string;
  name: string;
  type?:
    | 'autorifle'
    | 'handcannon'
    | 'pulserifle'
    | 'shotgun'
    | 'sniperrifle'
    | 'glaive'
    | 'bow'
    | 'grenadelauncher'
    | 'rocketlauncher'
    | 'scoutrifle'
    | 'sidearm'
    | 'fusionrifle'
    | 'machinegun'
    | 'smg';
  rarity?: 'common' | 'uncommon' | 'rare' | 'legendary' | 'exotic';
  element: Element[];
  damage: string;
  rpm?: 'insanelySlow' | 'verySlow' | 'slow' | 'average' | 'fast' | 'veryFast';
  ammoType?: 'primary' | 'special' | 'heavy';
  ammoPerShot: number;
  roundsPerShot: number;
  meleeDamage?: number;
  meleeAtkSpeed?: number;
  levelRequirement: number;
  unbreakable: boolean;
  image?: {
    url: string
  }
  lore?: string;
  source?: {
    relationTo: 'loot-sources';
    value: LootSource;
  }[];
  perkCombinations?: {
    perks?: Perk[];
    id?: string;
  }[];
  originPerks?: string[] | OriginPerk[];
  Enchantment?: {
    enchantment:
      | 'mending'
      | 'unbreaking'
      | 'curseOfVanishing'
      | 'aquaAffinity'
      | 'blastProtection'
      | 'curseOfBinding'
      | 'depthStrider'
      | 'featherFalling'
      | 'fireProtection'
      | 'frostWalker'
      | 'projectileProtection'
      | 'protection'
      | 'respiration'
      | 'soulSpeed'
      | 'thorns'
      | 'swiftSneak'
      | 'baneOfArthropods'
      | 'efficiency'
      | 'fireAspect'
      | 'looting'
      | 'impaling'
      | 'knockback'
      | 'sharpness'
      | 'smite'
      | 'sweepingEdge'
      | 'channeling'
      | 'flame'
      | 'inifinity'
      | 'loyalty'
      | 'riptide'
      | 'multishot'
      | 'piercing'
      | 'power'
      | 'punch'
      | 'quickCharge'
      | 'fortune'
      | 'luckOfTheSea'
      | 'lure'
      | 'silkTouch';
    value: number;
    id?: string;
  }[];
  playerEffects?: {
    effect: 'movementSpeed' | 'meleeAtkSpeed' | 'maxHealth' | 'armor';
    value: number;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Element {
  id: string;
  name: string;
  description?: string;
  updatedAt: string;
  createdAt: string;
}
export interface LootSource {
  id: string;
  source: string;
  type?: {
    relationTo: 'loot-source-types';
    value: string | LootSourceType;
  };
  description?: string;
  updatedAt: string;
  createdAt: string;
}
export interface LootSourceType {
  id: string;
  name: string;
  description?: string;
  updatedAt: string;
  createdAt: string;
}
export interface Perk {
  id: string;
  name: string;
  element?: {
    relationTo: 'elements';
    value: string | Element;
  };
  description?: string;
  updatedAt: string;
  createdAt: string;
}
export interface OriginPerk {
  id: string;
  name: string;
  source?: string;
  description?: string;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string;
  value?:
    | {
    [k: string]: unknown;
  }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string;
  batch?: number;
  updatedAt: string;
  createdAt: string;
}