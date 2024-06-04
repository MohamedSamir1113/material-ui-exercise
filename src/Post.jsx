import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
function Post({ post }) {
  return (
    <div  className="col-md-4">
      <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.3 } ,zIndex:"999"}}>
        
        <Card className="bg-info" style={{height:"200px",margin:"0"}}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Body>{post.body}</Card.Body>
          </Card.Body>
        </Card>
      </motion.div>
    </div>
  );
}

export default Post;
