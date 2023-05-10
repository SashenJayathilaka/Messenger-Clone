import EmptyState from "@/components/EmptyState";

type Props = {};

function UsersPage({}: Props) {
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      <EmptyState />
    </div>
  );
}

export default UsersPage;
