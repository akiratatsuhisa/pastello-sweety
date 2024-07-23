import { FC } from 'react';

import { Editor } from '@/components/Editor';

export const PostEditor: FC = () => {
  return (
    <div className="app-container relative overflow-hidden">
      <Editor className="px-8 py-4" />
    </div>
  );
};
