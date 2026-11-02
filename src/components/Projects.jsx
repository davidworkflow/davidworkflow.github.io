import { projects } from '../data.js';

export default function Projects() {
  return (
    <section id="projects" className="block">
      <p className="label">Projects</p>
      <h2>Things I've built</h2>
      <div className="cards">
        {projects.map((p, i) => (
          <article className={`card t${i % 4}`} key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <p className="stack">{p.stack}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
