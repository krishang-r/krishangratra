const skillCategories = {
  'Programming Languages': [
    { name: 'Python', icon: '/icons/python.svg' },
    { name: 'Java', icon: '/icons/java.svg' },
    { name: 'C', icon: '/icons/c.svg' },
    { name: 'C++', icon: '/icons/cpp.svg' },
    { name: 'R', icon: '/icons/r.svg' },
    { name: 'JavaScript', icon: '/icons/javascript.svg' },
  ],
  Frontend: [
    { name: 'HTML', icon: '/icons/html.svg' },
    { name: 'CSS', icon: '/icons/css.svg' },
    { name: 'React JS', icon: '/icons/react.svg' },
    { name: 'Next JS', icon: '/icons/nextjs.svg' },
    { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
    { name: 'Bootstrap', icon: '/icons/bootstrap.svg' },
  ],
  Backend: [
    { name: 'Flask', icon: '/icons/flask.svg' },
    { name: 'Node.js', icon: '/icons/nodejs.svg' },
    { name: 'Jinja', icon: '/icons/jinja.svg' },
  ],
  'Data Science & Analysis': [
    { name: 'NumPy', icon: '/icons/numpy.svg' },
    { name: 'Pandas', icon: '/icons/pandas.svg' },
    { name: 'Matplotlib', icon: '/icons/matplotlib.svg' },
    { name: 'Plotly', icon: '/icons/plotly.svg' },
  ],
  'Tools & Platforms': [
    { name: 'Git', icon: '/icons/git.svg' },
    { name: 'GitHub', icon: '/icons/github.svg' },
    { name: 'Selenium', icon: '/icons/selenium.svg' },
  ]
};



export default function SkillsSection() {
  return (
    <section className=" py-16 mt-20" id="skills">
      <h2 className="text-5xl font-bold text-center mb-12 text-primary">Tech Stack</h2>
      <div className="space-y-12 max-w-[72%] mx-auto">
        {Object.entries(skillCategories).map(([category, skills], idx) => (
          <div key={idx}>
            <h3 className="text-4xl font-semibold mb-6 text-secondary text-center">{category}</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-center items-center text-center group"
                >
                  <div className="w-25 h-25 flex items-center justify-center rounded-full transition duration-300 group-hover:bg-white group-hover:shadow-md group-hover:scale-110">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-18 h-18 object-contain transition duration-300"
                    />
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-700">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
