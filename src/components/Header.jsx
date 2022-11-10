import styled from 'styled-components';

import config from '../../config.json';

const StyledHeader = styled.div`
    img {
        width: : 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 250px 32px;
        gap: 16px;
    }
`;

const StyledBanner = styled.div`
margin-top: 50px;
  background-color: blue;
  background-image: url(${config.bg});
  height: 230px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledBanner>
        <section className="user-info">
          <img src={`https://github.com/${config.github}.png`} />
          <div>
            <h2>{config.name}</h2>
            <p>{config.job}</p>
          </div>
        </section>
      </StyledBanner>
    </StyledHeader>
  );
};

export default Header;
