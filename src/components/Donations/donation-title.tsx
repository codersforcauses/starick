const DonationTitle: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex h-[150px]  w-full items-center justify-center bg-starick-green p-4">
      <p className="flex h-full w-full  items-center justify-center border-4 border-starick-white text-2xl font-semibold text-starick-white md:border-8 md:text-4xl">
        {text}
      </p>
    </div>
  );
};
export default DonationTitle;
