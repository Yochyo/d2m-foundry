import {Meta, StoryObj} from "@storybook/react";
import {PerkContainer} from "@/app/weapon/components/perks/perk-container";

const meta = {
  title: "PerkContainer",
  component: PerkContainer,
  parameters: {
    layout: 'centered',
  }
} satisfies Meta<typeof PerkContainer>

export default meta

export const Primary: StoryObj<typeof meta> = {
  args: {
    perks: {
      perks: [{
        id: '',
        name: 'Focused Furry'
      },
        {
          id: '123',
          name: 'Firmly Planted'
        }],
      id: ''
    },
    originPerks: [{
      id: '321',
      name: 'Focused Furry'
    }]
  },
};