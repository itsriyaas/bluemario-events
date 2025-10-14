import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";

const blogPosts = [
    {
        id: "best-event-planner-in-thrissur",
        title: "Best Event Planner in Thrissur",
        date: "October 14, 2025",
        author: "Blue Mario Events",
        category: "Event Planning",
        coverImage: "/assets/works/new4.jpg",
        content: `
      <p>
        Do you want to plan a wedding, birthday party, or corporate event in Thrissur? Making the right choice of event planner can mean the difference between a stressful day and a memorable one. Blue Mario Events is the name trusted by hundreds of families and businesses in Kerala if you are looking for the <a href="https://www.bluemarioevents.com/">best event planner in Thrissur.</a>


      </p>

      <h3>Why Choose Blue Mario Events?</h3>
      <p><strong>Creative Concepts & Stunning Décor:</strong> Every event merits a special touch. 
      Blue Mario Events focuses on <a href="https://www.wedmegood.com/vendors/thrissur/wedding-planners/" target="_blank">top wedding decorations</a>, stage design, and theme-based styling 
      that harmoniously combine tradition with modern aesthetics.</p>

      <p><strong>One-Stop Event Management Solution:</strong> 
      From venue decoration and vendor oversight to sound, lighting, and entertainment, 
      they take care of everything so you can enjoy a hassle-free celebration.</p>

      <p><strong>Custom Packages for Every Budget:</strong> 
      Whether you’re planning an extravagant wedding or a small birthday party, 
      their versatile packages allow for the creation of unforgettable events at an appropriate budget.</p>

      <p><strong>Professional & Reliable Team:</strong> 
      With years of expertise, their dedicated team ensures flawless execution — 
      making Blue Mario Events the <a href="https://www.justdial.com/Thrissur/Wedding-Planners-Premium-in-Irinjalakuda/nct-12159653" target="_blank">premier event planner in Thrissur</a>.</p>

      <h3>Services Offered by Blue Mario Events</h3>
      <ul>
        <li>Wedding planning & stage setup</li>
        <li>Birthday parties & naming ceremonies</li>
        <li>Corporate gatherings & product launches</li>
        <li>Cultural events & social functions</li>
        <li>Venue styling, lighting & floral decorations</li>
        <li>Full event coordination & vendor oversight</li>
      </ul>
      
      <h3>Tips for Choosing the Best Event Planner in Thrissur</h3>
      <p><strong>Examine Their Portfolio</strong> – Look through images and videos of past weddings, stage setups, and events they have organized.</p>

<p><strong>Evaluate Client Reviews</strong> – Opt for planners who have positive testimonials and a history of happy clients.</p>

<p><strong>Clarify Your Budget</strong> – Make sure the pricing is clear, with well-structured packages and no hidden fees.</p>

<p><strong>Verify Contingency Plans</strong> – As unforeseen problems may occur, choose a planner who has effective backup strategies in place.</p>

<p>
   <strong> Pursue Customization</strong> – The top event planners in Thrissur invest time in grasping your vision and customizing the event to match your desires.
    
</p>
      <h3>Conclusion</h3>
      <blockquote>
        <p>
          “Planning an event should be a source of excitement, not anxiety. 
          By hiring the premier event planner in Thrissur, you can be confident that every detail — 
          from décor and lighting to guest management and entertainment — is taken care of with professionalism and attention.”
        </p>
        <p>
          At Blue Mario Events, we blend creativity, experience, and passion to create unforgettable celebrations. 
          Whether it’s a traditional Kerala wedding, a milestone birthday, or a corporate event, 
          our team ensures your event mirrors your vision while remaining within your budget.
        </p>
        <p>
          If you’re ready to elevate your special occasion into a memorable experience, 
          choose Blue Mario Events — the trusted name in event management in Thrissur.
        </p>
      </blockquote>
    `,
    },
];

const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogPosts.find((b) => b.id === id);

    if (!blog) {
        return (
            <Container className="text-center my-5">
                <h3>Blog not found!</h3>
                <Link to="/blog" className="btn btn-outline-primary mt-3">
                    Go Back
                </Link>
            </Container>
        );
    }

    return (
        <Container className="my-5">
            {/* Blog Header */}
            <div className="text-center mb-5">
                <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="img-fluid rounded shadow-sm mb-4 blog-cover"
                />
                <h1 className="fw-bold">{blog.title}</h1>
                <div className="text-muted small mt-2">
                    <Badge bg="primary" className="me-2">{blog.category}</Badge>
                    <span>{blog.date} • By {blog.author}</span>
                </div>
            </div>

            {/* Blog Content */}
            <Row className="justify-content-center">
                <Col lg={9} md={10}>
                    <div
                        className="blog-content"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                    <div className="text-center mt-5">
                        <Button as={Link} to="/blog" variant="secondary">
                            ← Back to Blogs
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default BlogDetails;
