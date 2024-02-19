import Link from "next/link";

export default function LandingPageContent() {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center bg-center bg-pineapple bg-fixed bg-no-repeat bg-cover">
        <h2 className="text-orange-500 font-bold text-4xl">
          Summer is right around the corner
        </h2>
      </div>
      <div className="min-h-screen flex justify-center items-center bg-center bg-banana bg-fixed bg-no-repeat bg-cover">
        <div className="p-10">
          <h2 className="font-bold text-4xl text-center">
            Are you ready to beat the heat?
          </h2>
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-center bg-center bg-strawberry bg-fixed bg-no-repeat bg-cover">
        <div className="p-10">
          <h2 className="font-bold text-4xl text-center">
            Do you crave more smoothie inspiration?
          </h2>
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-center bg-center bg-multiColorSmoothie bg-fixed bg-no-repeat bg-cover">
        <Link
          href={"/home"}
          className="text-3xl bg-pink-400 rounded p-5 hover:bg-yellow-400"
        >
          Get inspired
        </Link>
      </div>
    </div>
  );
}
