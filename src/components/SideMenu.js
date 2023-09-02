import TagButton from "./TagButtonComponent/TagButton";
import memesImage from "../assets/images/imageMemes.jpeg";
export default function SideMenu() {
  return (
    <div style={{ border: "solid #34435E 5px", borderRadius: "20px" }}>
      <TagButton title="Recent Comments">
        <div>
          <span>😀😀😀</span>
        </div>
      </TagButton>

      <TagButton title={"Popular Now !"}>
        <div>
          <img
            style={{ width: "100px" }}
            src={memesImage}
            alt="Description" // Why do we need for alt?
          />
        </div>
      </TagButton>
      <TagButton title="Memes">
        <h1>Click Me</h1>
        <span>👍🏻</span>
      </TagButton>
      <TagButton title="Trends in this week" />

      {/* <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton /> */}
    </div>
  );
}
