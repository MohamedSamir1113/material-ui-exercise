import { Fade } from "react-awesome-reveal";
import PostsList from "./PostsList";
import CustomAnimation from "./CustomAnimation";

function Home() {
    
  return (
    <>
      <div>Home</div>
      <CustomAnimation>
        <PostsList />
        </CustomAnimation>
    </>
  );
}

export default Home;
