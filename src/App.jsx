import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Logo from './components/Logo.jsx';
import { profile, tools } from './data.js';
import { useTheme } from './hooks.js';

export default function App() {
  const [theme, toggleTheme] = useTheme();
  return (
    <div className="page">
      <header className="top">
        <a href="#top" className="mark"><Logo /></a>
        <nav>
          <a href="#work">Experience</a>
          <a href="#projects" className="hide-sm">Projects</a>
          <a href="#contact">Contact</a>
          <button className="toggle" onClick={toggleTheme}>{theme === 'dark' ? 'light' : 'dark'}</button>
        </nav>
      </header>

      <main id="top">
        <section className="intro">
          <p className="label">Software engineer · 8 years</p>
          <h1>
            I build <span className="hl">boring, reliable</span> software, so the people using it never have to think about it.
          </h1>
          <p className="lead">
            For eight years I've built backends and the web products on top of them, working across
            teams in Mississippi, Nevada and California. I'm happiest when a hard problem turns into something small
            and calm.
          </p>
          <a className="btn" href="#contact">Get in touch</a>
        </section>

        <section className="facts">
          <div><b>8</b><span>years building production software</span></div>
          <div><b>3</b><span>companies across the US</span></div>
          <div><b>3</b><span>states: Mississippi, Nevada and California</span></div>
        </section>

        <section className="block">
          <p className="label">About</p>
          <h2>How I work</h2>
          <div className="prose">
            <p>
              I started as a junior engineer writing internal tools, and I still work like it: I read the
              code first, ask what the actual problem is, and prefer the plain solution to the clever one.
            </p>
            <p>
              Most of my time goes to APIs, data pipelines and the infrastructure under them. I also care
              about the people side: writing design docs, reviewing code kindly, and helping newer
              engineers get unstuck.
            </p>
          </div>
        </section>

        <Experience />
        <Projects />

        <section className="block">
          <p className="label">Toolbox</p>
          <h2>What I reach for</h2>
          <dl className="tools">
            {tools.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </section>

        <Contact />
      </main>

      <footer>© {new Date().getFullYear()} {profile.name}</footer>
    </div>
  );
}
