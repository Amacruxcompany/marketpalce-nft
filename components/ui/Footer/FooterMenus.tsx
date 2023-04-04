import Link from 'next/link';

interface Props {
  title: string;
  links: {
    name: string;
    href: string;
    isDisable?: boolean;
  }[];
}

const FooterMenus = ({ title, links }: Props) => {
  return (
    <section>
      <h3 className='uppercase text-blue-light'>{title}</h3>
      <ul className='grid gap-3 pt-4'>
        {links.map(link => (
          <li
            key={link.name}
            className={`${link.isDisable && 'cursor-not-allowed'}`}
          >
            <Link href={link.href}>
              <a
                className={`${
                  link.isDisable
                    ? 'text-gray pointer-events-none'
                    : 'text-white'
                } text-sm`}
              >
                {link.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterMenus;
