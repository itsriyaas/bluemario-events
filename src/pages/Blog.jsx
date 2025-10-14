import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Helmet } from "react-helmet";

const blogPosts = [
  {
    id:"best-event-planner-in-thrissur",
    title: "Best Event Planner in Thrissur",
    image: "/assets/works/new4.jpg",
    excerpt: "Discover the latest wedding themes and decor trends for 2025...",
  }
];

const Blog = () => {
  return (
    <>
    <Helmet>
        <title>Event Organizers in Thrissur | Blue Mario Events</title>
        <meta
          name="description"
          content="Bringing creativity and perfection to every event is our goal at Blue Mario Events. Planning memorable events in Thrissur with expert planners.

"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Event Organizers in Thrissur | Blue Mario Events
 " />
        <meta
          property="og:description"
          content="Bringing creativity and perfection to every event is our goal at Blue Mario Events. Planning memorable events in Thrissur with expert planners.
"
        />
        <meta property="og:url" content="https://www.bluemarioevents.com/" />
        <meta property="og:image" content="https://www.bluemarioevents.com/assets/bm_footer.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.bluemarioevents.com/contact" />
      </Helmet>
        <Container className="my-5">
          <h2 className="text-center mb-4">Our Latest Blogs</h2>
          <Row className="g-4">
            {blogPosts.map((post) => (
              <Col sm={12} md={6} lg={4} key={post.id}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Img
                    variant="top"
                    src={post.image}
                    alt={post.title}
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.excerpt}</Card.Text>
                    <Link
                      to={`/blog/${post.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Read More
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
    </>
   
  );
};

export default Blog;
