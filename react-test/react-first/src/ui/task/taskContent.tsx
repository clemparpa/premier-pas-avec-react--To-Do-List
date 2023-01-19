export const TaskBlockContentComponent = ({ content }: { content: string }) => {
  return (
    <p className="text-base leading-6 text-white font-mono font-medium col-span-12 max-h-24 overflow-y-auto task-scrollbar">
      {content}
    </p>
  );
};
