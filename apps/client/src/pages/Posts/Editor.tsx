import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { FC } from 'react';

import { Editor } from '@/components/Editor';
import { useTheme } from '@/providers';

export const PostEditor: FC = () => {
  const { color } = useTheme();

  return (
    <div className="relative flex flex-col-reverse items-stretch lg:h-[calc(100dvh_-_65px)] lg:flex-row lg:overflow-hidden">
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <Editor className="lg:min-h-[calc(100dvh_-_65px)]" />
      </div>

      <div
        className={`overflow-y-auto overflow-x-hidden lg:w-96 lg:flex-initial bg-${color}-300`}
      >
        <Disclosure as="div" className="w-full max-w-md">
          <DisclosureButton className="w-full border-b pb-2 text-left">
            Is team pricing available?
          </DisclosureButton>

          <div className="overflow-hidden">
            <DisclosurePanel
              transition
              className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
            >
              Yes! You can purchase a license that you can share with your
              entire team.
            </DisclosurePanel>
          </div>
        </Disclosure>
      </div>
    </div>
  );
};
