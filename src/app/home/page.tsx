import Header from "../../components/Header/Header";
import supabase from "@/supabase/supabase.config";
export default async function page() {
  const { data: allRecipes, error } = await supabase
    .from("all_smoothie_recipes")
    .select("*")

  if (error) {
    console.log(error);
  }
  return (
    <div className="bg-pink-400 h-screen">
      <Header />
      HomePage
    </div>
  );
}
