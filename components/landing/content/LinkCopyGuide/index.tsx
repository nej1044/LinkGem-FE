import React, { useEffect } from 'react';
import LinkCopyGuideBlock from './LinkCopyGuide.styled';

export default function Index() {
  useEffect(() => {
    window.addEventListener('scroll', reveal);
    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);

  function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }

  return (
    <LinkCopyGuideBlock>
      {/* <div className="context">
        <p className="context__top">
          복사 붙여넣기 하나로 <br />
          링크 저장 끝!
        </p>

        <p className="context__bottom">
          공유 받은 링크, 내가 직접 찾은 링크 등<br />
          내게 필요한 링크를 복.붙만 하면 저장 완료
        </p>
      </div>
      <div className="animation" /> */}

      <section>
        <h1>Scroll Down to Reveal Elements &#8595;</h1>
      </section>
      <section>
        <div className="container reveal">
          <h2>Caption</h2>
          <div className="text-container">
            <div className="text-box">
              <h3>Section Text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
              </p>
            </div>
            <div className="text-box">
              <h3>Section Text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
              </p>
            </div>
            <div className="text-box">
              <h3>Section Text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container reveal">
          <h2>Caption</h2>
          <div className="text-container">
            <div className="text-box">
              <h3>Section Text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
              </p>
            </div>
            <div className="text-box">
              <h3>Section Text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
              </p>
            </div>
            <div className="text-box">
              <h3>Section Text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container reveal">
          <h2>Caption</h2>
          <div className="text-container">
            <div className="text-box">
              <h3>Section Text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
              </p>
            </div>
            <div className="text-box">
              <h3>Section Text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
              </p>
            </div>
            <div className="text-box">
              <h3>Section Text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
              </p>
            </div>
          </div>
        </div>
      </section>
    </LinkCopyGuideBlock>
  );
}
