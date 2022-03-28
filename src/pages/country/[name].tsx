import { useRouter } from 'next/router';
import { FC, ReactElement, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { detailsActions } from '../../bus/details/details-actions';
import { selectDetails } from '../../bus/details/details-selectors';
import { Button } from '../../components/Button';
import { Info } from '../../components/Info';
import { STATUS } from '../../types';

type PropsType = {
  children?: never;
};

const DetailsPage: FC<PropsType> = (): ReactElement => {
  const router = useRouter();
  const dispatch = useDispatch();

  // const currentCountry = router.query.name;
  const { currentCountry, error, status } = useSelector(selectDetails);

  useEffect(() => {
    dispatch(detailsActions.loadCountryByName(router.query.name));

    return () => {
      dispatch(detailsActions.clearDetails());
    };
  }, [router.query.name, dispatch]);

  return (
    <div>
      <Button onClick={() => router.back()}>
        <IoArrowBack /> Back
      </Button>
      {status === STATUS.loading && <h2>Loading...</h2>}
      {error === STATUS.rejected && <h2>{error}</h2>}
      {currentCountry && <Info {...currentCountry} />}
    </div>
  );
};

export default DetailsPage;
