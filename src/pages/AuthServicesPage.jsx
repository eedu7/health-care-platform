import onBoardingImg from "/assets/images/onboarding-img.png";
import logoIcon from "/assets/icons/logo-full.svg";
import userIcon from "/assets/icons/user.svg";
import { Input } from "../components/ui/Input"
export const AuthServicesPage = () => {
  return (
    <main className="w-screen h-screen flex justify-center bg-gray-900 items-center border-4 border-red-500">
      <section className="xl:w-[85%] xl:h-[95%] lg:w-[90%] lg:h-[95%] lg:p-10 xl:p-10 w-full h-full p-8 border-2 border-blue-500 flex">
        <div className="w-1/2 flex flex-col justify-between text-gray-50">
          <img className="w-28" src={logoIcon} alt="Care Plus Logo" />
          <div className="w-11/12">
            <h1 className="text-3xl font-bold text-gray-50">Hi there, ...</h1>
            <p className="text-gray-200">Get Started with Appointments</p>
            <form action="">

              <Input type="text" name="fullname" label="Full Name" iconSrc={userIcon} placeholder="Adrain Hajdin"/>

            </form>
          </div>
          <p>©️2024 CarePlus</p>
        </div>
        <img
          className="w-1/2 object-cover"
          src={onBoardingImg}
          alt="On Boarding Image"
        />
      </section>
    </main>
  );
};
