import styles from './Profile.module.scss';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setName, tongleShowName } from './profileSlice';

export const Profile = () => {
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);

  const name = useSelector((state) => state.profile.name);
  const profileNameShowFlag = useSelector((state) => state.profile.showName);

  const dispatch = useDispatch();

  const onChangeName = (e) => {
    setValue(e.target.value);
  };

  const setProfileName = () => {
    dispatch(setName({ value }));
    setValue('');
  };

  const showProfileName = () => {
    dispatch(tongleShowName());
    setChecked(!profileNameShowFlag);
  };

  return (
    <div className={styles.profile}>
      {profileNameShowFlag ? <h1>Profile of {name.value}</h1> : <></>}
      <form className={styles.form}>
        <input
          className={styles.input}
          onChange={onChangeName}
          onSubmit={setProfileName}
          value={value}
        />
        <Button
          style={{
            width: '50px',
            height: '50px',
            marginLeft: '15px',
            backgroundColor: '#444444',
            color: '#fff',
          }}
          onClick={setProfileName}
        >
          Set name
        </Button>
      </form>
      <div className={styles.show_name}>
        <input
          type='checkbox'
          style={{ cursor: 'pointer' }}
          checked={checked}
          onChange={showProfileName}
        />
        <p>Show name</p>
      </div>
    </div>
  );
};
