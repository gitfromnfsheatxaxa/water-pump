import React from 'react';
import styled from "styled-components";

const AboutPhoto = () => {
    return (
        <Wrappers>
            <div className="very">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            nigger
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">

                        </div>
                    </div>
                </div>
            </div>
        </Wrappers>
    );
};

const Wrappers = styled.div`
  width: 80%;
  padding: 20px;
  margin: 100px auto;

  .very {
    display: flex;
    width: 100%;
    min-height: 80vh;

    .row {
      display: flex;
      flex-wrap: wrap;

      .col {
        width: 50%;
        height: 450px;

        .card {
          height: 450px;
        }

        .card img {
          width: 96%;
          border-radius: 10px;
        }

        .card p {
          font-size: 25px;
          color: #62cece;
        }

        h1 {
          text-align: center;
          color: white;
        }
      }
    }
  }

`

export default AboutPhoto;