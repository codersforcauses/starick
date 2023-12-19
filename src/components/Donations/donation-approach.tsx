const DonationApproach: React.FC<{ order: number; text: string }> = ({
  order,
  text
}) => {
  return (
    <div className="flex items-center justify-items-start">
      <div className="mx-5 my-1 text-4xl font-bold text-starick-orange">
        {order}
      </div>
      <div
        className="prose text-xl text-starick-brown"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};
export default DonationApproach;
