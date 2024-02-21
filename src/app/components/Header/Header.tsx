import Link from "next/link";

export default function Header() {
  const smoothieTypes = [
    { type: "Berry", href: "/berry-recipes" },
    { type: "Tropical", href: "/tropical-recipes" },
    { type: "Green", href: "/green-recipes" },
    { type: "Creamy", href: "creamy-recipes" },
    { type: "Protein", href: "/protein-recipes" },
  ];

  const btns = smoothieTypes.map((type) => {
    return (
      <Link
        href={type.href}
        key={type.type}
        className="m-[1rem] p-[1rem] bg-white rounded"
      >
        {type.type}
      </Link>
    );
  });
  return (
    <div className="p-[1rem]">
      <div>{btns}</div>
    </div>
  );
}
