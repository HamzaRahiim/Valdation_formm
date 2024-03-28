import BasicForm from "@/components/BasicForm";
import Form from "@/components/Form";
import ZodForm from "@/components/ZodForm";

export default function Home() {
  return (
    <main>
      {/* very simple form with manual validation  */}
      {/* <BasicForm /> */}
      {/* Advance form with manual validation validation  */}
      {/* <Form /> */}
      {/* Advance form with zod validation  */}
      <ZodForm />
    </main>
  );
}
