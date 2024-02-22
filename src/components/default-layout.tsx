export interface DefaultLayoutProps {
  children: JSX.Element[] | JSX.Element;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="flex flex-col gap-2 items-center h-full">
      <div className="container mx-auto max-w-[1600px] h-full">{children}</div>
    </div>
  );
};
