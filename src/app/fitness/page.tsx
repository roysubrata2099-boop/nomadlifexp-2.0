import { redirect } from "next/navigation";

export default function FitnessRedirect() {
    redirect("/blog/category/fitness");
}
