export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            Alex Payiavlas
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
            Software Developer & Designer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-slate-900 text-slate-900 dark:text-white rounded-lg hover:bg-slate-900 hover:text-white transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I&apos;m a passionate software developer with a focus on creating beautiful, 
              functional applications. I love working with modern technologies and 
              bringing ideas to life through code.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              'TypeScript', 'React', 'Next.js', 'Node.js',
              'Python', 'PostgreSQL', 'AWS', 'Docker'
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-slate-900 dark:text-white font-medium">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    Project {project}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    A brief description of the project and its key features.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                      TypeScript
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Ready to work together? Let&apos;s discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:alex@example.com"
              className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              Send Email
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-slate-900 text-slate-900 dark:text-white rounded-lg hover:bg-slate-900 hover:text-white transition-colors"
            >
              View GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}