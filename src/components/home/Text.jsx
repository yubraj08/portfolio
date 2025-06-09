import TextColorTransition from "../../helpers/TextColorTransition";
import Animation from "../../helpers/Animation";

const Text = ({ isVisible }) => {
  return (
    <Animation
      before="opacity-0 scale-[0.8]"
      after="opacity-1  scale-[1]"
      duration="3s"
    >
      <div className="flex flex-col">
        <div className="title text-[2.4em] hover:text-[#5af230] duration-500 hover:-translate-y-2">
          <div className="flex gap-2">
            Hello !<div className="">👋</div>
          </div>
        </div>
        <div className="text-[2em] md:text-[3em] flex gap-4 group hover:translate-y-2 duration-500">
          <div className="duration-500">I'm </div>
          <div className={`name px-2 rounded-lg  text-[#5af230] duration-[3s]`}>
            <TextColorTransition
              text="YUBRAJ ADHIKARI"
              initialColor="#5af230"
              finalColor="#2E86AB"
            />
          </div>
        </div>
      </div>
    </Animation>
  );
};

export default Text;
