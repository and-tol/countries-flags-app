import { useRouter } from 'next/router';
import { FC, ReactElement } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Button } from '../../components/Button';
import { Info } from '../../components/Info';

type PropsType = {
  children?: never;
};

const CountryPage: FC<PropsType> = (): ReactElement => {
  const router = useRouter();
  //  const { name } = useParams();
  console.log(router);

  // const currentCountry = null;
  const currentCountry = router.query.name;

  return (
    <div>
      <Button onClick={() => router.back()}>
        <IoArrowBack /> Back
      </Button>
      {currentCountry && <Info /* push={router.push} */ {...currentCountry} />}
    </div>
  );
};

export default CountryPage;
