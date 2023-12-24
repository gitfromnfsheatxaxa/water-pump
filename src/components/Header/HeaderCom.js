import React from 'react';
import styled from 'styled-components';
import MbImg from '../../image/banner2 (1).jpg';

const HeaderCom = () => {
    return (
        <HeaderStyle>
            <div className="good">
                <div className="bad">
                    <h1>ШИРОКОЕ ПРОИЗВОДСТВО НАСОСОВ</h1>
                </div>
            </div>
            <div className="about">
                <div>
                    <h1>LEO GROUP</h1>
                    <p>
                        LEO GROUP — национальное высокотехнологичное предприятие, занимающееся исследованиями и
                        разработками, проектированием, производством, маркетингом и обслуживанием клиентов,
                        предоставляющее полный спектр насосов. LEO — первая компания в китайской насосной отрасли,
                        зарегистрированная на бирже.
                    </p>
                    <p>
                        Насосы LEO продаются в более чем 140 стран и регионов Европы, Северной Америки, Центральной и
                        Южной Америки, Юго-Восточной Азии, Ближнего Востока, Африки, Океании и т. д., и они играют
                        решающую роль в водном хозяйстве, водных ресурсах, электроэнергетике. строительство,
                        нефтехимическая промышленность, горнодобывающая промышленность, металлургия, пожаротушение,
                        ОВКВ, сельскохозяйственная ирригация, гражданское водоснабжение и канализация и т. д.
                    </p>
                </div>
            </div>
        </HeaderStyle>
    );
};

const HeaderStyle = styled.div`
  width: 100%;
  text-align: center;

  @media screen and (max-width: 768px) {
    .good, .about {
      display: none;
    }
  }

  .about {
    width: 100%;
    background: #ffffff;
    color: #025b69;
    padding: 30px 0;

    div {
      width: 80%;
      margin: auto;

      @media screen and (max-width: 912px) {
        width: 90%;
        margin: auto;
      }
    }

    p {
      color: #025b69;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
    }

    h1 {
      margin: 0 0 30px;
      text-align: left;
      font-weight: 300;
      line-height: 24px;
    }
  }

  .good {
    height: 500px;
    background: url("${MbImg}") no-repeat center center/cover;

    .bad {
      position: relative;
      top: 35%;
      left: 20%;

      h1 {
        color: #fff;
        font-size: 40px;
        font-weight: 100;
      }
    }

    div {
      position: relative;
      top: 1%;
      left: 40%;
      text-align: left;
      width: 500px;
      background: linear-gradient(-45deg, transparent 40px, rgba(0, 76, 84, 0.8) 0);
      line-height: 40px;
      color: #fff;
      text-transform: uppercase;
      padding: 10px 50px 10px 20px;

      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
`;

export default HeaderCom;
