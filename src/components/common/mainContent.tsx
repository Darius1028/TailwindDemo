export const MainContent = ({ children }: any) => {
  return (
    <>
      <main className='grid grid-cols-6 gap-4 h-full'>
        <div className='col-start-2 col-span-4 h-full'>{children}</div>
      </main>
    </>
  );
};
