import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Our Website</h1>
      <p>This is our home page content.</p>
      <div className="features">
        <div className="feature-card">
          <h3>Feature 1</h3>
          <p>Description of feature 1</p>
        </div>
        <div className="feature-card">
          <h3>Feature 2</h3>
          <p>Description of feature 2</p>
        </div>
      </div>
    </div>
  );
}

export default Home; 