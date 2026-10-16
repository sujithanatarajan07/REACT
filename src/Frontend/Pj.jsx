import './Dashboard.css'
function Dashboard() {
  const courses = [
    {
      id: 1,
      name: "HTML & CSS",
      instructor: "Eren",
      progress: 80},
    {
      id: 2,
      name: "JavaScript",
      instructor: "Rock Lee",
      progress: 50}
  ];
  return (
    <div className="dashboard">
      <aside className="dashboard">
        <h2>Enjoy to Learn</h2>
        <button className="login">login</button>
        </aside>

      <main className="main-content" id="home">
        <header className="topbar">
          <div>
            <h1>Course Dashboard</h1>
            <p>Welcome back, Student!</p>
          </div>
          <div className="avatar">😉</div>
        </header>
        <section>
          <div className="stat-card">
            <h3>Total Courses😎</h3>
            <p>06</p>
          </div>

          <div className="stat-card">
            <h3>Completed 👋</h3>
            <p>02</p>
          </div>

          <div className="stat-card">
            <h3>In Progress </h3>
            <p>04</p>
          </div>
          </section>
  

        <section id="courses">
          <h2 className="section-title">My Courses</h2>

          <div className="course-list">
            {courses.map((course) => (
              <div className="course-card" key={course.id}>
                <div
                  className="course-banner"
                  style={{ backgroundColor: course.color }}
                >
                  <span>{course.name}</span>
                </div>

                <div className="course-info">
                  <h3>{course.name}</h3>
                  <p>Instructor: {course.instructor}</p>

                  <div className="progress-text">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>

                  <button
                    className="continue-btn"
                    onClick={() =>
                      alert("Welcome to " + course.name + " course!")
                    }
                  >
                    Continue Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;