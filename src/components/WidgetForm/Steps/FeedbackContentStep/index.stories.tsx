import { Meta, StoryObj } from '@storybook/react'
import { FeedbackContentStep, FeedbackContentStepProps } from ".";
import { Popover, PopoverPanel } from '@headlessui/react';
import { feedbackTypes } from '../..';

export default {
  title: 'Widget Ui/FeedbackContentStep',
  component: FeedbackContentStep,
  args: {
    feedbackType: 'IDEA'
  },
  argTypes: {
    options: Object.keys(feedbackTypes),
    control: {
      type: 'select',
    }
  },
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
} as Meta<FeedbackContentStepProps>

export const Bug: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: 'BUG'
  }
}

export const Idea: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: 'IDEA'
  }
}

export const Other: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: 'OTHER'
  }
}