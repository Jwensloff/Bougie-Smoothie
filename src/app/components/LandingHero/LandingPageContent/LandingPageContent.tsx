"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export default function LandingPageContent() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("06/19/2024 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="min-h-screen flex bg-center bg-dragonfruit bg-fixed bg-no-repeat bg-cover flex flex-col">
        <div className="min-h-screen flex justify-center items-center w-[100%]">
          <h2 className="text-purple-700 font-bold text-4xl text-end rounded p-10 w-[100%]">
            Summer is right around the corner
          </h2>
        </div>
        <div className="min-h-screen flex justify-center items-center bg-center bg-pineapple bg-fixed bg-no-repeat bg-cover">
          <div className="min-h-screen flex justify-center items-center w-[100%]">
            <div className="text-blue-500 font-bold text-4xl rounded p-10 w-[80%] flex gap-5">
              <FontAwesomeIcon icon={faCalendarDays} size="5x" />
              <div className="flex flex-col justify-center">
                <div>
                  <span>{days}</span> <span>Days</span>
                </div>
                <div>
                  <span>{hours}</span> <span>Hours</span>
                </div>
                <div>
                  <span>{minutes}</span> <span>Minutes</span>
                </div>
                <div>
                  <span>{seconds}</span> <span>Seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-center bg-center bg-strawberry bg-fixed bg-no-repeat bg-cover">
        <div className="w-[100%] p-10">
          <h2 className="font-bold text-4xl text-end text-purple-600">
            Are you ready to beat the heat?
          </h2>
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-center bg-center bg-banana bg-fixed bg-no-repeat bg-cover">
        <div className="p-10 w-screen">
          <h2 className="font-bold text-4xl text-left text-pink-600">
            Do you crave smoothies?
          </h2>
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-center bg-center bg-berries bg-fixed bg-no-repeat bg-cover">
        <div className="p-10 w-screen">
          <h2 className="font-bold text-4xl text-right text-pink-600">
            {"Then you're in the right place"}
          </h2>
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-center bg-center bg-multiColorSmoothie bg-fixed bg-no-repeat bg-cover">
        <Link
          href={"/home"}
          className="text-3xl text-white bg-orange-600 rounded p-5 hover:bg-pink-600"
        >
          Get inspired
        </Link>
      </div>
    </div>
  );
}
