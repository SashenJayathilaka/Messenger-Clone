"use client";

type Props = {};

function EmptyState({}: Props) {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6 h-full flex justify-center items-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center items-center flex flex-col">
        <h3 className="mt-2 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Select a Chat or Start a New Conversation
        </h3>
      </div>
    </div>
  );
}

export default EmptyState;
