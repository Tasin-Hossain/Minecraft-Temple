import React, { use, useState } from "react";
import CheckboxOption from "../../Components/ui/Checkox/CheckboxOption";
import RadioOption from "../../Components/ui/Radio/RadioOption";
import { FaRegSave } from "react-icons/fa";
import Loader from "../../Components/ui/Loader/LoaderTwo";
import {
  EmailChangePopup,
  ImageChangePopup,
} from "../../Components/PopupModel/PopupModelTwo";
import Button from "../../Components/ui/Button/Button";
import Input from "../../Components/ui/Input/Input";

const AccountDetails = () => {
  // Loader
  const [loading, setLoading] = useState(true);

  // Change Email
  const [email, setEmail] = useState(false);

  // birth death
  const [month, setMonth] = useState(" ");
  const AllMOnth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  //checkbox
  const [isCheckedNewsAndUpdate, setIsCheckedNewsAndUpdate] = useState(true);
  const [isCheckedItemsWishlist, setIsCheckedItemsWishList] = useState(true);
  const [isCheckedSupportSurvey, setIsCheckedSupportSurvey] = useState(true);
  const [isCheckedReviewProductPurchase, setIsCheckedReviewProductPurchase] =
    useState(false);
  const [isCheckedRecivePurchase, setIsCheckedRecivePurchase] = useState(true);
  const [firstChecked, setFirstChecked] = useState(true);
  const [secondChecked, setSecondChecked] = useState(true);
  const [gender, setGender] = useState("noselect"); // default male checked

  const [content, setContent] = useState("<p>Hello TipTap!</p>");

  // Day Validation
  const handleDayChange = (e) => {
    let value = e.target.value;

    // Only digits allow
    if (!/^\d*$/.test(value)) return;

    // Max 2 digits
    if (value.length > 2) return;

    // Prevent 0 or more than 31
    if (value && (Number(value) < 1 || Number(value) > 31)) return;

    setDay(value);
  };

  // Year Validation (NO minus, 4 digit only, 1000–9999)
  const handleYearChange = (e) => {
    let value = e.target.value;

    // Only digits allow
    if (!/^\d*$/.test(value)) return;

    // Max 4 digits
    if (value.length > 4) return;

    // Check valid range ONLY when length = 4
    if (value.length === 4) {
      const num = Number(value);
      if (num < 1000 || num > 9999) return;
    }

    setYear(value);
  };

  const handleFirstChange = () => {
    const newFirst = !firstChecked;
    setFirstChecked(newFirst);

    // যদি first off হয়, second disabled এবং unchecked হবে
    if (!newFirst) {
      setSecondChecked(false);
    }
  };

  const handleSecondChange = () => {
    if (!firstChecked) return; // first off থাকলে second change হবে না
    setSecondChecked(!secondChecked);
  };

  return (
    <>
      <div className="bg-(--accent) rounded-md h-auto">
        {/* Account details */}
        <div className="flex flex-col">
          <h1 className="py-5 px-14 text-[20px] capitalize text-(--white-color) border-b border-(--border-color)">
            Account details
          </h1>

          {/* Section 1 */}
          <div className="flex px-14 h-auto">
            {/* Label Side */}
            <div className="bg-(--secondary) w-[30%] flex flex-col items-end pt-4 pr-3 border-r border-(--border-color)">
              {/* Username 1*/}
              <div className="h-20 mb-5">
                <span className="">Username:</span>
              </div>

              {/* Email 1*/}
              <div className="h-10 flex items-center mb-5">
                <span className="">Email:</span>
              </div>

              {/* Email options 1*/}
              <div className="h-45 flex mb-5">
                <span className="">Email options:</span>
              </div>

              {/* Avatar 1*/}
              <div className="h-33 mb-5">
                <span className="">Avatar:</span>
              </div>

              {/* Custom title 1*/}
              <div className="h-20 mb-5 flex flex-col justify-center">
                <div className="h-10">
                  <label htmlFor="customTitle" className="">
                    Custom title:
                  </label>
                </div>
              </div>

              {/* Creator tag line 1*/}
              <div className="h-20 mb-5 flex flex-col justify-center">
                <div className="h-10">
                  <label htmlFor="createTagLine" className="">
                    Creator tag line:
                  </label>
                </div>
              </div>

              {/* Birtday 1*/}
              <div className="h-40 mb-5 flex flex-col justify-center ">
                <div className="h-30">
                  <label htmlFor="dateOfBirth" className="">
                    Date of birth:
                  </label>
                </div>
              </div>

              {/* Location 1*/}
              <div className="h-14 mb-5 flex flex-col justify-center">
                <label htmlFor="location" className="">
                  Location:
                </label>
              </div>

              {/* Website 1*/}
              <div className="h-14 mb-5 flex flex-col justify-center">
                <label htmlFor="website" className="">
                  Website:
                </label>
              </div>

              {/* Email options 1*/}
              <div className="h-22 flex mb-5">
                <span className="">Gender:</span>
              </div>
              {}

              {/* Occupation 1*/}
              <div className="h-14 mb-5 flex flex-col justify-center">
                <label htmlFor="occupation" className="">
                  Occupation:
                </label>
              </div>

              {/* aout you 1*/}
              <div className="h-14 bg--50 ">
                <label htmlFor="aboutYou" className=" ">
                  About you:
                </label>
              </div>
            </div>

            {/* Input Side */}
            <div className="bg-(--secondary) w-[70%] py-4 px-4">
              {/* Username 2*/}
              <div className="flex flex-col h-20 mb-5">
                <span className="text-[16px]  ">MiniTasin Studio</span>
                <span>
                  Your username was last changed on {Date(8.64e15).toString()}
                </span>
              </div>

              {/* Email 2 */}
              <div className="h-10 mb-5">
                <div className="flex items-center h-10 gap-2">
                  <span className=" ">miniofficial15@gmail.com</span>
                  <EmailChangePopup
                    buttonClassName="btn"
                    buttonTitle="Change"
                  />
                </div>
              </div>

              {/* Email options 2*/}
              <div className="h-45 mb-5">
                <div className=" flex flex-col gap-2">
                  <CheckboxOption
                    title="Receive news and update emails"
                    checked={isCheckedNewsAndUpdate}
                    onChange={() =>
                      setIsCheckedNewsAndUpdate(!isCheckedNewsAndUpdate)
                    }
                  />
                  <CheckboxOption
                    title="Receive emails when items in your wishlist go on sale"
                    checked={isCheckedItemsWishlist}
                    onChange={() =>
                      setIsCheckedItemsWishList(!isCheckedItemsWishlist)
                    }
                  />
                  <CheckboxOption
                    title="Receive support survey notifications"
                    checked={isCheckedSupportSurvey}
                    onChange={() =>
                      setIsCheckedSupportSurvey(!isCheckedSupportSurvey)
                    }
                  />
                  <CheckboxOption
                    title="Receive reminders to review products you've purchased"
                    checked={isCheckedReviewProductPurchase}
                    onChange={() =>
                      setIsCheckedReviewProductPurchase(
                        !isCheckedReviewProductPurchase
                      )
                    }
                  />
                  <CheckboxOption
                    title="Receive purchase recommendations"
                    checked={isCheckedRecivePurchase}
                    onChange={() =>
                      setIsCheckedRecivePurchase(!isCheckedRecivePurchase)
                    }
                  />
                  <span className="checked={isChecked} onChange={() => setIsChecked(!isChecked)} ">
                    You may find additional email options under{" "}
                    <a href="" className="a">
                      Preferences
                    </a>
                    .
                  </span>
                </div>
              </div>
              {/* Avatar 2*/}
              <div className="h-33 mb-5">
                <div className=" flex items-center gap-2 pb-2">
                  <div className="w-25 cursor-pointer">
                    <img
                      src="https://cdn.builtbybit.com/avatars/l/441/441355.jpg?1733643096"
                      alt=""
                      className="w-full rounded-md"
                    />
                  </div>
                  <ImageChangePopup buttonTitle="Change" />
                </div>
                <span className="">Click the image to change your avatar.</span>
              </div>

              {/* Custom title 2*/}
              <div className="h-20 mb-5 ">
                <div className="h-15 flex flex-col justify-center">
                  <Input
                    id="customTitle"
                  />
                </div>
                <span className="">
                  If specified, this will replace the title that displays under
                  your name in your posts.
                </span>
              </div>

              {/* Creator tag line 2*/}
              <div className="h-20 mb-5 ">
                <div className="h-15 flex flex-col justify-center">
                  <Input
                    id="createTagLine"
                  />
                </div>
                <span className="">
                  If specified, thwill be displayed below your username on your{" "}
                  <a href="" className="a">
                    creator pageis{" "}
                  </a>
                  .
                </span>
              </div>

              {/* Birthday 2 */}
              <div className="h-40 mb-5">
                <div className="h-15 flex items-center gap-3 mb-3">
                  {/* Month */}
                  <select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className="w-[18%] h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[15px] rounded-sm outline-none "
                  >
                    {AllMOnth.map((m) => (
                      <option key={m}>{m}</option>
                    ))}
                  </select>

                  {/* Day */}
                  <Input
                    type="text"
                    value={day}
                    onChange={handleDayChange}
                    placeholder="Day"
                    className="w-[10%]! "
                  />

                  <Input
                    type="text"
                    value={year}
                    onChange={handleYearChange}
                    placeholder="Year"
                    className="w-[10%]! "
                  />
                  {/*  */}
                </div>
                <div className="flex flex-col gap-3">
                  <CheckboxOption
                    title="Show day and month of birth"
                    checked={firstChecked}
                    onChange={handleFirstChange}
                  />
                  <div className="ml-4">
                    <CheckboxOption
                      checked={secondChecked}
                      disabled={!firstChecked}
                      onChange={handleSecondChange}
                      title="Show year of birth"
                      description="This will allow people to see your age."
                    />
                  </div>
                </div>
              </div>

              {/* Location 2*/}
              <div className="h-14 mb-5">
                <div className="h-15 flex flex-col justify-center">
                  <Input
                    id="location"
                  />
                </div>
              </div>

              {/* Website 2*/}
              <div className="h-14 mb-5">
                <div className="h-15 flex flex-col justify-center">
                  <Input
                    id="website"
                  />
                </div>
              </div>

              {/* Gender 2*/}
              <div className="h-22 mb-5">
                <div className=" flex flex-col gap-2">
                  <RadioOption
                    title="No Selection"
                    name="gender"
                    value="noselect"
                    checked={gender === "noselect"}
                    onChange={(select) => setGender(select.target.value)}
                  />
                  <RadioOption
                    title="Male"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={(select) => setGender(select.target.value)}
                  />
                  <RadioOption
                    title="Female"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={(select) => setGender(select.target.value)}
                  />
                </div>
              </div>

              {/* Occupation 2*/}
              <div className="h-14 mb-5">
                <div className="h-15 flex flex-col justify-center">
                  <Input
                    id="occupation"
                  />
                </div>
              </div>

              {/* About You 2*/}
              <div className="h-auto"></div>
            </div>
          </div>

          {/* Identities */}
          <h1 className="text-[20px] capitalize px-14 py-4 ">Identities</h1>

          {/* Section 2 */}
          <div className="flex gap-0 px-14 h-auto">
            {/* Label Side*/}
            <div className="bg-(--secondary) w-[30%] flex flex-col items-end pt-4 pr-3 border-r border-(--border-color)">
              {/*Discord 1*/}
              <div className="h-20 mb-5 flex flex-col justify-center">
                <div className="h-10">
                  <label htmlFor="discord" className="">
                    Discord:
                  </label>
                </div>
              </div>

              {/* Discord User ID 1*/}
              <div className="h-25 mb-5 flex flex-col justify-center">
                <div className="h-15 ">
                  <label htmlFor="discordUserId" className="">
                    Discord User ID:
                  </label>
                </div>
              </div>

              {/* Contect Email 1*/}
              <div className="h-14 mb-5 flex flex-col justify-center">
                <label htmlFor="contectEmail" className="">
                  Contect email:
                </label>
              </div>

              {/* Portfolio 1*/}
              <div className="h-14 mb-5 flex flex-col justify-center">
                <label htmlFor="portfolio" className="">
                  Portfolio:
                </label>
              </div>

              {/* Twitter 1*/}
              <div className="h-14 mb-5 flex flex-col justify-center">
                <label htmlFor="twitter" className="">
                  Twitter:
                </label>
              </div>

              {/* Telegram 1*/}
              <div className="h-14 mb-5 flex flex-col justify-center">
                <label htmlFor="telegram" className="">
                  Telegram:
                </label>
              </div>

              {/* Instagram 1*/}
              <div className="h-14 mb-5 flex flex-col justify-center">
                <label htmlFor="instagram" className="">
                  Instagram:
                </label>
              </div>

              {/* YouTube 1*/}
              <div className="h-14 mb-5 flex flex-col justify-center">
                <label htmlFor="youTube" className="">
                  YouTube:
                </label>
              </div>

              {/* Twitch 1*/}
              <div className="h-14 mb-5 flex flex-col justify-center">
                <label htmlFor="twitch" className="">
                  Twitch:
                </label>
              </div>

              {/* LinkedIn 1*/}
              <div className="h-14 mb-5 flex flex-col justify-center">
                <label htmlFor="linkedIn" className="">
                  LinkedIn:
                </label>
              </div>

              {/* GitHub 1*/}
              <div className="h-14 flex flex-col justify-center">
                <label htmlFor="gitHub" className="">
                  GitHub:
                </label>
              </div>
            </div>

            {/* Input Side */}
            <div className="bg-(--secondary) w-[70%] py-4 px-4">
              {/* Discord 2*/}
              <div className="h-20 mb-5 ">
                <div className="h-15 flex flex-col justify-center">
                  <Input
                    id="discord"
                  />
                </div>
                <span className="">
                  Enter your Discord username with your hashtag ID, For example:
                  @Puspha
                </span>
              </div>

              {/* Discord User ID 2*/}
              <div className="h-25 mb-5 ">
                <div className="h-15 flex flex-col justify-center">
                  <Input
                    id="discordUserId"
                  />
                </div>
                <span className="">
                  Enter your unique Discord identification number, For example:
                  205995636712144897{" "}
                  <a href="" className="a">
                    Click here to learn how to find your Discord ID
                  </a>
                </span>
              </div>

              {/* Contect Email 2*/}
              <div className="h-14 mb-5">
                <div className="h-15 flex flex-col justify-center">
                  <Input
                    id="contectEmail"
                  />
                </div>
              </div>

              {/* Portfolio  2*/}
              <div className="h-14 mb-5">
                <div className="h-15 flex flex-col justify-center">
                  <Input
                    id="portfolio"
                  />
                </div>
              </div>

              {/* Twitter 2*/}
              <div className="h-14 mb-5">
                <div className="h-15 flex flex-col justify-center">
                  <Input
                    id="twitter"
                  />
                </div>
              </div>

              {/* Telegram 2*/}
              <div className="h-14 mb-5">
                <div className="h-15 flex flex-col justify-center">
                  <Input
                    id="telegram"
                  />
                </div>
              </div>

              {/* Instagram 2*/}
              <div className="h-14 mb-5">
                <div className="h-15 flex flex-col justify-center">
                  <Input
                    id="instagram"
                  />
                </div>
              </div>

              {/* YouTube 2*/}
              <div className="h-14 mb-5">
                <div className="h-15 flex flex-col justify-center">
                  <Input
                    id="youTube"
                  />
                </div>
              </div>

              {/* Twitch 2*/}
              <div className="h-14 mb-5">
                <div className="h-15 flex flex-col justify-center">
                  <Input
                    id="twitch"
                  />
                </div>
              </div>

              {/* LinkedIn 2*/}
              <div className="h-14 mb-5">
                <div className="h-15 flex flex-col justify-center">
                  <Input
                    id="linkedIn"
                  />
                </div>
              </div>

              {/* GitHub 2*/}
              <div className="h-14">
                <div className="h-15 flex flex-col justify-center">
                  <Input
                    id="gitHub"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Save button */}
          <div className="sticky bottom-0 w-full flex items-center justify-center py-4 bg-(--accent) border border-(--border-color)">
            {loading ? (
              <Button className="font-semibold cursor-pointer">
                <Loader
                  size={20}
                  color=""
                  label="Please Wait.."
                  labelClass="text-()"
                />
              </Button>
            ) : (
              <Button
                icon={<FaRegSave />}
                className="bg-green-600 hover:bg-green-700"
              >
                Create
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
