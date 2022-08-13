import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LinkSave from 'components/LinkSave';
import RecentSaveLink from 'components/RecentSaveLink';
import GemCrewPick from 'components/GemCrewPick';
import { useRecoilState } from 'recoil';
import { userInfo } from 'store/store';
function Home() {
  const [recentLink, setRecentLink] = useState([]);
  // const router = useRouter();
  const [user, setUser] = useRecoilState(userInfo);
  console.log('-------------------');
  console.log(user);
  console.log(user.accessToken);
  console.log('recentLink');
  console.log(recentLink);
  const getLink = async () => {
    try {
      const response = await axios.get('/api/v1/links', {
        headers: {
          Authorization: localStorage.getItem('accessToken') as string,
        },
        params: {
          page: 0,
          size: 4,
        },
      });
      const contents = await response?.data?.result?.contents;
      setRecentLink(contents);
    } catch (error: any) {
      if (error.response.data.code === 'ACCESS_TOKEN_EXPIRED') {
        const response = await axios.post(
          '/api/v1/oauth/reissue',
          {},
          {
            headers: {
              'ACCESS-TOKEN': user.accessToken,
              'REFRESH-TOKEN': user.refreshToken,
            },
          }
        );
        const accessToken = await response?.data?.result?.accessToken;
        localStorage.setItem('accessToken', accessToken);
        setUser({ ...user, accessToken });
      }
    }
  };

  console.log('recentLink');
  console.log(recentLink);
  useEffect(() => {
    getLink();
  }, []);
  return (
    <>
      <LinkSave setRecentLink={setRecentLink} recentLink={recentLink} />
      <RecentSaveLink recentLink={recentLink} />
      <GemCrewPick />
    </>
  );
}

export default Home;
