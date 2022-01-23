import Image from 'next/image';
import logotype_style from '../styles/logotype.module.scss';
import Link from 'next/link';

const Logotype = props => {
  return (
    <Link href='/'>
      <a className={logotype_style.logotype}>
        {props.width && (
          <Image
            src='/static/images/logotype-light.svg'
            alt='Worldclass logotype'
            width={props.width}
            height={props.height}
          />
        )}
      </a>
    </Link>
  );
};

export default Logotype;
