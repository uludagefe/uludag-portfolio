import Image from 'next/image';
import ScrollButton from '@/components/ScrollButton';

export default function Home() {
  const skills = [
    {
      name: 'Python',
      icon: '/images/skills/python.svg',
      category: 'Programming'
    },
    {
      name: 'Java',
      icon: '/images/skills/java.svg',
      category: 'Programming'
    },
    {
      name: 'JavaScript',
      icon: '/images/skills/javascript.svg',
      category: 'Web Development'
    },
    {
      name: 'Docker',
      icon: '/images/skills/docker.svg',
      category: 'DevOps'
    },
    {
      name: 'Azure',
      icon: '/images/skills/azure.svg',
      category: 'Cloud'
    },
    {
      name: 'AWS',
      icon: '/images/skills/aws.svg',
      category: 'Cloud'
    },
    {
      name: 'Pandas',
      icon: '/images/skills/pandas.svg',
      category: 'Data Science'
    },
    {
      name: 'NumPy',
      icon: '/images/skills/numpy.svg',
      category: 'Data Science'
    }
  ];

  const projects = [
    {
      title: 'Restaurant Visitor Prediction',
      logo: '/images/projects/wetter-app.png',
      revenue: 'Beta Testing',
      description: 'Smart AI system that helps restaurants predict daily customer traffic using weather data and historical patterns. Optimize your staffing and inventory based on accurate visitor forecasts! 🍽️📈',
      link: '#'
    },
    {
      title: 'Weather Forecast App',
      logo: '/images/projects/wetter-app.png',
      revenue: 'Beta Testing',
      description: 'AI-powered tool that predicts visitor numbers based on weather conditions. Perfect for businesses to forecast customer traffic based on weather patterns! 📊🌦️',
      link: '#'
    },
    {
      title: 'Weather Forecast App',
      logo: '/images/projects/wetter-app.png',
      revenue: 'Beta Testing',
      description: 'AI-powered tool that predicts visitor numbers based on weather conditions. Perfect for businesses to forecast customer traffic based on weather patterns! 📊🌦️',
      link: '#'
    }
  ];

  // const experiences = [ {} ];  // Commented out since it's not being used

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '/images/social/github.svg',
      url: 'https://github.com/uludagefe'
    },
    {
      name: 'LinkedIn',
      icon: '/images/social/linkedin.svg',
      url: 'https://www.linkedin.com/in/efe-uluda%C4%9F-865306302/'
    },
    {
      name: 'Twitter',
      icon: '/images/social/twitter.svg',
      url: 'https://x.com/EfeUluda1242610'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-[#FAFAF5]/95 backdrop-blur-sm z-50 border-b border-[#E5E5E0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Logo/Name */}
            <div className="flex items-center space-x-3">
              <Image
                src="/images/social/image.png"
                alt="Efe Uludag"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-[#2D2D2A] font-medium">Efe Uludag</span>
            </div>

            {/* Center - Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <ScrollButton targetId="about" variant="secondary" className="text-sm font-medium">
                About
              </ScrollButton>
              <ScrollButton targetId="projects" variant="secondary" className="text-sm font-medium">
                Projects
              </ScrollButton>
              <ScrollButton targetId="skills" variant="secondary" className="text-sm font-medium">
                Skills
              </ScrollButton>
              <ScrollButton targetId="contact" variant="secondary" className="text-sm font-medium">
                Contact
              </ScrollButton>
            </div>

            {/* Right side - Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-[#4A4A45] hover:text-[#2D2D2A] transition-colors p-1 rounded-full hover:bg-[#EAEAE5]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={link.icon}
                    alt={`${link.name} icon`}
                    width={18}
                    height={18}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="relative py-20 flex items-center justify-center bg-[#F5F5F0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6">
              <Image
                src="/images/social/image.png"
                alt="Efe Uludag"
                width={240}
                height={240}
                className="rounded-full mx-auto"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2D2D2A] mb-4">
              Efe Uludag
            </h1>
            <p className="text-xl text-[#4A4A45] mb-4">München</p>
            <p className="text-2xl text-[#2D2D2A] mb-8 font-medium italic">
              &ldquo;A 18-year-old Computer Engneering Student, passionate about creating innovative solutions.&rdquo;
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ScrollButton targetId="projects" variant="primary">
                View Projects
              </ScrollButton>
              <ScrollButton targetId="contact" variant="secondary">
                Get in Touch
              </ScrollButton>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-[#FAFAF5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#2D2D2A]">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  className="block bg-white rounded-xl p-6 hover:shadow-md transition-all duration-200 border border-gray-100 h-full relative"
                >
                  <div className="flex flex-col h-full pb-12">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <Image
                          src={project.logo}
                          alt={project.title}
                          fill
                          className={`object-contain rounded-lg ${
                            project.title.includes('AWS') ? 'scale-150 translate-x-2' : ''
                          }`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-[#2D2D2A] truncate">
                          {project.title}
                        </h3>
                        <span className="text-[#3A5A40] font-medium text-sm">
                          {project.revenue}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-[#4A4A45] text-sm mb-4">
                        {project.description}
                      </p>
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#3A5A40] rounded-b-xl flex items-center justify-end px-6 group transition-all duration-300 hover:bg-[#344E38]">
                        <div className="flex items-center text-white font-medium">
                          <span className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300">View Project</span>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            className="transform transition-all duration-300 group-hover:translate-x-2"
                          >
                            <path d="M5 12h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-[#F5F5F0]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center p-4 bg-white rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
                >
                  <div className="relative w-8 h-8 mr-3">
                    <Image
                      src={skill.icon}
                      alt={`${skill.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{skill.name}</h3>
                    <p className="text-xs text-gray-500">{skill.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-[#F5F5F0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
              Education
            </h2>
            <div className="bg-white rounded-lg border border-gray-100 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">University of Bremen</h3>
              <p className="text-gray-600 mb-2">Informatics (Computer Science)</p>
              <p className="text-sm text-gray-500 mb-4">2025 - Present</p>
              <p className="text-gray-600">
                Currently pursuing a degree in Computer Science, focusing on software development and technology innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-[#FAFAF5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
              Get in Touch
            </h2>
            <div className="bg-white rounded-lg border border-gray-100 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Contact Information</h3>
                  <div className="space-y-4">
                    <p className="flex items-center text-gray-600">
                      <Image
                        src="/images/social/email.svg"
                        alt="Email icon"
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      uludag.efe.tr@gmail.com
                    </p>
                    <p className="flex items-center text-gray-600">
                      <Image
                        src="/images/social/location.svg"
                        alt="Location icon"
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      München, Germany
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Social Links</h3>
                  <div className="space-y-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={link.icon}
                          alt={`${link.name} icon`}
                          width={20}
                          height={20}
                          className="mr-3"
                        />
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
