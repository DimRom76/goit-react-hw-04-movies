import BeatLoader from 'react-spinners/BeatLoader';

import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.container}>
      <BeatLoader color="#3f51b5" />
    </div>
  );
}
