import { Meta, StoryObj } from '@storybook/react'
import { FeedbackTypeStep } from ".";
import { Popover, PopoverPanel } from '@headlessui/react';

export default {
  title: 'Widget Ui/FeedbackTypeStep',
  component: FeedbackTypeStep,
  decorators: [
    (Story) => {
      return (
        <Popover>
          <PopoverPanel static>
            <div className='bg-zinc-900 relative p-4 rounded-lg flex flex-col items-center w-96'>
              <Story/>
            </div>
          </PopoverPanel>
        </Popover>
      )
    },
  ]
} as Meta

export const Default: StoryObj = {}