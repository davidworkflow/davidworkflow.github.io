import { profile } from '../data.js';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <p className="label">Contact</p>
      <h2>Have a hard problem? Let's talk.</h2>
      <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
    </section>
  );
}
