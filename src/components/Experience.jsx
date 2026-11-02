import { experience } from '../data.js';

const initials = (name) => name.split(' ').slice(0, 2).map((w) => w[0]).join('');

export default function Experience() {
  return (
    <section id="work" className="block">
      <p className="label">Experience</p>
      <h2>Where I've worked</h2>
      <div className="timeline">
        {experience.map((j, i) => (
          <article className="job" key={j.company}>
            <span className={`mono c${i % 4}`} aria-hidden="true">{initials(j.company)}</span>
            <div>
              <h3>{j.role}</h3>
              <p className="co">{j.company} <span>· {j.place}</span></p>
              <p className="meta">{j.when}</p>
              <p>{j.summary}</p>
              <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
              <p className="stack">{j.stack}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
