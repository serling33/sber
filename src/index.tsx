import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import emotionNormalize from 'emotion-normalize'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { css, Global, jsx } from '@emotion/core'
import Auth from './pages/Auth'
import { Provider } from 'react-redux'
import { store } from './store'
import { DefaultLayout, TeacherLayout } from './layers'
import Home from './pages/Home'
import { ProtectedRoute } from './blocks'
import TeacherEditor from './pages/TeacherEditor'
import { RedactorLayout } from './layers/RedactorLayout'
import RedactorEditor from './pages/RedactorEditor'
import PainterEditor from './pages/PainterEditor/PainterEditor'

ReactDOM.render(
  <React.StrictMode>
    <Fragment>
      <Provider store={store}>
        <Global
          styles={css`
            ${emotionNormalize}
            * {
              margin: 0;
              padding: 0;
            }

            * {
              box-sizing: border-box;
            }

            @font-face {
              font-family: 'Montserrat-Bold';
              src: url('../fonts/Montserrat-Bold.ttf') format('woff');
            }

            @font-face {
              font-family: 'SegoeUIRegular';
              src: url('../fonts/SegoeUIRegular.woff') format('woff');
            }

            @font-face {
              font-family: 'ArialRegular';
              src: url('../fonts/ArialRegular.woff') format('woff');
            }

            @font-face {
              font-family: 'ArialBold';
              src: url('../fonts/ArialBold.woff') format('woff');
            }

            html {
              height: 100%;
            }

            body {
              color: black;
              font-family: 'SegoeUIRegular';
              height: 100%;

              a {
                color: #6200ee;
              }

              .techer__block-right-chat,
              .techer__block-right-updates {
                display: flex;
                z-index: 50;
                height: 100vh;
                width: 450px;
                position: fixed;
                right: -500%;
                top: 0;
                background: #ffffff;
                color: #fff;
                flex-direction: column;
                justify-content: space-between;
                box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.02), 0px 4px 15px rgba(0, 0, 0, 0.05);
                transition: all 0.2s;

                .techer__block-right-exit,
                .techer__block-right-close {
                  outline: none;
                  cursor: pointer;
                  border: 0;
                  position: absolute;
                  left: -70px;
                  top: 10px;
                }
                .techer__block-input {
                  width: 100%;
                  margin-bottom: 20px;
                  padding: 0 20px;
                  input {
                    outline: none;
                    width: 100%;
                    background: #fafbfc;
                    border: 2px solid #6200ee;
                    box-sizing: border-box;
                    border-radius: 78px;
                    padding: 15px 50px;
                  }
                  position: relative;
                  button {
                    position: absolute;
                    border: 0;
                    cursor: pointer;
                    outline: none;
                    &:before {
                      content: '';
                      position: absolute;
                      background-image: url(../images/arrow-top.svg);
                      background-repeat: no-repeat;
                      right: 10px;
                      top: 43px;
                      height: 50px;
                      width: 50px;
                    }
                  }
                  a {
                    position: relative;
                    width: 100%;
                    height: 30px;
                    &:after {
                      content: '';
                      position: absolute;
                      background-image: url(../images/clip.svg);
                      left: 15px;
                      top: 42px;
                      background-repeat: no-repeat;
                      height: 50px;
                      width: 50px;
                    }
                  }
                }

                .techer__block-right-top {
                  background: #6200ee;
                  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.1);
                  height: 80px;
                  display: flex;
                  font-size: 20px;
                  line-height: 23px;
                  font-family: 'ArialRegular';
                  justify-content: flex-start;
                  align-items: center;

                  img {
                    margin: 0 20px 0 20px;
                  }
                }
              }
            }

            a,
            ul,
            li {
              list-style: none;
              text-decoration: none;
              margin: 0;
              padding: 0;
              display: inline-block;
            }

            .text {
              margin: 12px 0;
              position: relative;
              &:before {
                cursor: default;
                content: '';
                position: absolute;
                background-repeat: no-repeat;
                width: 27px;
                height: 30px;
                left: -40px;
                top: 0;
              }
            }

            .container {
              max-width: 1750px;
              margin: 0 auto;
              padding: 0 10px;
            }

            .container-fuild {
              max-width: 1920px;
              margin: 0 auto;
            }

            .disabled {
              opacity: 0.3;
              user-select: none;
              pointer-events: none;
              cursor: default !important;
            }

            .show {
              display: block;
            }

            .hidden {
              display: none;
            }
          `}
        />
        <Router>
          <Switch>
            <Route path="/auth">
              <Auth />
            </Route>
            <ProtectedRoute path="/editor/*">
              <RedactorLayout>
                <Switch>
                  <Route path="/editor/redactor">
                    <RedactorEditor />
                  </Route>
                  <Route path="/editor/painter">
                    <PainterEditor />
                  </Route>
                </Switch>
              </RedactorLayout>
            </ProtectedRoute>
            <ProtectedRoute path="/create">
              <TeacherLayout>
                <TeacherEditor />
              </TeacherLayout>
            </ProtectedRoute>
            <ProtectedRoute path="/">
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            </ProtectedRoute>
          </Switch>
        </Router>
      </Provider>
    </Fragment>
  </React.StrictMode>,
  document.getElementById('root'),
)
