import justin from "~/assets/img/Justin-Street.jpeg";
import { ImageWithText, Section } from "~/components";
export default function Index() {
  return (
    <div>
      <h1 className="flex justify-center w-full text-3xl lg:text-5xl font-extrabold p-6">
        Stash
      </h1>
      <Section className="flex-col justify-center items-center gap-4">
        <p>
          Remix project space where I can stash cool components, hooks, helpers,
          and other things that I find myself wanting easy access to bring into
          other projects.
        </p>
        <p>
          This will also act as a sort of playground for remix stuff as I plan
          to set the projects Remix packages to “nightly”. This project should
          always be the latest and greatest remix.
        </p>
      </Section>

      <ImageWithText
        imgSrc={justin}
        id="section-id"
        header="Image with text component"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </ImageWithText>
    </div>
  );
}
