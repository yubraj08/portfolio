import Animation from "../../helpers/Animation";
export default function Image() {
  return (
    // <Animation
    //   before="opacity-0 scale-[0.2]"
    //   after="opacity-1 scale-[1]"
    //   duration="2s"
    //   moreclass="hover:rotate-[-5deg] min-h-[333px] bg-cover md:w-[100px] flex items-center justify-center bg-[url('/assets/img/code.png')]"
    // />
    <Animation
      before="opacity-0 scale-[0.2]"
      after="opacity-1 scale-[1]"
      duration="2s"
      moreclass=" md:flex items-center justify-center hover:rotate-[-10deg] "
    >
      <img src="/assets/img/code.png" className="scale-x-[-1] bg-cover w-96" />
    </Animation>
  );
}
