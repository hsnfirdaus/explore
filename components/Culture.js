import Link from "next/link";
import { MapPin } from 'react-feather';

export default function Culture({ item }) {
  return (
    <article className="culture">
      <figure className="thumbnail">
        <Link href={item.slug}>
          <a><img src={item.frontmatter.thumbnail} /></a>
        </Link>
      </figure>
      <header>
        <Link href={item.slug}>
          <a><h4 className="culture-title">{item.frontmatter.title}</h4></a>
        </Link>
        <div className="culture-location"><MapPin/>{item.frontmatter.location}</div>
      </header>
    </article>
  );
}