import { css } from '@emotion/core'

export const box = css`
  padding-bottom: 200px;

  .techer {
    &__block {
      display: flex;
      justify-content: space-between;

      &-content {
        padding: 10px 10px 100px 10px;
      }

      &-left {
        font-family: 'ArialBold';
        width: 400px;
        padding: 50px 10px 50px 10px;
        font-weight: 600;
        font-size: 20px;
        line-height: 110%;
        color: #000000;

        &-title,
        &-text,
        &-subtext {
          margin: 20px 0;
          position: relative;

          a {
            position: absolute;
            top: 0;
            right: 0;
            background-repeat: no-repeat;
            height: 30px;
            width: 30px;
            background-position: top right;
          }
        }

        &-subtext {
          font-family: 'ArialRegular';
          font-weight: 400;
          text-indent: 30px;
          opacity: 0.5;
        }

        &-suptext {
          font-family: 'ArialRegular';
          font-weight: 400;
          text-indent: 30px;
          margin: 20px 0;
          position: relative;

          a {
            position: absolute;
            top: 0;
            right: 0;
            background-repeat: no-repeat;
            height: 30px;
            width: 30px;
            background-position: top right;
          }
        }
      }

      &-content {
        width: 1080px;
        background: #ffffff;
        box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
          0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
          0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
          0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725);
        border-radius: 10px;
      }

      &-items {
        display: flex;
        justify-content: space-between;
        padding: 50px 60px 70px 60px;

        &-title {
          font-family: 'Montserrat-Bold';
          color: #222222;
          font-size: 32px;
          line-height: 100%;
        }

        &-btn {
          outline: none;
          background-color: #ffffff;
          box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.02), 0px 4px 15px rgba(0, 0, 0, 0.05);
          border-radius: 33px;
          color: black;
          cursor: pointer;
          border: 0;
          padding: 16px 40px;
        }
      }

      &-necessaril {
        width: 830px;
        margin: 0 auto;

        &-right {
          input {
            width: 383px;
            outline: none;
            border: 0;
            background: #f1f1f1;
            border-radius: 12px;
            font-family: 'SegoeUIRegular';
            font-weight: 600;
            font-size: 20px;
            line-height: 100%;
            padding: 11.5px 20px;
            margin-top: 20px;

            &::placeholder {
              opacity: 0.3;
            }
          }
        }

        &-title {
          font-family: 'ArialRegular';
          font-weight: 600;
          font-size: 20px;
          line-height: 100%;
          margin-bottom: 30px;
          position: relative;

          &:before {
            position: absolute;
            content: '';
            background-image: url(../images/history.svg);
            background-repeat: no-repeat;
            width: 30px;
            height: 30px;
            top: 0%;
            left: -50px;
          }
        }

        &-subtitle {
          font-family: 'ArialRegular';
          font-size: 20px;
          line-height: 100%;
          opacity: 0.5;
        }

        &-block {
          display: flex;
          justify-content: space-between;
        }

        &-text {
          background: #d9ead3;
          border-radius: 12px;
          font-family: 'SegoeUIRegular';
          font-weight: 600;
          font-size: 20px;
          line-height: 100%;
          padding: 15px 20px;
          margin: 20px 0;
          position: relative;

          &:before {
            position: absolute;
            content: '';
            background-image: url(../images/history.svg);
            background-repeat: no-repeat;
            width: 30px;
            height: 30px;
            top: 25%;
            left: -50px;
          }
        }
      }

      &-target {
        width: 830px;
        margin: 0 auto;

        &-title {
          padding: 70px 0 30px 0;
          font-weight: 600;
          font-size: 32px;
          line-height: 100%;
        }

        &-subtitle {
          font-family: 'ArialBold';
          background: #d9ead3;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-sizing: border-box;
          border-radius: 12px;
          padding: 10px 0 0 20px;
          width: 260px;
          height: 60px;
          text-align: left;
          white-space: nowrap;
        }

        &-suptitle {
          opacity: 0.5;
        }

        &-level {
          width: 260px;
          padding: 15px 10px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          margin: 20px 0;
          font-weight: 600;
          font-size: 20px;
          line-height: 100%;
          color: #19191d;
          outline: none;
          position: relative;

          &:before {
            position: absolute;
            content: '';
            background-image: url(../images/history.svg);
            background-repeat: no-repeat;
            width: 30px;
            height: 30px;
            top: 50%;
            transform: translateY(-50%);
            left: -50px;
          }
        }

        &-new,
        &-which,
        &-input {
          cursor: pointer;
          outline: none;
          padding: 15px;
          text-align: left;
          font-family: 'ArialRegular';
          width: 830px;
          background: #f1f1f1;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-sizing: border-box;
          opacity: 1;
          font-weight: 600;
          font-size: 20px;
          line-height: 110%;
          border-radius: 12px;
          margin: 0 auto;
          color: black;

          &::placeholder {
            opacity: 0.3;
          }
        }

        &-new {
          opacity: 0.3;
        }

        &-which {
          position: relative;

          &:before {
            position: absolute;
            content: '';
            background-image: url(../images/history.svg);
            background-repeat: no-repeat;
            width: 30px;
            height: 30px;
            top: 60%;
            transform: translateY(-50%);
            left: -50px;
          }
        }

        &-new {
          position: relative;

          &:after {
            content: '';
            position: absolute;
            background-image: url(../images/plus.svg);
            height: 30px;
            width: 30px;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }

        &-which {
          margin-top: 70px;
          color: #19191d;
          font-weight: 600;
          font-size: 20px;
          line-height: 100%;
          opacity: 1;
          background: #d9ead3;
          padding: 15px 15px 30px 15px;
          margin-bottom: 20px;
        }

        &-items {
          display: flex;
          justify-content: space-between;

          input {
            width: 266px;
            outline: none;
            padding: 14.5px 10px;
            margin: 10px 0;
            background: #f9f9f9;
            border-radius: 10px;
            border: 0;
            font-family: 'SegoeUIRegular';
            font-weight: 600;
            font-size: 20px;

            &::placeholder {
              opacity: 0.3;
            }
          }
        }
      }

      &-motivation {
        width: 830px;
        margin: 0 auto;

        &-check {
          font-family: 'ArialRegular';
          font-weight: 600;
          font-size: 20px;
          line-height: 100%;
          margin-top: 50px;
          display: flex;
          justify-content: space-around;
        }

        &-task {
          span {
            border-radius: 3px;
            padding: 3px 10px;
          }
        }

        &-title {
          margin-top: 20px;
          color: #222222;
          font-style: normal;
          font-weight: 600;
          font-size: 32px;
          line-height: 100%;
        }

        &-subtitle {
          font-size: 20px;
          line-height: 100%;
          color: #000000;
          opacity: 0.5;
          margin: 10px 0;
        }

        &-left {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
        }

        &-text {
          font-weight: 600;
          font-family: 'ArialRegular';
          width: 260px;
          padding: 15px;
          background: #d9ead3;
          border-radius: 12px;
          color: #19191d;

          position: relative;

          &:before {
            position: absolute;
            content: '';
            background-image: url(../images/history.svg);
            background-repeat: no-repeat;
            width: 30px;
            height: 30px;
            top: 50%;
            transform: translateY(-50%);
            left: -50px;
          }
        }

        &-input {
          outline: none;
          background: #f9f9f9;
          border-radius: 10px;
          width: 542px;
          border: 0;
          padding: 15px;
          font-family: 'SegoeUIRegular';
          font-weight: 600;
          font-size: 20px;

          &::placeholder {
            opacity: 0.3;
          }
        }

        &-newinput {
          outline: none;
          background: #f1f1f1;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-sizing: border-box;
          border-radius: 12px;
          cursor: pointer;
          width: 100%;
          font-family: 'SegoeUIRegular';
          font-weight: 600;
          font-size: 20px;
          opacity: 0.3;
          padding: 10px;
          text-align: left;
          position: relative;

          &:after {
            content: '';
            position: absolute;
            background-image: url(../images/plus.svg);
            height: 30px;
            width: 30px;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }

      &-material {
        width: 830px;
        margin: 0 auto;

        &-subtitle {
          font-family: 'ArialRegular';
          font-weight: 600;
          font-size: 32px;
          line-height: 100%;
          margin: 50px 0 20px 0;
        }

        &-title {
          font-family: 'ArialRegular';
          font-weight: 600;
          font-size: 20px;
          max-width: 300px;
        }

        &-item {
          display: flex;
          justify-content: space-between;
        }

        &-left {
          width: 419px;
          background: #d9ead3;
          border-radius: 12px;
          margin: 10px 0;
          padding: 15px;
        }

        &-text {
          margin-top: 5px;
          font-family: 'ArialRegular';
          font-size: 12px;
          max-width: 300px;
        }

        &-right {
          margin: 9px;
        }

        &-right input {
          outline: none;
          width: 383px;
          background: #f1f1f1;
          border-radius: 10px;
          font-family: 'SegoeUIRegular';
          font-weight: 600;
          font-size: 20px;
          border: 0;
          padding: 0px 15px;
          height: 100%;

          &::placeholder {
            opacity: 0.3;
          }
        }

        &-btn {
          outline: none;
          background: #f1f1f1;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-sizing: border-box;
          border-radius: 12px;
          cursor: pointer;
          width: 100%;
          font-family: 'SegoeUIRegular';
          font-weight: 600;
          font-size: 20px;
          opacity: 0.3;
          padding: 10px;
          text-align: left;
          position: relative;

          &:after {
            content: '';
            position: absolute;
            background-image: url(../images/plus.svg);
            height: 30px;
            width: 30px;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }

      &-right {
        width: 350px;
        position: relative;

        &-icon {
          margin-top: 100px;
          margin-left: 55px;

          .purpl {
            background: #6200ee;
            width: 52px;
            height: 52px;
            border-radius: 50%;
            position: relative;
            margin-bottom: 10px;
            cursor: pointer;

            img {
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              position: absolute;
            }
          }
        }

        &-item {
          width: 200px;
          height: 200px;
          background: linear-gradient(144.81deg, #6200ee 9.1%, #721fe8 46.67%, #4a06ac 90.16%);
          box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.02), 0px 4px 15px rgba(0, 0, 0, 0.19);
          border-radius: 20px;
          text-align: center;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 20px auto;
        }

        &-subtitle {
          text-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 110%;
          font-family: 'ArialRegular';
          margin-bottom: 4px;
        }

        &-text {
          text-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
          font-family: 'ArialRegular';
        }

        &-block {
          margin: 0 auto;
          width: 280px;
          background: #ffffff;
          box-shadow: 0px 52px 80px rgba(0, 0, 0, 0.07),
            0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
            0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
            0px 4px 5.32008px rgba(0, 0, 0, 0.0282725);
          border-radius: 30px;
          padding: 30px 40px;
        }

        &-title {
          font-family: 'ArialRegular';
          color: #222222;
          font-weight: 800;
          font-size: 20px;
          line-height: 110%;
        }
      }
    }
  }
`
