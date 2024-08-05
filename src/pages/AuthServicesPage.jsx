import onBoardingImg from "/assets/images/onboarding-img.png";
import logoIcon from "/assets/icons/logo-full.svg";
import userIcon from "/assets/icons/user.svg";
import phoneIcon from "/assets/icons/phone.svg";
import emailIcon from "/assets/icons/email.svg";

import { Input } from "../components/ui/Input";

export const AuthServicesPage = () => {
  return (
    <main className="w-screen h-screen flex justify-center bg-gray-900 items-center">
      <section className="xl:w-[85%] xl:h-[95%] lg:w-[90%] lg:h-[95%] lg:p-10 xl:p-10 w-full h-full p-8 flex">
        <div className="w-1/2 flex flex-col justify-between text-gray-50">
          <img className="w-36" src={logoIcon} alt="Care Plus Logo" />
          <div className="w-11/12">
            <h1 className="text-3xl font-bold text-gray-50">Hi there, ...</h1>
            <p className="text-gray-200">Get Started with Appointments</p>
            <form action="">

              <Input type="text" name="fullname" label="Full Name" iconSrc={userIcon} placeholder="Adrian Hajdin"/>
              <Input type="email" name="email" label="Email address" iconSrc={emailIcon} placeholder="adrian@jsmastery.pr"/>
              <Input type="tel" name="phone" label="Phone number" iconSrc={phoneIcon} placeholder="+00 0342 0453 34"/>

            </form>
          </div>
          <p>©️2024 CarePlus</p>
        </div>
        <img
          className="w-1/2 object-cover rounded-lg"
          src={onBoardingImg}
          alt="On Boarding Image"
        />
      </section>
    </main>
  );
};
