import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className='mt-12 flex justify-center'>
      <SignUp />
    </div>
  );
}
