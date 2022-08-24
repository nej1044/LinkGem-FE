import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LinkSave from 'components/LinkSave';
import RecentSaveLink from 'components/RecentSaveLink';
import GemCrewPick from 'components/GemCrewPick';
import { useRecoilState } from 'recoil';
import { userInfo } from 'store/store';
import { TLinkSave } from 'types/Link.types';
import Axios from 'utils/Axios';
function Home() {
  const [recentLink, setRecentLink] = useState<TLinkSave[]>([]);
  // const router = useRouter();
  const [user, setUser] = useRecoilState(userInfo);

  const getLink: () => void = async () => {
    try {
      const response = await Axios({
        url: '/api/v1/links',
        method: 'get',
        params: {
          page: 0,
          size: 8,
        },
      });
      const contents = await response?.data?.result?.contents;
      setRecentLink(contents);
    } catch (error: any) {
      if (error.response?.data?.code === 'ACCESS_TOKEN_EXPIRED') {
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
        // return axios(originalRequest);
      }
      console.log(error);
    }
  };
  console.log('user');
  console.log(user);
  useEffect(() => {
    getLink();
  }, []);
  return (
    <>
      <LinkSave setRecentLink={setRecentLink} recentLink={recentLink} />
      <RecentSaveLink recentLink={recentLink} getLink={getLink} />
      <GemCrewPick />
    </>
  );
}

export default Home;
