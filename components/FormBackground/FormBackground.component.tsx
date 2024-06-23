import { BackButton } from "../BackButton";

export const FormBackground = ({ form }: { form: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen flex" data-testid="formbackground-testid">
      <div className="flex-1 flex flex-col justify-center bg-slate-200">
        {form}
        <BackButton />
      </div>
      <div className="hidden md:flex bg-[url('/bg-roadkill.png')] grayscale flex-1 bg-no-repeat bg-cover bg-center" data-testid='image-testid'></div>
    </div>
  );
};
