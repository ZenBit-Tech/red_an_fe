import { SignButton } from "@/components/Header/styles";
const Sign = () => {
  return (
    <SignButton
      href={"/signin"}
      endIcon={
        <svg width="14" height="14" fill="currentColor">
          <use href="/hero/icons.svg#vector" />
        </svg>
      }
    >
      Get Started
    </SignButton>
  );
};

export default Sign;
