export default function DonationStripe() {
  return (
    <div>
      <div className="flex">
        <div className="w-60 border-2 border-starick-olive bg-white p-5 text-center hover:bg-starick-green">
          Give monthly
        </div>
        <div className="w-60 border-2 border-starick-olive bg-white p-5 text-center hover:bg-starick-green">
          Give once
        </div>
      </div>

      <div className="mt-4 flex">
        <div className="w-24 border-2 border-starick-olive bg-white p-5 text-center hover:bg-starick-green">
          $20
        </div>
        <div className="w-24 border-2 border-starick-olive bg-white p-5 text-center hover:bg-starick-green">
          $50
        </div>
        <div className="w-24 border-2 border-starick-olive bg-white p-5 text-center hover:bg-starick-green">
          $100
        </div>
        <div className="w-24 border-2 border-starick-olive bg-white p-5 text-center hover:bg-starick-green">
          $150
        </div>
        <div className="w-24 border-2 border-starick-olive bg-white p-5 text-center hover:bg-starick-green">
          $_
        </div>
      </div>

      <div className="mt-4 flex">
        <div
          style={{ width: "480px" }}
          className="w-120 border-2 border-starick-olive bg-white p-5 text-center hover:bg-starick-green"
        >
          ADD PAYMENT DETAILS
        </div>
      </div>
    </div>
  );
}
